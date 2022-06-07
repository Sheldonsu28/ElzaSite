import mongoose from "mongoose";

const Posts = mongoose.Schema({
  userId: {type: mongoose.Types.ObjectId, required: true},
  title: {type: String, required: true, maxLength:80},
  content: {type: String, required: true, maxLength:1000}
});

const PostsModel = mongoose.model('Posts', Posts);

export default PostsModel;