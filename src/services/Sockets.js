const { io } = require('socket.io-client');

const socket = io('http://localhost:5001', {
    withCredentials: true,
});

export default socket;