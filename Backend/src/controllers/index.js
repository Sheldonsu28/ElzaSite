import UserController from "./Users/controller";

export const routerManager = (app)=>{
  app.use('/users', UserController);
}