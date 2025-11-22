'use client'

//Context for holding ref values
import { createContext, useContext, useRef } from 'react';

const refContext = createContext();
export const useRefContext = () => useContext(refContext);

export const RefProvider = ({children}) => {
    const socketRef = useRef(null);

    const value={
        socketRef,
    }
    return <refContext.Provider value={value}>
        {children}
    </refContext.Provider>
}