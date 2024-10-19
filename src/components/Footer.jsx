import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import '../assets/css/footer.css';
import mhbLogo from "../assets/images/logo.png";
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";
import { MdLocationOn, MdEmail, MdPhone } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Logo Section */}
        <motion.div 
          className="footer-section logo-section"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <img src={mhbLogo} alt="Logo" className="footer-logo" />
          <p>MHB Store is your trusted marketplace, offering a wide range of products at unbeatable prices. Shop with us for the best deals and quality service.</p>
          <div className="app-store-links">
            <a href="https://play.google.com/store" target="_blank" rel="noopener noreferrer">
              <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Google Play" className="store-badge" />
            </a>
            <a href="https://www.apple.com/app-store/" target="_blank" rel="noopener noreferrer">
              <img src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg" alt="App Store" className="store-badge" />
            </a>
          </div>
        </motion.div>

        {/* Category Section */}
        <motion.div 
          className="footer-section category-section"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <h3>Category</h3>
          <ul>
            <li><Link to="/category/clothing">Clothing</Link></li>
            <li><Link to="/category/food">Food</Link></li>
            <li><Link to="/category/cosmetics">Cosmetics</Link></li>
            <li><Link to="/category/fashion">Fashion</Link></li>
            <li><Link to="/category/health-care">Health Care</Link></li>
            <li><Link to="/category/tech-hub">Tech Hub</Link></li>
            <li><Link to="/category/toys">Toys</Link></li>
          </ul>
        </motion.div>

        {/* Company Section */}
        <motion.div 
          className="footer-section company-section"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          <h3>Company</h3>
          <ul>
            <li><Link to="/about-us">About Us</Link></li>
            <li><Link to="/delivery">Delivery</Link></li>
            <li><Link to="/legal-notice">Legal Notice</Link></li>
            <li><Link to="/terms-conditions">Terms & Conditions</Link></li>
            <li><Link to="/secure-payment">Secure Payment</Link></li>
            <li><Link to="/contact-us">Contact Us</Link></li>
          </ul>
        </motion.div>

        {/* Account Section */}
        <motion.div 
          className="footer-section account-section"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          <h3>Account</h3>
          <ul>
            <li><Link to="/sign-in">Sign In</Link></li>
            <li><Link to="/cart">View Cart</Link></li>
            <li><Link to="/return-policy">Return Policy</Link></li>
            <li><Link to="/vendor">Become a Vendor</Link></li>
            <li><Link to="/payments">Payments</Link></li>
          </ul>
        </motion.div>

        {/* Contact Section */}
        <motion.div 
          className="footer-section contact-section"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
        >
          <h3>Contact</h3>
          <ul>
            <li><MdLocationOn /> Gulburg, Al-Lateef Palaza, Lahore, Office No 65.</li>
            <li><MdPhone /> <a href="tel:+923004645503">+92300-4645503</a></li>
            <li><MdEmail /> <a href="mailto:mhbstore@gmail.com">mhbstore@gmail.com</a></li>
          </ul>
          <div className="social-links">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
          </div>
        </motion.div>
      </div>
      <div className="footer-bottom">
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
        >
          Copyright © 2024 MHB Store all rights reserved.
        </motion.p>
        <motion.div 
          className="payment-options"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
        >
          <img src="https://www.pngkey.com/png/full/1-11772_visa-master-card-paypal.png" alt="Payment Options" />
        </motion.div>
      </div>
    </footer>
  );
}

export default Footer;
