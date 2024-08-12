import React, { useState } from 'react';
import './Codepolicies.css';

const Codepolicies = () => {
  const policies = [
    { title: 'Policy for preservation of Documents', content: 'Policy for preservation of Documents' },
    { title: 'Code of Conduct for Directors & SMP', content: 'Content goes here' },
    { title: 'Policy for Code of Conduct for Prevention', content: 'Content goes here' },
    { title: 'Familiarization Programmes for Independent Directors', content: 'Content goes here' },
    { title: 'Nomination and Remuneration Policy', content: 'Content goes here' },
    { title: 'Policy on Related Party Transaction', content: 'Content goes here' },
    { title: 'Terms and Conditions for the appointment of Independent Directors', content: 'Content goes here' },
    { title: 'Whistle Blower Policy', content: 'Content goes here' },
    { title: 'Policy on criteria for Determining Materiality of Event', content: 'Content goes here' },
    { title: 'Criteria of making payments to Non-Executive Directors', content: 'Content goes here' },
    { title: 'Dividend Distribution Policy', content: 'Content goes here' },
    { title: 'CSR Policy', content: 'Content goes here' },
    { title: 'Prevention of Sexual Harassment (POSH) Policy', content: 'Content goes here' },
    { title: 'Risk Management Policy', content: 'Content goes here' },
    { title: 'Policy and Procedure LEAK OF UPSI', content: 'Content goes here' },
    { title: 'Materiality Policy Creditors and Litigation', content: 'Content goes here' }
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <>
    <div className="Codepolicie-bg">
        <div className="overlay">
        <h3>Investor</h3>
        <h1>Code Policies</h1>
        </div>
    </div>
    <h1 className="Codepolicie-title">Code & Policies</h1>
    <div className="Codepolicie-container">
      
      <div className="Codepolicie-accordion-section">
        {policies.map((policy, index) => (
          <div key={index}>
            <button 
              className="Codepolicie-accordion-toggle" 
              onClick={() => toggleAccordion(index)}
            >
              <span className="Codepolicie-icon">
                {activeIndex === index ? '−' : '+'}
              </span>
              {policy.title}
            </button>
            <div 
              className={`Codepolicie-accordion-content ${activeIndex === index ? 'active' : ''}`}
            >
              <p>{policy.content}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
    </>
  );
}

export default Codepolicies;
