'use client'
import {useState} from 'react'
import '../css/techWindow.css'
import '../css/globals.css'
import { Work_Sans } from 'next/font/google'
import { useStateContext } from '../contexts/stateContext.jsx'
import { useRefContext } from '../contexts/refContext.jsx'

const font = Work_Sans({
        subsets: ['latin'],
        fallback: ["system-ui", "Arial", "sans-serif"],
    });

const AddTechWindow = () => {
    const { techWindowOpen } = useStateContext();
    const { socketRef } = useRefContext();
    const [keyText, updateKeyText] = useState('');
    const [urlText, updateUrlText] = useState('');

    const handleAdd = () => {
        socketRef.current.emit('add-tech-icon', keyText, urlText);
        updateKeyText('');
        updateUrlText('');
    }

    const handleRemove = () => {
        socketRef.current.emit('remove-tech-icon', keyText);
        updateKeyText('');
        updateUrlText('');
    }

    return (
        <div id='window-container' className={font.className} style={{
            display: `${techWindowOpen ? '' : 'none'}`,
            backgroundColor: 'var(--slate)',
        }}>
            <div id='key-container'>
                <label htmlFor='key'>Enter Key: </label>
                <input id='key-input' name='key' type='text' value={keyText ?? ''} onChange={(e)=>updateKeyText(e.target.value)}/>
            </div>
            <div id='url-container'>
                <label htmlFor='url'>Enter Url: </label>
                <input id='url-input' name='url' type='text' value={urlText ?? ''} onChange={(e)=>updateUrlText(e.target.value)}/>
            </div>
            <div id='button-container'>
                <div className='submit-button' id='add-button' style={{backgroundColor: 'var(--mint)'}} onClick={handleAdd}>Add</div>
                <div className='submit-button'id='remove-button' style={{backgroundColor: 'red'}} onClick={handleRemove}>Remove</div>
            </div>
        </div>
    )
}

export default AddTechWindow;