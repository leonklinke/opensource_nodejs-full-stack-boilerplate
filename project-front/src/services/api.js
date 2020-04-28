import axios from 'axios';

const isDev = true;
// const BASEURL = (isDev) ? 'http://157.245.209.253:82/v2' : 'https://api.salusapp.com:8443/v2';//devserver
const BASEURL = (isDev) ? 'http://localhost:83' : 'https://your-production-url:3333';//docker

const api = axios.create({
    baseURL: BASEURL
})

export default api;