import React, { useState } from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import VideoCallIcon from '@material-ui/icons/VideoCall';
import AppsIcon from '@material-ui/icons/Apps';
import NotificationsIcon from '@material-ui/icons/Notifications';
import Avatar from '@material-ui/core/Avatar';

const Header = () => {
  const [inputSearch, setInputSearch] = useState('');
  return (
    <div className='header'>
      <div className='header__left'>
        <MenuIcon />
        <Link to='/'>
          <img
            className='header__logo'
            src='https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Logo_of_YouTube_%282015-2017%29.svg/1920px-Logo_of_YouTube_%282015-2017%29.svg.png'
            alt=''
          />
        </Link>
      </div>

      <div className='header__input'>
        <input
          onChange={(e) => setInputSearch(e.target.value)}
          value={inputSearch}
          type='text'
          placeholder='Search'
        />
        <Link to={`/search/${inputSearch}`}>
          <SearchIcon className='header__inputButton' />
        </Link>
      </div>

      <div className='header__icons'>
        <VideoCallIcon className='header__icon' />
        <AppsIcon className='header__icon' />
        <NotificationsIcon className='header__icon' />
        <Avatar src='https://pickaface.net/gallery/avatar/unr_fakeeliot_181127_1929_w34iu.png' />
      </div>
    </div>
  );
};

export default Header;
