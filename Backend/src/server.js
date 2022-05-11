"use strict"
import express from 'express';
import { routerManager } from "./controllers";
import ErrorHandler from './controllers/Error';
import middlewares from "./middlewares";
import env from 'dotenv';

env.config();

const app = express();

app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ extended: true }));

middlewares(app);

routerManager(app);

app.use(ErrorHandler);

app.set('port', process.env.PORT);

const port = app.get('port');

app.listen(port, () => {
  console.log('服务器启动成功, 端口', port);
});



