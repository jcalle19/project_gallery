import React from 'react'
import '../css/globals.css'
import '../css/filterBar.css'

const FilterBar = () => {
  return (
    <div id='filter-container' 
         style={{
            backgroundColor: 'var(--slate)', 
            scrollbarColor: 'var(--slate-light) transparent'
        }}></div>
  )
}

export default FilterBar