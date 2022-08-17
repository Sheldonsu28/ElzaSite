import { dbUtil } from "./db/db_config.js";

const middlewares = (app)=>{
  dbUtil.connect()
  app.use((req, res, next)=>{
    console.log('req origin', req.socket.remoteAddress, req.headers['x-forwarded-for'] )
    next()
  })
}



export default middlewares;