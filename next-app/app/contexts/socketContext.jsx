'use client'

//Context for holding ref values
import { createContext, useContext, useEffect, useState } from 'react';
import { useRefContext } from './refContext.jsx';
import { useStateContext } from './stateContext.jsx';
import { io } from 'socket.io-client';

const socketContext = createContext();
export const useSocketContext = () => useContext(socketContext);

export const SocketProvider = ({children}) => {
    const { socketRef } = useRefContext();
    const { updateProjectList, updateTechIcons, updateProjectIcons} = useStateContext();
    const [socketReady, setSocketReady] = useState(false);

    useEffect(() => {
        socketRef.current = io(process.env.NEXT_PUBLIC_SOCKET_URL);

        socketRef.current.on('connected', (isConnected) => {
           setSocketReady(isConnected);
           socketRef.current.emit('request-content');
        });

        socketRef.current.on('receive-content', (techIcons, projectIcons, projectList) => {
            console.log('receiving content', techIcons);
            updateTechIcons(new Map(techIcons));
            updateProjectIcons(new Map(projectIcons));
            updateProjectList(new Map(projectList));
        });
    },[]);

    const value={
        socketReady,
    }

    return <socketContext.Provider value={value}>
        {children}
    </socketContext.Provider>
}