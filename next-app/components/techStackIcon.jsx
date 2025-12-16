import React from 'react'
import { useUIContext } from '@/contexts/uiContext.jsx'
import '@/css/globals.css'

const TechStackIcon = ({label, src, sizePercent}) => {
  const { setInfoText, toggleIconInfo } = useUIContext();

  const handleMouseOver = () => {
    setInfoText(label);
    toggleIconInfo(true);
  }

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
                }}
        onMouseEnter={handleMouseOver}
        onMouseLeave={()=>toggleIconInfo(false)}></div>
  )
}

export default TechStackIcon