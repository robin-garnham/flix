import React, { useState, useEffect } from 'react';
import DataProvider from './Services/DataProvider';
import VideoListComponent from './Components/VideoList/VideoList.component';
import VideoPlayerModal from './Components/VideoPlayer/VideoPlayer.component';
import VideoUploadModal from './Components/VideoUpload/VideoUpload.component';
import './App.css';

function App() {

  const [showUploadModal, setShowUploadModal] = useState(false);
  const [showPlaybackModal, setShowPlaybackModal] = useState(false);
  const [videos, setVideos] = useState([]);

  const openUploadModal = () => {
    setShowUploadModal(true);
  };

  const hideUploadModal = () => {
    setShowUploadModal(false);
    fetchVideoList()
  };

  const openPlaybackModal = (videoID) => {
    setShowPlaybackModal(videoID);
  };

  const hidePlaybackModal = () => {
    setShowPlaybackModal(false);
  };

  const fetchVideoList = () => {
      DataProvider.getVideos()
      .then(response => {
          if(response.data) {
              setVideos(response.data);
          }
      });
  }

  useEffect(() => {
    fetchVideoList();
  }, []);

  return (
    <div className="App">
      {
        !showUploadModal && !showPlaybackModal &&
        <div>
          <header className="app-header">
            <img src="images/logo.png" className="site-logo" alt="Site Logo" />
            <button className="add-video" onClick={openUploadModal}></button>
            {/* <div className="grey-bar"></div> */}
          </header>
          <div className="splash-image"></div>
          <VideoListComponent watchVideo={openPlaybackModal} videos={videos} />
        </div>
      }
      {
        showUploadModal && 
          <VideoUploadModal hideModal={hideUploadModal} />
      }
      {
        showPlaybackModal && 
          <VideoPlayerModal hideModal={hidePlaybackModal} videoID={showPlaybackModal} />
      }
    </div>
  );
}

export default App;
