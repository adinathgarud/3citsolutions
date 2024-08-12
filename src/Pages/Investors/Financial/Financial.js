import React from 'react'
import './Financial.css';
import Annualreport from '../../../assets/data-center-computer.png';
const Financial = () => {
  return (
    <>

        <div className="financial-container">
            <div className="financial-content">
                <h2>Investors</h2>
                <h1>Financial</h1>
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
          <a href='/# ' className="download-btn">Download</a>
        </div>
        

        <div className="Fi-content">
          <img src={Annualreport} alt="" />
          <h3>Annual Reports</h3>
          <p>2022 - 23</p>
          <a href='/# ' className="download-btn">Download</a>
        </div>
        
 </div>

 <div className="Fi-annual-return">
      Annual Return (for last 3 years)
    </div>


    <div className="Fi-containe">
        <div className="Fi-content">
          <img src={Annualreport} alt="" />
          <h3>Annual Reports</h3>
          <p>2020 - 21</p>
          <a href='/# ' className="download-btn">Download</a>
        </div>
        
      
        <div className="Fi-content">
          <img src={Annualreport} alt="" />
          <h3>Annual Reports</h3>
          <p>2021 - 22</p>
          <a href='/# ' className="download-btn">Download</a>
        </div>
        

        <div className="Fi-content">
          <img src={Annualreport} alt="" />
          <h3>Annual Reports</h3>
          <p>2022 - 23</p>
          <a href='/# ' className="download-btn">Download</a>
        </div>
        
 </div>
    
     
   </>
  )
}

export default Financial
