"use strict"
import express from 'express';
import routerManager from "./controllers";
import ErrorHandler from './controllers/Error/';
import middlewares from "./middlewares/";
import cookieSession from "cookie-session";
import morgan from 'morgan';
import updateMontages from './Utils/montage';
import {config} from 'dotenv';

config();
const app = express();
// CORS
app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
  res.setHeader('Access-Control-Allow-Credentials', true);
  next();
});

app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ extended: true }));
app.use(morgan('combined'));
// app.enable('trust proxy');

app.use(cookieSession({
  secret: 'ELZA',
  maxAge: 60 * 60 * 24 * 1000, // 24h
}))

// Force HTTPS
// app.use(function(request, response, next) {

//     if (process.env.NODE_ENV != 'development' && !request.secure) {
//        return response.redirect("https://" + request.headers.host + request.url);
//     }

//     next();
// })

middlewares(app);

routerManager(app);

app.use(ErrorHandler);

app.set('port', process.env.PORT);

const port = app.get('port');

app.listen(port, () => {
  console.log('服务器启动成功, 端口', port);
});

setInterval(()=>{updateMontages()}, 1000 * 3600);



