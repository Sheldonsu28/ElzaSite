import UserModel from "../../models/Users/model";

export default class UserRepository{
  constructor(){
    this.model = UserModel;
  }

  async create(user){
    return this.model.create(user);
  }

  async findByEmail(email){
    return this.model.find({email})
  }

  async findByUsername(username){
    return this.model.find({username})
  }

  async findAll(){
    return this.model.findAll();
  }

}