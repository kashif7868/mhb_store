import React from 'react';
import { FaHeart, FaRegHeart } from 'react-icons/fa'; // Icons for heart
import { GiShoppingCart } from 'react-icons/gi'; // Icon for shopping cart
import '../../assets/css/menclothes.css'; // Import the CSS file
import productData from '../../data/product'; // Import the product data
import { useDispatch } from 'react-redux'; // For adding items to cart
import { addToCart } from '../../app/actions/actionsCart'; // Cart action
import { ToastContainer, toast } from 'react-toastify'; // Import ToastContainer and toast
import 'react-toastify/dist/ReactToastify.css'; // Import the toastify CSS

const MenClothing = () => {
    const dispatch = useDispatch();
    const [favorites, setFavorites] = React.useState([]); // State for favorite products

    // Toggle favorite functionality
    const toggleFavorite = (index) => {
        if (favorites.includes(index)) {
            setFavorites(favorites.filter(fav => fav !== index));
        } else {
            setFavorites([...favorites, index]);
        }
    };

    // Handle adding product to cart
    const handleAddToCart = (product) => {
        dispatch(addToCart(product));
        toast.success(`${product.name} added to cart!`);
    };

    // Handle product quick view
    const handleViewProduct = (product) => {
        // Define the logic for viewing the product details
        toast.info(`Viewing details for ${product.name}`);
    };

    return (
        <div className="products-container">
            <ToastContainer /> {/* Make sure ToastContainer is included */}
            {productData.map((product, index) => (
                <div className="product-card" key={index}>
                    <div className="sale-badge">Sale</div>
                    <img src={product.image} alt={product.name} className="product-image" />
                    <button className="quick-view-btn" onClick={() => handleViewProduct(product)}>Quick View</button>
                    <h4 className="product-name">{product.name}</h4>
                    <p className="product-price">
                        <span className="old-price">${product.originalPrice.toFixed(2)}</span> From <span className="new-price">${product.salePrice.toFixed(2)}</span>
                    </p>
                    <button className="quick-add-btn" onClick={() => handleAddToCart(product)}><GiShoppingCart />Quick Add</button>
                    <div className="favorite-icon" onClick={() => toggleFavorite(index)}>
                        {favorites.includes(index) ? <FaHeart /> : <FaRegHeart />}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default MenClothing;
