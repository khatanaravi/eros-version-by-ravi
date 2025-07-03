import React from "react";
import "../style/Shop.css";
import { FaMapMarkerAlt, FaPhone, FaPaperPlane, FaInfoCircle, FaSearch } from "react-icons/fa";

const TopBar = () => {
  return (
    <div className="top-bar">
      {/* Left Side - Info Box */}
      <div className="info-box">
        <div className="top-section">
          <div className="info-location">
            <FaMapMarkerAlt className="icon" />
            <span>Bandra Kurla Complex, Mumbai</span>
          </div>

          <div className="rating-box">
            <span className="star">★</span>
            <span className="rating">4</span>
            <span className="reviews">(+25)</span>
          </div>
        </div>

        <div className="bottom-section">
          <button className="open-btn">OPEN</button>

          <div className="icons">
            <div className="icon-box"><FaPhone /></div>
            <div className="icon-box"><FaPaperPlane /></div>
            <div className="icon-box"><FaInfoCircle /></div>
          </div>
        </div>
      </div>

      {/* Right Side - Search Box */}
      <div className="search-box">
      <div className="input">
        <input type="text" placeholder="Search Menu" />
        <FaSearch className="search-icon" />
        </div>
      </div>
    </div>
  );
};

export default TopBar;
