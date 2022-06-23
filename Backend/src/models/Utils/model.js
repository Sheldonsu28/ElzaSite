import mongoose from 'mongoose';

const Utils = new mongoose.Schema({
  itemName: String, 
  userMids: [{type: Object}],
  lastFetched: Number,
  maxFetch: Number,
});

const UtilsModel = mongoose.model('Utils', Utils);

export default UtilsModel;