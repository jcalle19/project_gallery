import dotenv from 'dotenv';
import express from 'express';
import http from 'http';
import { Server } from 'socket.io';
import { socket_functions } from './socket_handler.js'
import { DB_connect } from './database.js'
import cors from 'cors';
//import socket_handler from './socket_handler.js';
dotenv.config();

const app = express();
const server = http.createServer(app);
const NODE_ENV = process.env.NODE_ENV;
const FRONTEND_URL = process.env.FRONTEND_URL;

const io = new Server(server, {
  cors: {
    origin: NODE_ENV === 'production'
      ? FRONTEND_URL
      : '*',
    methods: ['GET', 'POST'],
  },
});

// Middleware
app.use(cors({
  origin: NODE_ENV === 'production'
    ? FRONTEND_URL
    : '*'
}));

//Database
DB_connect(io);

//Socket Events

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => {
    console.log(`Server is listening on ${PORT}`);
});