import axios from 'axios';

const backendUrl = process.env.REACT_APP_BACKEND_URL || 'http://localhost:8081';
const instance = axios.create({
  baseURL: backendUrl,
});

instance.interceptors.request.use(config => {
  config.headers.post['Content-Type'] = 'application/json';
  return config;
});

export default instance;