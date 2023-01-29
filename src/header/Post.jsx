import { Avatar } from '@mui/material'
import React from 'react'
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ChatBubbleOutlinedIcon from '@mui/icons-material/ChatBubbleOutlined';
import NearMeIcon from '@mui/icons-material/NearMe';
import ExpandMoreOutlinedIcon from '@mui/icons-material/ExpandMoreOutlined';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';


function Post({profilePic, image, username, timestamp, message}) {
    return (
        <div className='w-full mt-[15px] rounded-[15px] bg-white shadow-7xl'>
            <div className='flex relative items-center p-[15px]'>
                <Avatar src={profilePic} className="mr-2.5" />
                <div>
                    <h3 className='text-[medium]'>{username}</h3>
                    <p className='text-[small] text-[gray]'>Timestamp...</p>
                </div>
            </div>
            <div className='my-2.5 py-[15px] px-[25px]'>
                <p>{message}</p>
            </div>
            <div>
                <img src={image} alt=""  className='w-full'/>
            </div>
            <div className='flex items-center justify-evenly p-[5px] flex-1'>
                <div className='post__option'>
                    <ThumbUpIcon />
                    <p>Like</p>
                </div>
                <div className='post__option'>
                    <ChatBubbleOutlinedIcon />
                    <p>Comment</p>
                </div>
                <div className='post__option'>
                    <NearMeIcon />
                    <p>Share</p>
                </div>
                <div className='post__option'>
                    <AccountCircleIcon />
                    <ExpandMoreOutlinedIcon />
                </div>
            </div>
        </div>
    )
}

export default Post
