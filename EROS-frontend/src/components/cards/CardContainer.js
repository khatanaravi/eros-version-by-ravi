import React from "react";
import Practice from "./Sweets"; // Import the Practice component
import "./Sweets.css"; // Import the same CSS

const CardContainer = () => {
  let products = [
    {
      name: "Kaju Katri",
      price: 263,
      shelfLife: 15,
      image: "https://i.pinimg.com/736x/dc/9f/ef/dc9fefef9639f9e0c28a1833da142933.jpg",
    },
    {
      name: "Ghevar",
      price: 400,
      shelfLife: 20,
      image: "https://i.pinimg.com/736x/ef/a9/9e/efa99e046b95f0f8cb2bb14bc9b0e714.jpg",
    },
    {
      name: "Laddu",
      price: 300,
      shelfLife: 10,
      image: "https://i.pinimg.com/736x/a9/3d/77/a93d77d3e242262f2c919bf66aef5b39.jpg",
    },
    {
      name: "Rasogulla",
      price: 280,
      shelfLife: 7,
      image: "https://i.pinimg.com/736x/98/3a/e8/983ae84fe28972ce2016da5dbb27f7c9.jpg",
    },
    {
      name: "Barfi",
      price: 320,
      shelfLife: 12,
      image: "https://i.pinimg.com/736x/fc/b9/bd/fcb9bd34b13554e03b6b6d8be69c795e.jpg",
    },
    {
      name: "Jalebi",
      price: 150,
      shelfLife: 5,
      image: "https://i.pinimg.com/736x/54/19/12/5419125f28b684b1544b8693f5aa5c1c.jpg",
    },
    {
      name: "Peda",
      price: 250,
      shelfLife: 15,
      image: "https://i.pinimg.com/736x/14/38/58/143858703bc438c97373e72ef1996894.jpg",
    },
    {
      name: "Soan Papdi",
      price: 220,
      shelfLife: 20,
      image: "https://i.pinimg.com/736x/3d/77/0f/3d770f9afcd493b6b64e1bde7ee8f17a.jpg",
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

export default CardContainer;
