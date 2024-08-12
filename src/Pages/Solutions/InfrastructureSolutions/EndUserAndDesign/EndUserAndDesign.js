import React from 'react';
import './EndUserAndDesign.css';
//import illustration from '../../../../assets/Add-a-subheading-3 (1).png';
import endUserImage from '../../../../assets/N1-0319-End-User-Management.webp';
import lenovoLogo from '../../../../assets/lenovo_logo.png';
import acerLogo from '../../../../assets/acer_logo.png';

const EndUserAndDesign = () => {
  return (
    <div>
      <div className="enduser-container">
        <div className="enduser-content">
        
          <h1>Rethinking Your End User<br/> Device Strategy</h1>
        </div>
      </div>
      
      <div className="enduser-contain">
        
        <div className="text-content">
          <h1>End User & Devices</h1>
          <p>
            End user device management Service is targeted to reduce the total cost of
            ownership of user devices, increasing security, standardization level and
            accessibility through the introduction of an integrated management approach.
            The service consists of few phases:
          </p>
          <ul>
            <li>Analysis</li>
            <li>Planning</li>
            <li>Implementation</li>
            <li>Operational support</li>
          </ul>
        </div>
        <div className="enduser-image-content">
          <img src={endUserImage} alt="End User Device Management" />
        </div>
      
      </div>
      
      <div className="enduser-card-cont">
        <div className="enduser-card">
          <div className="enduser-icon">📟</div>
          <h3>Device Configuration</h3>
          <p>
            Our team of experts can configure devices as per Customers corporate policies 
            and security standards to ensure a secure and consistent end-user experience.
          </p>
        </div>
        <div className="enduser-card">
          <div className="enduser-icon">🔍</div>
          <h3>Device Deployment</h3>
          <p>
            We can efficiently deploy new devices from different makes for Client employees 
            through a simplified process, which includes setting up user profiles, software 
            installation and updates, and device activation.
          </p>
        </div>
        <div className="enduser-card">
          <div className="enduser-icon">🖥️</div>
          <h3>Remote Management</h3>
          <p>
            We provide 24/7 remote management support for all devices, which includes 
            troubleshooting, software updates, performance monitoring, and security patching.
          </p>
        </div>
        <div className="enduser-card">
          <div className="enduser-icon">📡</div>
          <h3>Virtualization</h3>
          <p>
            Desktop Virtualization: Running desktop environments on servers and delivering them 
            to end-user devices over a network, allowing for centralized management and enhanced 
            security. Effective end-user computing involves aligning technology with the needs 
            of the workforce, ensuring a seamless and secure user experience, and providing the 
            necessary support for optimal productivity. The choice and management of devices are 
            critical elements in achieving these goals.
          </p>
        </div>
        <div className="enduser-card">
          <div className="enduser-icon">📊</div>
          <h3>Asset Tracking</h3>
          <p>
            We can track all devices in use by your employees, including laptop, smartphones, 
            and tablets, allowing you to have a clear understanding who has your hardware, 
            ensuring optimal performances and reliability access to what information and when.
          </p>
        </div>
        <div className="enduser-card">
          <div className="enduser-icon">🔒</div>
          <h3>Data Protection</h3>
          <p>
            Our service includes data protection policies that ensure your company data remains 
            secure on all end user devices. We take a proactive approach to prevent data breaches, 
            including deploying high-quality antivirus and antimalware software.
          </p>
        </div>
        <div className="enduser-card">
          <div className="enduser-icon">📈</div>
          <h3>Reporting and Analytics</h3>
          <p>
            We provide detailed reporting and analytics to device usage and performance data 
            allowing you to make informed decisions about device management.
          </p>
        </div>
      </div>
      
      <div className="enduser-partner-brand">
        <h2>Our Partner Brand</h2>
        <div className="enduser-logos">
          <img src={lenovoLogo} alt="Lenovo" />
          <img src={acerLogo} alt="Acer" />
        </div>
      </div>
    </div>
  );
};

export default EndUserAndDesign;
