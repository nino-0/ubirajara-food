import axios from 'axios';

const api = axios.create({
  baseURL: 'http://192.168.200.104:8000' // Defina sua porta local aqui
});

export default api;
