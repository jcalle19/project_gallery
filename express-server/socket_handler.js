import { util } from './util_functions.js';

export const socket_functions = (io) => {
    io.on('connection', (socket) => {
        util.connection(io, socket);

        socket.on('add-tech-icon', util.safe((key, url) => {
            util.addTechIcon(key, url);
            util.sendRoomInfo(io, socket);
        }));

        socket.on('remove-tech-icon', util.safe((key) => {
            util.removeTechIcon(key);
            util.sendRoomInfo(io, socket);
        }));

        socket.on('add-project-image', util.safe((key, url) => {
            util.addProjectImage(key, url);
            util.sendRoomInfo(io, socket);
        }));

        socket.on('remove-project-image', util.safe((key) => {
            util.removeProjectImage(key);
            util.sendRoomInfo(io, socket);
        }));

        socket.on('add-project', util.safe((key, projectInfo) => {
            util.addProject(key, projectInfo);
            util.sendRoomInfo(io, socket);
        }));

        socket.on('remove-project', util.safe((key)=>{
            util.removeProject(key);
            util.sendRoomInfo(io, socket);
        }))

        socket.on('request-content', util.safe(() => {
            util.sendRoomInfo(io, socket);
        }));
    });
}