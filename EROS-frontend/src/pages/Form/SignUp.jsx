import React from 'react';
import '../Form/SignUp.css';
import google from "../assets/google.png"
import character from "../assets/character.png"; // Add your character image here

const SignUp = () => {
    return (
        <div className="signup-container">
        <img src={character} alt="Character" className="character-img-signup" /> {/* Character Image */}
            <h2 className="signup-title">Sign Up</h2>
            <div className="signup-box">
                <form>
                    <input type="text" placeholder="Full Name" required />
                    <input type="email" placeholder="Email" required />
                    <input type="password" placeholder="Password" required />
                    <input type="password" placeholder="Confirm Password" required />
                    <button type="submit" className="signup-btn">Sign Up</button>
                </form>
                <div className="or-divider">OR</div>
                <div className="google-signup">
                    <img src={google} alt="Google Logo" />
                    Sign Up with Google
                </div>
                <div className="login-link">
                    Already have an account? <a href="/login">Login</a>
                </div>
            </div>
        </div>
    );
};

export default SignUp;
