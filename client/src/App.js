import React, { useState } from 'react';
import VideoListComponent from './Components/VideoList/VideoList.component';
import VideoUploadModal from './Components/VideoUpload/VideoUpload.component';
import './App.css';

function App() {

  const [showUploadModal, setShowUploadModal] = useState(false);

  const showModal = () => {
    setShowUploadModal(true);
  };

  const hideModal = () => {
    setShowUploadModal(false);
  };

  return (
    <div className="App">
      <header className="app-header">
        <img src="images/logo.png" className="site-logo" alt="Site Logo" />
        <button className="add-video" onClick={showModal}></button>
        {/* <div className="grey-bar"></div> */}
      </header>
      <div className="splash-image"></div>
      <VideoListComponent />
      {
        showUploadModal && 
          <VideoUploadModal hideModal={hideModal} />
      }
    </div>
  );
}

export default App;
