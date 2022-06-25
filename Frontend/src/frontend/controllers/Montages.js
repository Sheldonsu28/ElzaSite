import axios from 'axios';

const MontageController = (()=> {
  const MontageAxios = axios.create({
    baseURL:'http://192.168.0.105:4000',
    withCredentials: true,
  })

  return {
    fetchAll: async (userInfo) => MontageAxios.get('/montages/fetchAllMontages', userInfo).then(res=>res.data),
  }
})();

export default MontageController;