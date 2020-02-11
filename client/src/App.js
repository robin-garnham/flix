import React from 'react';
import VideoListComponent from './Components/VideoList/VideoList.component';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="app-header">
        <img src="images/logo.png" className="site-logo" alt="Site Logo" />
        <button className="add-video"></button>
        {/* <div className="grey-bar"></div> */}
      </header>
      <div className="splash-image"></div>
      <VideoListComponent />
    </div>
  );
}

export default App;
