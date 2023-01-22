import { Avatar } from '@mui/material'
import React from 'react'

function SidebarRow({src, Icon, title}) {
    return (
        <div>
            <div>
                {src && <Avatar src={src} />}
                {Icon && <Icon />}

                <h4>{title}</h4>
            </div>
        </div>
    )
}

export default SidebarRow
