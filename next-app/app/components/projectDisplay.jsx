'use client'
import React from 'react'
import { useStateContext } from '../contexts/stateContext'
import { Work_Sans } from 'next/font/google'
import TechStackIcon from './techStackIcon.jsx'
import Icon from './icon.jsx'
import '../css/globals.css'
import '../css/projectDisplay.css'

const font = Work_Sans({
        subsets: ['latin'],
        fallback: ["system-ui", "Arial", "sans-serif"],
    });

const ProjectDisplay = () => {
    const { currProject,  techIcons } = useStateContext();
    
    const handleClose = () => {

    }

    return (
        <div className={`display-container ${font.className}`} style={{backgroundColor: 'var(--charcoal)'}}>
            { currProject === null ? '' :
                <div>
                    <div id='close-button' className='col-start-2' onClick={handleClose}>
                        <Icon src='/close-icon.svg' width={'100%'} height={'100%'}/>
                    </div>
                    <div id='project-title' className='text col-start-1'>{currProject.name}</div>
                    <div id='project-image' style={{backgroundImage:`url(${currProject.image})`, marginBottom: '2%'}}></div>
                    <div id='techstack-parent' className='section' 
                        style={{ backgroundColor: 'var(--slate)'}}>
                        <div className='section-title text'>Used Technologies</div>
                        <div id='techstack-list'>
                            {
                                currProject.techStack.map((key, index)=>{
                                    return <div key={index} className='icon-container'>
                                        <TechStackIcon src={techIcons.get(key)} sizePercent={'90'}/>
                                    </div>
                                })
                            }
                        </div>
                    </div>
                    <div id='description' className='section' style={{backgroundColor: 'var(--slate)'}}>
                        <div className='section-title text'>Project Description</div>
                        <div id='description-body' className='text'>{currProject.desc}</div>
                    </div>
                     <div id='Links' className='section' style={{backgroundColor: 'var(--slate)'}}>
                        <div className='section-title text'>Links</div>
                        <div id='description-body' className='text'>{currProject.link}</div>
                    </div>
                </div>
            }
        </div>
    )
}

export default ProjectDisplay;