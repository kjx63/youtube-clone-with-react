import React from 'react';
import './SearchPage.css';
import TuneIcon from '@material-ui/icons/Tune';
import ChannelRow from './ChannelRow';
import VideoRow from './VideoRow';

const SearchPage = () => {
  return (
    <div className='searchPage'>
      <div className='searchPage__filter'>
        <TuneIcon />
        <h2>FILTER</h2>
      </div>
      <hr />
      <ChannelRow
        image='https://kajabi-storefronts-production.global.ssl.fastly.net/kajabi-storefronts-production/themes/284832/settings_images/rLlCifhXRJiT0RoN2FjK_Logo_roundbackground_black.png'
        channel='Clever Programmer'
        verified
        subs='654K'
        noOfVideos={382}
        description='You can find awesome programming lessons here! Also, expect programming tips and tricks that will take your coding skills to the next level'
      />

      <hr />

      <VideoRow
        views='1.4M'
        subs='659K'
        description='Do you want a FREE one hour training ... check this out'
        timestamp='59 seconds ago'
        channel='Clever Programmer'
        title="🔴 Let's Build a Youtube Clone"
        image='https://i.ytimg.com/vi/NT299zIk2JY/maxresdefault.jpg'
      />
    </div>
  );
};

export default SearchPage;
