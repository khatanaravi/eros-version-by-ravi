import React from "react";
import Practice from "./Sweets"; // Import the Practice component
import "./Sweets.css"; // Import the same CSS
import img1 from '../assets/2.png'

const Namkeen = () => {
    let products = [
      {
        name: "Aloo Bhujia",
        price: 150,
        shelfLife: 30,
        image: img1,
      },
      {
        name: "Moong Dal",
        price: 200,
        shelfLife: 25,
        image: img1,
      },
      {
        name: "Khatta Meetha",
        price: 180,
        shelfLife: 20,
        image: img1,
      },
      {
        name: "Sev Mamra",
        price: 120,
        shelfLife: 15,
        image: img1,
      },
    ];
  
    return (
      <div className="scroll-container">
        <div className="card-list">
          {products.map((product, index) => (
            <Practice key={index} product={product} />
          ))}
        </div>
      </div>
    );
  };
  
  export default Namkeen;
  

