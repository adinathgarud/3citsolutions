import React from 'react'
import itinfrastructurebackgroundImage from '../../../../assets/it_infrastructure_solution (1).png';

import './ITInfrastructureRentingSolutions.css';
const ITInfrastructureRentingSolutions = () => {
  return (
    <>
    <div className="Infrastructure-Service">
      <div className="Infrastructure-content">
        <h1>It Infrastructure Renting</h1>
      </div>
    </div>
     
      
      <div className="Infrastructure-Service-container">
      <div className="Infrastructure-text-content">
          <h2>IT Infrastructure Renting Solutions</h2>
          <p>
          3C IT Solutions is a prominent organisation providing a variety of solutions on rent and has attracted the attention of both B2B and B2C clients looking for options to rent Products/Solutions on short-term basis.
          Our dedicated customer service team supports our customers in choosing the right solution and also provides best in class after sales support.
          We believe in assisting customers to the last mile by providing the best of products and services. Before making the products available, we restore it to its original state and check on the health of the product thereby for our customers to stay confident and stress-free in terms of the quality of the products rented
          </p>
          <li>Cash Flow Benefit</li>
          <li>Minimum Downtime</li>
          <li>Easy Upgradation at Minimum Cost</li>
          <li>Protection against technology obsolescence</li>
          <li>Save scrapping expenses, hassels & Loss</li>
          <li>No In-house Staff Required for maintenance</li>
        </div>
        <div className="Infrastructure-image-content">
          <img src={itinfrastructurebackgroundImage} alt="Infrastructure Renting" />
      </div>
  </div>

  </>
  )
}

export default ITInfrastructureRentingSolutions