import UserController from "./Users/controller";
import PostsController from './Posts/controller';
import MontagesController from './Montages/controller'

const routerManager = (app) => {
  // app.use('/users', UserController);
  app.use('/posts', PostsController);
  app.use('/montages', MontagesController);
}

export default routerManager;