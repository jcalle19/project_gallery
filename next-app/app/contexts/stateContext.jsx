'use client'

//Context for holding ref values
import { createContext, useContext, useState } from 'react';

const stateContext = createContext();
export const useStateContext = () => useContext(stateContext);

export const StateProvider = ({children}) => {
    const [currProject, setCurrProject] = useState(null);
    const [projectList, setList] = useState([
            {name: 'Example Project1', primary: 'var(--pastel-blue)', techStack: 
                ['https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6bebC_d4eWwJ-x9ntqDuT94TvOgumSBVWHg&s',
                'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6bebC_d4eWwJ-x9ntqDuT94TvOgumSBVWHg&s',
                'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6bebC_d4eWwJ-x9ntqDuT94TvOgumSBVWHg&s',
                'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6bebC_d4eWwJ-x9ntqDuT94TvOgumSBVWHg&s',
                'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6bebC_d4eWwJ-x9ntqDuT94TvOgumSBVWHg&s',
                'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6bebC_d4eWwJ-x9ntqDuT94TvOgumSBVWHg&s',
                ], image: 'https://static.vecteezy.com/system/resources/previews/002/073/179/non_2x/colorful-abstract-shape-geometric-in-dark-background-free-vector.jpg', link: 'exLink', desc: 'blah blah blah blah blah'},
            {name: 'Example Project2', primary: 'var(--pastel-blue)', techStack: [], image: 'https://img.freepik.com/free-vector/flat-design-geometric-shapes-background_23-2148366514.jpg', link: 'exLink', desc: ''},
            {name: 'Example Project3', primary: 'var(--pastel-blue)', techStack: [], image: 'https://i.fbcd.co/products/resized/resized-750-500/e29d5583f90410ee3072688e086ce32540170d92137ebe3e335ef9857572b31c.jpg', link: 'exLink', desc: ''},
            {name: 'Example Project4', primary: 'var(--pastel-blue)', techStack: [], image: 'https://wallpapers.com/images/hd/shapes-background-dmcw3546ei054xxt.jpg', link: 'exLink', desc: ''},
            {name: 'Example Project5', primary: 'var(--pastel-blue)', techStack: [], image: 'https://wallpapercave.com/wp/wp1847817.jpg', link: 'exLink', desc: ''},
            {name: 'Example Project6', primary: 'var(--pastel-blue)', techStack: [], image: 'https://plus.unsplash.com/premium_photo-1701863689953-790b57f234cb?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YWJzdHJhY3QlMjBzaGFwZXN8ZW58MHx8MHx8fDA%3D', link: 'exLink', desc: ''},
            {name: 'Example Project7', primary: 'var(--pastel-blue)', techStack: [], image: 'https://media.istockphoto.com/id/1422735620/vector/the-graphic-design-element-and-abstract-geometric-background-with-isometric-vector-blocks.jpg?s=612x612&w=0&k=20&c=50x5ASx6AVhZcOzoNnj8z7FlWG2T3Ls_Ov3AEOgcz_k=', link: 'exLink', desc: ''},
            {name: 'Example Project8', primary: 'var(--pastel-blue)', techStack: [], image: 'https://img.freepik.com/free-vector/modern-abstract-dark-violate-pink-background_84443-2784.jpg?semt=ais_hybrid&w=740&q=80', link: 'exLink', desc: ''},
        ]);
    const value={
        currProject, setCurrProject,
        projectList, setList,
    }
    
    return <stateContext.Provider value={value}>
        {children}
    </stateContext.Provider>
}