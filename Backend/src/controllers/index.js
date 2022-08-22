import MontagesController from './Montages/controller'

const routerManager = (app) => {
  app.use('/montages', MontagesController);
}

export default routerManager;