import React, { useState, useEffect } from 'react';
import DataProvider from '../../Services/DataProvider';
import VideoCard from './VideoCard.component';
import './VideoList.css';

function VideoListComponent() {

    const [videos, setVideos] = useState([]);

    useEffect(() => {
        DataProvider.getVideos()
        .then(response => {

            if(response.data) {
                setVideos(response.data);
            }
        });
    }, []);
  
    return (
        <div className="video-list-component">
            <h5>Most Recent</h5>
            <div className="video-list">
                {
                    videos.map(video => (
                        <VideoCard { ...video } key={video.id} />
                    ))
                }
            </div>
        </div>
    );
}

export default VideoListComponent;