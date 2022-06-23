import axios from 'axios';

const baseURL = "http://localhost:5001";

const instance = axios.create({
    baseURL: baseURL,
    withCredentials: true
});

export default instance;