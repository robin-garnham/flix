import React from 'react';
import VideoCard from './VideoCard.component';
import './VideoList.css';

function VideoListComponent(props) {
  
    return (
        <div className="video-list-component">
            <h5>Most Recent</h5>
            <div className="video-list">
                {
                    props.videos.map(video => (
                        <VideoCard { ...video } key={video.id} watchVideo={ props.watchVideo } />
                    ))
                }
            </div>
        </div>
    );
}

export default VideoListComponent;