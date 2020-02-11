import Dropzone from 'react-dropzone-uploader'
import 'react-dropzone-uploader/dist/styles.css'
import React from 'react';
import DataProvider from '../../Services/DataProvider';
import './VideoUpload.css';

function VideoUploadComponent(props) {
    
    const getUploadParams = ({ meta }) => { 
        return { url: DataProvider.getUploadEndpoint() } 
    }

    return (
        <div className="video-upload"> 
            <h3>Upload Video</h3>
            <Dropzone
                getUploadParams={getUploadParams}
                onSubmit={props.hideModal}
                accept="video/*"
             />
             <button onClick={props.hideModal}>Cancel</button>
        </div>
    );
}

export default VideoUploadComponent;