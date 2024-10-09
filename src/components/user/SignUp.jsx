import React, { useState } from 'react';
import '../../assets/css/sign_up.css';
import { Link } from 'react-router-dom';
import mhbLogo from "../../assets/images/logo.png";
import { FaFacebookF } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';

const SignUp = () => {
  const [feedback, setFeedback] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFeedback({ ...feedback, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Password validation
    if (feedback.password !== feedback.confirmPassword) {
      setError("Passwords don't match");
      return;
    }

    // Reset error if passwords match
    setError('');

    // Add form submission logic here
    console.log('Form submitted:', feedback);
  };

  return (
    <div className="signup-background">
      <div className="signup-overlay">
        <div className="signup-card">
          <img src={mhbLogo} alt="MHB Logo" className="signup-logo" />
          <h1 className="signup-title">Sign Up</h1>
          <form onSubmit={handleSubmit} className="signup-form">
            <div className="form-group">
              <input 
                type="text" 
                name="firstName" 
                value={feedback.firstName} 
                onChange={handleChange} 
                required 
                className="signup-input" 
                placeholder=" " 
                aria-label="First Name"
              />
              <label htmlFor="firstName" className="label-input">First Name</label>
            </div>
            <div className="form-group">
              <input 
                type="text" 
                name="lastName" 
                value={feedback.lastName} 
                onChange={handleChange} 
                required 
                className="signup-input" 
                placeholder=" " 
                aria-label="Last Name"
              />
              <label htmlFor="lastName" className="label-input">Last Name</label>
            </div>
            <div className="form-group">
              <input 
                type="email" 
                name="email" 
                value={feedback.email} 
                onChange={handleChange} 
                required 
                className="signup-input" 
                placeholder=" " 
                aria-label="Email"
              />
              <label htmlFor="email" className="label-input">Email</label>
            </div>
            <div className="form-group">
              <input 
                type="password" 
                name="password" 
                value={feedback.password} 
                onChange={handleChange} 
                required 
                className="signup-input" 
                placeholder=" " 
                aria-label="Password"
              />
              <label htmlFor="password" className="label-input">Password</label>
            </div>
            <div className="form-group">
              <input 
                type="password" 
                name="confirmPassword" 
                value={feedback.confirmPassword} 
                onChange={handleChange} 
                required 
                className="signup-input" 
                placeholder=" " 
                aria-label="Confirm Password"
              />
              <label htmlFor="confirmPassword" className="label-input">Confirm Password</label>
            </div>
            {error && <p className="error-message">{error}</p>}
            <button type="submit" className="signup-btn">Sign Up</button>
          </form>
          <div className="signup-links">
            <Link to="/sign_in" className="signin-link">Already have an account? Sign In</Link>
          </div>
          <div className="signup-divider">
            <span>or</span>
          </div>
          <div className="signup-social">
            <button className="social-btn facebook-btn" aria-label="Sign up with Facebook">
              <FaFacebookF className="social-icon" />
            </button>
            <button className="social-btn google-btn" aria-label="Sign up with Google">
              <FcGoogle className="social-icon" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
