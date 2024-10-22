import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromFavorites } from '../app/reducers/favoritesSlice';  // Import remove action
import { addToCart } from '../app/actions/actionsCart'; // Import add to cart action
import { IoHeartDislikeCircleOutline } from "react-icons/io5";  // Import remove favorite icon
import { FaShoppingCart, FaStar } from 'react-icons/fa';  // Icon for adding to cart and star ratings

const FavouritList = () => {
  const favorites = useSelector((state) => state.favorites.favorites); // Get favorites from Redux
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Favorite Products</h1>
      {favorites.length === 0 ? (
        <p>No favorite products yet.</p>
      ) : (
        <div className="product-grid">
          {favorites.map((product, index) => (
            <div key={index} className="product-card">
              <div className="product-image">
                <img src={product.image} alt={product.name} />
              </div>
              <div className="product-info">
                <p className="product-name">{product.name}</p>
                
                {/* Display the price with original and sale prices */}
                <div className="price">
                  <span className="old-price">₨{product.originalPrice.toFixed(2)}</span>
                  <span className="new-price">From ₨{product.salePrice.toFixed(2)}</span>
                </div>
                
                {/* Display the product rating */}
                <div className="rating">
                  {[...Array(5)].map((_, i) => (
                    <FaStar
                      key={i}
                      className="star"
                      color={i < Math.floor(product.rating) ? '#ffc107' : '#e4e5e9'}
                    />
                  ))}
                  <span className="rating-value">{product.rating.toFixed(1)}</span>
                </div>

                <div className="action-buttons">
                  <button
                    className="remove-btn"
                    onClick={() => dispatch(removeFromFavorites(product))}
                    title="Remove from Favorites"
                  >
                    <IoHeartDislikeCircleOutline size={24} color="red" />  {/* Remove favorite icon */}
                  </button>
                  <button
                    className="add-to-cart-btn"
                    onClick={() => dispatch(addToCart(product))}
                    title="Add to Cart"
                  >
                    <FaShoppingCart size={24} color="green" />  {/* Add to cart icon */}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default FavouritList;
