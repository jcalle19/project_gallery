'use client'

//Context for holding ref values
import { createContext, useContext, useState, useEffect, useMemo } from 'react';

const stateContext = createContext();
export const useStateContext = () => useContext(stateContext);

export const StateProvider = ({children}) => {
    const [defaultProjectPanel, updateDefaultPanel] = useState(null);
    const [defaultPanelOpen, toggleDefaultPanel] = useState(true);
    const [currProject, setCurrProject] = useState(null);
    const [techIcons, updateTechIcons] = useState(new Map());
    const [projectIcons, updateProjectIcons] = useState(new Map());
    const [projectList, updateProjectList] = useState(new Map());
    const [techWindowOpen, toggleTechWindow] = useState(false);
    const [projectWindowOpen, toggleProjectWindow] = useState(false);
    const [filterList, updateFilterList] = useState(new Set());
    /* Currently unused, will probably add to future update
    const [infoText, setInfoText] = useState('');
    const [showInfo, toggleIconInfo] = useState(false);
    */
    const [adminMode, setAdminMode] = useState(false);

    const value=useMemo(()=>({
        defaultProjectPanel, updateDefaultPanel,
        defaultPanelOpen, toggleDefaultPanel,
        currProject, setCurrProject,
        techIcons, updateTechIcons,
        projectIcons, updateProjectIcons,
        projectList, updateProjectList,
        techWindowOpen, toggleTechWindow,
        projectWindowOpen, toggleProjectWindow,
        filterList, updateFilterList,
        adminMode, setAdminMode
    }), [defaultProjectPanel, defaultPanelOpen, currProject, techIcons, projectIcons, projectList, techWindowOpen, projectWindowOpen, filterList, adminMode]);
    
    return <stateContext.Provider value={value}>
        {children}
    </stateContext.Provider>
}