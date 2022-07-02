import MontagesModels from "../../models/Montages/model";

export default class MontagesRepository{
  constructor(){
    this.model = MontagesModels;
  }

  async fetchAllMontage(){
    return this.model.find({type:0});
  }

  async fetchAll(){
    return this.model.find({});
  }

  async fetchAllDerivativeWork(){
    return this.model.find({type:1});
  }

  async insertOrUpdateByChannelId(montage){
    return this.model.updateOne(
      {
        channelId:montage.channelId
      }, 
      montage, 
      {
        upsert: true, 
        setDefaultsOnInsert: true
      });
  }

  async findMontageByChannelId(id){
    return this.model.findById(id);
  }

  async deleteMontageByChannelId(id){
    return this.model.deleteOne({ _id: id });
  }
  
}