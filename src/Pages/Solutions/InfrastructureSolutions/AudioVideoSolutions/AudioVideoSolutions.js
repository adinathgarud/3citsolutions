import React from 'react';
import './AudioVideoSolutions.css';
import AudioVideoImg from '../../../../assets/diverse-team-of-colleagues-using-video-conference-2023-11-27-05-29-09-utc-scaled.jpg';

const AudioVideoSolutions = () => {
  const AudioItemsLeft = [
    "Video Displays",
    "Audio Systems",
    "Streaming and Media Players",
    "Video Conferencing Solutions",
    "Digital Signage",
  ];

  const AudioItemsRight = [
    "Home Automation Systems",
    "Professional Audio-Video Systems",
    "Interactive Displays",
    "Cabling and Connectivity",
    "Security and Surveillance Systems",
  ];

  return (
    <>
      <div className="audio-video-solution-container">
        <div className="audio-content">
          <h1>Audio Video Solutions</h1>
        </div>
      </div>

      <div className="audio-background-contain">
        <div className="audio-text-contain">
          <p className="audio-sub-heading"># 3CIT's Audio Video solutions</p>
          <h1>Audio Video Solutions</h1>
          <p className="audio-description">
            Audio-video solutions encompass a broad range of technologies and equipment designed to capture, process, transmit, and display audio and video content. 
            These solutions are used in various settings, including homes, businesses, educational institutions, entertainment venues, and more.
            Here are some common components and aspects of audio-video solutions: 
          </p>
        </div>
        <div className="audio-background-contain-img">
          <img src={AudioVideoImg} alt="Audio Video Solutions" />
        </div>
      </div>

      <div className="audio-container">
        <div className="audio-column">
          <ul>
            {AudioItemsLeft.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
        <div className="audio-column">
          <ul>
            {AudioItemsRight.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

export default AudioVideoSolutions;
