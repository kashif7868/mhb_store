import React from "react";
import { FaShoppingCart } from 'react-icons/fa'; // Import cart icon
import "../assets/css/preloader.css"; // Import CSS file for styling

const Preloader = () => {
  return (
    <div className="preloader-container">
      <div className="preloader-icon">
        <FaShoppingCart className="shopping-cart-icon" />
      </div>
    </div>
  );
};

export default Preloader;
