import React, { useState } from 'react';
import '../../assets/css/sign_in.css';
import { Link } from 'react-router-dom';
import mhbLogo from "../../assets/images/logo.png";
import { FaFacebookF } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

const SignIn = () => {
  const [feedback, setFeedback] = useState({ email: '', password: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFeedback({ ...feedback, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add form submission logic here
  };

  return (
    <div className="signin-background">
      <div className="signin-overlay">
        <div className="signin-card">
          <img src={mhbLogo} alt="MHB Store Logo" className="signin-logo" />
          <h1 className="signin-title">Sign In</h1>
          <form onSubmit={handleSubmit} className="signin-form">
            <div className="form-group">
              <input
                type="email"
                name="email"
                id="email"
                placeholder=""
                value={feedback.email}
                onChange={handleChange}
                required
                className="signin-input"
              />
              <label htmlFor="email" className="label-input">Email</label>
            </div>
            <div className="form-group">
              <input
                type="password"
                name="password"
                id="password"
                placeholder=""
                value={feedback.password}
                onChange={handleChange}
                required
                className="signin-input"
              />
              <label htmlFor="password" className="label-input">Password</label>
            </div>
            <button type="submit" className="signin-btn">Sign In</button>
          </form>
          <div className="signin-links">
            <Link to="/sign_up" className="signin-link">Create Account</Link>
            <Link to="/forgot-password" className="signin-link">Forgot Password?</Link>
          </div>
          <div className="signin-divider">
            <span>or</span>
          </div>
          <div className="signin-social">
            <button className="social-btn facebook-btn">
              <FaFacebookF className="social-icon" />
            </button>
            <button className="social-btn google-btn">
              <FcGoogle className="social-icon" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
