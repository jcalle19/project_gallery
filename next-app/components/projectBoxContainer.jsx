'use client'
import {useEffect, useRef, useState} from 'react'
import { useStateContext } from '@/contexts/stateContext'
import ProjectBox from './projectBox.jsx'
import '@/css/projectBox.css'
import '@/css/globals.css'

const ProjectBoxContainer = () => {
    //Will be obtained from server
    const { filterList, projectList } = useStateContext();
    
    const checkFilter = (boxInfo) => {
        if (filterList.size === 0) return true;
        let ret = boxInfo.techStack.some(item => filterList.has(item));
        //let ret = [...filterList].every(value => boxInfo.techStack.includes(value));
        return ret;
    }

    return (
        <div id='project-box-container'>
            <div id='project-flex-box'>
                {
                    [...projectList.values()].map((box, index)=>{ 
                        return (checkFilter(box) ? <ProjectBox key={index} boxInfo={box}/> : '');
                   })
                }
            </div>
        </div>
    )
}

export default ProjectBoxContainer