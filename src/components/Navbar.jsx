import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import mhbLogo from "../assets/images/logo.png";
import { IoIosSearch } from "react-icons/io";
import { GiShoppingCart } from "react-icons/gi";
import { MdOutlineFavorite } from "react-icons/md";
import { FaBars, FaTimes } from "react-icons/fa";
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
                <FaTimes />
              </button>
            )}
          </label>
        </form>

        <div className="right-icons">
          <div className="fav-prodect-list-container">
            <Link to="/favourit-list">
              {cartCount > 0 && <span className="cart-badge-dot">{cartCount}</span>}
              <MdOutlineFavorite  className="icon" />
            </Link>
          </div>
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
          <li className="dropdown" onClick={() => handleDropdown('clothing')}>
            <span>Clothing <RiArrowDropDownLine className={`dropdown-icon ${activeDropdown === 'clothing' ? 'rotated' : ''}`} /></span>
            <div className={`dropdown-content ${activeDropdown === 'clothing' ? 'show' : ''}`}>
              <Link to="/clothing/women">Women</Link>
              <Link to="/clothing/men">Men</Link>
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
              <Link to="/food/edible-spices">Herbs & Spices</Link>
              <Link to="/food/sweeteners">Sweeteners</Link>
              <Link to="/food/supplements">Supplements</Link>
              <Link to="/food/drinks">Drinks</Link>
            </div>
          </li>

          <li className="dropdown" onClick={() => handleDropdown('cosmetics')}>
            <span>Cosmetics <RiArrowDropDownLine className={`dropdown-icon ${activeDropdown === 'cosmetics' ? 'rotated' : ''}`} /></span>
            <div className={`dropdown-content ${activeDropdown === 'cosmetics' ? 'show' : ''}`}>
              <Link to="/cosmetics/beauty">Beauty</Link>
              <Link to="/cosmetics/hair-care">Hair Care</Link>
              <Link to="/cosmetics/body-care">Body Care</Link>
              <Link to="/cosmetics/men-care">Men Care</Link>
              <Link to="/cosmetics/perfumes">Perfumes</Link>
              <Link to="/cosmetics/hair-loss-products">Hair Loss Products</Link>
            </div>
          </li>

          <li className="dropdown" onClick={() => handleDropdown('fashion')}>
            <span>Fashion <RiArrowDropDownLine className={`dropdown-icon ${activeDropdown === 'fashion' ? 'rotated' : ''}`} /></span>
            <div className={`dropdown-content ${activeDropdown === 'fashion' ? 'show' : ''}`}>
              <Link to="/fashion/jewelry">Jewelry</Link>
              <Link to="/fashion/gem-stones">Gem Stones</Link>
              <Link to="/fashion/watches-glasses">Watches & Glasses</Link>
            </div>
          </li>

          <li><Link to="/health-care">Health Care</Link></li>
          <li><Link to="/tech-hub">Tech Hub</Link></li>
          <li><Link to="/toys-kids">Toys</Link></li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
