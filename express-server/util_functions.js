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

const projectList = new Map([
        ['example-project-1', {name: 'Example Project1', primary: 'var(--pastel-blue)', techStack: 
                ['next_icon','express_icon','socket_icon','html_icon','css_icon'], image: 'https://static.vecteezy.com/system/resources/previews/002/073/179/non_2x/colorful-abstract-shape-geometric-in-dark-background-free-vector.jpg', github: 'github', link: 'exLink', desc: 'blah blah blah blah blah'}],
        ['example-project-2', {name: 'Example Project2', primary: 'var(--pastel-blue)', techStack: [], image: 'https://img.freepik.com/free-vector/flat-design-geometric-shapes-background_23-2148366514.jpg', github: 'github', link: 'exLink', desc: ''}],
        ['example-project-3', {name: 'Example Project3', primary: 'var(--pastel-blue)', techStack: [], image: 'https://i.fbcd.co/products/resized/resized-750-500/e29d5583f90410ee3072688e086ce32540170d92137ebe3e335ef9857572b31c.jpg', github: 'github', link: 'exLink', desc: ''}],
        ['example-project-4', {name: 'Example Project4', primary: 'var(--pastel-blue)', techStack: [], image: 'https://wallpapers.com/images/hd/shapes-background-dmcw3546ei054xxt.jpg', link: 'exLink', desc: ''}],
        ['example-project-5', {name: 'Example Project5', primary: 'var(--pastel-blue)', techStack: [], image: 'https://wallpapercave.com/wp/wp1847817.jpg', link: 'exLink', desc: ''}],
        ['example-project-6', {name: 'Example Project6', primary: 'var(--pastel-blue)', techStack: [], image: 'https://plus.unsplash.com/premium_photo-1701863689953-790b57f234cb?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YWJzdHJhY3QlMjBzaGFwZXN8ZW58MHx8MHx8fDA%3D', github: 'github', link: 'exLink', desc: ''}],
        ['example-project-7', {name: 'Example Project7', primary: 'var(--pastel-blue)', techStack: [], image: 'https://media.istockphoto.com/id/1422735620/vector/the-graphic-design-element-and-abstract-geometric-background-with-isometric-vector-blocks.jpg?s=612x612&w=0&k=20&c=50x5ASx6AVhZcOzoNnj8z7FlWG2T3Ls_Ov3AEOgcz_k=', github: 'github', link: 'exLink', desc: ''}],
        ['example-project-8', {name: 'Example Project8', primary: 'var(--pastel-blue)', techStack: [], image: 'https://img.freepik.com/free-vector/modern-abstract-dark-violate-pink-background_84443-2784.jpg?semt=ais_hybrid&w=740&q=80', github: 'github', link: 'exLink', desc: ''}],
    ]);

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
    io.to(socket.id).emit('receive-content', defaultProject, Array.from(techImages), Array.from(projectImages), Array.from(projectList));
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