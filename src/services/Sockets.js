const { io } = require('socket.io-client');

const socket = io('http://localhost:5001', {
    withCredentials: true,
});

export function joinRoom(channelId, messageHandler) {
    socket.emit('join-room', channelId);
    socket.on('message', messageHandler);
}

export function leaveRoom(channelId) {
    socket.emit('leave-room', channelId);
}

export function sendMessage(message) {
    socket.emit('send-message', message);
}

export default socket;