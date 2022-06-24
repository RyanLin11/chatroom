import axios from './BaseService';

export const getChannels = async () => {
    let channels = await axios.get('/channels');
    return channels.data;
}

export const addChannel = async (participants) => {
    let newChannel = await axios.post('/channels', {participants});
    return newChannel;
}

export const addMember = async (channelId, newMemberId) => {
    let newMember = await axios.post(`/channels/${channelId}`, {params: {user: newMemberId}});
    return newMember;
}

export const leaveChannel = async (channelId) => {
    await axios.post(`/channels/${channelId}/leave`);
}