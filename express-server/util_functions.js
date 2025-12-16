import dotenv from 'dotenv';
import { MongoClient } from 'mongodb';
dotenv.config();

const techImages = new Map();

const projectImages = new Map();

const defaultProject = {
    title: 'Gallery Home', 
    entryMsg: 'Take a look around and feel free to reach out', 
    about: [['Simple yet stylish gallery designed to be easily accessible and updatable'],
            ['Selecting projects will show a more detailed description'],
            ['Selecting icons in the filter bar will only display projects that have at least one of the technologies'],
            ['Be sure to visit frequently to see new projects!']], 
    image: '/smile.png', 
    github: 'https://github.com/jcalle19', 
    linkedIn: 'https://www.linkedin.com/in/jacob-allen-b4737a299/', 
    email: 'jallenn0622@gmail.com'
};

//holds items as key: object{name: 'project name', primary: 'css color', techStack: [], thumbnail: 'image link', image: 'img', github: 'github', link: 'website link', desc: ''}
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

const verifyAuth = (key) => {
    if (key === process.env.ADMIN_KEY) return true;
    return false;
}

async function loadStateFromDB(db) {
    const projects = await db.collection("projects").find().toArray();
    const techs = await db.collection("tech-stack").find().toArray();

    projects.forEach(p => projectList.set(p._id, p.projectInfo));
    techs.forEach(t => techImages.set(t._id, t.url));
}

const connection = (io, socket) => {
    console.log('a user connected');
    io.to(socket.id).emit('connected', true);
}

const checkAdmin = (io, socket, key) => {
    io.to(socket.id).emit('set-admin', verifyAuth(key));
}

const addTechIcon = async (key, url, db) => {
    const tech = { _id: key, url };
    techImages.set(key, url);
    console.log('adding icon', key);
    await db.collection('tech-stack').updateOne(
        { _id: key },
        { $set: tech},
        { upsert: true },
    )
}

const removeTechIcon = async (key, db) => {
    if (techImages.has(key)) techImages.delete(key);
    console.log('removing icon', key);
    await db.collection('tech-stack').deleteOne({ _id: key});
}

const addProject = async (key, projectInfo, db) => {
    const project = { _id: key, projectInfo};
    projectList.set(key, projectInfo);
    console.log('adding project', key);
    await db.collection('projects').updateOne(
        { _id: key },
        { $set: project },
        { upsert: true },
    )
}

const removeProject = async (key, db) => {
    if (projectList.has(key)) projectList.delete(key);
    console.log('removing project', key);
    await db.collection('projects').deleteOne({ _id: key});
}

//unused
const addProjectImage = (key, url) => {
    projectImages.set(key, url);
}

//unused
const removeProjectImage = (key) => {
    if (projectImages.has(key)) projectImages.delete(key);
}

const sendRoomInfo = (io, socket) => {
    io.to(socket.id).emit('receive-content', defaultProject, Array.from(techImages), Array.from(projectImages), Array.from(projectList));
}
export const util = {
    safe,
    verifyAuth,
    loadStateFromDB,
    connection,
    checkAdmin,
    addTechIcon,
    removeTechIcon,
    addProjectImage,
    removeProjectImage,
    addProject,
    removeProject,
    sendRoomInfo,
}