import Comment from './components/Comment';
import InputBar from './components/InputBar';
import Container from '@mui/material/Container';
import React, { useEffect } from 'react';
import 'ChatView.css';
import { getComments } from '../services/CommentService';
import { useParams } from "react-router-dom";
import { useAuth } from '../auth/AuthProvider';

function ChatView(props) {
    const [comments, setComments] = useState([]);
    let auth = useAuth();
    let params = useParams();

    useEffect(() => {
        setComments(getComments(params.channelId));
    }, []);

    return (
        <React.Fragment>
            <Container className='comments-container'>
                {
                    comments.map(comment => {
                        <Comment text={comment.text} inbound={auth.user === comment.sender} />
                    })
                }
            </Container>
            <InputBar />
        </React.Fragment>
    )
}

export default ChatView;