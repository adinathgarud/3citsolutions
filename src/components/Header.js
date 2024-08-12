// src/components/Header.js
import React from 'react';
//import { Link } from 'react-router-dom';
import Logo from './Logo';
import Menu from './Menu';
import './Header.css';

const Header = () => {
    return (
        <header>
            <Logo />
            <Menu />
        </header>
    );
};

export default Header;
