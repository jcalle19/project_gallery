'use client'

//Context for holding ref values
import { createContext, useContext, useState, useEffect, useMemo } from 'react';

const stateContext = createContext();
export const useStateContext = () => useContext(stateContext);

export const StateProvider = ({children}) => {
    const [defaultProjectPanel, updateDefaultPanel] = useState(null); //ui
    const [defaultPanelOpen, toggleDefaultPanel] = useState(true); //ui
    const [currProject, setCurrProject] = useState(null);
    const [techIcons, updateTechIcons] = useState(new Map());
    const [projectIcons, updateProjectIcons] = useState(new Map());
    const [projectList, updateProjectList] = useState(new Map());
    const [techWindowOpen, toggleTechWindow] = useState(false); //ui
    const [projectWindowOpen, toggleProjectWindow] = useState(false); //ui
    const [filterList, updateFilterList] = useState(new Set());
    const [infoText, setInfoText] = useState(''); //ui
    const [showInfo, toggleIconInfo] = useState(false); //ui
    const [adminMode, setAdminMode] = useState(false);

    const value=useMemo(()=>({
        currProject, setCurrProject,
        techIcons, updateTechIcons,
        projectIcons, updateProjectIcons,
        projectList, updateProjectList,
        filterList, updateFilterList,
        adminMode, setAdminMode
    }), [currProject, techIcons, projectIcons, projectList, filterList, adminMode]);
    
    return <stateContext.Provider value={value}>
        {children}
    </stateContext.Provider>
}