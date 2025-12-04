const techImages = new Map([
    ['html_icon', 'https://d3cym6gpva.ufs.sh/f/GUZU0kQvwB5afR8NZDwEpNrkVIJ2WXPeTxcDGSwmsU3H5y1B'],
    ['css_icon', 'https://d3cym6gpva.ufs.sh/f/GUZU0kQvwB5aVnIj4JezQYAdtwHirUK6NMqZ7XL3Ghvylef1'],
    ['next_icon', 'https://d3cym6gpva.ufs.sh/f/GUZU0kQvwB5aijh0y1Heb6hUsBN3muaXpP7y4rqWlQ5OKj98'],
    ['tailwind_icon', 'https://d3cym6gpva.ufs.sh/f/GUZU0kQvwB5aWweBCrY08T46c9YLFPEqQwoSfezjpNXJVbGu'],
    ['react_icon', 'https://d3cym6gpva.ufs.sh/f/GUZU0kQvwB5ai3bdnNeb6hUsBN3muaXpP7y4rqWlQ5OKj98c'],
    ['node_icon', 'https://d3cym6gpva.ufs.sh/f/GUZU0kQvwB5aboyafrNDTSBm6I7F1wvG9aHOyV3hu4RKWYJP'],
    ['express_icon', 'https://d3cym6gpva.ufs.sh/f/GUZU0kQvwB5aSOpMHOxMgOLPanj1Kz6TsVowCEN8dA4krhS9'],
    ['socket_icon', 'https://d3cym6gpva.ufs.sh/f/GUZU0kQvwB5asvPcKRJa0zuSQdUJRNLcAboYGfCEipB5TseO'],
]);

const projectImages = new Map();

const projectList = new Map();

const safe = (handler) => {
    return async (...args) => {
        try {
            await handler(...args);
        } catch (err) {
            console.error('Socket handler error:', err);
        }
    };
}

const connection = (io, socket) => {
    console.log('a user connected');
    io.to(socket.id).emit('connected', true);
}

const addTechIcon = (key, url) => {
    techImages.set(key, url);
    console.log('adding icon', key);
}

const removeTechIcon = (key) => {
    if (techImages.has(key)) techImages.delete(key);
    console.log('removing icon', key);
}

const addProjectImage = (key, url) => {
    projectImages.set(key, url);
}

const removeProjectImage = (key) => {
    if (projectImages.has(key)) projectImages.delete(key);
}

const addProject = (key, projectInfo) => {
    projectList.set(key, projectInfo);
}

const removeProject = (key) => {
    if (projectList.has(key)) projectList.delete(key);
}

const sendRoomInfo = (io, socket) => {
    io.to(socket.id).emit('receive-content', Array.from(techImages), Array.from(projectImages), Array.from(projectList));
}
export const util = {
    safe,
    connection,
    addTechIcon,
    removeTechIcon,
    addProjectImage,
    removeProjectImage,
    addProject,
    removeProject,
    sendRoomInfo,
}