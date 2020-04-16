import axios from 'axios';

const api = axios.create({
  baseURL: 'http://192.168.1.7:3333/' // para o dispositivo físico
  //baseURL: 'http://localhost:3333/' // Se rodar adb reversetcp:3333 tcp:3333
  //baseURL: 'http://10.0.2.2:3333/' // no android studio
});

export default api;