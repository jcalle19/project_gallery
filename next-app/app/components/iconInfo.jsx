//not implemented yet
'use client'
import {useState, useEffect} from 'react'

const IconInfo = () => {
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
        <div style={{
            display: 'none',
            position: 'absolute',
            backgroundColor: 'white',
            left: `${coords.x}px`,
            top: `${coords.y}px`,
            width: 'fit-content',
            height: 'fit-content',
            paddingLeft: '5px',
            paddingRight: '5px',
            pointerEvents: 'none',
            transform: 'translate(-100%, -100%)',
        }}>Hello</div>
    )
}

export default IconInfo