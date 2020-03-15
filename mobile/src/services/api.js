import axios from 'axios';
/*
    Production: 'https://backend-accounts.herokuapp.com'
    Dev: 'http://192.168.1.4:3001'
*/
const api = axios.create({
  baseURL: 'http://192.168.1.4:3001',
});

export default api;
