import React from 'react';
import './Section.css';
import img1 from '../assets/sweet1.png';
import img2 from '../assets/namkeen1.png';

const Section = () => {
    return (
        <div className="sections-container">
            {/* Sweet Packaging Section */}
            <div className="section">
                <div className="section-image-left">
                    <img src={img1} alt="Sweet Packaging" />
                </div>
                <div className="section-content">
                    <h2>Graceful Packaging For Sweet</h2>
                    <p>Celebrate special moments with our beautifully crafted sweet boxes.</p>
                    <button>VIEW MORE</button>
                </div>
            </div>

            {/* Namkeen Hampers Section */}
            <div className="section">
                <div className="section-content">
                    <h2>Charming Namkeen Hampers</h2>
                    <p>Delight your loved ones with our exquisite namkeen gift bags.</p>
                    <button>VIEW MORE</button>
                </div>
                <div className="section-image-right">
                    <img src={img2} alt="Namkeen Hampers" />
                </div>
            </div>
        </div>
    );
};

export default Section;
