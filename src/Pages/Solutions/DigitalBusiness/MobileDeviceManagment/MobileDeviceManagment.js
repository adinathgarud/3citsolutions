import React from 'react';
import './MobileDeviceManagment.css';
import MobileDeviceBackImg from '../../../../assets/Add-a-subheading-11.png';
import screenshot1 from '../../../../assets/business-couple-with-computer-2023-11-27-05-37-11-utc-scaled.jpg';

const MobileDeviceManagment = () => {
  return (
    <>
      <div className="mdm-solutions">
        <div className="mdm-content">
          <h2>#3CIT MDM Solutions</h2>
          <h1>Safeguarding Mobility, Enhancing Productivity</h1>
        </div>
      </div>
     
      <div className="mdm-solution-container">
        <div className="mdm-text-content">
          <h2>Mobile Device Management</h2>
          <p>
            Mobile device management (MDM) is an industry term for the administration of mobile devices, 
            such as smartphones, tablet computers, laptops and desktop computers. MDM is usually implemented 
            with the use of a third-party product that has management features for particular vendors of 
            mobile devices.
          </p>
          <ul>
            <li>Unified console that meets all device management needs.</li>
            <li>Leverage built-in OS capabilities for a zero-touch enrolment experience.</li>
            <li>Configure device settings and functions based on automatically assigned groups or departments.</li>
            <li>Configure alerts, schedule custom reports, and troubleshoot devices without user intervention.</li>
            <li>Deprovision devices manually or when preset conditions are met.</li>
          </ul>
        </div>
        <div className="mdm-image-content">
          <img src={MobileDeviceBackImg} alt="MDM Solution" />
        </div>
      </div>

      <div className="app-screenshots-container">
        <h2>App <span>ScreenShots</span></h2>
        <p>At 3CIT, we understand the critical role mobile devices play in modern business.</p>
        <div className="screenshots">
          <img src={screenshot1} alt="Screenshot 1" />
        </div>
      </div>
    </>
  );
}

export default MobileDeviceManagment;
