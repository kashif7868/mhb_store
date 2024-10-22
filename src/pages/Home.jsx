import React, { useState } from "react";
import "../assets/css/home.css";
import { FaStar } from 'react-icons/fa';
import productData from '../data/product';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css'; // Importing necessary CSS for react-slick
import leftsideImage from '../assets/images/slider-images/left-side-image.jpeg'; // Path to your uploaded image
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../app/actions/actionsCart';
import { addToFavorites, removeFromFavorites } from '../app/reducers/favoritesSlice';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
import { MdFavoriteBorder, MdFavorite } from "react-icons/md";


const Home = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [quickViewProduct, setQuickViewProduct] = useState(null);
    const favorites = useSelector((state) => state.favorites.favorites); // Get favorites from Redux store
    const cart = useSelector((state) => state.cart.cart); // Get cart from Redux store
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,  // Display 3 slides at a time
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2, // Adjust for medium screens
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1, // Adjust for small screens
                    slidesToScroll: 1,
                },
            },
        ],
    };
    // Check if a product is already in the favorites list
    const isFavorite = (productId) => {
        return favorites.some((fav) => fav.id === productId);
    };

    // Check if a product is already in the cart
    const isInCart = (productId) => {
        return cart.some((item) => item.id === productId);
    };

    const handleAddToCart = (product) => {
        if (isInCart(product.id)) {
            toast.info(`${product.name} is already in the cart!`);
        } else {
            dispatch(addToCart(product));
            toast.success(`${product.name} added to the cart!`);
        }
    };

    const handleBuyNow = (product) => {
        if (!isInCart(product.id)) {
            dispatch(addToCart(product));
        }
        navigate('/checkout');
    };

    const handleQuickView = (product) => {
        setQuickViewProduct(product);
        openQuickView();
    };

    const openQuickView = () => {
        document.getElementById('quickViewModal').style.display = 'flex';
    };

    const closeQuickView = () => {
        document.getElementById('quickViewModal').style.display = 'none';
    };

    // Toggle favorite status
    const handleFavoriteToggle = (product) => {
        if (isFavorite(product.id)) {
            dispatch(removeFromFavorites(product));
            toast.info(`${product.name} removed from favorites!`);
        } else {
            dispatch(addToFavorites(product));
            toast.success(`${product.name} added to favorites!`);
        }
    };

    return (
        <div>
            <div className="slider-container">
                <Slider {...settings}>
                    {/* Slide 1 */}
                    <div className="slider-item">
                        <div className="slider-content">
                            <div className="text-area">
                                <p className="trade-in-offer">Clothing Deals</p>
                                <h2 className="super-value">Super Value Deals on Clothing</h2>
                                <p className="description">Up to 70% off on all clothing items!</p>
                                <a href="/clothing" className="category-link">Shop Clothing</a>
                            </div>
                            <div className="image-area">
                                <img src={leftsideImage} alt="Clothing Promotion" className="promo-image" />
                            </div>
                        </div>
                    </div>

                    {/* Slide 2 */}
                    <div className="slider-item">
                        <div className="slider-content">
                            <div className="text-area">
                                <p className="trade-in-offer">Food Offers</p>
                                <h2 className="super-value">Save Big on Food Products</h2>
                                <p className="description">Exclusive deals on fresh and packaged foods.</p>
                                <a href="/food" className="category-link">Shop Food</a>
                            </div>
                            <div className="image-area">
                                <img src={leftsideImage} alt="Food Promotion" className="promo-image" />
                            </div>
                        </div>
                    </div>

                    {/* Slide 3 */}
                    <div className="slider-item">
                        <div className="slider-content">
                            <div className="text-area">
                                <p className="trade-in-offer">Cosmetics Sale</p>
                                <h2 className="super-value">Top Deals on Cosmetics</h2>
                                <p className="description">Get the best beauty products at discounted prices.</p>
                                <a href="/cosmetics" className="category-link">Shop Cosmetics</a>
                            </div>
                            <div className="image-area">
                                <img src={leftsideImage} alt="Cosmetics Promotion" className="promo-image" />
                            </div>
                        </div>
                    </div>

                    {/* Slide 4 */}
                    <div className="slider-item">
                        <div className="slider-content">
                            <div className="text-area">
                                <p className="trade-in-offer">Fashion Trends</p>
                                <h2 className="super-value">Latest Fashion Deals</h2>
                                <p className="description">Discover trending styles at affordable prices.</p>
                                <a href="/fashion" className="category-link">Shop Fashion</a>
                            </div>
                            <div className="image-area">
                                <img src={leftsideImage} alt="Fashion Promotion" className="promo-image" />
                            </div>
                        </div>
                    </div>

                    {/* Slide 5 */}
                    <div className="slider-item">
                        <div className="slider-content">
                            <div className="text-area">
                                <p className="trade-in-offer">Health Care Products</p>
                                <h2 className="super-value">Save on Health Care</h2>
                                <p className="description">Best offers on health and wellness products.</p>
                                <a href="/health-care" className="category-link">Shop Health Care</a>
                            </div>
                            <div className="image-area">
                                <img src={leftsideImage} alt="Health Care Promotion" className="promo-image" />
                            </div>
                        </div>
                    </div>

                    {/* Slide 6 */}
                    <div className="slider-item">
                        <div className="slider-content">
                            <div className="text-area">
                                <p className="trade-in-offer">Tech Hub</p>
                                <h2 className="super-value">Great Deals on Tech Products</h2>
                                <p className="description">Exclusive discounts on the latest gadgets.</p>
                                <a href="/tech-hub" className="category-link">Shop Tech Hub</a>
                            </div>
                            <div className="image-area">
                                <img src={leftsideImage} alt="Tech Hub Promotion" className="promo-image" />
                            </div>
                        </div>
                    </div>

                    {/* Slide 7 */}
                    <div className="slider-item">
                        <div className="slider-content">
                            <div className="text-area">
                                <p className="trade-in-offer">Toy Deals</p>
                                <h2 className="super-value">Amazing Discounts on Toys</h2>
                                <p className="description">Discover the best deals on toys for kids of all ages.</p>
                                <a href="/toys" className="category-link">Shop Toys</a>
                            </div>
                            <div className="image-area">
                                <img src={leftsideImage} alt="Toys Promotion" className="promo-image" />
                            </div>
                        </div>
                    </div>
                </Slider>
            </div>


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
                            <img src={require('../assets/images/products/clothe.webp')} alt="Cotton" />
                            <p>Cotton</p>
                            <span>49 items</span>
                        </div>
                        <div className="category-item">
                            <img src={require('../assets/images/products/clothe.webp')} alt="Lawn" />
                            <p>Lawn</p>
                            <span>35 items</span>
                        </div>
                        <div className="category-item">
                            <img src={require('../assets/images/products/clothe.webp')} alt="Cotton Silk" />
                            <p>Cotton Silk</p>
                            <span>22 items</span>
                        </div>
                        <div className="category-item">
                            <img src={require('../assets/images/products/clothe.webp')} alt="Silk" />
                            <p>Silk</p>
                            <span>28 items</span>
                        </div>
                        <div className="category-item">
                            <img src={require('../assets/images/products/clothe.webp')} alt="Organza" />
                            <p>Organza</p>
                            <span>18 items</span>
                        </div>
                        <div className="category-item">
                            <img src={require('../assets/images/products/clothe.webp')} alt="Velvet" />
                            <p>Velvet</p>
                            <span>14 items</span>
                        </div>
                        <div className="category-item">
                            <img src={require('../assets/images/products/clothe.webp')} alt="Khaddar" />
                            <p>Khaddar</p>
                            <span>32 items</span>
                        </div>
                        <div className="category-item">
                            <img src={require('../assets/images/products/clothe.webp')} alt="Satin" />
                            <p>Satin</p>
                            <span>21 items</span>
                        </div>
                        <div className="category-item">
                            <img src={require('../assets/images/products/clothe.webp')} alt="Cambric" />
                            <p>Cambric</p>
                            <span>16 items</span>
                        </div>
                        <div className="category-item">
                            <img src={require('../assets/images/products/clothe.webp')} alt="Linen" />
                            <p>Linen</p>
                            <span>29 items</span>
                        </div>
                    </div>
                </div>
            </section>
            {/* Products Section */}
            <div className="product-grid">
                {productData.map((product) => (
                    <div key={product.id} className="product-card">
                        <div className="sale-badge">Sale</div>
                        <div className="product-image">
                            <img src={product.image} alt={product.name} className="hover-zoom" />
                            <button className="quick-view-btn" onClick={() => handleQuickView(product)}>
                                Quick View
                            </button>
                        </div>
                        <div className="product-info">
                            <p className="product-name">{product.name}</p>
                            <div className="price">
                                <span className="old-price">₨{product.originalPrice.toFixed(2)}</span>
                                <span className="new-price">From ₨{product.salePrice.toFixed(2)}</span>
                            </div>
                            <div className="rating">
                                {[...Array(5)].map((_, i) => (
                                    <FaStar key={i} className="star" color={i < Math.floor(product.rating) ? '#ffc107' : '#e4e5e9'} />
                                ))}
                                <span className="rating-value">{product.rating.toFixed(1)}</span>
                            </div>
                            <div className="action-buttons">
                                <button className="quick-add-btn" onClick={() => handleAddToCart(product)}>Quick Add</button>
                                <button className="wishlist-btn" onClick={() => handleFavoriteToggle(product)}>
                                    {isFavorite(product.id) ? (
                                        <MdFavorite style={{ color: 'red' }} />
                                    ) : (
                                        <MdFavoriteBorder />
                                    )}
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Quick View Modal */}
            <div id="quickViewModal" className="quick-view-modal" style={{ display: 'none' }}>
                <div className="modal-content">
                    <button className="close-modal" onClick={closeQuickView}>X</button>
                    {quickViewProduct && (
                        <>
                            <div className="modal-left">
                                <img src={quickViewProduct.image} alt={quickViewProduct.name} className="modal-product-image" />
                            </div>
                            <div className="modal-right">
                                <h2>{quickViewProduct.name}</h2>
                                <h1>Product Details</h1>
                                <p>{quickViewProduct.summary}</p>
                                <div className="price">
                                    <span className="old-price">₨{quickViewProduct.originalPrice?.toFixed(2)}</span>
                                    <span className="new-price">From ₨{quickViewProduct.salePrice?.toFixed(2)}</span>
                                </div>
                                <div className="rating">
                                    {[...Array(5)].map((_, i) => (
                                        <FaStar key={i} className="star" color={i < Math.floor(quickViewProduct.rating) ? '#ffc107' : '#e4e5e9'} />
                                    ))}
                                    <span className="rating-value">{quickViewProduct.rating?.toFixed(1)}</span>
                                </div>

                                {quickViewProduct.sizes?.length > 0 && (
                                    <div className="size-options">
                                        <span>Size:</span>
                                        {quickViewProduct.sizes.map((size, i) => (
                                            <button key={i} className="size-btn">{size}</button>
                                        ))}
                                    </div>
                                )}

                                {quickViewProduct.colors?.length > 0 && (
                                    <div className="color-options">
                                        <span>Color:</span>
                                        {quickViewProduct.colors.map((color, i) => (
                                            <button key={i} className="color-btn" style={{ backgroundColor: color }}></button>
                                        ))}
                                    </div>
                                )}

                                <div className="quantity-control">
                                    <span>Quantity:</span>
                                    <input type="number" min="1" defaultValue="1" />
                                </div>

                                <div className="modal-action-buttons">
                                    <button className="modal-add-to-cart" onClick={() => handleAddToCart(quickViewProduct)}>
                                        Add To Cart
                                    </button>
                                    <button className="modal-buy-now" onClick={() => handleBuyNow(quickViewProduct)}>
                                        Buy Now
                                    </button>
                                </div>
                            </div>
                        </>
                    )}
                </div>
            </div>

            <ToastContainer position="bottom-right" />
        </div>
    );
};

export default Home;
