import React, { useState } from 'react';
import './NetworkingSolutions.css';
import NetWork from '../../../../assets/close-up-view-of-internet-equipment-and-cables-in-2023-11-27-05-09-23-utc-scaled.jpg';

const NetworkingSolutions = () => {
  const [services] = useState([
    {
      icon: '💻',
      title: 'Open System',
      description: 'Denotes a system integrated into the network and configured for seamless communication.'
    },
    {
      icon: '📄',
      title: 'Close System',
      description: 'In direct contrast to an open system, it characterizes a system that lacks communicative accessibility within the network architecture.'
    },
    {
      icon: '👨‍💻',
      title: 'Computer Network',
      description: 'This refers to the interconnectedness of multiple hosts or devices, establishing links through various pathways primarily for the transmission and reception of data across media.'
    },
  ]);

  return (
    <>
      <div className="networking-solutions">
        <div className="networking-solutions-content">
          <div className="networking-solutions-networking-image"></div>
          <h1>Networking Solutions</h1>
        </div>
      </div>
    
      <div className="networking-solutions-background-contain">
        <div className="networking-solutions-text-contain">
          <p className="networking-solutions-sub-heading"># Amazing Future For</p>
          <h1>Networking Solutions</h1>
          <p className="networking-solutions-description">
            The network stands as the cornerstone for an organization's connected infrastructure to operate smoothly. However, for it to function without any hindrances, it requires support in the form of a well-designed network infrastructure. Our product line is designed to cater to these networking needs, comprising offerings such as cables, racks, servers, storage solutions, fibre optics, routers, switches, patch cords, and access points.
          </p>
        </div>
        <div className="networking-solutions-background-contain-img">
          <img src={NetWork} alt="networking-solutions-Network solution" />
        </div>
      </div>

      <div className="networking-solutions-types-of-Networking-container">
        <h1>Types of <span className="networking-solutions-highlight">Networking:</span></h1>
        <p className="networking-solutions-description">
          Our networking services encompass a wide array of solutions, including network design, implementation, security, and maintenance.
        </p>

        <div className="networking-solutions-NetworkingSolutionServicesCard-container">
          {services.map((service, index) => (
            <div className="networking-solutions-service-card" key={index}>
              <div className="networking-solutions-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default NetworkingSolutions;
