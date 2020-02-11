import React from 'react';

function VideoCardComponent(props) {
    
    return (
        <div className="video-card-component" onClick={ () => props.watchVideo(props.file) }> 
            <div className="image-preview"></div>
            <div className="image-duration">{ props.duration }</div>
            <div className="video-information">
                <img className="author-profile-image" src="images/profile-icon.png" alt={ props.authorName } />
                <div>
                    <p className="video-name">{ props.videoName }</p>
                    <p className="video-author">{ props.authorName }</p>
                    <p className="uploaded-at">{ props.timeAgo }</p>
                </div>
            </div>
        </div>
    );
}

export default VideoCardComponent;