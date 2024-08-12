import React,{ useState } from 'react';
import './CompanyOverview.css';
//import company from '../../assets/demo-startup-who-we-are-title-bg.jpg';
import company2 from '../../assets/demo-startup-who-we-are-02.jpg';
import ExpertiseBeyondBoundaries from '../../assets/home-consulting.png';
import ClientCentricApproach from '../../assets/home-care.png';
import InnovationattheCore from '../../assets/company-innovation.png';
import YouTube from 'react-youtube';
import playicon from '../../assets/play.png';

const CompanyOverview = () => {

  const videoOptions = {
    height: '290',
    width: '540',
    playerVars: {
      autoplay: 0,
    },
  };


  const [isModalOpen, setModalOpen] = useState(false);

  const videoId = "dQw4w9WgXcQ"; // Replace with your video ID
  const videoOptions2 = {
    height: '100%',
    width: '100%',
    playerVars: {
      autoplay: 1,
    },
  };

  const handlePlayClick = () => {
    setModalOpen(true);
  };

  const handleCloseClick = () => {
    setModalOpen(false);
  };
    return (
        <> 
        <div className='company-maincontainer'>

       
      <div className="company-container">
        <div className="company-content">
          <div className='overlay'>
            <p>About Us</p>
            <h1>Your Trusted <br />Partner in Digital <br /> Innovation</h1>
          </div>
        </div>
      </div>
      <div className="info-container">
        <div className="top-company">
          <div className="left1-company">
            <div className='video-play'>
          <YouTube videoId="0jOtN38MTtk" opts={videoOptions} />
          </div>
            <div className="info1-content">
              <div className="vision">
                <h3>OUR VISION</h3>
                <p>Provide world class IT system integration capabilities using advanced technologies and bring significant value to the stakeholders.</p>
              </div>
              <div className="mission">
                <h3>OUR MISSION</h3>
                <p>Create well respected, highly skilled and professional work force that can serve diverse technology needs of the business.</p>
              </div>
              <button className="company-services">Our services</button>
            </div>
          </div>
          <div className="right1-company">
            <h1>ABOUT 3CIT SOLUTIONS</h1>
            <h2>Who we are?</h2>
            <p>3C IT Solutions was originally incorporated as a private limited company under the name of "3C IT Solutions & Telecoms (India) Private Limited" under the provisions of the Companies Act, 2013 and a certificate of incorporation was issued by the Registrar of Companies, Pune, India on March 24, 2015. Subsequently, our Company has been converted into a public limited company and the name of our Company has been changed to "3C IT Solutions & Telecoms (India) Limited" pursuant to a special resolution passed at the Extra-Ordinary General Meeting held on July 27, 2023 and a fresh certificate of incorporation dated August 14, 2023 has been issued by the Registrar of Companies, Pune. The Corporate Identity Number of our Company is U72200PN2015PLC154459.</p>
            <p>3C IT Solutions, headquartered in Pune, Maharashtra, is an established IT systems integration company operating for the past 8 years. Our Company operates with a vision to provide competitive IT system integration capabilities endeavouring to use best in class technologies and hence brings significant value to the stakeholders. We aim to create a well-respected, highly skilled and professional workforce that can serve diverse technology needs of the businesses as our service portfolio comprises of several IT related services which caters to the needs of our customers. Our service offerings are spread across the spectrum of various IT </p>
          </div>
        </div>
        <div className="down-company">
          <div className="left2-company">
            <img src={company2} alt="company 2" />
            <div className="video-play2">
            <div className="video-container">
      {!isModalOpen ? (
        <div className="play-icon-container" onClick={handlePlayClick}>
          <div className="play-icon"><img src={playicon} alt="play icon" /></div> {/* Unicode for play icon */}
        </div>
      ) : (
        <div className="video-modal">
          <button className="close-button" onClick={handleCloseClick}>&times;</button>
          <YouTube videoId={videoId} opts={videoOptions2} />
        </div>
      )}
    </div>
            <h5>Take a Look</h5>
            </div>
           
          </div>
          <div className="right2-company">
            <h1>We are a certified Company</h1>
            <p>As an ISO 9001:2015 certified Company, we are dedicated to offering innovative solutions that cater to the diverse technological requirements of our clientele. Collaborating closely with our clients, we forge strategies to augment their existing business frameworks and prepare them for forthcoming challenges. At 3C IT Solutions, we help customers to enhance their business practices by leveraging our extensive industry knowledge, past technology expertise, and a comprehensive portfolio of services, all tailored to specific segments. Our industry experience, the & technical expertise enables us to deliver desired results to our clients. Our Company stands as a steadfast partner in businesses’ transformational journeys, adept at identifying new growth prospects and facilitating ventures into new sectors and markets. We place our focus on client satisfaction and hence prioritize total customer experience. This dedication is coupled with our commitment to consult our clients post understanding their technical obstacles and hence we further provide cost-effective solutions to our clientele spread across India. Our offerings address the IT infrastructure, overall IT portfolio requirements and needs of our customers. Our clients range from</p>
          </div>
        </div>
      </div> 




      <div className="company-card-contain">
                   
                   <h1>Why Choose Us ? </h1>
    
                <div className="company-card-container">
                    <div className="company-card-card">
                        <div className="company-card-icon">
                            <img src={ExpertiseBeyondBoundaries} alt="Expertise-Beyond-Boundaries" />
                        </div>
                        <h2>Expertise Beyond Boundaries:</h2>
                        <p>Benefit from our extensive experience and deep industry knowledge, delivering solutions that transcend conventional boundaries and address your unique challenges.</p>
                       
                    </div>
                    <div className="company-card-card">
                        <div className="company-card-icon">
                            <img src={ClientCentricApproach} alt="Client-Centric Approach" />
                        </div>
                        <h2>Client-Centric Approach:</h2>
                        <p>Our commitment revolves around your success – from personalized consultations to dedicated support, ensuring a seamless and tailored experience for every client.</p>
                    </div>
                    <div className="company-card-card">
                        <div className="company-card-icon">
                            <img src={InnovationattheCore} alt="Innovation at the Core" />
                        </div>
                        <h2>Innovation at the Core:</h2>
                        <p>Harness the power of cutting-edge technologies and innovative strategies, positioning your business at the forefront of digital evolution with 3CIT Solutions.</p>
                       
                    </div>
                </div>
               
                </div>
          </div>
    </>
    );
};

export default CompanyOverview;
