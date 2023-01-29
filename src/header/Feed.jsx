import React from 'react'
import MessageSender from './MessageSender'
import StoryReel from './StoryReel'
import Post from './Post'

function Feed() {
    return (
        <div className='flex-1 py-[30px] px-[150px] flex flex-col justify-center items-center '>
            <StoryReel />
            <MessageSender />
            <Post />
            <Post />
            <Post />
        </div>
    )
}

export default Feed
