import axios from 'axios';

const API = axios.create({baseURL:'http://192.168.100.6:3333'});

export default API;
