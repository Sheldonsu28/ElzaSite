import Container from "typedi";
import UserController from "./Users/controller";

export const routerManager = (app)=>{
  app.use('/users', Container.get(UserController));
}