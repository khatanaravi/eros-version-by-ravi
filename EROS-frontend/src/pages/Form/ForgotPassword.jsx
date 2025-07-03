import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import '../Form/ForgotPassword.css';
import character from "../assets/character.png"; // Add your character image here

const ForgetPassword = () => {
    const navigate = useNavigate();

    return (
        <div className="forget-password-container">
        <img src={character} alt="Character" className="character-img-forget" /> {/* Character Image */}
            <h2 className="forget-password-title">Forget Password</h2>
            <div className="forget-password-box">
                <p>Enter your email to get access code</p>
                <input type="email" placeholder="Enter your email address" required />
                <NavLink to="/otp-verification"><button className="forget-password-btn">Send</button></NavLink>
            </div>

            {/* Cancel button outside the box */}
            <p className="cancel-link" onClick={() => navigate('/login')}>Cancel</p>
        </div>
    );
};

export default ForgetPassword;
