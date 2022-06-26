import axios from 'axios';

const MontageController = (()=> {
  const MontageAxios = axios.create({
    baseURL:'http://n1.xn--rrv961dbic.icu',
    withCredentials: true,
  })

  return {
    fetchAllMontange: async () => MontageAxios.get('/montages/fetchAllMontages').then(res=>res.data),
    fetchAllDerivativeWork: async () => MontageAxios.get('/montages/fetchAllDerivativeWork').then(res=>res.data),
  }
})();

export default MontageController;