import { useState } from 'react';
import { TextField } from '@mui/material/TextField';
import { register } from '../services/UserService';
import { useNavigate } from 'react-router-dom';

function RegisterView(props) {
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
        await register(user);
        navigate('../login');
    }

    return (
        <Box component="form" noValidate autoComplete="off">
            <TextField id='outlined-basic' label='Username' name='username' value={username} onChange={onChange}/>
            <TextField id='outlined-password-input' label='Password' type='password' name='password' value={password} onChange={onChange} />
            <Button variant='outlined' onClick={onSubmit}>Register</Button>
        </Box>
    )
}

export default RegisterView;