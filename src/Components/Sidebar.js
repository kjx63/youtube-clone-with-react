import React from 'react';

import HomeIcon from '@material-ui/icons/Home';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import HistoryIcon from '@material-ui/icons/History';
import OndemandVideoIcon from '@material-ui/icons/OndemandVideo';
import WatchLaterIcon from '@material-ui/icons/WatchLater';
import ThumbUpAltOutlinedIcon from '@material-ui/icons/ThumbUpAltOutlined';
import ExpandMoreOutlinedIcon from '@material-ui/icons/ExpandMoreOutlined';

import SidebarRow from './SidebarRow';
import './Sidebar.css';

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <SidebarRow selected Icon={HomeIcon} title='Home' />
      <SidebarRow Icon={WhatshotIcon} title='Subscription' />
      <SidebarRow Icon={SubscriptionsIcon} title='Trending' />
      <hr />
      <SidebarRow Icon={HistoryIcon} title='History' />
      <SidebarRow Icon={OndemandVideoIcon} title='Your Videos' />
      <SidebarRow Icon={WatchLaterIcon} title='Watch Later' />
      <SidebarRow Icon={ThumbUpAltOutlinedIcon} title='Liked Videos' />
      <SidebarRow Icon={ExpandMoreOutlinedIcon} title='Show more' />
    </div>
  );
};

export default Sidebar;
