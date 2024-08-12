import React, { useState } from 'react';
import './Corporategovernance.css';
import Ranjit from '../../../assets/ranjit.jpeg'
import Gangarani from '../../../assets/Gangarani.jpeg'
import Sujeet from '../../../assets/Sujeet.jpeg'
import Shailendra from '../../../assets/Shailendra.jpeg'
import Pandurang from '../../../assets/Pandurang.jpeg' 
  const committees = [
    {
      title: "Audit Committee",
      members: [
        { id: 1, name: 'Pandurang Avinash Deokar', nature: 'Non-executive, Independent Director', designation: 'Chairman' },
        { id: 2, name: 'Dhirendra Sidh Nath Trivedi', nature: 'Non-executive, Independent Director', designation: 'Member' },
        { id: 3, name: 'Shailendra Ramesh Ganeshe', nature: 'Non-executive, Independent Director', designation: 'Member' },
      ],
    },
    {
      title: "Stakeholders’ Relationship Committee",
      members: [
        // Add members for this committee similarly
      ],
    },
    // Add more committees if needed
  ];
  
  const Corporategovernance = () => {
    const [activeSection, setActiveSection] = useState(null);
  
    const toggleSection = (section) => {
      setActiveSection(activeSection === section ? null : section);
    };

  return (
    <div className="corporate-governance-container">
       <div className="accordion-section">
        <button className="accordion-toggle" onClick={() => toggleSection('boardOfDirectors')}>
          {activeSection === 'boardOfDirectors' ? '− Board Of Director' : '+ Board Of Director'}
        </button>
        {activeSection === 'boardOfDirectors' && (
          <div className="accordion-content">
            <h2>Directors</h2>
            <div className="directors-grid">

              <div className="director-card">
                <img src={Ranjit} alt="Mr. Ranjit Kulladhaja Mayengbam" className="director-image" />
                <p className="director-name">Mr. Ranjit Kulladhaja Mayengbam</p>
                <p className="director-designation">Chairman & MD</p>
              </div>

              <div className="director-card">
                <img src={Gangarani} alt="Mrs. Gangarani Devi Mayengbam" className="director-image" />
                <p className="director-name">Mrs. Gangarani Devi Mayengbam</p>
                <p className="director-designation">Executive Director & CFO</p>
              </div>

              <div className="director-card">
                <img src={Sujeet} alt="Mr. Sujeet Dinanath Naik" className="director-image" />
                <p className="director-name">Mr. Sujeet Dinanath Naik</p>
                <p className="director-designation">Non-Executive Director</p>
              </div>

              <div className="director-card">
                <img src={Sujeet} alt="Mr. Dhirendra Sidh Nath Trivedi" className="director-image" />
                <p className="director-name">Mr. Dhirendra Sidh Nath Trivedi</p>
                <p className="director-designation">Independent Director</p>
              </div>

              <div className="director-card">
                <img src={Shailendra} alt="Mr. Shailendra Ramesh Ganeshe" className="director-image" />
                <p className="director-name">Mr. Shailendra Ramesh Ganeshe</p>
                <p className="director-designation">Independent Director</p>
              </div>

              <div className="director-card">
                <img src={Pandurang} alt="Mr. Pandurang Avinash Deokar" className="director-image" />
                <p className="director-name">Mr. Pandurang Avinash Deokar</p>
                <p className="director-designation">Independent Director</p>
              </div>
              {/* Add more director cards as needed */}

            </div>
          </div>
        )}
      </div>

      <div className="accordion-section">
        <button className="accordion-toggle" onClick={() => toggleSection('committees')}>
          {activeSection === 'committees' ? '− Committees of the Board of Directors' : '+ Committees of the Board of Directors'}
        </button>
        {activeSection === 'committees' && (
          <div className="accordion-content">
            {committees.map((committee, index) => (
              <div key={index}>
                <h3>{committee.title}</h3>
                <table className="committee-table">
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Name of the Directors</th>
                      <th>Nature of Directorship</th>
                      <th>Designation in Committee</th>
                    </tr>
                  </thead>
                  <tbody>
                    {committee.members.map((member, idx) => (
                      <tr key={member.id}>
                        <td>{idx + 1}</td>
                        <td>{member.name}</td>
                        <td>{member.nature}</td>
                        <td>{member.designation}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="accordion-section">
        <button className="accordion-toggle" onClick={() => toggleSection('complianceOfficer')}>
          {activeSection === 'complianceOfficer' ? '− Company Secretary & Compliance Officer' : '+ Company Secretary & Compliance Officer'}
        </button>
        {activeSection === 'complianceOfficer' && (
          <div className="accordion-content">
            <h2 id='company-secretary'>COMPANY SECRETARY AND COMPLIANCE OFFICER</h2>
            <p><strong>Name:</strong> Ms. Laxmi Tiwari</p>
            <p><strong>Designation:</strong> Company Secretary and Compliance Officer</p>
            <p><strong>Registered office:</strong> Flat No.104 & 105, Pavitra Enclave, Somwar Peth, Opp. Ladkat Petrol Pump, Pune, MH – 411011, India.</p>
            <p><strong>Website:</strong> <a href="http://3citsolutions.com/">http://3citsolutions.com/</a></p>
            <p><strong>Email:</strong> compliance@3citsolutions.com</p>
            <p><strong>Contact No:</strong> +91 9209282814</p>
          </div>
        )}
      </div>

      <div className="accordion-section">
        <button className="accordion-toggle" onClick={() => toggleSection('statutoryAuditor')}>
          {activeSection === 'statutoryAuditor' ? '− Statutory Auditor' : '+ Statutory Auditor'}
        </button>
        {activeSection === 'statutoryAuditor' && (
          <div className="accordion-content">
            <h2 id='company-secretary'>STATUTORY AUDITORS OF OUR COMPANY</h2>
            <p>1. <strong>Name of the Firm:</strong> M/s CMRS & ASSOCIATES LLP</p>
            <p>2. <strong>Constitution of the firm:</strong> LIMITED LIABILITY PARTNERSHIP</p>
            <p>3. <strong>Firm Registration Number:</strong> 101678W/W100068</p>
            <p>4. <strong>Address of office of the Firm:</strong> OFFICE NO 7-12, 3RD FLOOR, BIZHUB, NEAR AMBEDKAR CHOWK, PIMPRI, PUNE – 411018</p>
          </div>
        )}
      </div>

      <div className="accordion-section">
        <button className="accordion-toggle" onClick={() => toggleSection('registeredOffice')}>
          {activeSection === 'registeredOffice' ? '− Registered Office' : '+ Registered Office'}
        </button>
        {activeSection === 'registeredOffice' && (
          <div className="accordion-content">
            <h2 id='company-secretary'>REGISTERED OFFICE</h2>
            <p><strong>3C IT Solutions & Telecoms (India) Limited</strong></p>
            <p>Flat No.104 & 105, Pavitra Enclave, Somwar Peth, Opp. Ladkat Petrol Pump, Pune, MH – 411011, India.</p>
            <p><strong>CIN:</strong> U72200PN2015PLC154459</p>
            <p><strong>Registration No:</strong> 154459</p>
            <p><strong>Tel No:</strong> 020 46047009</p>
            <p><strong>Email:</strong> corporateoffice@3citsolutions.com</p>
            <p><strong>Website:</strong> <a href="http://3citsolutions.com/">http://3citsolutions.com/</a></p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Corporategovernance;
