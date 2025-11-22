import express from 'express';
import http from 'http';
import { Server } from 'socket.io';
import cors from 'cors';
//import socket_handler from './socket_handler.js';

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
    cors: {
        origin: '*',
        methods: ['GET', 'POST'],
    },
});


io.on('connection', (socket) => {
  console.log('a user connected');
});

const PORT = 5000;

// Middleware
app.use(cors());

// Socket handlers (if exported as default)
//const socket_functions = socket_handler;
//socket_functions(io);

server.listen(PORT, () => {
    console.log(`Server is listening at http://localhost:${PORT}`);
});