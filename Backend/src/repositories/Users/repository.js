import UserModel from "../../models/Users/model";
import UserEntity from "../../entities/Users/entity";
import Container from 'typedi';

export default class UserRepository{
  constructor(){
    this.model = Container.get(UserModel);
  }

  async create(user){
    return this.model.create(user);
  }

  async findByEmail(email){
    return this.model.find({email}).then((res)=>{
      return new UserEntity(res);
    });
  }

}