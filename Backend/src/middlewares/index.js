import { dbUtil } from "./db/db_config.js";

const middlewares = (app)=>{
  dbUtil.connect();
}



export default middlewares;