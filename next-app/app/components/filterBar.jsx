'use client'

import {useState, useEffect} from 'react'
import Icon from './icon.jsx'
import TechStackIcon from './techStackIcon.jsx'
import { useStateContext } from '../contexts/stateContext.jsx'
import '../css/globals.css'
import '../css/filterBar.css'

const FilterBar = () => {
  const { adminMode, techIcons, techWindowOpen, 
    toggleTechWindow, filterList, updateFilterList } = useStateContext();

  const handleToggleMenu = () => {
    toggleTechWindow(!techWindowOpen);
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
                <TechStackIcon src={entry[1]} sizePercent={'90'}/>
              </div>
            })}
          </div>
          <div id='add-tech-button' onClick={handleToggleMenu}>
            {techWindowOpen ? 
              <Icon src={'/minimize.svg'} width={'70%'} height={'70%'}/> : 
              <Icon src={'/add.svg'} width={'70%'} height={'70%'}/>
            }
          </div>
        </div>
  )
}

export default FilterBar