import React from 'react';
import computerImage from '../../../../assets/close-up-view-of-internet-equipment-and-cables-in-2023-11-27-05-09-23-utc-scaled.jpg';
import './ComputerAccessories.css';

const ComputerAccessories = () => {
  const itemsLeft = [
    "Keyboards",
    "Mice",
    "External Hard Drives",
    "USB Flash Drives",
    "Monitors",
    "Biometric Devices",
    "Uninterruptible Power Supply (UPS)",
    "Webcams",
    "Document Cameras"
  ];

  const itemsRight = [
    "Headphones and Speakers",
    "Microphones",
    "Wi-Fi Adapters",
    "Ethernet Cables",
    "Webcam Covers",
    "HDMI Cables",
    "Cooling Pads",
    "External Fans",
    "Adapters"
  ];

  return (
    <>
      <div className="computer-accessories-container">
        <div className="computer-content">
          <h1>Computer Accessories</h1>
        </div>
      </div>

      <div className="computer-background-contain">
        <div className="computer-text-contain">
          <p className="computer-sub-heading"># Your Gateway to Innovative</p>
          <h1>Computer Accessories</h1>
          <p className="computer-description">
            Computer accessories are additional components or peripherals that enhance the functionality, usability, or aesthetics of a computer.
            These accessories can be essential for various tasks, from improving input methods to expanding storage capabilities. 
            Here are some common types of computer accessories:
          </p>
        </div>
        <div className="computer-background-contain-img">
          <img src={computerImage} alt="Computer Accessories" />
        </div>
      </div>

      <div className="computer-container">
        <div className="computer-column">
          <ul>
            {itemsLeft.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
        <div className="computer-column">
          <ul>
            {itemsRight.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

export default ComputerAccessories;
