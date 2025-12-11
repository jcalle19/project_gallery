'use client'

import { useState, useEffect } from 'react'
import { useRefContext } from '../contexts/refContext.jsx'
import { useStateContext } from '../contexts/stateContext.jsx'
import Icon from './icon.jsx'
import '../css/globals.css'
import '../css/projectDisplay.css'

const DefaultProjectDisplay = () => {
    const { defaultProjectPanel, defaultPanelOpen } = useStateContext();

    const handleCopy = () => {
        navigator.clipboard.writeText(defaultProjectPanel?.email);
    }

    return (
        <div id='default-display' className={`display-container text ${defaultPanelOpen ? '' : 'translated'}`} style={{backgroundColor: 'var(--charcoal)'}}>
            <div id='default-title'>{defaultProjectPanel?.title}</div>
            <div id='entry-msg' className='section'>
                <div className='section-title'>Welcome!</div>
                <div>{defaultProjectPanel?.entryMsg}</div>
            </div>
            <div id='image' className='section'></div>
            <div id='about-msg' className='section'>
                <div className='section-title'>About</div>
                {
                    defaultProjectPanel?.about.map((line, index)=>{
                        return <div key={index}><div>- {line}</div><br/></div>
                    })
                }
                <div>
                </div>
            </div>
            <div id='link-section' className='grid grid-rows-2 section'>
                <div className='row-start-1 section-title'>
                    Links
                </div>
                <div className='grid grid-cols-3 row-start-2' style={{marginLeft: '-4%'}}>
                    <div id='github' className='link-icon col-start-1'>
                        <a href={defaultProjectPanel?.github}><Icon src={'/github.svg'} width={'100%'} height={'100%'}/></a>
                    </div>
                    <div id='linkedIn' className='link-icon col-start-2'>
                        <a href={defaultProjectPanel?.linkedIn}><Icon src={'/linkedin.svg'} width={'60%'} height={'60%'}/></a>
                    </div>
                    <div id='gmail' className='link-icon col-start-3' onClick={handleCopy}>
                        <a href={`mailto:${defaultProjectPanel?.email}`}><Icon src={'/email.svg'} width={'100%'} height={'100%'}/></a>
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default DefaultProjectDisplay