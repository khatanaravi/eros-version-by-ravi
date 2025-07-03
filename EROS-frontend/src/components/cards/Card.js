import React, { useState } from 'react';
import './Card.css';
import CardContainer from '../cards/CardContainer'; // Use CardContainer here

import Namkeen from '../cards/Namkeen';

const Card = () => {
  const [selectedPage, setselectedPage] = useState(false);
  const [activeButton, setActiveButton] = useState('sweets'); // Track active button

  const handleButtononClick = (page, buttonType) => {
    setselectedPage(page);
    setActiveButton(buttonType); // Set active button
  }

  return (
    <>
      <div className="card-box">
        <div className="card">
          <h3 className="h3">Best Sellers</h3>
          <p className="p">
            Sweeten your day with a wide variety of our best selling delicacies
          </p>

          <button
            style={{ backgroundColor: activeButton === 'sweets' ? '#9D0910' : '#E4B8B8', color: activeButton === 'sweets' ? '#E4B8B8' : '#9D0910' }}
            className={`button ${activeButton === 'sweets' ? 'active' : ''}`} 
            onClick={() => handleButtononClick(false, 'sweets')}
          >
            Sweets
          </button>
          <button
            style={{ backgroundColor: activeButton === 'namkeens' ? '#9D0910' : '#E4B8B8', color: activeButton === 'namkeens' ? '#E4B8B8' : '#9D0910' }}
            className={`button ${activeButton === 'namkeens' ? 'active' : ''}`} 
            onClick={() => handleButtononClick(true, 'namkeens')}
          >
            Namkeens
          </button>

          {selectedPage === false && <CardContainer />}
          {selectedPage === true && <Namkeen />}
        </div>
      </div>
    </>
  );
};

export default Card;
