'use client'

//Context for holding ref values
import { createContext, useContext, useState, useMemo } from 'react';

const uiContext = createContext();
export const useUIContext = () => useContext(uiContext);

export const UIProvider = ({children}) => {
    const [defaultProjectPanel, updateDefaultPanel] = useState(null);
    const [defaultPanelOpen, toggleDefaultPanel] = useState(true);
    const [techWindowOpen, toggleTechWindow] = useState(false); //ui
    const [projectWindowOpen, toggleProjectWindow] = useState(false); //ui
    const [infoText, setInfoText] = useState(''); //ui
    const [showInfo, toggleIconInfo] = useState(false); //ui

     const value=useMemo(()=>({
        defaultProjectPanel, updateDefaultPanel,
        defaultPanelOpen, toggleDefaultPanel,
        techWindowOpen, toggleTechWindow,
        projectWindowOpen, toggleProjectWindow,
        infoText, setInfoText,
        showInfo, toggleIconInfo,
    }), [defaultProjectPanel, defaultPanelOpen, techWindowOpen, projectWindowOpen, infoText, showInfo]);

    return <uiContext.Provider value={value}>
        {children}
    </uiContext.Provider>
}