import UserController from "./Users/controller.js";

const routerManager = (app) => {
  app.use('/users', UserController);
}

export default routerManager;