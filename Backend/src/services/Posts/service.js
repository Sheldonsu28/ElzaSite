import PostsRepository from "../../repositories/Posts/repository";

export default class PostsService{
  constructor(){
    this.repository = new PostsRepository();
  }
  
  async createPost(post){
    return this.repository.createPost(post);
  }

  async deletePostById(id){
    return this.deletePostById(id);
  }

  async findPostById(id){
    return this.findPostById(id);
  }
}