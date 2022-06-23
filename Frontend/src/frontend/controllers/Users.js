import axios from 'axios';

const UserController = (()=> {
  const UserAxios = axios.create({
    baseURL:'http://localhost:4000',
    withCredentials: true,
  })

  return {
    loginUser: async (userInfo) => UserAxios.post('/users/login', userInfo).then(res=>res.data),
  }
})();

export default UserController;