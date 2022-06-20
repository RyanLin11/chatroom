import axios from '../BaseService';

export const getChannels = async () => {
    let channels = await axios.get('/channels');
    return channels;
}

export const addMember = async (channelId, newMemberId) => {
    let newMember = await axios.post(`/channels/${channelId}?user=${newMemberId}`);
    return newMember;
}

export const leaveChannel = async (channelId) => {
    await axios.post(`/channels/${channelId}/leave`);
}