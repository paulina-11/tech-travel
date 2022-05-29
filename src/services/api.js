import axios from 'axios';

const api = axios.create({
  baseURL: 'https://6292ae1c9d159855f08d2347.mockapi.io/',
});

export default api;
