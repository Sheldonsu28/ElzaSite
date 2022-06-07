import { Router } from 'express';
import UserService from "../../services/Users";
import { passwordHash } from '../../Utils/auth';

const UserController = ()=>{
    const router = Router();
    const service = new UserService()

    router.post('/register', (req, res, next)=>{

      const user = req.body;
      service.createUser(user).then(user=>res.json(user)).catch(next);
    });

    router.post('/findUserByEmail', (req, res, next)=>{

      service.findByEmail(email).then(user=>res.json(user)).catch(next);
    });

    router.post('/login', (req, res, next)=>{
      const {username, password} = req.body;
      service.findByUsername(username).then(user=>{
        if (user && user.password === passwordHash(password)){

          let session = req.session;
          session.username = username;
          res.status(200);
          res.redirect('/');

        }else{
          res.status(400);
          res.send('啊啦，用户名或密码输错了哦！')
        }
      }).catch(next);
    });

    router.post('/logout', (req, res)=>{
      req.session = null;
      res.redirect('/');
    });

    return router;
  }


export default UserController();