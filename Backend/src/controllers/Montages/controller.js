import { Router } from 'express';
import MontagesService from '../../services/Montages/service';


const MontagesController = () => {
  const router = Router();
  const service = new MontagesService();

  router.get('/fetchAllMontages', (req, res, next)=>{
    service.fetchAllMontages().then(posts=> res.json(posts)).catch(next);
  });

  router.get('/fetchAllDerivativeWork', (req, res, next)=>{
    service.fetchAllDerivativeWork().then(posts=> res.json(posts)).catch(next);
  });

  return router;
}

export default MontagesController();