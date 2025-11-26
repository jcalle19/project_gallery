'use client'
import {useEffect, useRef, useState} from 'react'
import { useStateContext } from '../contexts/stateContext'
import ProjectBox from './projectBox.jsx'
import '../css/projectBox.css'
import '../css/globals.css'

const ProjectBoxContainer = () => {
    //Will be obtained from server
    const { projectList } = useStateContext();
    return (
        <div id='project-box-container-parent' style={{backgroundColor: 'var(--charcoal)'}}>
            <div id='project-box-container' style={{backgroundColor: 'var(--slate)'}}>
                {
                    projectList.map((box, index)=>{
                        return <ProjectBox key={index} boxInfo={box}/>
                    })
                }
            </div>
        </div>
        
    )
}

export default ProjectBoxContainer