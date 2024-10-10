import React from 'react';
import { useDispatch, useSelector } from 'react-redux'; 
import {
  incrementQty,
  decrementQty,
  removeFromCart,
  clearCart,
  addToCart
} from '../app/actions/actionsCart';
import { CiCircleRemove } from "react-icons/ci"; 
import '../assets/css/cart.css'; 
import productData from '../data/product'; 

const Cart = () => {
  const cart = useSelector((state) => state.cart.cart); 
  const dispatch = useDispatch();

  // Handle quantity change
  const handleQtyChange = (e, product) => {
    const newQty = Number(e.target.value);
    if (newQty > 0) {
      const diff = newQty - product.qty;
      if (diff > 0) {
        dispatch(incrementQty(product, diff));
      } else {
        dispatch(decrementQty(product, Math.abs(diff)));
      }
    }
  };

  // Handle product removal from cart
  const handleRemove = (product) => {
    dispatch(removeFromCart(product));
  };

  // Handle clearing the entire cart
  const handleClearCart = () => {
    dispatch(clearCart());
  };

  // Calculate the total price
  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + item.price * item.qty, 0).toFixed(2);
  };

  // Handle the checkout action (can be expanded for actual checkout process)
  const handleCheckout = () => {
    alert('Proceeding to Checkout...');
    // Add your checkout logic here
  };

  // For demonstration, we are using the first 3 products as featured products
  const featuredProducts = productData.slice(0, 3);

  return (
    <div className="cart-container">
      <h3>Your Shopping Cart</h3>

      {cart.length > 0 ? (
        <>
          <ul className="cart-list">
            {cart.map((item) => (
              <li key={item.id} className="cart-item">
                {/* Left side: Product Image */}
                <div className="cart-item-image">
                  <img src={item.image} alt={item.name} />
                </div>

                {/* Right side: Product Details */}
                <div className="cart-item-details">
                  <h4>{item.name}</h4>
                  <p>Price: PKR <s>{item.price}</s></p>
                  <p>Discounted Price: <strong>PKR {(item.price / 2).toFixed(2)}</strong></p>
                  <div className="cart-qty-container">
                    <label htmlFor={`qty-${item.id}`}>Qty: </label>
                    <input
                      id={`qty-${item.id}`}
                      type="number"
                      min="1"
                      value={item.qty}
                      onChange={(e) => handleQtyChange(e, item)}
                    />
                  </div>
                  <div className="products-details-container">
                    <h2>Product Detail</h2>
                    <p>{item.description}</p>
                  </div>
                  <div className="cart-item-remove">
                    <CiCircleRemove
                      onClick={() => handleRemove(item)}
                      size={24}
                      title="Remove item"
                      style={{ cursor: 'pointer' }}
                    />
                  </div>
                </div>
              </li>
            ))}
          </ul>

          {/* Cart total */}
          <p>Total: PKR <span>{getTotalPrice()}</span></p>

          {/* Clear Cart and Checkout buttons */}
          <div className="cart-actions">
            <button onClick={handleClearCart}>Clear Cart</button>
            <button className="checkout-button" onClick={handleCheckout}>Checkout</button>
          </div>
        </>
      ) : (
        <p>Your cart is empty</p>
      )}

      {/* Featured Products Section */}
      <div className="featured-products">
        <h3>Featured Products</h3>
        <ul className="featured-products-list">
          {featuredProducts.length > 0 ? (
            featuredProducts.map((product) => (
              <li key={product.id} className="featured-product">
                <div className="featured-product-image">
                  <img src={product.image} alt={product.name} />
                </div>
                <div className="featured-product-details">
                  <h4>{product.name}</h4>
                  <p>Price: PKR {product.price}</p>
                  {product.stock > 0 ? (
                    <>
                      <p>In Stock: {product.stock}</p>
                      <button onClick={() => dispatch(addToCart(product))}>Add to Cart</button>
                    </>
                  ) : (
                    <p className="out-of-stock">Out of Stock</p>
                  )}
                </div>
              </li>
            ))
          ) : (
            <p>No featured products available</p>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Cart;
