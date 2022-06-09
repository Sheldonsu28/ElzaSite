import PostsRepository from "../../repositories/Posts/repository";

export default class PostsService{
  constructor(){
    this.repository = new PostsRepository();
  }
  
  async fetchAllPosts(){
    return this.repository.fetchAll();
  }

  async createPost(post){
    if (!post) throw Error('内容为空');
    return this.repository.createPost(post);
  }

  async deletePostById(id){
    if (!post) throw Error('id为空');
    return this.deletePostById(id);
  }

  async findPostById(id){
    return this.findPostById(id);
  }
}