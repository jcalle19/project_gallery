'use client'

import {useState, useEffect} from 'react'
import Icon from './icon.jsx'
import TechStackIcon from './techStackIcon.jsx'
import { useStateContext } from '../contexts/stateContext.jsx'
import { useUIContext } from '../contexts/uiContext.jsx'
import '../css/globals.css'
import '../css/filterBar.css'

const FilterBar = () => {
  const { adminMode, techIcons, filterList, updateFilterList } = useStateContext();
  const { techWindowOpen, toggleTechWindow, projectWindowOpen, toggleProjectWindow } = useUIContext();
  
  const handleToggleTechMenu = () => {
    toggleTechWindow(!techWindowOpen);
  }

  const handleToggleProjectMenu = () => {
    toggleProjectWindow(!projectWindowOpen);
  }

  const handleIconClick = (key) => {
    updateFilterList(prev => {
      const next = new Set(prev);
      if (next.has(key)) {
        next.delete(key);
      } else {
        next.add(key);
      }
      return next;
    });
  }

  return (
    <div id='filter-container' 
         style={{
            backgroundColor: 'var(--slate)', 
            scrollbarColor: 'var(--slate-light) transparent'
        }}>
          <div id='icon-list'>
            {Array.from(techIcons).map((entry, index)=>{
              return <div key={index} className={`icon ${filterList.has(entry[0]) ? 'selected' : ''}`} 
                          onClick={(e)=>handleIconClick(entry[0])}
                      >
                <TechStackIcon label={entry[0]} src={entry[1]} sizePercent={'90'}/>
              </div>
            })}
            {adminMode ? 
              <div className='icon' onClick={handleToggleTechMenu}>
                {techWindowOpen ? 
                  <Icon src={'/minimize.svg'} width={'70%'} height={'70%'}/> : 
                  <Icon src={'/add.svg'} width={'70%'} height={'70%'}/>
                }
              </div> : ''
            }
          </div>
          {adminMode ?
            <div className='window-button' onClick={handleToggleProjectMenu}>
              {projectWindowOpen ? 
                <Icon src={'/minimize.svg'} width={'70%'} height={'70%'}/> : 
                <Icon src={'/add.svg'} width={'70%'} height={'70%'}/>
              }
            </div> : ''
          }
        </div>
  )
}

export default FilterBar