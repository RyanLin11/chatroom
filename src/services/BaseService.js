import axios from 'axios';

let baseURL = "http://localhost:5000";

const instance = axios.create({
    baseURL: baseURL,
})

export default instance;