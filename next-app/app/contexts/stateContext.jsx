'use client'

//Context for holding ref values
import { createContext, useContext, useState } from 'react';

const stateContext = createContext();
export const useStateContext = () => useContext(stateContext);

export const StateProvider = ({children}) => {
    const [currProject, setCurrProject] = useState(null);
    
    const value={
        currProject, setCurrProject,
    }
    
    return <stateContext.Provider value={value}>
        {children}
    </stateContext.Provider>
}