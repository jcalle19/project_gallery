'use client'
import {useEffect, useRef, useState} from 'react'
import { useStateContext } from '../contexts/stateContext'
import { useRefContext } from '../contexts/refContext'
import ProjectBox from './projectBox.jsx'
import '../css/projectBox.css'
import '../css/globals.css'

const ProjectBoxContainer = () => {
    //Will be obtained from server
    const { projectMapRef } = useRefContext();
    return (
        <div id='project-box-container-parent' style={{backgroundColor: 'var(--charcoal)'}}>
            <div id='project-box-container' style={{backgroundColor: 'var(--slate)', scrollbarColor: 'var(--slate-light) transparent'}}>
                {
                    [...projectMapRef.current.values()].map((box, index)=>{
                        return <ProjectBox key={index} boxInfo={box}/>
                    })
                }
            </div>
        </div>
        
    )
}

export default ProjectBoxContainer