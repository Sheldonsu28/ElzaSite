"use strict"
import express from 'express';
import routerManager from "./controllers";
import ErrorHandler from './controllers/Error/';
import middlewares from "./middlewares/";
import morgan from 'morgan';
import updateMontages from './Utils/montage';
import {config} from 'dotenv';
import {join, dirname} from 'path';
import { fileURLToPath } from 'url';


const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

process.on("unhandledException",(err, origin) => {
  console.log("====================Unhandled Exception====================");
  console.log(err);
  console.log(origin);
  console.log("===========================================================");
});

process.on("unhandledRejection",(reason, promise) => {
  console.log("====================Unhandled Exception====================");
  console.log(reason);
  console.log(promise);
  console.log("===========================================================");
});


config();
const app = express();
// CORS
app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.setHeader('Access-Control-Allow-Methods', 'GET');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
  res.setHeader('Access-Control-Allow-Credentials', true);
  next();
});

app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ extended: true }));
app.use(morgan('combined'));
app.enable('trust proxy');

middlewares(app);

routerManager(app);

app.use(ErrorHandler);

app.set('port', process.env.PORT);

const port = app.get('port');

app.listen(port, () => {
  console.log('服务器启动成功, 端口', port, `服务器版本v1.1`);
});

app.use(express.static(join(__dirname, '../build')));

app.get("*", (req, res) => {
  res.sendFile(join(__dirname, "../build/index.html"));
});

setInterval(()=>{updateMontages()}, 1000 * 3600);



