import React from 'react';
import '../../assets/css/sign_up.css';
import { Link } from 'react-router-dom';
import mhbLogo from "../../assets/images/logo.png";
import { FaFacebook } from 'react-icons/fa';  
import { FcGoogle } from 'react-icons/fc';    
const SignUp = () => {
  return (
    <div className="signup-page-container">
      <div className="signup-image-container"></div>
      <div className="signup-form-container">
        <div className="signup-card">
          <img src={mhbLogo} alt="Logo" className="signup-logo" /> 
          <h1>SIGN UP</h1>
          <form>
            <input type="text" placeholder="First Name" className="signup-input" />
            <input type="text" placeholder="Last Name" className="signup-input" />
            <input type="email" placeholder="Email" className="signup-input" />
            <input type="password" placeholder="Password" className="signup-input" />
            <input type="password" placeholder="Confirm Password" className="signup-input" />
            <button type="submit" className="signup-button">Sign Up</button>
          </form>
          <div className="signup-links">
            <Link to="/sign_in" className="signin-link">Already have an account? Sign In</Link>
          </div>
          <div className="signup-social">
            <p>Or sign up with</p>
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

export default SignUp;
