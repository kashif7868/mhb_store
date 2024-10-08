import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import SignIn from "./components/user/SignIn";
import SignUp from "./components/user/SignUp";
import ShopPage from "./pages/Shop"
import Preloader from "./components/Preloader";
import useNavigationLoader from "./hooks/useNavigationLoader";
// Category pages
import WomenClothing from "./pages/Clothing/WomenClothing";
import MenClothing from "./pages/Clothing/MenClothing";
import KidsClothing from "./pages/Clothing/KidsClothing";
import DryFruit from "./pages/Food/DryFruit";
import DesiGhee from "./pages/Food/DesiGhee";
import Honey from "./pages/Food/Honey";

const AppContent = () => {
  const loading = useNavigationLoader();

  return (
    <>
      {loading ? (
        <Preloader />
      ) : (
        <>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sign_in" element={<SignIn />} />
            <Route path="/sign_up" element={<SignUp />} />
            <Route path="/shop" element={<ShopPage />} />

            {/* Clothing Subcategories */}
            <Route path="/clothing/women" element={<WomenClothing />} />
            <Route path="/clothing/men" element={<MenClothing />} />
            <Route path="/clothing/kids" element={<KidsClothing />} />

            {/* Food Subcategories */}
            <Route path="/food/dry-fruit" element={<DryFruit />} />
            <Route path="/food/desi-ghee" element={<DesiGhee />} />
            <Route path="/food/honey" element={<Honey />} />

           {/* Food Subcategories */}
           
          </Routes>
          <Footer />
        </>
      )}
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
