'use client'
import { useState } from 'react'
import { Geist } from 'next/font/google';
import Icon from './icon.jsx'
import '../css/globals.css'
import '../css/projectBox.css'

const geist = Geist({
        subsets: ['latin'],
    });

const ProjectBox = ({primary, secondary, name, techStack, image, link}) => {
    const [hovering, setHovering] = useState(false);

    

    const handleMouseOver = () => {
        setHovering(true);
    }

    const handleMouseExit = () => {
        setHovering(false);
    }

    return (
        <div className={`box-outer font-config ${geist.className}`} 
             onMouseOver={handleMouseOver} 
             onMouseLeave={handleMouseExit}
             style={{border: '1px solid var(--pastel-blue'}}
        >
            <div className='box-image'></div>
            <div className='name-plate' 
                 style={{backgroundColor: 'var(--pastel-blue)'}}
            >
                {name}
            </div>
            <div className='tech-list'></div>
            <div className={`link-bar ${hovering ? 'link-expanded' : ''}`} style={{backgroundColor: 'var(--pastel-blue)'}}>
                <div style={{width: '100%', height: '100%', 
                             opacity: `${hovering ? '1' : '0'}`,
                             transition: 'opacity .2s',
                            }}>
                    <Icon src={`/link.svg`} width='55%' height='55%'/>
                </div>
            </div>
        </div>
    )
}

export default ProjectBox;