import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Menu.css';
import menuIcon from '../../src/assets/menu-icon.png';

const Menu = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav>
            <div className="menu-icon" onClick={toggleMenu}>
                <img src={menuIcon} alt="Menu Icon" />
            </div>
            <ul className={`menu ${isMenuOpen ? 'open' : ''}`}>
                <li><Link to="/3citsolutions/" onClick={toggleMenu}>Home</Link></li>
                <li>
                    <Link to="/#">About Us</Link>
                    <ul className="submenu">
                        <li><Link to="/aboutus/company" onClick={toggleMenu}>Company</Link></li>
                        <li><Link to="/aboutus/team" onClick={toggleMenu}>Our Team</Link></li>
                        <li><Link to="/aboutus/careers" onClick={toggleMenu}>Careers</Link></li>
                        <li><Link to="/aboutus/blog" onClick={toggleMenu}>Blog</Link></li>
                    </ul>
                </li>
                <li>
                    <Link to="#">Solutions</Link>
                    <ul className="submenu">
                        <li>
                            <Link to="#">Infrastructure Solutions</Link>
                            <ul className="submenu">
                                <li><Link to="/solutions/infrastructure-solutions/end-user-design" onClick={toggleMenu}>End User & Design</Link></li>
                                <li><Link to="/solutions/infrastructure-solutions/data-center-solutions" onClick={toggleMenu}>Data Center Solutions</Link></li>
                                <li><Link to="/solutions/infrastructure-solutions/it-security-solutions" onClick={toggleMenu}>IT Security Solutions</Link></li>
                                <li><Link to="/solutions/infrastructure-solutions/networking-solutions" onClick={toggleMenu}>Networking Solutions</Link></li>
                                <li><Link to="/solutions/infrastructure-solutions/computer-accessories" onClick={toggleMenu}>Computer Accessories</Link></li>
                                <li><Link to="/solutions/infrastructure-solutions/audio-video-solutions" onClick={toggleMenu}>Audio Video Solutions</Link></li>
                                <li><Link to="/solutions/infrastructure-solutions/power-solutions" onClick={toggleMenu}>Power Solutions</Link></li>
                            </ul>
                        </li>
                        <li>
                            <Link to="#">Digital Business</Link>
                            <ul className="submenu">
                                <li><Link to="/solutions/digital-business/mobile-device-management" onClick={toggleMenu}>Mobile Device Management</Link></li>
                                <li><Link to="/solutions/digital-business/business-software" onClick={toggleMenu}>Business Software</Link></li>
                                <li><Link to="/solutions/digital-business/cloud-services" onClick={toggleMenu}>Cloud Services</Link></li>
                            </ul>
                        </li>
                        <li>
                            <Link to="#">Consulting Solution</Link>
                            <ul className="submenu">
                                <li><Link to="/solutions/consulting-solution/fms-solutions" onClick={toggleMenu}>FMS Solutions</Link></li>
                                <li><Link to="/solutions/consulting-solution/it-infrastructure-renting-solutions" onClick={toggleMenu}>IT Infrastructure Renting Solutions</Link></li>
                                <li><Link to="/solutions/consulting-solution/it-managed-services" onClick={toggleMenu}>IT Managed Services</Link></li>
                                <li><Link to="/solutions/consulting-solution/remote-infrastructure" onClick={toggleMenu}>Remote Infrastructure</Link></li>
                                <li><Link to="/solutions/consulting-solution/multibrand-hardware-break-fix-services-ams" onClick={toggleMenu}>MultiBrand Hardware Break-fix Services AMS</Link></li>
                            </ul>
                        </li>
                    </ul>
                </li>
                <li>
                    <Link to="#">Investors</Link>
                    <ul className="submenu">
                        <li>
                            <Link to="#">IPO</Link>
                            <ul className="submenu">
                                <li><Link to="/investors/ipo/draft-prospect" onClick={toggleMenu}>Draft Prospect</Link></li>
                                <li><Link to="/investors/ipo/prospect" onClick={toggleMenu}>Prospect</Link></li>
                                <li><Link to="/investors/ipo/abridged-prospect" onClick={toggleMenu}>Abridged Prospect</Link></li>
                                <li><Link to="/investors/ipo/material-agreements" onClick={toggleMenu}>Material Agreements</Link></li>
                                <li><Link to="/investors/ipo/general-information-documents" onClick={toggleMenu}>General Information Documents</Link></li>
                                <li><Link to="/investors/ipo/application-form" onClick={toggleMenu}>Application Form</Link></li>
                                <li><Link to="/investors/ipo/basis-allotment" onClick={toggleMenu}>Basis Allotment</Link></li>
                            </ul>
                        </li>
                        <li><Link to="/investors/financial" onClick={toggleMenu}>Financial</Link></li>
                        <li><Link to="/investors/corporate-governance" onClick={toggleMenu}>Corporate Governance</Link></li>
                        <li><Link to="/investors/share-holding-pattern" onClick={toggleMenu}>Share holding Pattern</Link></li>
                        <li><Link to="/investors/invester-graviance" onClick={toggleMenu}>Investor Graviance</Link></li>
                        <li><Link to="/investors/code-policies" onClick={toggleMenu}>Code & Policies</Link></li>
                       
                        <li><Link to="/investors/material-douments" onClick={toggleMenu}>Material Douments</Link></li>
                        <li><Link to="/investors/annauncment" onClick={toggleMenu}>Announcements</Link></li>
                        <li><Link to="/investors/bseintimation" onClick={toggleMenu}>BSE Intimation</Link></li>
                        <li><Link to="/investors/financial-result" onClick={toggleMenu}>Financial Result</Link></li>
                    </ul>
                </li>
                <li><Link to="/contact" onClick={toggleMenu}>Contact</Link></li>
            </ul>
        </nav>
    );
};

export default Menu;
