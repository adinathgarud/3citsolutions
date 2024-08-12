// src/pages/Home.js
import React from 'react';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

    //import Header from '../../components/Header';
    import focusonclienticoncustomer from '../../assets/home_customer_focus.png';
    import CareIcon from '../../assets/home-care.png';
    import homecompetency from '../../assets/home-competency.png';
    import numbers from '../../assets/Number (1).png';
    //import st_about_accordian from '../../assets/st_about_accordian.jpg';
    import homeinfrastructure from '../../assets/home-infrastructure.png';
    import homedigital from '../../assets/home-digital.png';
    import homeconsulting from '../../assets/home-consulting.png';
    import demo_startup_business_process from '../../assets/demo-startup-business-process.jpg';
    import business_couple_with_computer_2023_11_27_05_37_11_utc_scaled from '../../assets/business-couple-with-computer-2023-11-27-05-37-11-utc-scaled.jpg';
   
    import home_service_image from '../../assets/partial-view-of-businessman-using-smartphone-at-wo-2023-11-27-04-53-10-utc-scaled.jpg';
    
    import './Home.css'; // Import your CSS file
import LogoSlider from '../../components/LogoSlider/LogoSlider';
import LogoSliderClients from '../../components/LogoSlider/LogoSliderClients';

    
    
    const Home = () => {


        return (
            <>
            
            <div className="Home-container">
    
                <title>3C IT</title>
    
                <div className="hero">
                    <div className='overlay'>
                    <h1>IT Solutions for a <br />Digital Tomorrow</h1>
                    <p>Empowering Your Business through Innovative IT Solutions.</p>
                   </div>
                </div>

                <div className='get-started-btn'>
                    <button><a href='/contact'>Get Started Now</a></button>
                </div>

    
                <div className="features">
                    <div className="feature-box">
                        <img src={focusonclienticoncustomer} alt="Customer Focus Icon" />
                        <h3>Customer Focus</h3>
                        <p>Devoted to your success, we prioritize understanding and meeting your unique needs at 3CIT Solutions.</p>
                    </div>
                    <div className="feature-box">
                        <img src={homecompetency} alt="Competency Icon" />
                        <h3>Competency</h3>
                        <p>Empowered by expertise, our competency transforms challenges into opportunities, driving your business forward.</p>
                    </div>
                    <div className="feature-box">
                        <img src={CareIcon} alt="Care Icon" />
                        <h3>Care</h3>
                        <p>With genuine concern, we go beyond technology, fostering relationships and supporting your journey at every step.</p>
                    </div>
                </div>
    
                <div className="experience">
                    <div className="experience-item">
                        <h2>800+</h2>
                        <p>CUSTOMERS</p>
                        <p>“Empowering over 500 customers in India, our solutions redefine success through innovation, reliability, and unwavering commitment.”</p>
                    </div>
                    <div className="experience-item">
                        <img src={numbers} alt="number" />
                        <p>YEARS OF EXPERIENCE</p>
                    </div>
                    <div className="experience-item">
                        <h2>35+</h2>
                        <p>HIGH SKILLED EMPLOYEES</p>
                        <p>“Skilled minds, united by expertise and driven by innovation, form the backbone of our dedicated team, delivering excellence in every endeavor.”</p>
                    </div>
                </div>
    
                <div className="heading">
                    <h1>Transforming Visions into Digital Reality.</h1>
                </div>
                    
                

                <div className="content">
                    <div className="card">
                        <h2>Cutting-edge IT Solutions</h2>
                        <img src={business_couple_with_computer_2023_11_27_05_37_11_utc_scaled} alt="Cutting-edge IT Solutions" />
                        <p>Offering innovative and tailored technology services to address the evolving needs of businesses.</p>
                    </div>
                    <div className="card">
                        <h2>Customer Support:</h2>
                        <img src={business_couple_with_computer_2023_11_27_05_37_11_utc_scaled} alt="Customer Support" />
                        <p>Providing dedicated assistance and support to ensure a seamless experience for our clients.</p>
                    </div>
                </div>
    






                <div className="home-service-container">
                    <div className="home-service-card">
                        <img src={home_service_image} alt="A Trusted Partner In Your Digital Business" className="home-service-image" />
                            <div className="home-service-content">
                                <h3 className="home-service-title">High quality services</h3>
                                <p className="home-service-description">A Trusted Partner In Your <br/>Digital Business</p>
                                <button className="home-service-button"><a href='/home'>Get In Touch</a></button>
                            </div>
                    </div>
                    <div className="home-service-card">
                        <img src={home_service_image} alt="3CIT Igniting Growth Strategies for Your Success" className="home-service-image" />
                            <div className="home-service-content">
                                <h3 className="home-service-title">Unique Experience</h3>
                                <p className="home-service-description">3CIT Igniting Growth<br/> Strategies for Your Success</p>
                                <button className="home-service-button"><a href='/home'>Get In Touch</a></button>
                            </div>
                    </div>
                </div>
    

                <div className="contain">
                    <p className="subheading">DIGITAL TRANSFORMATION FOR BUSINESSES</p>
                    <h1 className='subheading2'>3CIT: Integrated Solutions for Digital <br/>Transformation</h1>
                
    
                    <div className="solutions-container">
                        <div className="solution-card">
                            <div className="solution-icon">
                                <img src={homeinfrastructure} alt="Infrastructure Icon" />
                            </div>
                            <h2>Infrastructure Solutions</h2>
                            <p>Elevate your digital presence with our robust and scalable online infrastructure solutions, designed to enhance performance, security, and reliability.</p>
                            <h5>READ MORE</h5>
                        </div>
                        <div className="solution-card">
                            <div className="solution-icon">
                                <img src={homedigital} alt="Digital Business Icon" />
                            </div>
                            <h2>Digital Business Solutions</h2>
                            <p>Embrace the future of business with our comprehensive digital solutions, fostering growth, efficiency, and a competitive edge in the ever-evolving digital landscape.</p>
                            <h5>READ MORE</h5>
                        </div>
                        <div className="solution-card">
                            <div className="solution-icon">
                                <img src={homeconsulting} alt="Consulting Icon" />
                            </div>
                            <h2>Consulting Solutions</h2>
                            <p>Navigate complexity with confidence through our strategic consulting solutions, offering insights, expertise, and tailored strategies to drive your business success.</p>
                            <h5>READ MORE</h5>
                        </div>
                    </div>
                    <button className="home-button"><a href='/#'>See all services</a></button>
                </div>
                
    
                <div className="consult">
                    <div className="consulting">
                        <h1>Business Process</h1>
                        <h2>What We Do?</h2>
                        <ul>
                            <li>Innovative IT Solutions:</li>
                            <span>Unleashing creativity and technology to deliver cutting-edge IT solutions that empower businesses and drive digital transformation.</span>
                            <li>Customer-Centric Approach:</li>
                            <span>Placing our clients at the forefront, we prioritize their unique needs and aspirations, ensuring personalized solutions and unwavering support.</span>
                            <li>Strategic Consulting Excellence:</li>
                            <span>Guiding businesses towards success, our strategic consulting services provide valuable insights, expertise, and roadmaps.</span>
                        </ul>
                    </div>
                    <div className="image">
                       <img src={demo_startup_business_process} alt=""/>
                    </div>
                </div>
    
                <div className="home-cont">
                    <p className="subtitle">Latest Blogs</p>
                    <h1 className="title">Daily Articles</h1>
               
                </div>
                
            <div className='home-logo-slider'>
                <h1>OUR TRUSTED OEM</h1>
                <LogoSlider />

                <h1>OUR TRUSTED CLIENTS</h1>
                <LogoSliderClients />
            </div>

           </div> 
           </>
        );
    }
    
    export default Home;
    
