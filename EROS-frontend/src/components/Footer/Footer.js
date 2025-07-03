  import React from "react";
  import "./Footer.css"; // Import styles
  import logo from "../assets/logo.png";
  import sticker from "../assets/sticker.png"; // Sticker for the top-right corner
  import facebookIcon from "../assets/facebook.png";
  import instagramIcon from "../assets/Instagram.png";
  import twitterIcon from "../assets/LinkedIn.png";
  import mastercardIcon from "../assets/mastercard.png";
  import upiIcon from "../assets/upi.png";
  import visaIcon from "../assets/visa.png";
  import gpayIcon from "../assets/gpay.png";
  import paytmIcon from "../assets/paytm.png";

  const Footer = () => {

    const scrollToTop = () => {
      document.querySelector('body').scrollTo({
        top: 0,
        behavior: 'smooth'
      })
    };

    return (
      <footer className="footer">
        {/* Sticker on top-right */}
        <img src={sticker} alt="Sticker" className="footer-sticker" />

        <div className="footer-container">
          {/* Logo Column */}
          <div className="footer-logo-container">
            <img src={logo} alt="Eeros-sweets" className="footer-logo" />
          </div>

          {/* Address & Contact */}
          <div className="footer-section contact-info">
            <h3>Contact Information
            <div className="hr_line_footer"></div>
            </h3>
            <table>
              <tr>
                <td><i className="fas fa-building contact-icon"></i>  </td>
                <td><p><> One world, B-61, Nr. Sheetal Park,<br/> 150 ft. Ring Road, Rajkot-360001,<br/> Gujarat (India). </></p></td>
              </tr>

              <tr>
              <td><i className="fas fa-phone-alt contact-icon"></i></td>
                <td><p> +123 4567 890</p></td>
              </tr>

              <tr>
              <td><i className="fas fa-envelope contact-icon"></i></td>
                <td><p> contact@sweetnamkeen.com</p></td>
              </tr>
            </table>
          </div>

          {/* Quick Links */}
          <div className="footer-section">
            <h3>Quick Link
            <div className="hr_line_footer"></div></h3>
            <ul>
            <li onClick={scrollToTop}>Home</li>

              <li>About Us</li>
              <li onClick={scrollToTop}>Products</li>
              <li>Corporate Gifting</li>
              <li>Bulk Inquiry</li>
              <li>Contact Us</li>
            </ul>
          </div>

          {/* Policies */}
          <div className="footer-section">
            <h3> Our Policies
            <div className="hr_line_footer"></div></h3>
            <ul>
              <li>FAQs</li>
              <li>Payment & Shipping</li>
              <li>Return & Refund</li>
              <li>Privacy Policy</li>
              <li>Terms & Conditions</li>
            </ul>
          </div>

          {/* Follow Us */}
          <div className="footer-section">
            <h3>Follow us
            <div className="hr_line_footer"></div>
            </h3>
            <div className="social-icons">
              <img src={facebookIcon} alt="Facebook" />
              <img src={instagramIcon} alt="Instagram" />
              <img src={twitterIcon} alt="Twitter" />
            </div>
          </div>
        </div>

        {/* Grey Line */}
        <div className="footer-divider"></div>

        {/* Bottom Section */}
        <div className="footer-bottom">
          <p>© Copyright 2025, all rights reserved</p>
          <div className="payment-icons">
            <img src={mastercardIcon} alt="Mastercard" />
            <img src={upiIcon} alt="UPI" />
            <img src={visaIcon} alt="Visa" />
            <img src={gpayIcon} alt="Google Pay" />
            <img src={paytmIcon} alt="PayTM" />
          </div>
        </div>
      </footer>
    );
  };

  export default Footer;
