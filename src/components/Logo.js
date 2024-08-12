// src/components/Logo.js
import React from 'react';
import logo from '../../src/assets/3CIT-Logo.png';
import './Logo.css';

const Logo = () => {
    return (
        <div className="logo">
            <img src={logo} alt="Logo" />
        </div>
    );
};

export default Logo;
