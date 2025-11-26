import React from 'react'

const TechStackIcon = ({src, sizePercent}) => {
  return (
    <div style={{
                 backgroundImage:`url(${src})`,
                 backgroundSize: 'cover',
                 backgroundRepeat: 'no-repeat',
                 backgroundPosition: 'center',
                 width:`${sizePercent}%`, 
                 height:`${sizePercent}%`,
                }}></div>
  )
}

export default TechStackIcon