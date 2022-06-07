import mongoose from 'mongoose';

const Users = new mongoose.Schema({
  email: String,
  password: String,
  username: String,
  created_date: Date,
  admin: Boolean,
});

const UserModel = mongoose.model('Users', Users);

export default UserModel
