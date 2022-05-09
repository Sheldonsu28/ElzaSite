import { dbUtil } from "./db/db_config";

const middlewares = (app)=>{
  dbUtil.connect()
}

export default middlewares;