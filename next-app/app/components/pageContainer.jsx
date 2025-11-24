import React from 'react'
import ProjectBoxContainer from './projectBoxContainer'
import ProjectDisplay from './projectDisplay'

const PageContainer = () => {
  return (
    <div style={{width: '100vw', height: '100vh', overflow: 'hidden'}}>
        <ProjectDisplay/>
        <ProjectBoxContainer/>
    </div>
  )
}

export default PageContainer