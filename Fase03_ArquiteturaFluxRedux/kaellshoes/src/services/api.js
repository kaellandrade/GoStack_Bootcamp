import axios from 'axios';

const API = axios.create({
    baseURL: 'http://10.100.111.58:3333',
});

export default API;
