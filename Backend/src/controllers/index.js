import UserController from "./Users/controller";
import PostsController from './Posts/controller';

const routerManager = (app) => {
  app.use('/users', UserController);
  app.use('/posts', PostsController);
}

export default routerManager;