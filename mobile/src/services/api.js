import axios from 'axios';
/*
    Production: 'https://backend-accounts.herokuapp.com'
    Dev: 'http://192.168.1.4:3001'
*/
const api = axios.create({
  baseURL: 'https://backend-accounts.herokuapp.com',
});

export default api;
