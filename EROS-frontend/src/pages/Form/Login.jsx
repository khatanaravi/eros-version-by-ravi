import React from 'react';
import "../Form/Login.css";
import google from "../assets/google.png";
import character from "../assets/character.png"; // Add your character image here

const Login = () => {
    return (
        <div className="login-container">
            <img src={character} alt="Character" className="character-img-login" /> {/* Character Image */}
            <h2 className="login-title">Login</h2>
            <div className="login-box">
                <form>
                    <input type="email" placeholder="Email" required />
                    <input type="password" placeholder="Password" required />
                    <div className="forgot-password">
                        <a href="/forgot-password">Forgot your password?</a>
                    </div>
                    <button type="submit" className="login-btn">Login</button>
                </form>
                <div className="or-divider">OR</div>
                <div className="google-login">
                    <img src={google} alt="Google Logo" />
                    Log in with Google
                </div>
                <div className="signup-link">
                    Don't have an account? <a href="/signup">Sign Up</a>
                </div>
            </div>
        </div>
    );
};

export default Login;
