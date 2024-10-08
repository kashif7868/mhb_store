import React from 'react';
import '../../assets/css/sign_in.css';
import { Link } from 'react-router-dom';
import mhbLogo from "../../assets/images/logo.png";
import { FaFacebookF } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

const SignIn = () => {
  return (
    <div className="signin-background">
      <div className="signin-overlay">
        <div className="signin-card">
          <img src={mhbLogo} alt="MHB Store Logo" className="signin-logo" />
          <h1 className="signin-title">Sign In</h1>
          <form className="signin-form">
            <input type="text" placeholder="Username or Email" className="signin-input" />
            <input type="password" placeholder="Password" className="signin-input" />
            <button type="submit" className="signin-btn">Sign In</button>
          </form>
          <div className="signin-links">
            <Link to="/sign_up" className="signin-link">Sign Up</Link>
            <Link to="/forgot-password" className="signin-link">Forgot Password?</Link>
          </div>
          <div className="signin-divider">
            <span>or</span>
          </div>
          <div className="signin-social">
            <button className="social-btn facebook-btn">
              <FaFacebookF className="social-icon" /> Facebook
            </button>
            <button className="social-btn google-btn">
              <FcGoogle className="social-icon" /> Google
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
