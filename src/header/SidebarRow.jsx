import { Avatar } from '@mui/material'
import React from 'react'

function SidebarRow({src, Icon, title}) {
    return (
            <div className='sidebar-row flex items-center p-2.5 cursor-pointer hover:bg-[#d3d3d3] hover:rounded-[10px]'>
                {src && <Avatar src={src} />}
                {Icon && <Icon />}

                <h4 className='ml-5 font-semibold'>{title}</h4>
            </div>
    )
}

export default SidebarRow
