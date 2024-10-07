import React from 'react';
import '../../assets/css/sign_in.css';
import { Link } from 'react-router-dom';
import mhbLogo from "../../assets/images/logo.png";
import { FaFacebook } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

const SignIn = () => {
  return (
    <div className="signin-page-container">
      {/* Left side with sign-in background */}
      <div className="signin-image-container"></div>

      {/* Right side with sign-in form */}
      <div className="signin-form-container">
        <div className="signin-card">
          <img src={mhbLogo} alt="MHB Store Logo" className="signin-logo" /> {/* Logo */}
          <h1>SIGN IN</h1>
          <form>
            <input type="text" placeholder="Username or Email" className="signin-input" />
            <input type="password" placeholder="Password" className="signin-input" />
            <button type="submit" className="signin-button">Sign In</button>
          </form>
          <div className="signin-links">
            <Link to="/sign_up" className="signup-link">Sign Up</Link>
            <Link to="/forgot-password" className="forgot-password-link">Forgot Password?</Link>
          </div>
          <div className="signin-social">
            <p>Or sign in with</p>
            <div className="social-icons">
              <FaFacebook className="social-icon facebook-icon" />
              <FcGoogle className="social-icon google-icon" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
