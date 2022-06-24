import React, { useState, createContext } from 'react';
import { login, logout } from '../services/UserService';
import { useNavigate } from 'react-router-dom';

let AuthContext = createContext(null);

export function AuthProvider(props) {
    let [user, setUser] = useState(localStorage.getItem('user')? JSON.parse(localStorage.getItem('user')): null);
    let navigate = useNavigate();

    let signin = async (username, password) => {
        const authenticated_user = await login(username, password);
        setUser(authenticated_user.data);
        localStorage.setItem('user', JSON.stringify(authenticated_user.data));
        navigate('../channels', { replace: true });
    }

    let signout = async () => {
        await logout();
        localStorage.removeItem('user');
        setUser(null);
    }

    let value = { user, signin, signout };

    return <AuthContext.Provider value={value}> {props.children} </AuthContext.Provider>;
}

export function useAuth() {
    return React.useContext(AuthContext);
}