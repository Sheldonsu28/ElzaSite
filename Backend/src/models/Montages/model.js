import mongoose from 'mongoose';

const Montages = new mongoose.Schema({
  channelId: String,
  author: String,
  type: Number,
  videoInfos: [{type:{
    bvid: String,
    title: String,
    aid: String,
    pic: String
  }}],
});

const MontagesModels = mongoose.model('Montages', Montages);

export default MontagesModels;