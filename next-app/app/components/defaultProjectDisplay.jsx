'use client'

import { useState, useEffect } from 'react'
import { useRefContext } from '../contexts/refContext.jsx'
import { useStateContext } from '../contexts/stateContext.jsx'
import Icon from './icon.jsx'
import '../css/globals.css'
import '../css/projectDisplay.css'

const DefaultProjectDisplay = () => {
    const { defaultProjectPanel, currProject } = useStateContext();

    useEffect(()=>{
        if (currProject === null) return;
    },[currProject]);

    return (
        <div className='display-container text' style={{backgroundColor: 'var(--charcoal)'}}>
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
                    <div id='github' className='col-start-1'>
                        <Icon src={'/github.svg'} width={'100%'} height={'100%'}/>
                    </div>
                    <div id='linkedIn' className='col-start-2'>
                        <a href={defaultProjectPanel?.linkedIn}><Icon src={'/linkedin.svg'} width={'60%'} height={'60%'}/></a>
                    </div>
                    <div id='gmail' className='col-start-3'>
                        <a href={defaultProjectPanel?.email}><Icon src={'/email.svg'} width={'100%'} height={'100%'}/></a>
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default DefaultProjectDisplay