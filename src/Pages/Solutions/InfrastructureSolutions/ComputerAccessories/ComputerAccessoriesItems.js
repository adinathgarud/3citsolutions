import React from 'react'
import './ComputerAccessoriesItems.css';
const ComputerAccessoriesItems = () => {
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
        <div className="Computer-container">
          <div className="Computer-column">
            <ul>
              {itemsLeft.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
          <div className="Computer-column">
            <ul>
              {itemsRight.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      );
}

export default ComputerAccessoriesItems
