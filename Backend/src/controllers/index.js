import MontagesController from './Montages/controller';
import VideosController from './Videos/controller';

const routerManager = (app) => {
  app.use('/montages', MontagesController);
  app.use('/videos', VideosController);
}

export default routerManager;