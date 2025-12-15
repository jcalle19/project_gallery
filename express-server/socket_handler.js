import { util } from './util_functions.js';

export const socket_functions = (io, db) => {
    util.loadStateFromDB(db);

    io.on('connection', (socket) => {
        util.connection(io, socket);

        socket.on('check-admin', util.safe((adminKey)=>{
            util.checkAdmin(io, socket, adminKey);
        }));

        socket.on('add-tech-icon', util.safe((key, url, adminKey) => {
            if (util.verifyAuth(adminKey)) {
                util.addTechIcon(key, url, db);
                util.sendRoomInfo(io, socket);
            }
        }));

        socket.on('remove-tech-icon', util.safe((key, adminKey) => {
            if (util.verifyAuth(adminKey)) {
                util.removeTechIcon(key, db);
                util.sendRoomInfo(io, socket);
            }
        }));

        socket.on('add-project-image', util.safe((key, url, adminKey) => {
            if (util.verifyAuth(adminKey)) {
                util.addProjectImage(key, url);
                util.sendRoomInfo(io, socket);
            }
        }));

        socket.on('remove-project-image', util.safe((key, adminKey) => {
            if (util.verifyAuth(adminKey)) {
                util.removeProjectImage(key);
                util.sendRoomInfo(io, socket);
            }
        }));

        socket.on('add-project', util.safe((key, projectInfo, adminKey) => {
            if (util.verifyAuth(adminKey)) {
                util.addProject(key, projectInfo, db);
                util.sendRoomInfo(io, socket);
            }
        }));

        socket.on('remove-project', util.safe((key, adminKey)=>{
            if (util.verifyAuth(adminKey)) {
                util.removeProject(key, db);
                util.sendRoomInfo(io, socket);
            }
        }))

        socket.on('request-content', util.safe(() => {
            util.sendRoomInfo(io, socket);
        }));
    });
}