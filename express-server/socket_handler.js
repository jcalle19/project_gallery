import { util } from './util_functions.js';

export const socket_functions = (io) => {
    io.on('connection', (socket) => {
        util.connection();
    });
}