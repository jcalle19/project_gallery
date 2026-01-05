'use client'
import React from 'react'
import { useStateContext } from '@/contexts/stateContext.jsx'
import { useUIContext } from '@/contexts/uiContext.jsx'
import { Work_Sans } from 'next/font/google'
import TechStackIcon from './techStackIcon.jsx'
import Icon from './icon.jsx'
import '@/css/globals.css'
import '@/css/projectDisplay.css'

const font = Work_Sans({
        subsets: ['latin'],
        fallback: ["system-ui", "Arial", "sans-serif"],
    });

const ProjectDisplay = () => {
    const { currProject, setCurrProject, techIcons } = useStateContext();
    const { toggleDefaultPanel, setInfoText, toggleIconInfo } = useUIContext();
    
    const setIconInfo = (toggle, label) => {
        setInfoText(label);
        toggleIconInfo(toggle);
    }

    const handleClose = () => {
        toggleDefaultPanel(true);
        setCurrProject(null);
    }

    return (
        <div className={`display-container ${font.className}`} style={{backgroundColor: 'black'}}>
            { currProject === null ? '' :
                <div>
                    <div id='close-button' className='col-start-2' onClick={handleClose}>
                        <Icon src='/close-icon.svg' width={'100%'} height={'100%'}/>
                    </div>
                    <div id='project-title' className='text col-start-1'>{currProject.name}</div>
                    <div id='project-image' style={{backgroundImage:`url(${currProject.image})`, marginBottom: '2%'}}></div>
                    <div id='techstack-parent' className='section' 
                        style={{ backgroundColor: 'var(--charcoal)'}}>
                        <div className='section-title text'>Used Technologies</div>
                        <div id='techstack-list'>
                            {
                                currProject.techStack.map((key, index)=>{
                                    return <div key={index} className='icon-container'>
                                        <TechStackIcon label={key} src={techIcons.get(key)} sizePercent={'90'}/>
                                    </div>
                                })
                            }
                        </div>
                    </div>
                    <div id='description' className='section' style={{backgroundColor: 'var(--charcoal)'}}>
                        <div className='section-title text'>Project Description</div>
                        <div id='description-body' className='text'>{currProject.desc}</div>
                    </div>
                     <div id='Links' className='section grid grid-rows-2' style={{backgroundColor: 'var(--charcoal)'}}>
                        <div className='section-title text row-start-1'>Links</div>
                        <div className='row-start-2 grid grid-cols-2' style={{marginLeft: '-4.5%'}}>
                            <div id='github' className='link-icon col-start-1'
                                 onMouseEnter={()=>setIconInfo(true, 'Github')}
                                 onMouseLeave={()=>setIconInfo(false, '')}
                            >
                                <a href={currProject?.github}><Icon src={'/github.svg'} width={'100%'} height={'100%'}/></a>
                            </div>
                            <div className='link-icon col-start-2'
                                 onMouseEnter={()=>setIconInfo(true, 'Go to Project')}
                                 onMouseLeave={()=>setIconInfo(false, '')}
                            >
                                <a href={currProject?.link}><Icon src={'/link.svg'} width={'70%'} height={'70%'}/></a>
                            </div>
                        </div>
                    </div>
                </div>
            }
        </div>
    )
}

export default ProjectDisplay;