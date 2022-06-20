import React, { useState, CreateContext } from 'react';
import { login, logout } from '../services/UserService';

let AuthContext = CreateContext(null);

export function AuthProvider(props) {
    let [user, setUser] = useState(null);

    let signin = async (username, password) => {
        const authenticated_user = await login(username, password);
        setUser(authenticated_user);
    }

    let signout = async () => {
        await logout();
        setUser(null);
    }

    let value = { user, signin, signout };

    return <AuthContext.Provider value={value}> {children} </AuthContext.Provider>;
}

export function useAuth() {
    return React.useContext(AuthContext);
}