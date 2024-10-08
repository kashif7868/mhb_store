// index.js
import { combineReducers } from "redux";
import cartReducer from "./cartSlice";  // Import the cart reducer

const rootReducer = combineReducers({
  cart: cartReducer,  // Add cartReducer to root
});

export default rootReducer;
