import Button from '@mui/material/Button';
import './InputBar.css';
import SendIcon from '@mui/icons-material/Send';

function InputBar(props) {
    return (
        <div className='bar'>
            <input type='text' placeholder='Type your message here...' />
            <Button variant='contained' className='send-button'>
                <SendIcon />
            </Button>
        </div>
    )
}

export default InputBar;