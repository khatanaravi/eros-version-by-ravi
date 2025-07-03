import React, { useState } from "react";
import "./Sweets.css";

function Practice({ product }) { // Accept `product` prop
  let basePrice = product.price; // Use the product price from the prop
  const [quantity, setQuantity] = useState(1);
  const [weight, setWeight] = useState(250); // Default weight is 250g

  const weightPriceMap = {
    250: basePrice, // Price for 250g
    500: basePrice * 2, // Price for 500g
    1000: basePrice * 4, // Price for 1000g
  };

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const totalPrice = (weightPriceMap[weight] * quantity).toFixed(2);

  return (
    <div className="card-container">
      <div className="image-section">
        <img src={product.image} alt={product.name} /> {/* Dynamically display the product image */}
      </div>
      <div className="details-section">
        <h2 className="product-name">{product.name}</h2> {/* Dynamically display the product name */}
        <div className="price-and-weight">
          <p className="price">₹ {totalPrice}</p>
          <div className="weight-options">
            <button
              className={`quantity-label ${weight === 250 ? "active" : ""}`}
              onClick={() => setWeight(250)}
            >
              250 g
            </button>
            <button
              className={`quantity-label ${weight === 500 ? "active" : ""}`}
              onClick={() => setWeight(500)}
            >
              500 g
            </button>
            <button
              className={`quantity-label ${weight === 1000 ? "active" : ""}`}
              onClick={() => setWeight(1000)}
            >
              1000 g
            </button>
          </div>
        </div>
        <p className="self-life">Shelf Life: {product.shelfLife} days</p> {/* Use dynamic shelf life */}
        <div className="actions">
          <div className="quantity-controller">
            <button onClick={decreaseQuantity}>-</button>
            <span>{quantity}</span>
            <button onClick={increaseQuantity}>+</button>
          </div>
          <button className="add-to-cart-button">Add to Cart</button>
        </div>
      </div>
    </div>
  );
}

export default Practice;
