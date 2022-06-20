import axios from './BaseService';

export const getComments = async (channelId) => {
    let comments = await axios.get(`/comments?channel=${channelId}`);
    return comments;
};

export const postComment = async (comment) => {
    let newComment = await axios.post('/comments', comment);
    return newComment;
}

export const deleteComment = async (commentId) => {
    await axios.delete(`/comments/${commentId}`);
}