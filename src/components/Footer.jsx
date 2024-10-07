import React from 'react';
import '../assets/css/footer.css'; 
import mhbLogo from "../assets/images/flogo.png";
import { FaFacebook, FaInstagram, FaTiktok ,FaTruck, FaUndoAlt } from "react-icons/fa";
import { GiClothes, GiFoodTruck, GiLipstick, GiSmartphone } from "react-icons/gi";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Logo Section */}
        <div className="footer-section logo-section">
          <img src={mhbLogo} alt="Logo" className="footer-logo" />
        </div>

        {/* Category Section */}
        <div className="footer-section category-section">
          <h3>Categories</h3>
          <ul>
            <li><GiClothes /> Clothing</li>
            <li><GiFoodTruck /> Food</li>
            <li><GiLipstick /> Beauty</li>
            <li><GiSmartphone /> Gadgets</li>
          </ul>
        </div>

        {/* Payment Options */}
        <div className="footer-section payment-section">
          <h3>Payment Options</h3>
          <ul>
            <li> Visa Card</li>
            <li> Jazz Cash</li>
            <li> Easypaisa</li>
          </ul>
        </div>

        {/* About Section */}
        <div className="footer-section about-section">
          <h3>About Us</h3>
          <p>We provide the best products in Clothing, Food, Beauty, and Gadgets. Trusted by millions!</p>
        </div>

        {/* Contact Section */}
        <div className="footer-section contact-section">
          <h3>Contact Us</h3>
          <p>Email: info@example.com</p>
          <p>Phone: +123 456 7890</p>
        </div>

        {/* FAQ Section */}
        <div className="footer-section faq-section">
          <h3>FAQ</h3>
          <ul>
            <li><FaTruck /> Shipping & Delivery</li>
            <li><FaUndoAlt /> Return Policy</li>
            <li>Order Tracking</li>
          </ul>
        </div>

        {/* Social Links */}
        <div className="footer-section social-section">
          <h3>Follow Us</h3>
          <ul>
            <li><a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebook /></a></li>
            <li><a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a></li>
            <li><a href="https://tiktok.com" target="_blank" rel="noopener noreferrer"><FaTiktok /></a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
