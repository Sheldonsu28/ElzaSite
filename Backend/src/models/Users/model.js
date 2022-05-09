import { Schema, model } from 'mongoose';

const User = new Schema({
  email: String,
  password: String,
  name: String,
  created_date: Date,
  admin: Boolean,
});

const UserModel = model('User', User);

export default UserModel
