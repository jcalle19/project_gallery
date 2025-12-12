//not implemented yet
'use client'
import {useState, useEffect} from 'react'
import { useUIContext } from '../contexts/uiContext.jsx'
import { Stack_Sans_Text } from 'next/font/google'
import '../css/globals.css'

const font = Stack_Sans_Text({
        subsets: ['latin'],
        fallback: ["system-ui", "Arial", "sans-serif"],
    });

const IconInfo = () => {
    const { infoText, showInfo } = useUIContext();
    const [coords, setCoords] = useState({x: 0, y: 0});

    const translate = (e) => {
        setCoords({x: e.clientX, y: e.clientY});
    }

    useEffect(()=>{
        console.log('attaching');
        window.addEventListener('mousemove', translate);
        return ()=>{
            window.removeEventListener('mousemove', translate);
        }
    },[]);

    return (
        <div className={font.className} 
        style={{
            display: `${showInfo ? '' : 'none'}`,
            position: 'absolute',
            backgroundColor: 'var(--slate)',
            color: 'white',
            left: `${coords.x}px`,
            top: `${coords.y}px`,
            width: 'fit-content',
            height: 'fit-content',
            paddingLeft: '5px',
            paddingRight: '5px',
            pointerEvents: 'none',
            borderRadius: '5px',
            transform: 'translate(0%, -100%)',
            boxShadow: '0px 0px 5px black',
        }}>{infoText}</div>
    )
}

export default IconInfo