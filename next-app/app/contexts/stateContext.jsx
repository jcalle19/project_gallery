'use client'

//Context for holding ref values
import { createContext, useContext, useState, useMemo } from 'react';

const stateContext = createContext();
export const useStateContext = () => useContext(stateContext);

export const StateProvider = ({children}) => {
    const [currProject, setCurrProject] = useState(null);
    const [techIcons, updateTechIcons] = useState(new Map());
    const [projectIcons, updateProjectIcons] = useState(new Map());
    const [projectList, updateProjectList] = useState(new Map());
    const [techWindowOpen, toggleTechWindow] = useState(false);
    const [filterList, updateFilterList] = useState(new Set());
    const [adminMode, setAdminMode] = useState(true);

    const value=useMemo(()=>({
        currProject, setCurrProject,
        techIcons, updateTechIcons,
        projectIcons, updateProjectIcons,
        projectList, updateProjectList,
        techWindowOpen, toggleTechWindow,
        filterList, updateFilterList,
        adminMode, setAdminMode
    }), [currProject, techIcons, projectIcons, projectList, techWindowOpen, filterList, adminMode]);
    
    return <stateContext.Provider value={value}>
        {children}
    </stateContext.Provider>
}