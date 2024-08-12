import React from 'react';
import './Contact.css';
import contact_location from '../assets/contact_location.jpeg';
import contact_callus from '../assets/contact_callus.png';
import contact_emailus from '../assets/contact_emailus.png';
import landlineImage from '../assets/landline.jpeg'; // Ensure you have this image in your project

const Contact = () => {
  return (
    <div className="contact-container">
      <div className="contact-hero">
                    <h1>CONTACT US</h1>
                    <p>Reach Out, We're Here for You!</p>
                    
                </div>
                <div className="contact-cards">
                    <div className="contact-card">
                        <img src={contact_location} alt="contact_location" />
                        <h3>Head Office</h3>
                        <p>Flat No.104 & 105, Pavitra Enclave, Somwar Peth, Opp. Ladkat Petrol Pump, Pune, MH – 411011, India. Phone No : 020-41226874</p>
                    </div>
                    <div className="contact-card">
                        <img src={contact_callus} alt="contact_callus" />
                        <h3>Call us directly</h3>
                        <p>Sales: 08080669082</p>
                    </div>
                    <div className="contact-card">
                        <img src={contact_emailus} alt="contact_emailus" />
                        <h3>E-mail us</h3>
                        <p>hr@3citsolutions.com admin@3citsolutions.com</p>
                    </div>
                </div>
      <div className="contact-form-container">
      <div className="landline-image">
          <img src={landlineImage} alt="Landline" />
        </div>
        <div className="contact-form">

          <form>
            <label>Full Name</label>
            <input type="text" name="fullname" />
            <label>Mobile No</label>
            <input type="text" name="mobile" />
            <label>Email ID</label>
            <input type="email" name="email" />
            <label>Short Message</label>
            <textarea name="message"></textarea>
            <button type="submit">Submit</button>
          </form>
        </div>
        
      </div>
      <div className="contact-map">
      <iframe
          title="Office Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.835434465691!2d144.9556511158699!3d-37.817327979751594!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d43a2ab9c3f%3A0x5045675218ce6e0!2s123%20Office%20St.%2C%20Business%20City!5e0!3m2!1sen!2sus!4v1622467512004!5m2!1sen!2sus"
          width="800"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
};

export default Contact;
