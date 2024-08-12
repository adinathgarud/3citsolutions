import React, { useState } from 'react';
import imageUrl from '../../../../assets/demo-startup-who-we-are-02.jpg';
import './ITSecuritySolution.css';

const ITSecuritySolution = () => {
  const [services] = useState([
    {
      icon: '💻',
      title: 'Device Configuration',
      description: 'Our team of experts can configure devices as per Customers corporate policies and security standards to ensure a secure and consistent end-user experience'
    },
    {
      icon: '📄',
      title: 'Device Deployment',
      description: 'We can efficiently deploy new devices from different makes for Client employees through a simplified process, which includes setting up user profiles, software installation and updates, and device activation.'
    },
    {
      icon: '👨‍💻',
      title: 'Remote Management',
      description: 'We provide 24/7 remote management support for all devices, which includes troubleshooting, software updates, performance monitoring, and security patching.'
    },
    {
      icon: '📱',
      title: 'Asset Tracking',
      description: 'We can track all devices in use by your employees, including laptops, smartphones, and tablets, allowing you to have a clear understanding of who has your hardware, ensuring optimal performance and reliability’s access to what information and when.'
    },
    {
      icon: '🔐',
      title: 'Data Protection',
      description: 'Our service includes data protection policies that ensure your company data remains secure on all end user devices. We take a proactive approach to prevent data breaches, including deploying high-quality antivirus and antimalware software'
    },
    {
      icon: '📊',
      title: 'Reporting and Analytics',
      description: 'We provide detailed reporting and analytics on device usage and performance data, allowing you to make informed decisions about device'
    },
  ]);

  return (
    <>
      <div className="digital-immunity-container">
        <div className="digital-immunity-content">
          <h1>Ensuring Digital Immunity</h1>
        </div>
      </div>
      
      <div className="background-contain">
        <div className="text-contain">
          <p className="sub-heading"># Integrated Security Solutions</p>
          <h1>IT Security Solutions</h1>
          <p className="description">
            Information Technology (IT) security is the protection of the IT infrastructure against unauthorized access, theft, damage, or interference targeting hardware, software, or the confidential information stored within. Additionally,
            it shields against disruptions or deliberate misdirection of the services rendered by these systems. Our Company offers a wide array of backup and recovery services designed to safeguard client data from various potential hazards. These services offer protection against system failures, the impact of natural or human-induced disasters, inadvertent data erasures,
            or any unforeseen events that might be a threat to the integrity of data infrastructure or to the critical business operations.
          </p>
        </div>
        <div className="background-contain-img">
          <img src={imageUrl} alt="IT Security Solutions" />
        </div>
      </div>

      <div className="it-security-offered-container">
        <h1>IT Security Solutions <span className="highlight">Offered:</span></h1>
        <p className="description">
          At 3CIT Solutions, we are committed to staying ahead of emerging security challenges, offering proactive solutions to protect your organization's confidentiality, integrity, and availability.
        </p>

        <div className="services-container">
          {services.map((service, index) => (
            <div className="service-card" key={index}>
              <div className="icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ITSecuritySolution;
