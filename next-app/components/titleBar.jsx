'use client'

import React from 'react'
import Icon from './icon.jsx'
import { Work_Sans } from 'next/font/google'
import '@/css/globals.css'
import '@/css/titleBar.css'

const font = Work_Sans({
        subsets: ['latin'],
        fallback: ["system-ui", "Arial", "sans-serif"],
    });

const TitleBar = () => {
  return (
    <div id='title-container-parent' className={`${font.className}`}>
        <div id='title-container'>
            <div className='letter'>
                <Icon src={'/logo.svg'} width={'100%'} height={'100%'}/>
            </div>
            <div className='letter'>G</div>
            <div className='letter'>A</div>
            <div className='letter'>L</div>
            <div className='letter'>L</div>
            <div className='letter'>E</div>
            <div className='letter'>R</div>
            <div className='letter'>Y</div>
        </div>
    </div>
  )
}

export default TitleBar