import React, { useState } from 'react';
import '../../assets/css/womenClothing.css';
import { useDispatch } from 'react-redux';
import { addToCart } from "../../app/actions/actionsCart";
import productData from '../../data/product';
import { GiShoppingCart } from "react-icons/gi";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { AiFillEye } from "react-icons/ai";
import { ToastContainer, toast } from 'react-toastify';
import { IoFilterSharp } from "react-icons/io5";
import 'react-toastify/dist/ReactToastify.css';
import Modal from 'react-bootstrap/Modal'; 

const WomenClothing = () => {
  const [filterVisible, setFilterVisible] = useState(false);
  const [favoriteProducts, setFavoriteProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(6);
  const [showModal, setShowModal] = useState(false);
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

  const handleViewProduct = (product) => {
    setSelectedProduct(product);
    setShowModal(true);
  };

  const closePopup = () => {
    setSelectedProduct(null);
    setShowModal(false);
  };

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = productData.slice(indexOfFirstProduct, indexOfLastProduct);
  const totalPages = Math.ceil(productData.length / productsPerPage);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <>
      {/* Updated Banner Section */}
      <section className="explore-categories">
        <div className="left-image">
          <img src={require('../../assets/images/flogo.png')} alt="Explore Categories" className="explore-img" />
          <span className="sale-badge">50% Off</span>
        </div>
        <div className="right-categories">
          <h2>Explore Categories</h2>
          <div className="category-grid">
            <div className="category-item">
              <img src={require('../../assets/images/products/clothe.webp')} alt="Cotton" />
              <p>Cotton</p>
              <span>49 items</span>
            </div>
            <div className="category-item">
              <img src={require('../../assets/images/products/clothe.webp')} alt="Lawn" />
              <p>Lawn</p>
              <span>35 items</span>
            </div>
            <div className="category-item">
              <img src={require('../../assets/images/products/clothe.webp')} alt="Cotton Silk" />
              <p>Cotton Silk</p>
              <span>22 items</span>
            </div>
            <div className="category-item">
              <img src={require('../../assets/images/products/clothe.webp')} alt="Silk" />
              <p>Silk</p>
              <span>28 items</span>
            </div>
            <div className="category-item">
              <img src={require('../../assets/images/products/clothe.webp')} alt="Organza" />
              <p>Organza</p>
              <span>18 items</span>
            </div>
            <div className="category-item">
              <img src={require('../../assets/images/products/clothe.webp')} alt="Velvet" />
              <p>Velvet</p>
              <span>14 items</span>
            </div>
            <div className="category-item">
              <img src={require('../../assets/images/products/clothe.webp')} alt="Khaddar" />
              <p>Khaddar</p>
              <span>32 items</span>
            </div>
            <div className="category-item">
              <img src={require('../../assets/images/products/clothe.webp')} alt="Satin" />
              <p>Satin</p>
              <span>21 items</span>
            </div>
            <div className="category-item">
              <img src={require('../../assets/images/products/clothe.webp')} alt="Cambric" />
              <p>Cambric</p>
              <span>16 items</span>
            </div>
            <div className="category-item">
              <img src={require('../../assets/images/products/clothe.webp')} alt="Linen" />
              <p>Linen</p>
              <span>29 items</span>
            </div>
          </div>
        </div>
      </section>

      <div className="women-clothing-container side-bar">
        <div className="top-sub-category-icons">
          <ul className="sub-category-list">
            {/* Sub-categories */}
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

      {/* Popular Products Section */}
      <section className="products">
        <h2>Popular Products</h2>
        <div className="product-grid">
          {currentProducts.map((item, index) => (
            <div key={index} className="product-card">
              <span className="sale-badge">Sale</span>
              <img src={item.image} alt={item.name} className="product-img" />
              <h3>{item.name}</h3>
              <p>
                <span className="sale-price">PKR {item.salePrice}</span>
                <span className="original-price">PKR {item.originalPrice}</span>
              </p>
              <div className="product-actions">
                <button className="quick-add" onClick={() => handleAddToCart(item)}>
                  <GiShoppingCart /> Quick Add
                </button>
                <button className="quick-view" onClick={() => handleViewProduct(item)}>
                  <AiFillEye /> Quick View
                </button>
                <button onClick={() => toggleFavorite(item.id)} className="favorite-btn">
                  {favoriteProducts.includes(item.id) ? <FaHeart color="red" /> : <FaRegHeart />}
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Quick View Modal */}
      {selectedProduct && (
        <Modal show={showModal} onHide={closePopup} centered>
          <Modal.Header closeButton>
            <Modal.Title>{selectedProduct.name}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="quick-view-container">
              <img src={selectedProduct.image} alt={selectedProduct.name} className="quick-view-img" />
              <div className="quick-view-details">
                <p>Price: PKR {selectedProduct.salePrice}</p>
                <p>Availability: In Stock</p>
                <div className="quantity-section">
                  <label htmlFor="quantity">Quantity:</label>
                  <input type="number" id="quantity" name="quantity" defaultValue="1" min="1" />
                </div>
                <button className="add-to-cart-btn" onClick={() => handleAddToCart(selectedProduct)}>
                  Add To Cart
                </button>
              </div>
            </div>
          </Modal.Body>
        </Modal>
      )}

      <ToastContainer />

      {/* Pagination */}
      <div className="pagination">
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index + 1}
            className={currentPage === index + 1 ? 'active' : ''}
            onClick={() => paginate(index + 1)}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </>
  );
};

export default WomenClothing;
