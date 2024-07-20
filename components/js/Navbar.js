import React from "react";
import { Link } from 'react-router-dom';
import '../css/navbar.css';
import logo from '../../assets/Logo.png'
const Navbar = () => {
    return (
      <nav className="navbar">
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About Us</Link></li>
          <li><Link to="/services">Services</Link></li>
          <li><Link to="/carrier">Carrier</Link></li>
          <li><Link to="/contact">Contact Us</Link></li>
        </ul>
      </nav>
    );
};

export default Navbar;
