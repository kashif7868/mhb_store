import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import mhbLogo from "../assets/images/logo.png";
import { IoIosSearch } from "react-icons/io";
import { GiShoppingCart, GiClothes, GiFruitBowl, GiLipstick, GiGamepad } from "react-icons/gi";
import { MdOutlineShoppingBag, MdToys } from "react-icons/md";
import { FaBars, FaTimes } from "react-icons/fa";
import { RiArrowDropDownLine } from "react-icons/ri";
import '../assets/css/navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [searchQuery, setSearchQuery] = useState(''); // State for search query

  const cart = useSelector((state) => state.cart?.cart || []);
  const cartCount = cart.reduce((acc, item) => acc + item.qty, 0);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const location = useLocation();
  const navigate = useNavigate(); // Use useNavigate to programmatically navigate

  const handleDropdown = (category) => {
    setActiveDropdown((prev) => (prev === category ? null : category));
  };

  // Handle search input change
  const handleSearchInput = (e) => {
    setSearchQuery(e.target.value);
  };

  // Handle search submit
  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?query=${searchQuery}`); // Redirect to search page with query
      setSearchQuery(''); // Clear search input after submission
    }
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

          <li className="dropdown" onClick={() => handleDropdown('clothing')}>
            <span className={activeDropdown === 'clothing' ? 'active-category' : ''}>
              <GiClothes className="nav-icon" /> Clothing <RiArrowDropDownLine className={`dropdown-icon ${activeDropdown === 'clothing' ? 'rotated' : ''}`} />
            </span>
            <div className={`dropdown-content ${activeDropdown === 'clothing' ? 'show' : ''}`}>
              <Link to="/clothing/women" onClick={toggleMenu}>Women</Link>
              <Link to="/clothing/men" onClick={toggleMenu}>Men</Link>
              <Link to="/clothing/kids" onClick={toggleMenu}>Kids</Link>
            </div>
          </li>

          <li className="dropdown" onClick={() => handleDropdown('food')}>
            <span className={activeDropdown === 'food' ? 'active-category' : ''}>
              <GiFruitBowl className="nav-icon" /> Food <RiArrowDropDownLine className={`dropdown-icon ${activeDropdown === 'food' ? 'rotated' : ''}`} />
            </span>
            <div className={`dropdown-content ${activeDropdown === 'food' ? 'show' : ''}`}>
              <Link to="/food/dry-fruit" onClick={toggleMenu}>Dry Fruit</Link>
              <Link to="/food/desi-ghee" onClick={toggleMenu}>Desi Ghee</Link>
              <Link to="/food/honey" onClick={toggleMenu}>Honey</Link>
            </div>
          </li>

          <li className="dropdown" onClick={() => handleDropdown('beauty')}>
            <span className={activeDropdown === 'beauty' ? 'active-category' : ''}>
              <GiLipstick className="nav-icon" /> Beauty <RiArrowDropDownLine className={`dropdown-icon ${activeDropdown === 'beauty' ? 'rotated' : ''}`} />
            </span>
            <div className={`dropdown-content ${activeDropdown === 'beauty' ? 'show' : ''}`}>
              <Link to="/beauty/creams" onClick={toggleMenu}>Creams</Link>
              <Link to="/beauty/oils" onClick={toggleMenu}>Oils</Link>
              <Link to="/beauty/gels" onClick={toggleMenu}>Gels</Link>
              <Link to="/beauty/facial-set" onClick={toggleMenu}>Facial Set</Link>
            </div>
          </li>

          <li className="dropdown" onClick={() => handleDropdown('gadgets')}>
            <span className={activeDropdown === 'gadgets' ? 'active-category' : ''}>
              <GiGamepad className="nav-icon" /> Gadgets <RiArrowDropDownLine className={`dropdown-icon ${activeDropdown === 'gadgets' ? 'rotated' : ''}`} />
            </span>
            <div className={`dropdown-content ${activeDropdown === 'gadgets' ? 'show' : ''}`}>
              <Link to="/gadgets/mobile" onClick={toggleMenu}>Mobile</Link>
              <Link to="/gadgets/accessories" onClick={toggleMenu}>Accessories</Link>
              <Link to="/gadgets/airpods" onClick={toggleMenu}>Air Pods</Link>
            </div>
          </li>

          <li className="dropdown" onClick={() => handleDropdown('kids-toys')}>
            <span className={activeDropdown === 'kids-toys' ? 'active-category' : ''}>
              <MdToys className="nav-icon" /> Kids Toys <RiArrowDropDownLine className={`dropdown-icon ${activeDropdown === 'kids-toys' ? 'rotated' : ''}`} />
            </span>
            <div className={`dropdown-content ${activeDropdown === 'kids-toys' ? 'show' : ''}`}>
              <Link to="/toys/action-figures" onClick={toggleMenu}>Action Figures</Link>
              <Link to="/toys/lego" onClick={toggleMenu}>LEGO</Link>
              <Link to="/toys/dolls" onClick={toggleMenu}>Dolls</Link>
            </div>
          </li>
        </ul>

        <div className="navbar-icons">
          {/* Search Form */}
          <form className="search-bar" onSubmit={handleSearchSubmit}>
            <input
              type="text"
              placeholder="Search..."
              value={searchQuery}
              onChange={handleSearchInput} // Handle input change
            />
            <IoIosSearch className="search-icon" />
          </form>

          <Link to="/shop"><MdOutlineShoppingBag className="icon" /></Link>
          <Link to="/cart">
            <GiShoppingCart className="icon" />
            <span className="cart-badge">{cartCount}</span>
          </Link>
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
