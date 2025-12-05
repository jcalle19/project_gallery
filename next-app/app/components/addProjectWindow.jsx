'use client'
import {useState} from 'react'
import TechStackIcon from './techStackIcon.jsx'
import '../css/projectWindow.css'
import '../css/globals.css'
import { Work_Sans } from 'next/font/google'
import { useStateContext } from '../contexts/stateContext.jsx'
import { useRefContext } from '../contexts/refContext.jsx'

const font = Work_Sans({
        subsets: ['latin'],
        fallback: ["system-ui", "Arial", "sans-serif"],
    });

const AddProjectWindow = () => {
    const { projectWindowOpen, techIcons } = useStateContext();
    const { socketRef } = useRefContext();
    const [nameText, setName] = useState('');
    const [colorText, setColor] = useState('');
    const [imageText, setImage] = useState('');
    const [githubText, setGithub] = useState('');
    const [linkText, setLink] = useState('');
    const [descriptionText, setDescription] = useState('');
    const [techSet, updateTechList] = useState(new Set());

    const handleIconClick = (key) => {
        updateTechList(prev => {
        const next = new Set(prev);
        if (next.has(key)) {
            next.delete(key);
        } else {
            next.add(key);
        }
        return next;
        });
    }

    const handleAdd = () => {
    }

    const handleRemove = () => {
    }

    return (
        <div id='window-container' className={`grid grid-rows-15 ${font.className}`} style={{
            display: `${projectWindowOpen ? '' : 'none'}`,
            backgroundColor: 'var(--charcoal)',
        }}>
            <label className='row-start-1'>Project Name: 
                <input type='text' value={nameText ?? ''} onChange={(e)=>setName(e.target.value)}/>
            </label>
            <label className='row-start-2'>Primary Color: 
                <input type='text' value={colorText ?? ''} onChange={(e)=>setColor(e.target.value)}/>
            </label>
            <label className='row-start-3'>Image: 
                <input type='text' value={imageText ?? ''} onChange={(e)=>setImage(e.target.value)}/>
            </label>
            <label className='row-start-4'>Github: 
                <input type='text' value={githubText ?? ''} onChange={(e)=>setGithub(e.target.value)}/>
            </label>
            <label className='row-start-5'>Link: 
                <input type='text' value={linkText ?? ''} onChange={(e)=>setLink(e.target.value)}/>
            </label>
            <div className='row-start-6 row-span-3'>
                <label id='description-label' htmlFor='description'>Description: </label>
                <textarea id='description-area' name='description' rows='5' type='text' value={descriptionText ?? ''} onChange={(e)=>setDescription(e.target.value)}/>
            </div>
            <div id='tech-container' className='row-start-9 row-span-4'>
                {Array.from(techIcons).map((entry, index)=>{
                    return <div className={`tech-icon ${techSet.has(entry[0]) ? 'selected' : ''}`} 
                                key={index} style={{height: '40%', aspectRatio: '1 / 1'}}
                                onClick={(e)=>handleIconClick(entry[0])}
                            >
                        <TechStackIcon src={entry[1]} sizePercent={'90'}/>
                    </div>
                })}
            </div>
            
        </div>
    )
}

export default AddProjectWindow;