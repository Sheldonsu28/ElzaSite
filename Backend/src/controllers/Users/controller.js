import { Router } from 'express';
import UserService from "../../services/Users";

const UserController = ()=>{
    const router = Router();
    const service = new UserService()

    router.post('/register', (req, res, next)=>{
      const user = req.body;
      service.createUser(user).then(user=>res.json(user)).catch(next);
    });

    router.post('/findUserByEmail', (req, res, next)=>{
      
      service.findByEmail(email).then(user=>res.json(user)).catch(next);
    })

    return router;
  }


export default UserController();