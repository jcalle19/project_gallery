'use client'
import {useEffect, useRef, useState} from 'react'
import ProjectBox from './projectBox.jsx'
import '../css/projectBox.css'

const ProjectBoxContainer = () => {
    //Will be obtained from server
    const exArray = [
        {name: 'Example Project', techStack: 'exTech', image: 'exImage', link: 'exLink'},
        {name: 'Example Project', techStack: 'exTech', image: 'exImage', link: 'exLink'},
        {name: 'Example Project', techStack: 'exTech', image: 'exImage', link: 'exLink'},
        {name: 'Example Project', techStack: 'exTech', image: 'exImage', link: 'exLink'},
        {name: 'Example Project', techStack: 'exTech', image: 'exImage', link: 'exLink'},
        {name: 'Example Project', techStack: 'exTech', image: 'exImage', link: 'exLink'},
        {name: 'Example Project', techStack: 'exTech', image: 'exImage', link: 'exLink'},
        {name: 'Example Project', techStack: 'exTech', image: 'exImage', link: 'exLink'},
    ];
    return (
        <div id='project-box-container'>
            <ProjectBox name={'Example Project'} techStack={'exTech'} image={'exImage'} link={'exLink'}/>
            <ProjectBox name={'Example Project'} techStack={'exTech'} image={'exImage'} link={'exLink'}/>
            <ProjectBox name={'Example Project'} techStack={'exTech'} image={'exImage'} link={'exLink'}/>
            <ProjectBox name={'Example Project'} techStack={'exTech'} image={'exImage'} link={'exLink'}/>
            <ProjectBox name={'Example Project'} techStack={'exTech'} image={'exImage'} link={'exLink'}/>
            <ProjectBox name={'Example Project'} techStack={'exTech'} image={'exImage'} link={'exLink'}/>
            <ProjectBox name={'Example Project'} techStack={'exTech'} image={'exImage'} link={'exLink'}/>
            <ProjectBox name={'Example Project'} techStack={'exTech'} image={'exImage'} link={'exLink'}/>
        </div>
    )
}

export default ProjectBoxContainer