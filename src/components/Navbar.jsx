import React, { useState } from 'react';
import '../assets/css/navbar.css';
import { Link, useLocation } from 'react-router-dom';
import mhbLogo from "../assets/images/logo.png";
import { IoIosSearch } from "react-icons/io";
import { GiShoppingCart } from "react-icons/gi";
import { MdOutlineShoppingBag } from "react-icons/md";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null); // To handle dropdown visibility
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const location = useLocation();

  const handleDropdown = (category) => {
    setActiveDropdown((prev) => (prev === category ? null : category));
  };

  return (
    <nav className="navbar-container">
      <div className="navbar">
        <div className="logo">
          <Link to="/"><img src={mhbLogo} alt="MHB Store Logo" /></Link>
        </div>
        <ul className={`nav-links ${isOpen ? 'active' : ''}`}>
          <li>
            <Link to="/" onClick={toggleMenu} className={location.pathname === '/' ? 'active-link' : ''}>
              Latest
            </Link>
          </li>

          {/* Dropdown example */}
          <li className="dropdown" onClick={() => handleDropdown('clothing')}>
            <span className={activeDropdown === 'clothing' ? 'active-category' : ''}>Clothing</span>
            <div className={`dropdown-content ${activeDropdown === 'clothing' ? 'show' : ''}`}>
              <Link to="/clothing/women" onClick={toggleMenu}>Women</Link>
              <Link to="/clothing/men" onClick={toggleMenu}>Men</Link>
              <Link to="/clothing/kids" onClick={toggleMenu}>Kids</Link>
            </div>
          </li>

          <li className="dropdown" onClick={() => handleDropdown('food')}>
            <span className={activeDropdown === 'food' ? 'active-category' : ''}>Food</span>
            <div className={`dropdown-content ${activeDropdown === 'food' ? 'show' : ''}`}>
              <Link to="/food/dry-fruit" onClick={toggleMenu}>Dry Fruit</Link>
              <Link to="/food/desi-ghee" onClick={toggleMenu}>Desi Ghee</Link>
              <Link to="/food/honey" onClick={toggleMenu}>Honey</Link>
            </div>
          </li>

          <li className="dropdown" onClick={() => handleDropdown('beauty')}>
            <span className={activeDropdown === 'beauty' ? 'active-category' : ''}>Beauty</span>
            <div className={`dropdown-content ${activeDropdown === 'beauty' ? 'show' : ''}`}>
              <Link to="/beauty/creams" onClick={toggleMenu}>Creams</Link>
              <Link to="/beauty/oils" onClick={toggleMenu}>Oils</Link>
              <Link to="/beauty/gels" onClick={toggleMenu}>Gels</Link>
              <Link to="/beauty/facial-set" onClick={toggleMenu}>Facial Set</Link>
            </div>
          </li>

          <li className="dropdown" onClick={() => handleDropdown('gadgets')}>
            <span className={activeDropdown === 'gadgets' ? 'active-category' : ''}>Gadgets</span>
            <div className={`dropdown-content ${activeDropdown === 'gadgets' ? 'show' : ''}`}>
              <Link to="/gadgets/mobile" onClick={toggleMenu}>Mobile</Link>
              <Link to="/gadgets/accessories" onClick={toggleMenu}>Accessories</Link>
              <Link to="/gadgets/airpods" onClick={toggleMenu}>Air Pods</Link>
            </div>
          </li>
          <li className="dropdown" onMouseEnter={() => handleDropdown('KidsToys')} >
            <span className={activeDropdown === 'KidsToys' ? 'active-category' : ''}>Kids Toys</span>
            <div className={`dropdown-content ${activeDropdown === 'KidsToys' ? 'show' : ''}`}>
              <Link to="/toys/action-figures" onClick={toggleMenu}>Action Figures</Link>
              <Link to="/toys/lego" onClick={toggleMenu}>LEGO</Link>
              <Link to="/toys/dolls" onClick={toggleMenu}>Dolls</Link>
            </div>
          </li>
        </ul>

        <div className="navbar-icons">
          <div className="search-bar">
            <input type="text" placeholder="Search..." />
            <IoIosSearch className="search-icon" />
          </div>
          <Link to="/shop"><MdOutlineShoppingBag className="icon" /></Link>
          <Link to="/cart"><GiShoppingCart className="icon" /></Link>
          <div className="sign-in-container">
            <Link to="/sign_in" className='signIn-btn'>Sign In</Link>
          </div>
          <div className="hamburger" onClick={toggleMenu}>
            {isOpen ? <FaTimes /> : <FaBars />}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
