import axios from 'axios';

const API = axios.create({
    baseURL: 'http://localhost:9090',
});

export default API;
