import axios from 'axios';

const api = axios.create({
  baseURL: 'https://localhost:3333',
});

export default api;

//comando para rodar a api:
// json-server server.json -p 3333 -w
