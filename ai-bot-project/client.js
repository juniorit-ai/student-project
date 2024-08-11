
// client.js
const io = require('socket.io-client');
const readline = require('readline');
const socket = io('http://localhost:4000');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

socket.on('connect', () => {
  console.log('Connected to server');
  rl.question('You: ', (msg) => {
    socket.emit('message', msg);
  });
});

socket.on('response', (response) => {
  console.log('Bot:', response);
  rl.question('You: ', (msg) => {
    socket.emit('message', msg);
  });
});
                            