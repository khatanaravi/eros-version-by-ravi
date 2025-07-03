import React, { useState, useEffect, useRef } from "react";
import "../style/Shop.css";
import { motion } from "framer-motion";
import img from "../assets/Kajju.png"; // Example image; replace if needed

const BestSellerCard = ({ product, onAddToCart }) => {
  const [selectedWeight, setSelectedWeight] = useState("250g");
  const [currentPrice, setCurrentPrice] = useState(product.basePrice);
  const [quantity, setQuantity] = useState(0);

  useEffect(() => {
    if (selectedWeight === "250g") {
      setCurrentPrice(product.basePrice);
    } else if (selectedWeight === "500g") {
      setCurrentPrice(product.basePrice * 2);
    } else if (selectedWeight === "1kg") {
      setCurrentPrice(product.basePrice * 4);
    }
  }, [selectedWeight, product.basePrice]);

  const handleWeightChange = (weight) => {
    setSelectedWeight(weight);
  };

  const handleAddToCart = () => {
    setQuantity(1);
    onAddToCart({
      id: `${product.id}-${selectedWeight}`,
      name: product.name,
      selectedWeight,
      price: currentPrice,
      quantity: 1,
    });
  };

  const handleIncrement = () => setQuantity((prev) => prev + 1);
  const handleDecrement = () => {
    if (quantity === 1) {
      setQuantity(0); // Reset back to "Add" button
    } else {
      setQuantity((prev) => prev - 1);
    }
  };

  return (
    <div className="best-seller-card-shop">
      <div className="card-image-shop">
        <img src={product.image} alt={product.name} />

        <div className="button-container">
          {quantity === 0 ? (
            <motion.button
              className="add-btn-shop"
              onClick={handleAddToCart}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.3 }}
            >
              Add
            </motion.button>
          ) : (
            <motion.div
              className="quantity-controls-bestseller"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.3 }}
            >
              <button className="qty-btn" onClick={handleDecrement}>-</button>
              <span>{quantity}</span>
              <button className="qty-btn" onClick={handleIncrement}>+</button>
            </motion.div>
          )}
        </div>


      </div>
      <div className="product-name-shop">{product.name}</div>
      <div className="product-price-shop">₹{currentPrice}</div>
      <div className="weight-options-shop">
        {["250g", "500g", "1kg"].map((weight) => (
          <button
            key={weight}
            onClick={() => handleWeightChange(weight)}
            className={selectedWeight === weight ? "selected" : ""}
          >
            {weight}
          </button>
        ))}
      </div>
    </div>
  );
};

const BestSellers = ({ onAddToCart }) => {
  const scrollRef = useRef(null);

  const products = [
    { id: 1, name: "Chocolate Cake", image: img, basePrice: 1000 },
    { id: 2, name: "Vanilla Cupcake", image: img, basePrice: 300 },
    { id: 3, name: "Strawberry Shortcake", image: img, basePrice: 1500 },
    { id: 4, name: "Lemon Drizzle Cake", image: img, basePrice: 1000 },
    { id: 5, name: "Red Velvet Cake", image: img, basePrice: 1200 },
    { id: 6, name: "Carrot Cake", image: img, basePrice: 1000 },
    { id: 7, name: "Banana Cake", image: img, basePrice: 800 },
    { id: 8, name: "Cheesecake", image: img, basePrice: 2000 },
  ];

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -300, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };

  return (
    <div className="best-sellers-shop">
      <h2 className="best-seller-heading-shop">FEATURED ITEMS</h2>
      <div className="horizontal-scroll-shop" ref={scrollRef}>
        {products.map((product) => (
          <BestSellerCard
            key={product.id}
            product={product}
            onAddToCart={onAddToCart}
          />
        ))}
      </div>
      {/* Scroll Buttons Below the Cards */}
      <div className="navigation-container-shop">
      <div className="decorative-line"></div>
        <button className="nav-button-shop" onClick={scrollLeft}>‹</button>
        <button className="nav-button-shop" onClick={scrollRight}>›</button>
        <div className="decorative-line"></div>
      </div>
    </div>
  );
};

export default BestSellers;
