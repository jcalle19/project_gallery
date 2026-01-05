import React from 'react'
import TitleBar from './titleBar.jsx'
import FilterBar from './filterBar.jsx'
import ProjectBoxContainer from './projectBoxContainer.jsx'
import SiteLeftBody from './siteLeftBody.jsx'
import ProjectDisplay from './projectDisplay.jsx'
import DefaultProjectDisplay from './defaultProjectDisplay.jsx'
import AddTechWindow from './addTechWindow.jsx'
import AddProjectWindow from './addProjectWindow.jsx'
import IconInfo from './iconInfo.jsx'
import { TTFLoader } from 'three/examples/jsm/Addons.js'

const PageContainer = () => {
  return (
    <div style={{width: '100%', height: '100%', overflow: 'hidden'}}>
        <SiteLeftBody/>
        <ProjectDisplay/>
        <DefaultProjectDisplay/>
        <AddTechWindow/>
        <AddProjectWindow/>
        <IconInfo/>
    </div>
  )
}

export default PageContainer