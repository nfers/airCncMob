import axios from 'axios';

const api = axios.create({
    baseUrl: 'http://192.168.56.1:3031',
});


export default api;