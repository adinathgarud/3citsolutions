import React from 'react';
import PowerImg from '../../../../assets/close-up-view-of-internet-equipment-and-cables-in-2023-11-27-05-09-23-utc-scaled.jpg';
import './PowerSolutions.css';
import pdu from '../../../../assets/datacenter_computer_services.png';
import ups from '../../../../assets/datacenter_services1.png';
import battery from '../../../../assets/datacenter_networking_services.png';
const PowerSolutions = () => {
  return (
    <>
      <div className="power-solution-container">
        <div className="power-content">
          <h1>Power Solution</h1>
        </div>
      </div>

      <div className="power-background-contain">
        <div className="power-text-contain">
          <p className="power-sub-heading"># Advanced Power Solutions</p>
          <h1>Power Solution</h1>
          <p className="power-description">
            Power solutions encompass a variety of technologies and devices designed to manage and provide electrical power in different contexts. 
            These solutions are essential for ensuring a stable and reliable power supply for various applications.
            Here are some key components and aspects of power solutions:
          </p>
        </div>
        <div className="power-background-contain-img">
          <img src={PowerImg} alt="Power Solution" />
        </div>
      </div>

      <div className="power-card-solutions">
        <h1>Power Solution </h1>
        <div className="power-solutions-container">
          <div className="power-solution-card">
            <img src={ups} alt="UPS Icon" />
            <h2>Uninterruptible Power Supply (UPS)</h2>
            <p>These devices provide a temporary power source during electrical outages, allowing connected equipment to operate seamlessly or be shut down properly.</p>
          </div>
          <div className="power-solution-card">
            <img src={pdu} alt="PDU Icon" />
            <h2>Power Distribution Units (PDUs)</h2>
            <p>Devices that distribute electric power to multiple devices, often used in data centers and server rooms.</p>
          </div>
          <div className="power-solution-card">
            <img src={battery} alt="Battery Icon" />
            <h2>Batteries</h2>
            <p>Rechargeable Batteries: Used in UPS systems and other backup power solutions. Energy Storage Systems (ESS): Store energy for later use, often used in conjunction with renewable energy sources.</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default PowerSolutions;
