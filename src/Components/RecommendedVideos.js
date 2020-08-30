import React from 'react';
import './RecommendedVideos.css';
import VideoCard from './VideoCard';

const RecommendedVideos = () => {
  return (
    <div className='recommendedVideos'>
      <h2>Recommended</h2>
      <div className='recommendedVideos__videos'>
        <VideoCard
          title='Become a Web Developer in 10 minutes | 2019/2020'
          views='875 views'
          timestamp='3 days ago'
          channelImage='https://yt3.ggpht.com/a/AATXAJy5xCV9uU9I5fWNih0v43nwyved5bm9x2a-o8j95oc=s176-c-k-c0x00ffffff-no-rj-mo'
          channel='Sonny Sangha'
          image='https://youtubebannertemplates.com/wp-content/uploads/2019/12/YouTube-Thumbnail-Size-2020.jpg'
        />
        <VideoCard
          title='Become a Web Developer in 10 minutes | 2019/2020'
          views='875 views'
          timestamp='3 days ago'
          channelImage='https://yt3.ggpht.com/a/AATXAJy5xCV9uU9I5fWNih0v43nwyved5bm9x2a-o8j95oc=s176-c-k-c0x00ffffff-no-rj-mo'
          channel='Sonny Sangha'
          image='https://youtubebannertemplates.com/wp-content/uploads/2019/12/YouTube-Thumbnail-Size-2020.jpg'
        />
        <VideoCard
          title='Become a Web Developer in 10 minutes | 2019/2020'
          views='875 views'
          timestamp='3 days ago'
          channelImage='https://yt3.ggpht.com/a/AATXAJy5xCV9uU9I5fWNih0v43nwyved5bm9x2a-o8j95oc=s176-c-k-c0x00ffffff-no-rj-mo'
          channel='Sonny Sangha'
          image='https://youtubebannertemplates.com/wp-content/uploads/2019/12/YouTube-Thumbnail-Size-2020.jpg'
        />
      </div>
    </div>
  );
};

export default RecommendedVideos;
