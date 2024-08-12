import React, { useState } from 'react';

import './Team.css'; // Assuming you have a CSS file for styling
import director1 from '../../assets/directors.jpg';
import playicon from '../../assets/play.png';
import YouTube from 'react-youtube';



const Team = () => {
  const [activeSection, setActiveSection] = useState('directors');

  const showSection = (sectionId) => {
    setActiveSection(sectionId);
  };

  
  const [isModalOpen, setModalOpen] = useState(false);

  const videoIdteam = "0jOtN38MTtk"; // Replace with your video ID
  const videoOptionsteam = {
    height: '100%',
    width: '100%',
    playerVars: {
      autoplay: 1,
    },
  };

  const handlePlayClick = () => {
    setModalOpen(true);
  };

  const handleCloseClick = () => {
    setModalOpen(false);
  };

  return (
    <>
    <div className="team-page">
      <div className="banner">
      
        <div className="overlay">
          <h1>Driving force behind 3CIT Solutions</h1>
        </div>
      </div>
      <div className="container">
        <div className="navigation">
          <button className="nav-button" onClick={() => showSection('directors')}>Directors</button>
          <button className="nav-button" onClick={() => showSection('senior-management')}>Senior Management</button>
        </div>
        <div id="directors" className={`content section ${activeSection === 'directors' ? 'active' : ''}`}>
          <h1>Directors</h1>
          <div className="profiles">
            <div className="profile">
              <img src={director1} alt="Director 1" />
              <h1>Mr.Ranjit Kulladhaja Mayengbam</h1>
              <p>Chairman & MD</p>
            </div>
            <div className="profile">
              <img src={director1} alt="Director 2" />
              <h1>Mrs.Gangarani Devi Mayengbam</h1>
              <p> Executive Director & CFO</p>
            </div>
            <div className="profile">
              <img src={director1} alt="Director 3" />
              <h1>Mr.Sujeet Dinanath Naik</h1>
              <p>Non-Executive Director</p>
            </div>
            <div className="profile">
              <img src={director1} alt="Director 4" />
              <h1>Mr.Dhirendra Sidh Nath Trivedi</h1>
              <p>Independent Director</p>
            </div>
            <div className="profile">
              <img src={director1} alt="Director 5" />
              <h1>Mr.Shailendra Ramesh Ganeshe</h1>
              <p>Independent Director</p>
            </div>
            <div className="profile">
              <img src={director1} alt="Director 6" />
              <h1>Mr.Pandurang Avinash Deokar</h1>
              <p>Independent Director</p>
            </div>
          </div>
        </div>
        <div id="senior-management" className={`content section ${activeSection === 'senior-management' ? 'active' : ''}`} style={{ display: activeSection === 'senior-management' ? 'block' : '' }}>
          <h1>Senior Management</h1>
          <div className="profiles">
            <div className="profile">
              <img src={director1} alt="Senior Director" />
              <p>Mr. Anil Bhat<br />Vice President Sales</p>
            </div>
            <div className="profile">
              <img src={director1} alt="Senior Director" />
              <p>Mr. Govind Sahu<br />General Manager Sales</p>
            </div>
            <div className="profile">
              <img src={director1} alt="Senior Director" />
              <p>Pakashana Thounaojam<br />Head of Human Resources</p>
            </div>
          </div>
        </div>
      </div>
      <div className="image-container">
        <div className="overlay">
        <div className="video-container">
      {!isModalOpen ? (
        <div className="play-icon-container" onClick={handlePlayClick}>
          <div className="team-play-icon"><img src={playicon} alt="play icon" /></div> {/* Unicode for play icon */}
        </div>
      ) : (
        <div className="video-modal">
          <button className="close-button" onClick={handleCloseClick}>&times;</button>
          <YouTube videoId={videoIdteam} opts={videoOptionsteam} />
        </div>
      )}
    </div>
      </div>
      </div>
      </div> 
    </>
  );
}

export default Team;
