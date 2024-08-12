import React from 'react'
import './Materialdocuments.css'
import Annualreport from '../../../assets/data-center-computer.png';
const Materialdocuments = () => {
  return (
    <>

        <div className="Materialdocuments-container">
            <div className="Materialdocuments-content">
                <h2>Investors</h2>
                <h1>Material Documents</h1>
            </div>
           
        </div>

        <div className="annual-reports">
                <h2>Annual Reports (for last 3 years)</h2>
            </div>

     <div className="Fi-containe">
    
        <div className="Fi-content">
          <img src={Annualreport} alt="Annual Report" />
          <h3>Annual Reports</h3>
          <p>2020 - 21</p>
          <a href='/# ' className="download-btn">Download</a>
        </div>
        
      
        <div className="Fi-content">
          <img src={Annualreport} alt="" />
          <h3>Annual Reports</h3>
          <p>2021 - 22</p>
          <a  href='/# ' className="download-btn">Download</a>
        </div>
        

        <div className="Fi-content">
          <img src={Annualreport} alt="" />
          <h3>Annual Reports</h3>
          <p>2022 - 23</p>
          <a href='/# ' className="download-btn">Download</a>
        </div>
        
 </div>

 <div className="Fi-annual-return">
     MOA & AOA
    </div>


    <div className="Fi-containe">
        <div className="Fi-content">
          <img src={Annualreport} alt="" />
          <h3>MOA & AOA</h3>
          
          <a href='/# ' className="download-btn">Download</a>
        </div>
        
 </div>

 


    
    
     
   </>
  )
}

export default Materialdocuments
