import React, { useState } from "react";
import "./ProductCard.css"; 

const ProductCard = ({ product }) => {
  const [quantity, setQuantity] = useState(1);
  const [weight, setWeight] = useState("500g");

  const weightPriceMap = {
    "250g": 0.5,  
    "500g": 1,    
    "1kg": 2,     
  };
  

  const totalPrice = product.price * quantity * weightPriceMap[weight];

  // Update quantity
  const updateQuantity = (value) => {
    setQuantity((prev) => Math.max(1, prev + value));
  };

  return (
    <div className="product-card">
      <div className="product-image"><img src={product.image} alt="img"/></div>
      <h3 className="product-name">{product.name}</h3>
      <p className="product-price">₹ {totalPrice.toFixed(2)}</p>
      <p className="product-shelf-life">Shelf Life: {product.shelfLife} days</p>
     
      <div className="box">
      <div className="product-weight">
        <select value={weight} onChange={(e) => setWeight(e.target.value)}>
          <option value="250g" className="color">250g</option>
          <option value="500g" className="color">500g</option>
          <option value="1kg" className="color">1kg</option>
        </select>
      </div>
        <div className="quantity-selector">
           <button onClick={() => updateQuantity(-1)}>-</button>
           <span>{quantity}</span>
           <button onClick={() => updateQuantity(1)}  >+</button>
        </div>
      </div>
      <button className="add-to-cart">Add to Cart</button>
    </div>
  );
};

const Card2 = () => {
  const products = [
    { image:"https://i.pinimg.com/736x/dc/9f/ef/dc9fefef9639f9e0c28a1833da142933.jpg",name: "Kaju Katli", price: 550, shelfLife: 10 },
    { image:"https://i.pinimg.com/736x/ef/a9/9e/efa99e046b95f0f8cb2bb14bc9b0e714.jpg",name: "Ghevar", price: 1610, shelfLife: 10 },
    { image:"https://i.pinimg.com/736x/a9/3d/77/a93d77d3e242262f2c919bf66aef5b39.jpg",name: "Exotica", price: 1000, shelfLife: 8 },
    { image:"https://i.pinimg.com/736x/98/3a/e8/983ae84fe28972ce2016da5dbb27f7c9.jpg",name: "Rasogulla", price: 280, shelfLife: 6 },
  
  ];

  return (
    <div className="product-container">
      {products.map((product, index) => (
        <ProductCard key={index} product={product} />
      ))}
    </div>
  );
};

export default Card2;
