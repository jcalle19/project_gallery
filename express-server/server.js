import express from 'express';
import http from 'http';
import { Server } from 'socket.io';
import { socket_functions } from './socket_handler.js'
import { DB_connect } from './database.js'
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

const PORT = 5000;

// Middleware
app.use(cors());

//Database
DB_connect(io);

//Socket Events
//socket_functions(io);

server.listen(PORT, () => {
    console.log(`Server is listening at http://localhost:${PORT}`);
});