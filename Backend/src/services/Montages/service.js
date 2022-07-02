import MontagesRepository from "../../repositories/Montages/repository";

export default class MontagesService{
  constructor(){
    this.repository = new MontagesRepository();
  }
  
  async fetchAllMontages(){
    return this.repository.fetchAllMontage();
  }
  async fetchAll(){
    return this.repository.fetchAll();
  }

   async fetchAllDerivativeWork(){
    return this.repository.fetchAllDerivativeWork();
  }

 async insertOrUpdateByChannelId(montage){
    if (!montage) throw Error('内容为空');
    return this.repository.insertOrUpdateByChannelId(montage);
  }

  async deleteMontageByChannelId(id){
    if (!post) throw Error('id为空');
    return this.deleteMontageByChannelId(id);
  }

  async findMontageByChannelId(id){
    return this.findMontageByChannelId(id);
  }
}