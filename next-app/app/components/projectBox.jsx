'use client'
import { useState, useRef } from 'react'
import { useStateContext } from '../contexts/stateContext'
import { Stack_Sans_Text } from 'next/font/google'
import Icon from './icon.jsx'
import '../css/globals.css'
import '../css/projectBox.css'

const font = Stack_Sans_Text({
        subsets: ['latin'],
        fallback: ["system-ui", "Arial", "sans-serif"],
    });

const ProjectBox = ({boxInfo}) => {
    const { setCurrProject } = useStateContext();
    const rotateRef = useRef(null);
    const rotateRefParent = useRef(null);
    const rotateRefInfo = useRef(null);
    const origin = useRef({x: 0, y: 0});
    const transformBefore = useRef('');

    const handleClick = () => {
        setCurrProject(boxInfo);
    }

    const handleMouseEnter = () => {
        rotateRefInfo.current = rotateRefParent.current.getBoundingClientRect();
        transformBefore.current = rotateRef.current.style.transform;
    }

    const handleMouseMove = (e) => {
        if (rotateRefInfo.current === null) rotateRefInfo.current = rotateRef.current.getBoundingClientRect();
        origin.current.x = rotateRefInfo.current.left + (rotateRefInfo.current.width/2);
        origin.current.y = rotateRefInfo.current.top + (rotateRefInfo.current.height/2);
        let distance = Math.sqrt(((e.clientX - origin.current.x)**2) + ((e.clientY - origin.current.y)**2));
        let deg = distance / (rotateRefInfo.current.width/2) * 12;
    
        let rotY = (e.clientX - origin.current.x) / (rotateRefInfo.current.width/2);
        let rotX = -1 * (e.clientY - origin.current.y) / (rotateRefInfo.current.height/2);

        rotateRef.current.style.transform = `rotate3d(${rotX},${rotY},0,${deg}deg)`;
        rotateRef.current.style.backgroundImage = `linear-gradient(${deg * 50}deg, transparent, rgba(255,255,255,.2))`;
    }

    const handleMouseExit = () => {
        rotateRef.current.style.transform = transformBefore.current;
        rotateRef.current.style.backgroundImage = '';
    }

    return (
        <div id='outer-parent' ref={rotateRefParent}
                onClick={handleClick}
                onMouseEnter={handleMouseEnter}
                onMouseMove={handleMouseMove} 
                onMouseLeave={handleMouseExit}
        >
            <div className={`box-outer font-config ${font.className}`} ref={rotateRef}>
                <div className='box-image' style={{transform: 'translateZ(-60px)', backgroundImage: `url(${boxInfo.image})`}}></div>
                <div className='name-plate' 
                     style={{backgroundColor: 'var(--pastel-blue)', transform: 'translateZ(10px)'}}
                >
                    <p style={{transform: 'translateZ(20px)'}}>{boxInfo.name}</p>
                </div>
                <div className='tech-list'></div>
            </div>
        </div>
    )
}

export default ProjectBox;