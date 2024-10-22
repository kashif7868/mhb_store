import React from 'react';
import "../assets/css/test.css";
import { GiClothes, GiFoodTruck, GiLipstick, GiHighHeel, GiHealthNormal, GiLaptop, GiToyMallet } from "react-icons/gi";

const TestPage = () => {
  return (
    <section className="explore-categories">
      <div className="left-image">
        <img
          src={require('../assets/images/right-side-image.jpeg')}
          alt="Explore Categories"
          className="explore-img"
        />
      </div>

      <div className="right-categories">
        <div className="ct-header-text-container">
          <h2>Explore Categories</h2>
        </div>
        <div className="categories-container">
          <div className="category-grid">
            <div className="category-item">
              <GiClothes size={50} color="#d48806" /> {/* Mustard color for Clothing */}
              <p>Clothing</p>
              <span>50 items</span>
            </div>
            <div className="category-item">
              <GiFoodTruck size={50} color="#cc3333" /> {/* Deep red for Food */}
              <p>Food</p>
              <span>30 items</span>
            </div>
            <div className="category-item">
              <GiLipstick size={50} color="#33a1c9" /> {/* Cyan blue for Cosmetics */}
              <p>Cosmetics</p>
              <span>25 items</span>
            </div>
            <div className="category-item">
              <GiHighHeel size={50} color="#9933cc" /> {/* Purple for Fashion */}
              <p>Fashion</p>
              <span>40 items</span>
            </div>
            <div className="category-item">
              <GiHealthNormal size={50} color="#3c9141" /> {/* Deep green for Health */}
              <p>Health Care</p>
              <span>20 items</span>
            </div>
            <div className="category-item">
              <GiLaptop size={50} color="#d45573" /> {/* Deep rose for Tech Hub */}
              <p>Tech Hub</p>
              <span>35 items</span>
            </div>
            <div className="category-item">
              <GiToyMallet size={50} color="#a1b812" /> {/* Lime green for Toys */}
              <p>Toys</p>
              <span>15 items</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestPage;
