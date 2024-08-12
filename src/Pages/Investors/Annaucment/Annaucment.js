import React, { useState } from 'react';
import './Annaucment.css';

const Annaucment = () => {
  const announcements = [
    {
      title: 'Board Meetings',
      content: 'Board Meetings',
    },
    {
      title: 'General Meetings',
      content: 'General Meetings',
    },
    {
      title: 'Other announcements.',
      content: (
        <>
          <p>Other announcements.</p>
          <ul>
            <li>
              Regulation 30_16.07.24 → <a href="/#">Download</a>
            </li>
            <li>
              Regulation 30_25.07.24 → <a href="/#">Download</a>
            </li>
          </ul>
        </>
      ),
    },
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <>
      <div className="Announcements-bg">
        <div className="Announcements-overlay">
          <h3>Investor</h3>
          <h1>Announcements</h1>
        </div>
      </div>
      <div className="Announcements-container">
        <div className="Announcements-accordion-section">
          {announcements.map((announcement, index) => (
            <div key={index}>
              <button
                className="Announcements-accordion-toggle"
                onClick={() => toggleAccordion(index)}
              >
                <span className="Announcements-icon">
                  {activeIndex === index ? '−' : '+'}
                </span>
                {announcement.title}
              </button>
              <div
                className={`Announcements-accordion-content ${
                  activeIndex === index ? 'active' : ''
                }`}
              >
                {announcement.content}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Annaucment;
