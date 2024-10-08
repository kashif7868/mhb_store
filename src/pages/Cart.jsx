import React from 'react';
import { useDispatch, useSelector } from 'react-redux'; // For accessing and dispatching cart actions
import { incrementQty, decrementQty, removeFromCart, clearCart, addToCart } from '../app/actions/actionsCart'; // Import actions
import '../assets/css/cart.css'; // Assuming you have cart CSS for styling
import productData from '../data/product'; // Assuming product data is available for featured products

const Cart = () => {
  const cart = useSelector((state) => state.cart.cart); // Access cart from Redux
  const dispatch = useDispatch();

  const handleIncrement = (product) => {
    dispatch(incrementQty(product));
  };

  const handleDecrement = (product) => {
    dispatch(decrementQty(product));
  };

  const handleRemove = (product) => {
    dispatch(removeFromCart(product));
  };

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + item.price * item.qty, 0).toFixed(2); // Calculate total price
  };

  const handleCheckout = () => {
    alert('Proceeding to Checkout...');
    // Add your checkout logic here
  };

  const featuredProducts = productData.slice(0, 3); 

  return (
    <div className="cart-container">
      <h3>Your Shopping Cart</h3>

      {cart.length > 0 ? (
        <>
          <ul className="cart-list">
            {cart.map((item) => (
              <li key={item.id} className="cart-item">
                <div className="cart-item-image">
                  <img src={item.image} alt={item.name} />
                </div>
                <div className="cart-item-details">
                  <h4>{item.name}</h4>
                  <p>Quantity: {item.qty}</p>
                  <p>Price: PKR {item.price}</p> {/* Updated to PKR */}
                  <div className="cart-item-buttons">
                    <button onClick={() => handleIncrement(item)}>+</button>
                    <button onClick={() => handleDecrement(item)}>-</button>
                    <button onClick={() => handleRemove(item)}>Remove</button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
          <p>Total: PKR <span>{getTotalPrice()}</span></p> {/* Updated to PKR */}
          <button onClick={handleClearCart}>Clear Cart</button>
          <button className="checkout-button" onClick={handleCheckout}>Checkout</button>
        </>
      ) : (
        <p>Your cart is empty</p>
      )}

      {/* Featured Products Section */}
      <div className="featured-products">
        <h3>Featured Products</h3>
        <ul className="featured-products-list">
          {featuredProducts.map((product) => (
            <li key={product.id} className="featured-product">
              <div className="featured-product-image">
                <img src={product.image} alt={product.name} />
              </div>
              <div className="featured-product-details">
                <h4>{product.name}</h4>
                <p>Price: PKR {product.price}</p> {/* Updated to PKR */}
                <button onClick={() => dispatch(addToCart(product))}>Add to Cart</button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Cart;
