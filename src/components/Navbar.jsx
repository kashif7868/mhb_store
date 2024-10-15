import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import mhbLogo from "../assets/images/logo.png";
import { IoIosSearch } from "react-icons/io";
import { GiShoppingCart } from "react-icons/gi";
import { FaBars, FaTimes, FaTimes as CloseIcon } from "react-icons/fa";
import { RiArrowDropDownLine } from "react-icons/ri";
import '../assets/css/navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  const cart = useSelector((state) => state.cart?.cart || []);
  const cartCount = cart.reduce((acc, item) => acc + item.qty, 0);

  const toggleMenu = () => setIsOpen(!isOpen);
  const handleDropdown = (category) => {
    setActiveDropdown((prev) => (prev === category ? null : category));
  };

  const navigate = useNavigate();
  const handleSearchInput = (e) => setSearchQuery(e.target.value);
  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?query=${searchQuery}`);
      setSearchQuery('');
    }
  };
  const handleSearchReset = () => setSearchQuery('');

  return (
    <>
      <header className="header-container">
        <div className="logo">
          <Link to="/"><img src={mhbLogo} alt="MHB Store Logo" /></Link>
        </div>

        <form className="search-bar-container" onSubmit={handleSearchSubmit}>
          <div className="icon">
            <IoIosSearch className={`swap-on ${searchQuery ? 'hidden' : ''}`} />
          </div>
          <label htmlFor="search">
            <input
              type="text"
              id="search"
              placeholder="What are you looking for today?"
              value={searchQuery}
              onChange={handleSearchInput}
              required
              autoComplete="off"
            />
            {searchQuery && (
              <button type="button" className="close-btn" onClick={handleSearchReset}>
                <CloseIcon />
              </button>
            )}
          </label>
        </form>

        <div className="right-icons">
          <div className="cart-icon-wrapper">
            <Link to="/cart">
              <GiShoppingCart className="icon" />
              {cartCount > 0 && <span className="cart-badge-dot">{cartCount}</span>}
            </Link>
          </div>
          <div className="sign-in-container">
            <Link to="/sign_in" className="signIn-btn">Sign In</Link>
          </div>
        </div>
      </header>

      <nav className={`navbar-container ${isOpen ? 'active' : ''}`}>
        <div className="hamburger" onClick={toggleMenu}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </div>
        <ul className={`nav-links ${isOpen ? 'active' : ''}`}>
          <li><Link to="/">Latest</Link></li>

          <li className="dropdown" onClick={() => handleDropdown('clothing')}>
            <span>Clothing <RiArrowDropDownLine className={`dropdown-icon ${activeDropdown === 'clothing' ? 'rotated' : ''}`} /></span>
            <div className={`dropdown-content ${activeDropdown === 'clothing' ? 'show' : ''}`}>
              <Link to="/clothing/men">Men</Link>
              <Link to="/clothing/women">Women</Link>
            </div>
          </li>

          <li className="dropdown" onClick={() => handleDropdown('food')}>
            <span>Food <RiArrowDropDownLine className={`dropdown-icon ${activeDropdown === 'food' ? 'rotated' : ''}`} /></span>
            <div className={`dropdown-content ${activeDropdown === 'food' ? 'show' : ''}`}>
              <Link to="/food/honey">Honey</Link>
              <Link to="/food/desi-ghee">Desi Ghee</Link>
              <Link to="/food/dried-fruits-nuts">Dried Fruits & Nuts</Link>
              <Link to="/food/sharbat">Sharbat</Link>
              <Link to="/food/achar-chatni">Achar & Chatni</Link>
            </div>
          </li>

          <li className="dropdown" onClick={() => handleDropdown('oil-herbs')}>
            <span>Oil  <RiArrowDropDownLine className={`dropdown-icon ${activeDropdown === 'oil-herbs' ? 'rotated' : ''}`} /></span>
            <div className={`dropdown-content ${activeDropdown === 'oil-herbs' ? 'show' : ''}`}>
              <Link to="/oil-herbs/essential-oils">Essential Oils</Link>
              <Link to="/oil-herbs/herbs-spices">Herbs & Spices</Link>
            </div>
          </li>

          <li className="dropdown" onClick={() => handleDropdown('sweetener-supplements')}>
            <span>Sweetener <RiArrowDropDownLine className={`dropdown-icon ${activeDropdown === 'sweetener-supplements' ? 'rotated' : ''}`} /></span>
            <div className={`dropdown-content ${activeDropdown === 'sweetener-supplements' ? 'show' : ''}`}>
              <Link to="/sweetener/natural-sweeteners">Natural Sweeteners</Link>
            </div>
          </li>
          <li><Link to="/supplements">Supplements</Link></li>
          <li><Link to="/beauty">Beauty</Link></li>
          <li><Link to="/drinks">Drinks</Link></li>
          <li><Link to="/mobile-laptop">Mobile </Link></li>
          <li><Link to="/mobile-laptop">Laptop</Link></li>
          <li><Link to="/perfumes">Perfumes</Link></li>
          <li><Link to="/supplements">Supplements</Link></li>
          <li><Link to="/toys-kids">Toys</Link></li>
          <li><Link to="/jewelry">Jewelry</Link></li>
          <li><Link to="/watches-glasses">Watches</Link></li>
          <li><Link to="/watches-glasses"> Glasses</Link></li>
          {/* <li><Link to="/gem-stones">Gem Stones</Link></li>
          <li><Link to="/hair-loss-products">Hair Loss Products</Link></li> */}
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
