import PostsModel from "../../models/Posts/model";

export default class PostsRepository{
  constructor(){
    this.model = PostsModel;
  }

  async createPost(post){
    return this.model.create(post);
  }

  async findPostById(id){
    return this.model.findById(id);
  }

  async deletePost(id){
    return this.model.deleteOne({ _id: id });
  }
  
}