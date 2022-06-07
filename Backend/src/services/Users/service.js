import UserRepository from "../../repositories/Users/repository";
import { passwordHash } from "../../Utils/auth";

export default class UserService{

  constructor(){
    this.userRepository = new UserRepository();
  }

  async createUser(user){
    user.password = passwordHash(user.password);
    return this.userRepository.create(user);
  }

  async findByUsername(username){
    return this.userRepository.findByUsername(username).then(users=>users[0]);
  }

  async findByEmail(email){
    return this.userRepository.findByEmail(email);
  }
}