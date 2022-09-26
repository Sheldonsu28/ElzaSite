import UtilsModel from "../models/Utils/model";
import axios from 'axios';
import MontagesService from "../services/Montages/service";

const montagesService = new MontagesService();
const agents = ['Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36 Edg/105.0.1343.42',
                'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36',
                'Mozilla/5.0 (Macintosh; Intel Mac OS X 12_6) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/16.0 Safari/605.1.15',
                'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:105.0) Gecko/20100101 Firefox/105.0']
let agents_counter = 0;

// 执行列表更新
const updateMontages = async () => {
  console.log(new Date(), ': 开始执行视频列表更新');
  const data = await UtilsModel.find({itemName: {$in:['Slicers', 'Creaters', 'Elza']}});
  const existing_entries = await montagesService.fetchAll();

  const webRes = await axios.get('https://www.bilibili.com', {withCredentials: true});
  const targetCookies = webRes.headers['set-cookie'];
  const cookies = targetCookies.map(x=>x.split(';')[0]).join('; ');

  const lookUpTable = {};
  const idLookUpTable = {};

  existing_entries.forEach(montage=>{
    lookUpTable[montage.channelId] = montage.videoInfos;
    idLookUpTable[montage.channelId] = montage.videoInfos.map(x=>x.bvid);
  });

  let time_counter = 0;

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

    if (userMids.length > 0){
      while (limiter > 0){
        let inc = 2000;
        time_counter += inc;
        const channelId = userMids[fetchCounter];

        setTimeout(()=>{
            const encodedLink = encodeURI(`http://api.bilibili.com/x/space/arc/search?mid=${channelId}&keyword=艾尔莎&pn=1&ps=10`);
            const requestOptions = { 
              headers: { 
                'User-Agent': agents[agents_counter],
                'Cookie':cookies,
             }  
            };
            agents_counter = (agents_counter + 1) % agents.length;
            axios.get(encodedLink, requestOptions).then(async (res)=>{
              const { list } = res.data.data;
              const { vlist } = list;
              const videoInfos = []
              const ids = vlist.map(x=>x.bvid);
              const author = vlist[vlist.length - 1].author;
              
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