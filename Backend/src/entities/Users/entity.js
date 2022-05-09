
export default class UserEntity{
  constructor({
    _id,
    email,
    password,
    name,
    created_date,
    admin,
  }){
    this._id = _id;
    this.email = email;
    this.password = password;
    this.name = name;
    this.created_date = created_date
    this.admin = admin
  }
}