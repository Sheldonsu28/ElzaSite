import UtilsModel from "../models/Utils/model";
import axios from 'axios';
import MontagesService from "../services/Montages/service";

const montagesService = new MontagesService();

const updateMontages = async () => {
  const data = await UtilsModel.find({itemName: {$in:['Slicers', 'Creaters']}});
  const existing_entries = await montagesService.fetchAll();
  // console.log(data);

  const lookUpTable = {};
  const idLookUpTable = {};

  existing_entries.forEach(montage=>{
    lookUpTable[montage.channelId] = montage.videoInfos;
    idLookUpTable[montage.channelId] = montage.videoInfos.map(x=>x.bvid);
  });


  // axios.get('http://i1.hdslb.com/bfs/archive/e0a99bab9f60949417be5cbc87a2984583e5e720.jpg').then(res=> console.log(res));

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


    while (limiter > 0){
      time_counter = time_counter + Math.random() * (1500 - 500) + 500;
      const channelId = userMids[fetchCounter];

      setTimeout( async ()=>{
          const encodedLink = encodeURI(`http://api.bilibili.com/x/space/arc/search?mid=${channelId}&keyword=艾尔莎&pn=1&ps=10`);
          axios.get(encodedLink).then( async (res)=>{
            const { list } = res.data.data;
            const { vlist } = list;
            const videoInfos = []
            const ids = vlist.map(x=>x.bvid);

            // Find new videos
            const newId = idLookUpTable[channelId] ? ids.filter(x=>!idLookUpTable[channelId].includes(x)): ids;
            const newInfo = newId.length > 0 ? vlist.filter(x=>newId.includes(x.bvid)): [];
            console.log(`正在更新MID:${channelId}, 总计${newId.length}个新视频。`)

            if (newId.length > 0){
              // Find existing videos
              const existedId = idLookUpTable[channelId] ? ids.filter(x => !newId.includes(x)): [];
              const existedInfo = lookUpTable[channelId] ? lookUpTable[channelId].filter(x=>existedId.includes(x.bvid)): [];

              // Fetch pics on new Ids
              for (let i = 0; i < newInfo.length; i++){
                const res = await axios.get(newInfo[i].pic + '@100h', {responseType: 'arraybuffer'});
                const pic = Buffer.from(res.data).toString('base64');
                const {bvid, title, aid} = newInfo[i];
                videoInfos.push({bvid, title, aid, pic});
              }

              videoInfos.concat(existedInfo);

              const author = vlist[0].author;
              const montage = {author, channelId, type, videoInfos};
              montagesService.insertOrUpdateByChannelId(montage);
            }
        });
      }, time_counter);
      
      fetchCounter = (fetchCounter + 1) % userMids.length;
      limiter--;
      if (fetchCounter == 0){
        break;
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