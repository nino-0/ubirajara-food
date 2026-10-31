import axios from 'axios';

const api = axios.create({
  baseURL: 'http://127.0.0.1:8000' // Defina sua porta local aqui
});

export default api;
