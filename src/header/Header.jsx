import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import FlagIcon from '@mui/icons-material/Flag';
import SubscriptionsOutlinedIcon from '@mui/icons-material/SubscriptionsOutlined';
import StorefrontOutlinedIcon from '@mui/icons-material/StorefrontOutlined';
import SupervisedUserCircleRoundedIcon from '@mui/icons-material/SupervisedUserCircleRounded';
import { Avatar, IconButton } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import ForumIcon from '@mui/icons-material/Forum';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

function Header() {
      return (
        <div className='flex py-4 px-5 justify-between bg-white z-50 sticky top-0 shadow-[0px_5px_8px_-9px_rgba(0,0,0,0.75)]'>
          <div className="flex justify-evenly">
            <img src="https://1000logos.net/wp-content/uploads/2021/04/Facebook-logo.png" alt="" className='h-10' />
            <div className="flex items-center bg-[#EFF2F5] pl-2.5 rounded-[33px] ">
              <SearchIcon />
              <input type="text" placeholder='Search Facebook' className='bg-transparent outline-0 focus:outline-0'/>
            </div>
          </div>
          <div className="flex justify-center flex-1">
            <div className="header__option header__option--active">
              <HomeIcon fontSize="large" />
            </div>
            <div className="header__option">
              <FlagIcon fontSize="large" />
            </div>
            <div className="header__option">
              <SubscriptionsOutlinedIcon fontSize="large" />
            </div>
            <div className="header__option">
              <StorefrontOutlinedIcon fontSize="large" />
            </div>
            <div className="header__option">
              <SupervisedUserCircleRoundedIcon fontSize="large" />
            </div>
          </div>
          <div className="flex">
            <div className="flex items-center">
              <Avatar />
              <h4 className='pl-2.5 font-medium'>Olu Mide</h4>
            </div>
            <IconButton>
              <AddIcon/>
            </IconButton>
            <IconButton>
              <ForumIcon/>
            </IconButton>
            <IconButton>
              <NotificationsActiveIcon/>
            </IconButton>
            <IconButton>
              <ExpandMoreIcon/>
            </IconButton>
          </div>
        </div>
      )
  }

  export default Header
