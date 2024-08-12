import React from 'react'
import backgroundImage from '../../../../assets/fms_end_user_device.png';
import './FMSSolutions.css';
const FMSSolutions = () => {
  return (
    <>
    <div className="FMS-Service">
      <div className="FMS-content">
        <h1>FMS Solution</h1>
      </div>
    </div>
     
      
      <div className="FMS-Service-container">
      <div className="FMS-text-content">
          <h2>End User Device</h2>
          <p>
          Our IT facility management services take a load off Clients non-core activities, allowing Client to focus on his  work. Every business organisation will have IT tasks that need to be managed on a regular basis.These tasks may require hardware and other resources that are currently unavailable in the organisation. 
          3C IT Solutions, as their trusted managed services provider (MSP serves as a complete IT team or supports your IT team by sharing the responsibility to execute some of the tasks. We provide both generalised and specific services. 
          We offer different levels of service or even customised packages. Problems in critical IT functions can give rise to unforeseen challenges for the Client’s business. We provide IT infrastructure monitoring, software configuration and updates, resource usage optimisation, user support and overall improvement of customers' IT infrastructure and its elements. 
          We structure our IT services to give you as much support as you need by seamlessly integrating with your IT team as needed
          Our offering.
          </p>
          <li>Onsite support</li>
          <li>Offsite support</li>
        </div>
        <div className="FMS-image-content">
          <img src={backgroundImage} alt="FMS Solution" />
      </div>
  </div>

  </>
  )
}

export default FMSSolutions
