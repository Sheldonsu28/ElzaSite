import { Router } from 'express';
import PostsService from '../../services/Posts/service';
import { validateLogin } from '../../Utils/auth';

const PostsController = () => {
  const router = Router();
  const service = new PostsService();

  router.post('/createPost', validateLogin, (req, res, next)=>{
    const post = req.body.post;
    service.createPost(post).then(post => res.status(200).send()).catch(next);
  });

  router.get('/fetchAll', (req, res, next)=>{
    service.fetchAllPosts().then(posts=> res.json(posts)).catch(next);
  });

  router.post('/delete', validateLogin, (req, res, next)=>{
    const id = req.body.id;
    service.deletePostById(id).then(post => res.status(200).send()).catch(next);
  });

  router.get('/findPost/:id', (req, res, next)=>{
    const id = req.params.id;
    service.findPostById(id).then(post=>res.json(post)).catach(next);
  })

  return router;
}

export default PostsController();