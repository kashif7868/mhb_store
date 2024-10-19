import React, { useState } from 'react';
import { AiFillEye } from "react-icons/ai";
import { GiShoppingCart } from "react-icons/gi";
import { useDispatch } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Modal } from 'react-bootstrap';
import productData from '../data/product';
import { addToCart } from '../app/actions/actionsCart';
import '../assets/css/home.css';

const Home = () => {
    const dispatch = useDispatch();
    const [showModal, setShowModal] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState(null);

    const handleAddToCart = (item) => {
        dispatch(addToCart(item));
        toast.success(`${item.name} added to cart!`);
    };

    const handleQuickView = (item) => {
        setSelectedProduct(item);
        setShowModal(true);
    };

    return (
        <div className="home-container">
            {/* Banner Section */}
            <section className="banner">
                <div className="banner-content">
                    <h1>Flat 30% Off</h1>
                    <h2>MHB Store Collection</h2>
                    <p>Best sale of the year!</p>
                    <button className="shop-now">Shop Now</button>
                </div>
                <img src={require('../assets/images/slider-images/cl-2.jpg')} alt="Banner" className="banner-img" />
            </section>

            {/* Explore Categories Section */}
            <section className="explore-categories">
                <div className="left-image">
                    <img src={require('../assets/images/flogo.png')} alt="Explore Categories" className="explore-img" />
                    <span className="sale-badge">50% Off</span>
                </div>
                <div className="right-categories">
                    <h2>Explore Categories</h2>
                    <div className="category-grid">
                        <div className="category-item">
                            <img src={require('../assets/images/products/clothe.webp')} alt="Clothing" />
                            <p>Clothing</p>
                            <span>49 items</span>
                        </div>
                        <div className="category-item">
                            <img src={require('../assets/images/products/gadgets.webp')} alt="Gadgets" />
                            <p>Gadgets</p>
                            <span>485 items</span>
                        </div>
                        <div className="category-item">
                            <img src={require('../assets/images/products/beauty.webp')} alt="Beauty" />
                            <p>Beauty</p>
                            <span>291 items</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Product Listing Section */}
            <section className="products">
                <h2>Popular Products</h2>
                <div className="product-grid">
                    {productData.map((item, index) => (
                        <div key={index} className="product-card">
                            <span className="sale-badge">Sale</span>
                            <img src={item.image} alt={item.name} className="product-img" />
                            <h3>{item.name}</h3>
                            <p>
                                <span className="sale-price">${item.salePrice}</span>
                                <span className="original-price">${item.originalPrice}</span>
                            </p>
                            <div className="product-actions">
                                <button className="quick-add" onClick={() => handleAddToCart(item)}>
                                    <GiShoppingCart /> Quick Add
                                </button>
                                <button className="quick-view" onClick={() => handleQuickView(item)}>
                                    <AiFillEye /> Quick View
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Quick View Modal */}
            {selectedProduct && (
                <Modal show={showModal} onHide={() => setShowModal(false)} centered>
                    <Modal.Header closeButton>
                        <Modal.Title>{selectedProduct.name}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div className="quick-view-container">
                            <img src={selectedProduct.image} alt={selectedProduct.name} className="quick-view-img" />
                            <div className="quick-view-details">
                                <p>Price: ${selectedProduct.salePrice}</p>
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

            {/* Notification for adding to cart */}
            <ToastContainer />
        </div>
    );
};

export default Home;
