import mongoose from 'mongoose';

const Montages = new mongoose.Schema({
  channelId: String,
  author: String,
  type: Number,
  videoInfos: [{type: Object}],
});

const MontagesModels = mongoose.model('Montages', Montages);

export default MontagesModels;