import React from 'react';
import './BusinessSoftware.css';
import backgroundImage from '../../../../assets/Add-a-subheading-11.png'; // Replace with your actual image path

const BusinessSoftware = () => {
  return (
    <>
      <div className="business-software">
        <div className="business-content">
          <h1>Business Software</h1>
        </div>
      </div>
      
      <div className="business-software-container">
        <div className="business-text-content">
          <h2>Business Software</h2>
          <p>
            Business productivity software refers to applications and tools designed to enhance efficiency,
            collaboration, and overall productivity within a business or organization. These software solutions are varied and cater to different aspects of business operations. 
            Here are some common types of business productivity software:
          </p>
          <ul>
            <li>Office Suites</li>
            <li>Project Management Tools</li>
            <li>Collaboration Software</li>
            <li>Document Management Systems</li>
            <li>Expense Management Software</li>
            <li>Learning Management Systems (LMS)</li>
            <li>Note-Taking and Organization</li>
            <li>Sales Enablement Software</li>
            <li>Customer Relationship Management (CRM)</li>
            <li>Time Tracking and Attendance Software</li>
            <li>Task and Workflow Automation</li>
            <li>Human Resources Management (HRM)</li>
            <li>Business Intelligence and Analytics</li>
            <li>Intranet Software</li>
            <li>Video Conferencing Tools</li>
            <li>Communication and Email</li>
          </ul>
        </div>
        <div className="business-image-content">
          <img src={backgroundImage} alt="Business Software" />
        </div>
      </div>
    </>
  );
}

export default BusinessSoftware;
