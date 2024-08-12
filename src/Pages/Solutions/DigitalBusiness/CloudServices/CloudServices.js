import React from 'react';
import './CloudServices.css'; // Import the CSS file for styling
import backgroundImage from '../../../../assets/Add-a-subheading-11.png'; // Replace with your actual image path

const CloudServices = () => {
  return (
    <>
      <div className="cloud-service">
        <div className="cloud-content">
          <h1>Cloud Services</h1>
        </div>
      </div>
      
      <div className="cloud-service-container">
        <div className="cloud-text-content">
          <h2>Cloud Services</h2>
          <p>
            Business productivity software refers to applications and tools designed to enhance efficiency,
            collaboration, and overall productivity within a business or organization. These software solutions are varied and cater to different aspects of business operations. 
            Here are some common types of business productivity software:
          </p>
        </div>
        <div className="cloud-image-content">
          <img src={backgroundImage} alt="Cloud Services" />
        </div>
      </div>

      <div className="cloud-services">
        <div className="service">
          <div className="icon">🌥️</div>
          <h3>Cloud Consulting</h3>
          <p>
            Our team of experts doesn't just understand the cloud; we speak its language and guide our clients through every stage of cloud adoption. Our consultants are trusted advisors for Cloud clients. We blend technical prowess with business acumen to tailor cloud strategies that align with customer goals.
          </p>
        </div>
        <div className="service">
          <div className="icon">🏅</div>
          <h3>Cloud Implementation</h3>
          <p>
            Our cloud implementation services are not just about deploying solutions; they're about executing with precision. We turn customers' cloud blueprints into a reality – ensuring every component integrates seamlessly, deploying robust security measures, optimizing their cloud infrastructure.
          </p>
        </div>
        <div className="service">
          <div className="icon">📋</div>
          <h3>Cloud Managed Services</h3>
          <p>
            Reliability is not optional – it's mandatory. Our cloud management services go beyond traditional support. We ensure that Client cloud environment operates at peak performance around the clock. From proactive monitoring to performance tuning to security management to real-time issue resolution.
          </p>
        </div>
        <div className="service">
          <div className="icon">🔒</div>
          <h3>Cloud DevOps</h3>
          <p>
            3C IT Solution is empanelled with all leading cloud partners in the industry with their support DevOps is a philosophy ingrained in our DNA. Our DevOps services are the engine that propels your development and operations into seamless collaboration.We ensure automated workflows, collaborative development, rapid deployments, and continuous improvement as an everyday practice.
         </p>
        </div>
      </div>

      <header className="cloud-header">
        <div className="cloud-overlay">
          <div className="cloud-header-content">
            <div className="logo">3CIT Solutions</div>
            <h1>Soar High with Innovative Cloud Solutions.</h1>
          </div>
        </div>
      </header>
    </>
  );
}

export default CloudServices;
