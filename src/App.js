import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import SignIn from "./components/user/SignIn";
import SignUp from "./components/user/SignUp";
import ShopPage from "./pages/Shop";
import FavouritLis from "./pages/FavouritList";
import CartPage from "./pages/Cart";
import Preloader from "./components/Preloader";
import useNavigationLoader from "./hooks/useNavigationLoader";

// Category pages
import WomenClothing from "./pages/Clothing/WomenClothing";
import MenClothing from "./pages/Clothing/MenClothing";
import KidsClothing from "./pages/Clothing/KidsClothing";
import DryFruit from "./pages/Food/DryFruit";
import DesiGhee from "./pages/Food/DesiGhee";
import Honey from "./pages/Food/Honey";
import MobilePage from "./pages/Gadgets/Mobile";
import SearchResultsPage from "./pages/SearchResultsPage"; // Import SearchResultsPage

const AppContent = () => {
  const loading = useNavigationLoader();

  return (
    <>
      {loading ? <Preloader /> : <>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sign_in" element={<SignIn />} />
          <Route path="/sign_up" element={<SignUp />} />
          <Route path="/shop" element={<ShopPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/favourit-list" element={<FavouritLis />} />
          {/* Search Results Route */}
          <Route path="/search" element={<SearchResultsPage />} /> 
          {/* Category routes */}
          <Route path="/clothing/women" element={<WomenClothing />} />
          <Route path="/clothing/men" element={<MenClothing />} />
          <Route path="/clothing/kids" element={<KidsClothing />} />
          <Route path="/food/dry-fruit" element={<DryFruit />} />
          <Route path="/food/desi-ghee" element={<DesiGhee />} />
          <Route path="/food/honey" element={<Honey />} />
          <Route path="/gadgets/mobile" element={<MobilePage />} />
        </Routes>
        <Footer />
      </>}
    </>
  );
};

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
