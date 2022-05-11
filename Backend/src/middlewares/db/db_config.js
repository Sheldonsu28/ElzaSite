import mongoose from 'mongoose';
//数据库初始化

export default class Database {
  connect() {
    console.log('初始化...');

    this.initializeMongoose();
  }

  disconnect() {
    mongoose.disconnect();
  }

  /**
   * 连接并配置数据库
   */

  initializeMongoose() {
    console.log('连接数据库...');
    mongoose.connect(process.env.DATABASE_KEY, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log('成功连接数据库');
  }
}

export const dbUtil = new Database();