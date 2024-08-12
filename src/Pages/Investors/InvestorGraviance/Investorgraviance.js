import React, { useState } from 'react'
import './Investorgraviance.css';
const Investorgraviance = () => {

    const [isVisible, setIsVisible] = useState(false); // Declare the state here

  const toggleVisibility = () => { // Define the toggle function here
    setIsVisible(!isVisible);
  };

  return (
    <div className="grievance-container">
    <button className="toggle-button" onClick={toggleVisibility}>
      {isVisible ? '- Investor Grievance' : '+ Investor Grievance'}
    </button>
    {isVisible && (
    <div className="grievance-section">
     <h2>Investor Grievances</h2>
      <div className="grievance-content">
        <div className="grievance-item">
          <h3>Compliance Officer</h3>
          <p><strong>Name:</strong> Ms. Laxmi Tiwari</p>
          <p><strong>Designation:</strong> Company Secretary and Compliance Officer</p>
          <p><strong>Address:</strong> Flat No.104 & 105, Pavitra Enclave, Somwar Peth, Opp. Ladkat Petrol Pump, Pune, MH – 411011, India.</p>
          <p><strong>Contact No:</strong> +91 9209282814</p>
          <p><strong>Email Id:</strong> compliance@3citsolutions.com</p>
        </div>
        <div className="grievance-item">
          <h3>Registrar and Share Transfer Agents (RTA)</h3>
          <p><strong>Name:</strong> Skyline Financial Services Private Limited</p>
          <p><strong>Address:</strong> A-506, Dattani Plaza, Kurla Road, Safed Pool, Andheri (East), Mumbai-400072, Maharashtra, India.</p>
          <p><strong>Telephone No:</strong> 022-28511022</p>
          <p><strong>Email Id:</strong> ipo@skylinerta.com</p>
          <p><strong>Website:</strong> <a href="https://www.skylinerta.com/" target="_blank" rel="noopener noreferrer">https://www.skylinerta.com/</a></p>
        </div>
      </div>
    </div>
    )}
    </div>
  )
}

export default Investorgraviance
