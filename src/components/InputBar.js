import { Button, FormControl, Input, Box } from '@mui/material';
import './InputBar.css';
import SendIcon from '@mui/icons-material/Send';
import { useState } from 'react';

function InputBar(props) {
    const [message, setMessage] = useState("");

    async function handleSubmit(e) {
        await props.handleMessageChange(message);
        setMessage("");
    }

    function handleChange(e) {
        setMessage(e.target.value);
    }

    return (
        <FormControl sx={{ display: 'flex', padding: '.3em' }}>
            <Input type='text' sx={{ flexGrow: 1, margin: '.3em' }} value={ message } onChange={ handleChange } placeholder='Type your message here...' />
            <Button variant='contained' onClick={handleSubmit}>
                <SendIcon />
            </Button>
        </FormControl>
    )
}

export default InputBar;