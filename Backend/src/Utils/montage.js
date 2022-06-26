import UtilsModel from "../models/Utils/model";
import axios from 'axios';
import MontagesService from "../services/Montages/service";

const montagesService = new MontagesService();

const updateMontages = async () => {
  const data = await UtilsModel.find({itemName: {$in:['Slicers', 'Creaters']}});
  console.log(data);

  data.forEach((target)=>{
     const {
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

      setTimeout(()=>{
          console.log(`Initiate fetch on: ${channelId}`);
          const encodedLink = encodeURI(`http://api.bilibili.com/x/space/arc/search?mid=${channelId}&keyword=艾尔莎&pn=1&ps=10`);
          axios.get(encodedLink).then((res)=>{
            const { list } = res.data.data;
            const { vlist } = list;
            const videoInfos = [];

            vlist.forEach((item)=>{
              const bvid = item.bvid;
              const description = item.title;
              const aid = item.aid;
              videoInfos.push({bvid, description, aid});
            });
            const author = vlist[0].author;
            const montage = {author, channelId, type, videoInfos};
            montagesService.insertOrUpdateByChannelId(montage);
            console.log(`Updated on: ${channelId}`);
        });
      }, time_counter);
      
      fetchCounter = (fetchCounter + 1) % userMids.length;
      limiter--;
      if (fetchCounter == 0){
        break;
      }
    }
  });
}

export default updateMontages;