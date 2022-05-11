import UserRepository from "../../repositories/Users/repository";
import Container from "typedi";
import crypto from 'crypto';

export default class UserService{

  constructor(){
    this.userRepository = new UserRepository();
  }

  async createUser(user){
    user.password = crypto.createHmac('sha256', 'ELZA YORK!').update(user.password).digest('hex');
    return this.userRepository.create(user);
  }

  async findByEmail(email){
    return this.userRepository.findByEmail(email);
  }

  async test(){
    return {hi:'hi'};
  }
}