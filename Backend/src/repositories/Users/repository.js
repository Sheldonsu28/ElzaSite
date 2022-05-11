import UserModel from "../../models/Users/model";
import UserEntity from "../../entities/Users/entity";

export default class UserRepository{
  constructor(){
    this.model = UserModel;
  }

  async create(user){
    return this.model.create(user);
  }

  async findByEmail(email){
    return this.model.find({email}).then((res)=>{
      return new UserEntity(res);
    });
  }
  async findAll(){
    return this.model.findAll();
  }

}