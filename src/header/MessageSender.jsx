import { Avatar } from '@mui/material'
import VideocamIcon from '@mui/icons-material/Videocam';
import PhotoLibraryIcon from '@mui/icons-material/PhotoLibrary';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import React from 'react'
import { useState } from 'react';

function MessageSender() {
    const [input, setInput] = useState('')
    const [imageUrl, setImageUrl] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()

        setInput('')
        setImageUrl('')
    }

    return (
        <div className='flex mt-[30px] flex-col bg-white rounded-[15px] shadow-7xl w-full'>
            <div className='flex border border-light-grey p-[15px]'>
                <Avatar />
                <form className='flex-1 flex'>
                    <input 
                        className='sender-input flex-1'
                        value={input} 
                        onChange={(e) => setInput(e.target.value)}
                        type="text" 
                        placeholder="What's on your mind?" 
                    />
                    <input 
                        className='sender-input' 
                        value={imageUrl}
                        onChange={(e) => setImageUrl(e.target.value)}
                        type="text" 
                        placeholder='Image URL (Option)'
                    />
                    <button className='hidden' onClick={handleSubmit}>Hidden submit</button>
                </form>
            </div>
            <div className='flex justify-evenly'>
                <div className='p-5 flex items-center text-[gray] m-[5px] hover:bg-light-grey cursor-pointer hover:rounded-[20px]'>
                    <VideocamIcon className="text-red-500" />
                    <h3 className='text-[medium] ml-2.5 '>Live Video</h3>
                </div>
                <div className='p-5 flex items-center text-[gray] m-[5px] hover:bg-light-grey cursor-pointer hover:rounded-[20px]'>
                    <PhotoLibraryIcon className="text-green-500" />
                    <h3 className='text-[medium] ml-2.5 '>Photo/Video</h3>
                </div>
                <div className='p-5 flex items-center text-[gray] m-[5px] hover:bg-light-grey cursor-pointer hover:rounded-[20px]'>
                    <InsertEmoticonIcon className="text-orange-500" />
                    <h3 className='text-[medium] ml-2.5 '>Feeling/Activity</h3>
                </div>
            </div>
        </div>
    )
}

export default MessageSender
