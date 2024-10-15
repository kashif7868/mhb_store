import React, { useState } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../../assets/css/womenClothing.css';

const WomenClothing = () => {
  const [filterVisible, setFilterVisible] = useState(false);

  const toggleFilter = () => {
    setFilterVisible(!filterVisible);
  };

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    fade: true,
    arrows: true
  };

  return (
    <>
      <div className="women-clothes-discount-container">
        <Slider {...sliderSettings}>
          <div>
            <img
              src="https://www.gulahmedshop.com/media/wysiwyg/discount-banner-1.jpg"
              alt="Discount 1"
              className="slider-image"
            />
          </div>
          <div>
            <img
              src="https://www.gulahmedshop.com/media/wysiwyg/discount-banner-2.jpg"
              alt="Discount 2"
              className="slider-image"
            />
          </div>
        </Slider>
      </div>

      <div className="women-clothing-container">
        <div className="top-sub-category-icons">
          {/* Same category icons */}
        </div>

        {/* Filter Icon */}
        <div className="filter-toggle-icon" onClick={toggleFilter}>
          <i className="fas fa-filter"></i> {/* FontAwesome filter icon */}
          <span>Filters</span>
        </div>

        {/* Filter Section */}
        {filterVisible && (
          <div className="women-filter-sub-navbar-container">
            <div className="filter-section">
              <h4>Category</h4>
              <ul>
                <li>Pret & Ready to Wear</li>
                <li>FESTIVE</li>
                <li>SALT</li>
              </ul>
            </div>

            <div className="filter-section">
              <h4>Biggest Discount</h4>
              <ul>
                <li>11% to 20%</li>
                <li>21% to 30%</li>
                <li>31% to 40%</li>
                <li>41% to 50%</li>
              </ul>
            </div>

            <div className="filter-section">
              <h4>Ready To Wear Type</h4>
              <ul>
                <li>1 Piece</li>
                <li>2 Piece</li>
                <li>3 Piece</li>
              </ul>
            </div>

            <div className="filter-section">
              <h4>Price</h4>
              <ul>
                <li>PKR 0 - PKR 3,000</li>
                <li>PKR 3,000 - PKR 6,000</li>
                <li>PKR 6,000 - PKR 9,000</li>
                <li>PKR 9,000 - PKR 12,000</li>
                <li>PKR 12,000 - PKR 15,000</li>
                <li>PKR 15,000 - PKR 18,000</li>
                <li>PKR 18,000 - PKR 21,000</li>
              </ul>
            </div>

            <div className="filter-section">
              <h4>Product Type</h4>
              <ul>
                <li>1PC</li>
                <li>2PC</li>
                <li>3PC</li>
              </ul>
            </div>

            <div className="filter-section">
              <h4>Color</h4>
              <ul>
                <li>Shirt Fabric</li>
                <li>Dupatta Fabric</li>
                <li>Trouser Fabric</li>
              </ul>
            </div>

            <div className="filter-section">
              <h4>Women Size</h4>
              <ul>
                <li>XS</li>
                <li>S</li>
                <li>M</li>
                <li>L</li>
                <li>XL</li>
              </ul>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default WomenClothing;
