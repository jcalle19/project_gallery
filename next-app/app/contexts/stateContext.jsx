'use client'

//Context for holding ref values
import { createContext, useContext, useState } from 'react';

const stateContext = createContext();
export const useStateContext = () => useContext(stateContext);

export const StateProvider = ({children}) => {
    const [currProject, setCurrProject] = useState(null);
    const [techIcons, updateTechIcons] = useState(new Map());
    const [projectIcons, updateProjectIcons] = useState(new Map());
    const [projectList, updateProjectList] = useState(new Map());
    const [adminMode, setAdminMode] = useState(true);

    const value={
        currProject, setCurrProject,
        techIcons, updateTechIcons,
        projectIcons, updateProjectIcons,
        projectList, updateProjectList,
        adminMode, setAdminMode
    }
    
    return <stateContext.Provider value={value}>
        {children}
    </stateContext.Provider>
}