import { configureStore } from '@reduxjs/toolkit';
import cartReducer from '../app/reducers/cartSlice';
import favoritesReducer from '../app/reducers/favoritesSlice'; // Import the favorites reducer

const store = configureStore({
  reducer: {
    cart: cartReducer, 
    favorites: favoritesReducer,  // Add favorites to the store
  },
});

export default store;
