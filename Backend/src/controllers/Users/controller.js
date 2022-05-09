import { Service } from 'typedi';
import { Router } from 'express';
import UserService from "../../services/Users";

const UserController = Service([UserService], service => {
  const router = Router();

  return (()=>{
    router.post('/register', (req, res, next)=>{
      const user = req.body;
      service.createUser(user).then(user=>res.json(user));
    });

    router.post('/findUserByEmail', (req, res, next)=>{
      const email = req.body;
      service.findByEmail(email).then(user=>res.json(user));
    })
  })
})

export default UserController;