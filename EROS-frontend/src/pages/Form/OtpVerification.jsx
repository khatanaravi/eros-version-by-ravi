import React from 'react'
import { useNavigate } from 'react-router-dom';
import '../Form/OtpVerification.css';
import character from "../assets/character.png"; // Add your character image here

const OtpVerification = () => {
  const navigate = useNavigate();

  return (
      <div className="otp-container">
      <img src={character} alt="Character" className="character-img-otp" /> {/* Character Image */}
          <h2 className="otp-title">OTP Verification</h2>
          <div className="otp-box">
              <p>Enter the OTP sent to your email</p>
              <input type="text" placeholder="Enter OTP" required />
              <button className="otp-btn">Verify</button>
          </div>

          {/* Cancel button outside the box */}
          <p className="cancel-link" onClick={() => navigate('/login')}>Cancel</p>
      </div>
  );
};

export default OtpVerification