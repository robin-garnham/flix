import React from 'react';
import DataProvider from '../../Services/DataProvider';
import './VideoPlayer.css';

function VideoPlayer(props) {

    const videoURL = DataProvider.getPlaybackEndpoint(props.videoID);
    return (
        <div className="video-upload"> 
            <h3>Watch Video</h3>
            <video width="100%" height="50%" controls autoPlay>
                <source src={videoURL} /> 
                Your browser does not support the video tag.
            </video>
             <button onClick={props.hideModal}>Close Window</button>
        </div>
    );
}

export default VideoPlayer;