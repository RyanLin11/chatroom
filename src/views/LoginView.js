import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { login } from '../services/UserService';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function LoginView(props) {
    const [user, setUser] = useState({
        username: "",
        password: ""
    });
    let navigate = useNavigate();

    function onChange(e) {
        setUser({
            ...user,
            [e.target.name]: e.target.value,
        })
    }

    async function onSubmit(e) {
        await login(user.username, user.password);
        navigate("../channels");
    }

    return (
        <Box component="form" noValidate autoComplete="off">
            <TextField id='outlined-basic' label='Username' name='username' value={username} onChange={onChange}/>
            <TextField id='outlined-password-input' label='Password' type='password' name='password' value={password} onChange={onChange} />
            <Button variant='outlined' onClick={onSubmit}>Login</Button>
        </Box>
    )
}

export default LoginView;