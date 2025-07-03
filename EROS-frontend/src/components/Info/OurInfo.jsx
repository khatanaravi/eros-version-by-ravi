import React from 'react'
import img1 from "../assets/home.png";
import "./OurInfo.css";

export const OurInfo = () => {
  return (
    <div>
              {/* Heading Section */}
              <div className="next-section-heading">
                <h2>Savor the Taste of Tradition and Excellence!</h2>
                <p>
                  Since 1990, we’ve been crafting the finest sweet and savory delights,
                  made with<br /> love and authentic recipes passed down through generations.
                </p>
              </div>
        
              {/* Features Section */}
              <div className="next-section-features">
                <div className="feature-column">
                  <div className="feature-card">
                    <h3>Authentic Recipes</h3>
                    <p>
                      Our recipes are rooted in rich culinary traditions, made using the
                      finest ingredients to bring you a taste of heritage.
                    </p>
                  </div>
                  <div className="feature-card">
                    <h3>Unmatched Quality</h3>
                    <p>
                      We believe in delivering only the finest, from premium ingredients
                      to hygienic preparation.
                    </p>
                  </div>
                </div>
        
                <div className="feature-image-container">
                  <img src={img1} alt="Storefront" className="feature-image" />
                </div>
        
                <div className="feature-column">
                  <div className="feature-card">
                    <h3>Made with Love</h3>
                    <p>
                      Every sweet and namkeen is a labor of love, ensuring freshness and
                      authenticity in every bite.
                    </p>
                  </div>
                  <div className="feature-card">
                    <h3>Joy for Every Budget</h3>
                    <p>
                      From festive boxes to everyday snacks, our treats are thoughtfully
                      priced for everyone to enjoy.
                    </p>
                  </div>
                </div>
              </div>
        
              {/* Call-to-Action Button */}
              <div className="know-more">
                <button className="knowMore-button">KNOW MORE</button>
              </div>
    </div>
  )
}
