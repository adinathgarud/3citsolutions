// src/components/Footer.js
import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/3CIT-Logo.png';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-column logo-info">
                    <img src={logo} alt="Company Logo" className="footer-logo" />
                    <p>3C IT Total Infrastructure Solutions is a pioneering force in providing end-to-end IT infrastructure solutions. With a focus on innovation, reliability, and client-centricity, we leverage cutting-edge technologies to optimize and secure your digital landscape. </p>
                </div>
                <div className="footer-column quick-links">
                    <h2>Quick Links</h2>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/aboutus">About Us</Link></li>
                        <li><Link to="/solutions">Solutions</Link></li>
                        <li><Link to="/investors">Investors</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                    </ul>
                </div>
                <div className="footer-column get-in-touch">
                    <h2>Get In Touch</h2>
                    <p>1234 Company Address, City, State, Zip Code</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
