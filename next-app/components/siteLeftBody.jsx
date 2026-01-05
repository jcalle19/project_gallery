import React from 'react'
import TitleBar from './titleBar.jsx'
import FilterBar from './filterBar.jsx'
import ProjectBoxContainer from './projectBoxContainer.jsx'
import '@/css/siteLeftBody.css'

const SiteLeftBody = () => {
  return (
    <div id='left-body-container' className='grid grid-cols-[1fr_5fr]'>
        <div id='bar-container' className='grid grid-cols-2 col-start-1'>
            <TitleBar className='col-start-1'/>
            <FilterBar className='col-start-2'/>
        </div>
        <ProjectBoxContainer className='col-start-2' style={{border: '1px solid blue'}}/>
    </div>
  )
}

export default SiteLeftBody