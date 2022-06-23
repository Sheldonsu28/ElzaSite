import axios from 'axios';

const MontageController = (()=> {
  const MontageAxios = axios.create({
    baseURL:'http://localhost:4000',
    withCredentials: true,
  })

  return {
    fetchAll: async (userInfo) => MontageAxios.get('/montages/fetchAllMontages', userInfo).then(res=>res.data),
  }
})();

export default MontageController;