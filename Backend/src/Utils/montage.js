import UtilsModel from "../models/Utils/model";
import axios from 'axios';
import MontagesService from "../services/Montages/service";

const montagesService = new MontagesService();

// 执行列表更新
const updateMontages = async () => {
  console.log(new Date(), ': 开始执行视频列表更新');
  const data = await UtilsModel.find({itemName: {$in:['Slicers', 'Creaters', 'Elza']}});
  const existing_entries = await montagesService.fetchAll();

  const lookUpTable = {};
  const idLookUpTable = {};

  existing_entries.forEach(montage=>{
    lookUpTable[montage.channelId] = montage.videoInfos;
    idLookUpTable[montage.channelId] = montage.videoInfos.map(x=>x.bvid);
  });


  data.forEach((target)=>{

    const {
    itemName,
    userMids,  
    lastFetched, 
    maxFetch,
    type
    } = target;

    let fetchCounter = lastFetched;
    let limiter = maxFetch;
    let time_counter = 0;

    if (userMids.length > 0){
      while (limiter > 0){

        time_counter = time_counter + Math.random() * (1500 - 500) + 1000;
        const channelId = userMids[fetchCounter];

        setTimeout(()=>{
            const encodedLink = encodeURI(`http://api.bilibili.com/x/space/arc/search?mid=${channelId}&keyword=艾尔莎&pn=1&ps=10`);

            axios.get(encodedLink).then(async (res)=>{

              const { list } = res.data.data;
              const { vlist } = list;
              const videoInfos = []
              const ids = vlist.map(x=>x.bvid);
              const author = vlist[0].author;
              
              // Find new videos
              const newId = idLookUpTable[channelId] ? ids.filter(x=>!idLookUpTable[channelId].includes(x)): ids;
              const newInfo = newId.length > 0 ? vlist.filter(x=>newId.includes(x.bvid)): [];

              if (newId.length > 0){

                // Fetch pics on new Ids
                for (let i = 0; i < newInfo.length; i++){
                  const res = await axios.get(newInfo[i].pic + '@170w_100h.webp', {responseType: 'arraybuffer'});
                  const pic = Buffer.from(res.data).toString('base64');
                  const {bvid, title, aid} = newInfo[i];
                  videoInfos.push({bvid, title, aid, pic});
                }

                // Find existing videos
                const existedId = idLookUpTable[channelId] ? ids.filter(x => !newId.includes(x)): [];
                const existedInfo = lookUpTable[channelId] ? lookUpTable[channelId].filter(x=>existedId.includes(x.bvid)): [];

                const montage = {author, channelId, type, videoInfos:videoInfos.concat(existedInfo)};
                montagesService.insertOrUpdateByChannelId(montage);
              }

              console.log(`已检查目标薯条：${author} (MID:${channelId}), 总计${newId.length}个新视频。`);
          }).catch((error)=>{

            console.log(`=================更新${channelId}时发生错误=================`);
            console.log(error);
            console.log(`===========================================================`);

          });
        }, time_counter);
        
        fetchCounter = (fetchCounter + 1) % userMids.length;
        limiter--;

        if (fetchCounter == 0){
          break;
        }
      }
    }

    const updatedItem = {
      itemName,
      userMids,  
      fetchCounter, 
      maxFetch,
      type
    }

    UtilsModel.updateOne({itemName}, updatedItem);
  });
}

export default updateMontages;