import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3333',
});

export default api;

//comando para rodar a api:
// yarn json-server --watch -p 3333 server.json
