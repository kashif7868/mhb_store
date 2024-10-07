import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";   // New page import
import Contact from "./pages/Contact"; // New page import
import FAQ from "./pages/FAQ"; // New page import
import SignIn from "./components/user/SignIn";  // SignIn component import
import SignUp from "./components/user/SignUp";  // SignUp component import
import Preloader from "./components/Preloader";
import useNavigationLoader from "./hooks/useNavigationLoader"; // Hook to manage loading

const AppContent = () => {
  const loading = useNavigationLoader(); // Manage page navigation loading

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
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/faq" element={<FAQ />} />
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
