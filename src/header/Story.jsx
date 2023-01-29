import { Avatar } from '@mui/material'
import React from 'react'

function Story({image, profileSrc, title}) {
  return (
        <div className='relative bg-no-repeat bg-cover bg-center w-[120px] h-[200px] shadow-[0px_5px_17px_-7px_rgba(0,0,0,0.75)] rounded-[10px] mr-2.5 transition-all duration 100 cursor-pointer hover:scale-[1.07]' style={{backgroundImage: `url(${image})`}}>
            <Avatar className='m-2.5 border border-[5px] border-blue' src={profileSrc} />
            <h4 className='absolute bottom-5 left-5 text-white'>{title}</h4>
        </div>
    )
}

export default Story
