import React from 'react'
import ProjectBox from './projectBox.jsx'
import '../css/projectBox.css'

const ProjectBoxContainer = () => {
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
        <ProjectBox name={'Example Project'} techStack={'exTech'} image={'exImage'} link={'exLink'}/>
    </div>
  )
}

export default ProjectBoxContainer