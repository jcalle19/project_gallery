'use client'

//Context for holding ref values
import { createContext, useContext, useEffect, useState } from 'react';
import { useRefContext } from './refContext.jsx';
import { io } from 'socket.io-client';

const socketContext = createContext();
export const useSocketContext = () => useContext(socketContext);

export const SocketProvider = ({children}) => {
    const { socketRef } = useRefContext();

    useEffect(() => {
        socketRef.current = io(process.env.NEXT_PUBLIC_SOCKET_URL);
    },[]);

    const value={}
    return <socketContext.Provider value={value}>
        {children}
    </socketContext.Provider>
}