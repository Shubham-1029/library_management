import React from 'react';
import { HiOutlineMenuAlt3 } from 'react-icons/hi';
import logoImg from '../../images/logo.png';
import './Navbar.css';

const Navbar = () => {
  // eslint-disable-next-line no-unused-vars
  const handleNavbar = () => {
    // Handle navbar functionality
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="logo">
          <img src={logoImg} alt="Logo" />
        </div>
        <div className="menu-icon" onClick={handleNavbar}>
          <HiOutlineMenuAlt3 />
        </div>
        {/* Other navbar elements */}
      </div>
    </nav>
  );
};

export default Navbar;
