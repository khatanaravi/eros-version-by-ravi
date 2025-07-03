import React from "react";
import "../style/Shop.css"; // Make sure styles match
import product1 from "../assets/Kajju.png";
import product2 from "../assets/Kajju.png";
import product3 from "../assets/Kajju.png";
import product4 from "../assets/Kajju.png";

const bestSellersData = [
  {
    name: "Mix Fruit Cake",
    price: "₹691",
    image: product1,
  },
  {
    name: "Red Velvet Cake",
    price: "₹691",
    image: product2,
  },
  {
    name: "Mix Fruit Pastry",
    price: "₹111",
    image: product3,
    customizable: true,
  },
  {
    name: "Dutch Truffle Pastry",
    price: "₹85",
    image: product4,
  },
];

const NewBestSeller = () => {
  return (
    <div className="best-sellers-shop">
      <h2 className="section-title-shop">Best Sellers</h2>
      <div className="horizontal-scroll-shop">
        {bestSellersData.map((item, index) => (
          <div className="best-seller-card-shop" key={index}>
            <img src={item.image} alt={item.name} />
            <div className="card-details-shop">
              <p className="item-name-shop">{item.name}</p>
              <p className="item-price-shop">{item.price}</p>
              {item.customizable && (
                <span className="customizable-tag-shop">Customizable</span>
              )}
              <button className="add-btn-shop">ADD +</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewBestSeller;
