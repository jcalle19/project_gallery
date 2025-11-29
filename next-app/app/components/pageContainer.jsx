import React from 'react'
import TitleBar from './titleBar'
import FilterBar from './filterBar'
import ProjectBoxContainer from './projectBoxContainer'
import ProjectDisplay from './projectDisplay'
import { TTFLoader } from 'three/examples/jsm/Addons.js'

const PageContainer = () => {
  return (
    <div style={{width: '100vw', height: '100vh', overflow: 'hidden'}}>
        <TitleBar/>
        <FilterBar/>
        <ProjectDisplay/>
        <ProjectBoxContainer/>
    </div>
  )
}

export default PageContainer