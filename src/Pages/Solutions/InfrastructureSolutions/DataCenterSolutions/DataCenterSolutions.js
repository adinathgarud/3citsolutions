import React from 'react';
import './DataCenterSolutions.css';
import DataCenter from '../../../../assets/distance-online-lecture-side-view-of-a-mixed-race-2023-11-27-05-11-45-utc-scaled.jpg';
import DataStorage from '../../../../assets/data-center-storage.png';
import DataComputer from '../../../../assets/data-center-computer.png';
import DataNetworking from '../../../../assets/data-center-network.png';
import Dataconnectivity from '../../../../assets/data-center-connectivity.png'
import Datacost from '../../../../assets/data-center-cost.png'
import Datasecurity from '../../../../assets/data-center-security.png'


const DataCenterSolutions = () => {
  return (
    <div>
      <div className="datacenter-container">
        <h2>Data Center Solution</h2>
      </div>

      <div className="datacenter-contain">
        <h1>Data Center <span>Management</span></h1>
        <div className="datacenter-content">
          <div className="text">
            <p>Our Company has a wide range of service offerings across the data center management portfolio comprising server management and cloud support. Our solutions for data center infrastructure management help in reducing total cost of ownership and enhance operational quality. We specialize in offering comprehensive services encompassing network consulting, infrastructure audit, compliance assessments, data center management, and integrated solutions for business, technology, and processes.</p>
            <p>We provide the components required for Data centers and further provide integration facilities streamlining of power backup, networking, and primary secondary backup, (server storage connectivity) for the clients.</p>
          </div>
          <div className="datacenter-image">
            <img src= {DataCenter} alt="Data Center" />
          </div>
        </div>
      </div>
    <div className="datacenter-services-main">
      <div className="datacenter-cont">
        <h1>Key <span>Services</span></h1>
        <p className="datacenter-description">
          These solutions encompass a comprehensive suite of services,<br/> infrastructure, and support to ensure the seamless operation of critical IT<br/> environments.
        </p>
        <div className="datacenter-services">
          <div className="datacenter-service-item">
            <img src={DataStorage} alt="Storage Icon" />
            <h2>Storage</h2>
            <p>Important company data is typically kept in a data center on media ranging from tape to solid-state discs, with several backups.</p>
          </div>
          <div className="datacenter-service-item">
            <img src={DataComputer} alt="Computer Icon" />
            <h2>Computer</h2>
            <p>High-end servers provide memory and processing power to run applications.</p>
          </div>
          <div className="datacenter-service-item">
            <img src={DataNetworking} alt="Network Icon" />
            <h2>Network</h2>
            <p>Interconnections between data center components and the outside world, such as routers, switches, application-delivery controllers, and others.</p>
          </div>
        </div>
      </div>

      <div className="datacenter-key-con">
        <h1>Key <span>Features</span></h1>
        
        <div className="datacenter-features">
          <div className="datacenter-feature-item">
            <img src={Dataconnectivity} alt="Connectivity Icon" />
            <h2>Connectivity and Smart Automation</h2>
            <p>Prioritize workloads and automate with smart data center in-a-box solutions for multiple connected locations, technologies, and applications, across India.</p>
          </div>
          <div className="datacenter-feature-item">
            <img src={Datacost} alt="Cost Optimization Icon" />
            <h2>Cost Optimization</h2>
            <p>Whether an organization prefers an on-premise, cloud-based, or hybrid solution, we help them find the perfect balance to ensure the most cost-effective data center operations for their business.</p>
          </div>
          <div className="datacenter-feature-item">
            <img src={Datasecurity} alt="Security Icon" />
            <h2>Security</h2>
            <p>In a rapidly evolving threat landscape, we prioritize data security with a robust policy and compliance-based approach. Our services include state-of-the-art firewalls, encryption, and intrusion prevention systems to safeguard critical data.</p>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
}

export default DataCenterSolutions;
