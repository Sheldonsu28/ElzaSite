import mongoose from 'mongoose';
import { log } from '../../utils/log/winston';

const logTag = `[${__filename}][DB]: `;

//数据库初始化

export default class Database {
  connect() {
    log.info(logTag, 'Initializing...');

    this.initializeMongoose();
  }

  disconnect() {
    mongoose.disconnect();
  }

  /**
   * 连接并配置数据库
   */

  initializeMongoose() {
    log.info(logTag, 'Connecting...');

    mongoose.connect(process.env.DATABASE_KEY, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false,
      useUnifiedTopology: true,
    });

    log.info(logTag, 'Connection successful');
  }
}

export const dbUtil = new Database();