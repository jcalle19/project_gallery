import React from 'react'
import TitleBar from './titleBar.jsx'
import FilterBar from './filterBar.jsx'
import ProjectBoxContainer from './projectBoxContainer.jsx'
import ProjectDisplay from './projectDisplay.jsx'
import DefaultProjectDisplay from './defaultProjectDisplay.jsx'
import AddTechWindow from './addTechWindow.jsx'
import AddProjectWindow from './addProjectWindow.jsx'
import { TTFLoader } from 'three/examples/jsm/Addons.js'

const PageContainer = () => {
  return (
    <div style={{width: '100vw', height: '100vh', overflow: 'hidden'}}>
        <TitleBar/>
        <FilterBar/>
        <ProjectDisplay/>
        <DefaultProjectDisplay/>
        <ProjectBoxContainer/>
        <AddTechWindow/>
        <AddProjectWindow/>
    </div>
  )
}

export default PageContainer