import Dropzone from 'react-dropzone-uploader'
import 'react-dropzone-uploader/dist/styles.css'
import React from 'react';
import DataProvider from '../../Services/DataProvider';
import './VideoUpload.css';

function VideoUploadComponent(props) {
    
    const getUploadParams = ({ meta }) => { 
        return { url: DataProvider.getUploadEndpoint() } 
    }

    const handleChangeStatus = ({ meta, file }, status) => { 
        console.log(status, meta, file) 
    };

    const handleSubmit = (files) => { 
        console.log(files.map(f => f.meta)) 
    };

    return (
        <div className="video-upload"> 
            <h3>Upload Video</h3>
            <Dropzone
                getUploadParams={getUploadParams}
                onChangeStatus={handleChangeStatus}
                onSubmit={handleSubmit}
                accept="video/*"
             />
             <button onClick={props.hideModal}>Close Window</button>
        </div>
    );
}

export default VideoUploadComponent;