import Comment from '../components/Comment';
import InputBar from '../components/InputBar';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import React, { useEffect, useState } from 'react';
import { getComments } from '../services/CommentService';
import { useParams } from "react-router-dom";
import { useAuth } from '../auth/AuthProvider';
import './ChatView.css';

function ChatView(props) {
    const [comments, setComments] = useState([]);
    let auth = useAuth();
    let params = useParams();

    useEffect(() => {
        setComments(getComments(params.channelId));
    }, []);

    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', height: '100%'}}>
            <Container className='comments-container'>
                {
                    Array.isArray(comments) && comments.map(comment => {
                        <Comment text={comment.text} inbound={auth.user === comment.sender} />
                    })
                }
            </Container>
            <InputBar />
        </Box>
    )
}

export default ChatView;