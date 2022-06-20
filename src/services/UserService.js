import axios from './BaseService';

export const register = async (newUser) => {
    const user = await axios.post('/auth/register', newUser);
    return user;
}

export const login = async (username, password) => {
    const user = await axios.post('/auth/login', {username, password});
    return user;
};

export const logout = async () => {
    await axios.get('/auth/logout');
}

export const getUsers = async () => {
    const users = await axios.get('/users');
    return users;
}