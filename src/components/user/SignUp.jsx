import React from 'react';
import '../../assets/css/sign_up.css';
import { Link } from 'react-router-dom';
import mhbLogo from "../../assets/images/logo.png";
import { FaFacebookF } from 'react-icons/fa';  
import { FcGoogle } from 'react-icons/fc';    

const SignUp = () => {
  return (
    <div className="signup-background">
      <div className="signup-overlay">
        <div className="signup-card">
          <img src={mhbLogo} alt="Logo" className="signup-logo" /> 
          <h1 className="signup-title">Sign Up</h1>
          <form className="signup-form">
            <input type="text" placeholder="First Name" className="signup-input" />
            <input type="text" placeholder="Last Name" className="signup-input" />
            <input type="email" placeholder="Email" className="signup-input" />
            <input type="password" placeholder="Password" className="signup-input" />
            <input type="password" placeholder="Confirm Password" className="signup-input" />
            <button type="submit" className="signup-btn">Sign Up</button>
          </form>
          <div className="signup-links">
            <Link to="/sign_in" className="signin-link">Already have an account? Sign In</Link>
          </div>
          <div className="signup-divider">
            <span>or</span>
          </div>
          <div className="signup-social">
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

export default SignUp;
