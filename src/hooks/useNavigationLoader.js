import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

const useNavigationLoader = () => {
  const [loading, setLoading] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const routesWithLoader = [
      "/",
      "/sign_in",
      "/sign_up",
      "/shop",
      "/cart",
      // Pages 
      // Clothes Subcategories
      "/clothing/women",
      "/clothing/men",
      "/clothing/kids",
      // Food Subcategories
      "/food/dry-fruit",
      "/food/desi-ghee",
      "/food/honey",

    ];

    if (routesWithLoader.includes(location.pathname)) {
      setLoading(true);
      const timeoutId = setTimeout(() => {
        setLoading(false);
      }, 800);

      return () => clearTimeout(timeoutId);
    } else {
      setLoading(false);
    }
  }, [location]);

  return loading;
};

export default useNavigationLoader;
