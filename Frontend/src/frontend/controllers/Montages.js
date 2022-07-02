import axios from 'axios';

const MontageController = (()=> {
  const MontageAxios = axios.create({
    baseURL:'http://localhost:4000',
    withCredentials: true,
  })

  return {
    fetchAllMontange: async () => MontageAxios.get('/montages/fetchAllMontages').then(res=>res.data),
    fetchAllDerivativeWork: async () => MontageAxios.get('/montages/fetchAllDerivativeWork').then(res=>res.data),
  }
})();

export default MontageController;