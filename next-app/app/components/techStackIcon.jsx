import React from 'react'
import '../css/globals.css'

const TechStackIcon = ({src, sizePercent}) => {
  return (
    <div style={{
                 position: 'relative',
                 left: '50%',
                 top: '50%',
                 backgroundImage:`url(${src})`,
                 backgroundSize: 'cover',
                 backgroundRepeat: 'no-repeat',
                 backgroundPosition: 'center',
                 width:`${sizePercent}%`, 
                 height:`${sizePercent}%`,
                 transform: 'translate(-50%, -50%)',
                }}></div>
  )
}

export default TechStackIcon