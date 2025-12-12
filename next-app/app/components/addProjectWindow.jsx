'use client'
import {useState, useEffect, useRef} from 'react'
import TechStackIcon from './techStackIcon.jsx'
import '../css/projectWindow.css'
import '../css/globals.css'
import { Work_Sans } from 'next/font/google'
import { useRefContext } from '../contexts/refContext.jsx'
import { useStateContext } from '../contexts/stateContext.jsx'
import { useUIContext } from '../contexts/uiContext.jsx'


const font = Work_Sans({
        subsets: ['latin'],
        fallback: ["system-ui", "Arial", "sans-serif"],
    });

const AddProjectWindow = () => {
    const { techIcons, currProject, setCurrProject } = useStateContext();
    const { projectWindowOpen, toggleProjectWindow } = useUIContext();
    const { socketRef } = useRefContext();
    const tempProject = useRef(null);
    const [nameText, setName] = useState('');
    const [colorText, setColor] = useState('');
    const [imageText, setImage] = useState('');
    const [githubText, setGithub] = useState('');
    const [linkText, setLink] = useState('');
    const [descriptionText, setDescription] = useState('');
    const [techSet, updateTechList] = useState(new Set());

    useEffect(() => {
        if (!projectWindowOpen && tempProject.current != null) {
            setCurrProject(tempProject.current);
            tempProject.current = null;
        }
    },[projectWindowOpen]);

    const getProjectObject = () => {
        let preview = {
            name: nameText, 
            primary: colorText, 
            techStack: [...techSet], 
            image: imageText, 
            github: githubText, 
            link: linkText, 
            desc: descriptionText,
        };
        return preview;
    }

    const resetFields = () => {
        setName('');
        setColor('');
        setImage('');
        setGithub('');
        setLink('');
        setDescription('');
        updateTechList(new Set());
        toggleProjectWindow(false);
    }

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
        socketRef.current.emit('add-project', nameText, getProjectObject(), sessionStorage.getItem('admin-key'));
        resetFields();
    }

    const handleRemove = () => {
        socketRef.current.emit('remove-project', nameText, sessionStorage.getItem('admin-key'));
        resetFields();
    }

    const handlePreview = () => {
        tempProject.current = currProject;
        setCurrProject(getProjectObject());
    }

    return (
        <div id='project-window-container' className={`grid grid-rows-14 gap-2 ${font.className}`} style={{
            display: `${projectWindowOpen ? '' : 'none'}`,
            backgroundColor: 'var(--charcoal)',
        }}>
            <div className='grid grid-cols-[1fr_3fr] row-start-1'>
                <label className='col-start-1'>Project Name: </label> 
                <input className='col-start-2' type='text' value={nameText ?? ''} onChange={(e)=>setName(e.target.value)}/>
            </div>
            <div className='grid grid-cols-[1fr_3fr] row-start-2'>
                <label className='col-start-1'>Primary Color: </label>
                <input className='col-start-2' type='text' value={colorText ?? ''} onChange={(e)=>setColor(e.target.value)}/>
            </div>
            <div className='grid grid-cols-[1fr_5fr] row-start-3'>
                <label className='col-start-1'>Image: </label>
                <input className='col-start-2' type='text' value={imageText ?? ''} onChange={(e)=>setImage(e.target.value)}/>
            </div>
            <div className='grid grid-cols-[1fr_5fr] row-start-4'>
                <label className='col-start-1'>Github: </label> 
                <input className='col-start-2' type='text' value={githubText ?? ''} onChange={(e)=>setGithub(e.target.value)}/>
            </div>
            <div className='grid grid-cols-[1fr_5fr] row-start-5'>
                <label className='col-start-1'>Link: </label>
                <input className='col-start-2' type='text' value={linkText ?? ''} onChange={(e)=>setLink(e.target.value)}/>
            </div>
            <div className='grid grid-cols-[1fr_4fr] row-start-6 row-span-3'>
                <label className='col-start-1' id='description-label'>Description: </label>
                <textarea className='col-start-2' id='description-area' name='description' rows='5' type='text' value={descriptionText ?? ''} onChange={(e)=>setDescription(e.target.value)}/>
            </div>
            <div id='tech-container' className='row-start-9 row-span-4'>
                {Array.from(techIcons).map((entry, index)=>{
                    return <div className={`tech-icon ${techSet.has(entry[0]) ? 'selected' : ''}`} 
                                key={index} style={{height: '40%', aspectRatio: '1 / 1'}}
                                onClick={(e)=>handleIconClick(entry[0])}
                            >
                        <TechStackIcon label={entry[0]} src={entry[1]} sizePercent={'90'}/>
                    </div>
                })}
            </div>
            <div className='button-container grid grid-cols-3 row-span-2'>
                <div className='button col-start-1' style={{backgroundColor: 'var(--mint)'}} onClick={handleAdd}>Confirm</div>
                <div className='button col-start-2' style={{backgroundColor: 'var(--slate-light)'}} onClick={handlePreview}>Preview</div>
                <div className='button col-start-3' style={{backgroundColor: 'red'}} onClick={handleRemove}>Remove</div>
            </div>
        </div>
    )
}

export default AddProjectWindow;