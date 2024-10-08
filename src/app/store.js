// store.js
import { configureStore } from '@reduxjs/toolkit';
import cartReducer from '../app/reducers/cartSlice';  // Import cart reducer

const store = configureStore({
  reducer: {
    cart: cartReducer,  // Combine reducers here
  },
});

export default store;
