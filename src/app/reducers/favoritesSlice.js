import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  favorites: [], // List of favorite products
};

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    addToFavorites: (state, action) => {
      const existingProduct = state.favorites.find(item => item.id === action.payload.id);
      if (!existingProduct) {
        state.favorites.push(action.payload); // Add the product to favorites if not already present
      }
    },
    removeFromFavorites: (state, action) => {
      state.favorites = state.favorites.filter(item => item.id !== action.payload.id); // Remove the product by ID
    },
  },
});

export const { addToFavorites, removeFromFavorites } = favoritesSlice.actions;
export default favoritesSlice.reducer;
