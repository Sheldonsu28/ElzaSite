import express from "express";
import { routerManager } from "./controllers";
import middlewares from "./middlewares";

const app = express();

middlewares(app);

routerManager(app);



