import React from 'react'
import itmanagedbackgroundImage from '../../../../assets/it-managed-service (1).png';

import './ITManagedServices.css';

const ITManagedServices = () => {
  return (
    <>
    <div className="IT-Service">
      <div className="IT-content">
        <h1>IT Managed Services</h1>
      </div>
    </div>
     
      
      <div className="IT-Service-container">
      <div className="IT-text-content">
          <h2>IT Managed Services</h2>
          <p>
          IT Managed Services involve outsourcing specific IT functions to a third-party service provider.
          This model is designed to enhance an organization’s IT operations' efficiency, security, and reliability while allowing them to focus on their core business activities.
          Managed services providers (MSPs) offer a range of services to meet the evolving needs of their clients. Here are key components and considerations related to IT Managed Services
          </p>
          
        </div>
        <div className="IT-image-content">
          <img src={itmanagedbackgroundImage} alt="It Managed Service" />
      </div>
  </div>


  <div className="services">
            <h2>Our <span className="highlight">Services</span></h2>
            <div className="services-list">
                <ul>
                    <li>Network and Infrastructure Management:</li>
                    <li>Remote IT Support:</li>
                    <li>Security Management:</li>
                    <li>Data Backup and Disaster Recovery:</li>
                    <li>Cloud Services Management:</li>
                </ul>
                <ul>
                    <li>IT Asset Management:</li>
                    <li>Monitoring and Reporting:</li>
                    <li>Regulatory Compliance:</li>
                    <li>Scalability and Flexibility:</li>
                    <li>Service Level Agreements (SLAs):</li>
                </ul>
            </div>
        </div>

  </>
  )
}

export default ITManagedServices
