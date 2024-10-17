import React, { useState } from 'react';
import '../../assets/css/womenClothing.css';
import { useDispatch } from 'react-redux';
import { addToCart } from "../../app/actions/actionsCart";
import productData from '../../data/product';
import { GiShoppingCart } from "react-icons/gi";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { AiFillEye, AiFillCloseCircle } from "react-icons/ai";
import { ToastContainer, toast } from 'react-toastify';
import { IoFilterSharp } from "react-icons/io5";
import 'react-toastify/dist/ReactToastify.css';
import { motion } from 'framer-motion';

const WomenClothing = () => {
  const [filterVisible, setFilterVisible] = useState(false);
  const [favoriteProducts, setFavoriteProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(6);
  const dispatch = useDispatch();

  const toggleFilter = () => setFilterVisible(!filterVisible);

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
    toast.success(`${product.name} added to cart!`);
  };

  const toggleFavorite = (productId) => {
    setFavoriteProducts((prevFavorites) =>
      prevFavorites.includes(productId)
        ? prevFavorites.filter((id) => id !== productId)
        : [...prevFavorites, productId]
    );
  };

  const handleViewProduct = (product) => setSelectedProduct(product);

  const closePopup = () => setSelectedProduct(null);

  const convertToPKR = (price) => price.toLocaleString('en-PK', {
    style: 'currency',
    currency: 'PKR'
  });

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = productData.slice(indexOfFirstProduct, indexOfLastProduct);
  const totalPages = Math.ceil(productData.length / productsPerPage);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <>
      <div className="w-clothes-banner-container">
        <div className="clothes-banner">
          <motion.h2
            initial={{ x: "-100vw" }}
            animate={{ x: 0 }}
            transition={{ type: "spring", stiffness: 50, damping: 10 }}
          >
            #CLOTHES
          </motion.h2>
        </div>
      </div>
      <div className="women-clothing-container side-bar">
        <div className="top-sub-category-icons">
          <ul className="sub-category-list">
            <li>Cotton</li>
            <li>Cotton Blends</li>
            <li>Linen</li>
            <li>Lawn</li>
            <li>Khaddar</li>
            <li>Karandi</li>
            <li>Wash & Wear</li>
            <li>Boski</li>
          </ul>
          <div className="filter-toggle-icon" onClick={toggleFilter}>
            <IoFilterSharp />
          </div>
        </div>
        {filterVisible && (
          <div className="women-filter-sub-navbar-container">
            <div className="filter-section">
              <h4>Category</h4>
              <ul>
                <li>Pret & Ready to Wear</li>
                <li>FESTIVE</li>
                <li>SALT</li>
              </ul>
            </div>

            <div className="filter-section">
              <h4>Biggest Discount</h4>
              <ul>
                <li>11% to 20%</li>
                <li>21% to 30%</li>
                <li>31% to 40%</li>
                <li>41% to 50%</li>
              </ul>
            </div>

            <div className="filter-section">
              <h4>Ready To Wear Type</h4>
              <ul>
                <li>2 Piece</li>
                <li>3 Piece</li>
              </ul>
            </div>

            <div className="filter-section">
              <h4>Price</h4>
              <ul>
                <li>PKR 0 - PKR 3,000</li>
                <li>PKR 3,000 - PKR 6,000</li>
                <li>PKR 6,000 - PKR 9,000</li>
                <li>PKR 9,000 - PKR 12,000</li>
                <li>PKR 12,000 - PKR 15,000</li>
                <li>PKR 15,000 - PKR 18,000</li>
                <li>PKR 18,000 - PKR 21,000</li>
              </ul>
            </div>

            <div className="filter-section">
              <h4>Product Type</h4>
              <ul>
                <li>2PC</li>
                <li>3PC</li>
              </ul>
            </div>
          </div>
        )}
      </div>


      <div className="product-grid-container">
        {currentProducts.map((product) => (
          <div key={product.id} className="product-card">
            <div className="product-fav-view-container">
              <div className="favorite-icon" onClick={() => toggleFavorite(product.id)}>
                {favoriteProducts.includes(product.id)
                  ? <FaHeart className="fav-icon-filled" />
                  : <FaRegHeart className="fav-icon-empty" />}
              </div>
              <div className="view-product-container" onClick={() => handleViewProduct(product)}>
                <AiFillEye className="view-icon" />
              </div>
            </div>
            <img src={product.image} alt={product.name} className="product-image" />
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <p className="discount-tag">30% Off</p>
            <p>Price: <s>{convertToPKR(product.price)}</s></p>
            <p>Discounted Price: <strong>{convertToPKR(product.price * 0.7)}</strong></p>
            <button
              className="add-to-cart-button"
              onClick={() => handleAddToCart(product)}
            >
              <GiShoppingCart className="cart-icon" /> Add to Cart
            </button>
          </div>
        ))}
      </div>

      <div className="pagination-container">
        <button
          className="pagination-button"
          onClick={() => paginate(currentPage - 1)}
          disabled={currentPage === 1}
        >
          &lt;
        </button>
        {[...Array(totalPages).keys()].map((number) => (
          <button
            key={number}
            onClick={() => paginate(number + 1)}
            className={currentPage === number + 1 ? 'active' : ''}
          >
            {number + 1}
          </button>
        ))}
        <button
          className="pagination-button"
          onClick={() => paginate(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          &gt;
        </button>
      </div>

      <ToastContainer />

      {selectedProduct && (
        <div className="popup-overlay" onClick={closePopup}>
          <div className="popup-content" onClick={(e) => e.stopPropagation()}>
            <AiFillCloseCircle className="close-icon" onClick={closePopup} />
            <img src={selectedProduct.image} alt={selectedProduct.name} className="popup-product-image" />
            <h2>{selectedProduct.name}</h2>
            <p>{selectedProduct.description}</p>
            <p className="discount-tag">30% Off</p>
            <p>Price: <s>{convertToPKR(selectedProduct.price)}</s></p>
            <p>Discounted Price: <strong>{convertToPKR(selectedProduct.price * 0.7)}</strong></p>
            <button
              className="add-to-cart-button"
              onClick={() => handleAddToCart(selectedProduct)}
            >
              <GiShoppingCart className="cart-icon" /> Add to Cart
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default WomenClothing;
