import React, { useState, useEffect } from "react";
import "./Promos.css";
import image1 from "../assets/delievery1.png";
import image2 from "../assets/discount1.png";
import image3 from "../assets/offers1.png";
import image4 from "../assets/gift.png"
import sweetsRight from "../assets/sticker1-promo.png"
import sweetsLeft from "../assets/sticker2-promo.png"
import separator from "../assets/lines.png"; // Add your decorative image

const Promos = () => {
  const promos = [
    {
      id: 1,
      title: "Free Delivery",
      description: "On orders above ₹250",
      image: image1,
    },
    {
      id: 2,
      title: "Festive Discounts",
      description: "Use Code: SIGNUP10",
      image: image2,
    },
    {
      id: 3,
      title: "Buy 1 Get 1 Free",
      description: "Use Code: COMBO11",
      image: image3,
    },
    {
      id: 4,
      title: "Gift Hampers Available",
      description: "Use Code MITHAAS15",
      image: image4,
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isSliding, setIsSliding] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      handleNextSlide();
    }, 3000); // Auto-slide every 3 seconds

    return () => clearInterval(interval);
  }, [currentIndex]);

  const handleNextSlide = () => {
    setIsSliding(true);
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % promos.length);
      setIsSliding(false);
    }, 500); // Smooth transition time
  };

  return (
<div className="promos-container-Home">
  <h2 className="slider-title-Home">Promos</h2>
  <img src={separator} alt="Decoration" className="cards-separator-promo" />

  <div className="promo-wrapper-Home">
    <img src={sweetsLeft} alt="Sweet Left" className="sweet-sticker-left" />
    
    <div className={`promo-card-Home ${isSliding ? "slide-animation-Home" : ""}`}>
      <img
        src={promos[currentIndex].image}
        alt={promos[currentIndex].title}
        className={`promo-sticker-Home promo-sticker-Home-${currentIndex + 1}`}
      />
      <h3 className={`promo-title-Home-${currentIndex + 1}`}>
        {promos[currentIndex].title}
      </h3>
      <p className="promo-description-Home">
        {promos[currentIndex].description}
      </p>
    </div>

    <img src={sweetsRight} alt="Sweet Right" className="sweet-sticker-right" />
  </div>
</div>

  );
};

export default Promos;
