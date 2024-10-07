import React, { useState } from 'react';
import Slider from 'react-slick';
import { AiFillEye, AiFillCloseCircle } from "react-icons/ai";
import { FaHeart, FaRegHeart } from 'react-icons/fa';
import { GiShoppingCart } from "react-icons/gi";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../assets/css/home.css';
import cl1Image from '../assets/images/slider-images/cl-1.jpg';
import cl2Image from '../assets/images/slider-images/cl-2.jpg';
import cl3Image from '../assets/images/slider-images/cl-3.jpeg';
import productData from '../data/product'; // Import product data

const Home = () => {
  const [filteredCategory, setFilteredCategory] = useState('All');
  const [favoriteProducts, setFavoriteProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null); // State for selected product (for popup)

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    fade: true,
    arrows: true,
  };

  const images = [cl1Image, cl2Image, cl3Image];

  const handleCategoryClick = (category) => {
    setFilteredCategory(category);
  };

  const toggleFavorite = (productId) => {
    if (favoriteProducts.includes(productId)) {
      setFavoriteProducts(favoriteProducts.filter(id => id !== productId));
    } else {
      setFavoriteProducts([...favoriteProducts, productId]);
    }
  };

  const handleViewProduct = (product) => {
    setSelectedProduct(product); // Set the selected product for popup
  };

  const closePopup = () => {
    setSelectedProduct(null); // Clear the selected product (close popup)
  };

  const filteredProducts = filteredCategory === 'All'
    ? productData
    : productData.filter(product => product.category === filteredCategory.toLowerCase());

  const favoriteProductsList = productData.filter(product => favoriteProducts.includes(product.id));

  const convertToPKR = (priceInUSD) => priceInUSD * 300;

  return (
    <>
      <div className="home-slider-container">
        <Slider {...sliderSettings}>
          {images.map((image, index) => (
            <div key={index} className="slide">
              <img src={image} alt={`Slide ${index}`} className="slide-image" />
              <div className="slide-overlay">
                <div className="slide-text">
                  <h2>Welcome to MHB Store</h2>
                  <p>Find the best products at unbeatable prices!</p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>

      {/* Sub-navbar for categories */}
      <div className="main-container-product">
        <div className="sub-navbar-container">
          <ul className="subnavbar-list">
            {['All', 'Trending', 'Clothes', 'Beauty', 'Food', 'Gadgets', 'Kids Toys'].map((category) => (
              <li
                key={category}
                onClick={() => handleCategoryClick(category)}
                className={filteredCategory === category ? 'active' : ''}
              >
                {category}
              </li>
            ))}
          </ul>
        </div>

        {/* Product Grid */}
        <div className="product-grid-container">
          {filteredProducts.map((product) => (
            <div key={product.id} className="product-card">
              <div className="product-fav-view-container">
                <div className="favorite-icon" onClick={() => toggleFavorite(product.id)}>
                  {favoriteProducts.includes(product.id) ? <FaHeart className="fav-icon-filled" /> : <FaRegHeart className="fav-icon-empty" />}
                </div>
                <div className="view-product-container" onClick={() => handleViewProduct(product)}>
                  <AiFillEye className='view-icon' />
                </div>
              </div>
              <img src={product.image} alt={product.name} className="product-image" />
              <h3>{product.name}</h3>
              <p>{product.description}</p>
              <p className="discount-tag">50% Off</p>
              <p>Price: <s>PKR {convertToPKR(product.price)}</s></p>
              <p>Discounted Price: <strong>PKR {convertToPKR(product.price / 2)}</strong></p>
              <button className="add-to-cart-button"><GiShoppingCart className='cart-icon' /> Add to Cart</button>
            </div>
          ))}
        </div>
      </div>

      {/* Favorite Products Section */}
      {favoriteProductsList.length > 0 && (
        <div className="favorite-products-section">
          <h2>Your Favorite Products</h2>
          <div className="product-grid-container">
            {favoriteProductsList.map((product) => (
              <div key={product.id} className="product-card">
                <div className="favorite-icon" onClick={() => toggleFavorite(product.id)}>
                  {favoriteProducts.includes(product.id) ? <FaHeart className="fav-icon-filled" /> : <FaRegHeart className="fav-icon-empty" />}
                </div>
                <img src={product.image} alt={product.name} className="product-image" />
                <div className="product-details-container">
                  <h3>{product.name}</h3>
                  <p>{product.description}</p>
                  <p className="discount-tag">50% Off</p>
                  <p>Price: <s>PKR {convertToPKR(product.price)}</s></p>
                  <p>Discounted Price: <strong>PKR {convertToPKR(product.price / 2)}</strong></p>
                </div>
                <button className="add-to-cart-button"> <GiShoppingCart className='cart-icon' />  Add to Cart</button>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Popup for viewing product details */}
      {selectedProduct && (
        <div className="popup-overlay" onClick={closePopup}>
          <div className="popup-content" onClick={(e) => e.stopPropagation()}>
            <AiFillCloseCircle className="close-icon" onClick={closePopup} />
            <img src={selectedProduct.image} alt={selectedProduct.name} className="popup-product-image" />
            <h2>{selectedProduct.name}</h2>
            <p>{selectedProduct.description}</p>
            <p className="discount-tag">50% Off</p>
            <p>Price: <s>PKR {convertToPKR(selectedProduct.price)}</s></p>
            <p>Discounted Price: <strong>PKR {convertToPKR(selectedProduct.price / 2)}</strong></p>
            <button className="add-to-cart-button">
              <GiShoppingCart className='cart-icon' /> Add to Cart
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Home;
