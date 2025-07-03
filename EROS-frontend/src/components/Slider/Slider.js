import React, { useState, useEffect } from "react";
import "./Slider.css";
import image1 from "../assets/1.png";
import image2 from "../assets/1.1.png";
import image3 from '../assets/3.png';
import image4 from '../assets/4.png';
// import image5 from '../assets/5.png';

const Slider = () => {
  const slides = [
    {
      image: image1,
      mainText: "Indulge in Sweet Bliss!",
      subText: (
        <>
          Authentic Indian mithais that melt in your mouth – <br /> from laddoos
          to kaju katli, made with love.
        </>
      ),
      ctaText: "Order Your Favorites Now!",
    },
    {
      image: image2,
      mainText: (
        <>
          Savor the Crunch, Relish
          <br />
          the Spice!
        </>
      ),
      subText: (
        <>
          Explore our range of crispy, spicy, and tangy namkeens
          <br />
          for every craving.
        </>
      ),
      ctaText: "Shop Namkeens Today!",
    },
    {
      image: image3,
      mainText: (
        <>
          Savor the Crunch, Relish
          <br />
          the Spice!
        </>
      ),
      subText: (
        <>
          Explore our range of crispy, spicy, and tangy namkeens
          <br />
          for every craving.
        </>
      ),
      ctaText: "Shop Namkeens Today!",
    },
    {
      image: image4,
      mainText: (
        <>
          Savor the Crunch, Relish
          <br />
          the Spice!
        </>
      ),
      subText: (
        <>
          Explore our range of crispy, spicy, and tangy namkeens
          <br />
          for every craving.
        </>
      ),
      ctaText: "Shop Namkeens Today!",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 5000); // Slide every second

    return () => clearInterval(interval);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + slides.length) % slides.length
    );
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="slider">
      <div
        className="slides"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div className="slide" key={index}>
            <img src={slide.image} alt={`Slide ${index + 1}`} />
            {/* Right-side content over the image */}
            <div className="slide-content" style={{ color: slide.colors }}>
              <h2>{slide.mainText}</h2>
              <p>{slide.subText}</p>
              <button className="hover_button">{slide.ctaText}</button>
            </div>
          </div>
        ))}
      </div>
      <div className="arrows">
        <button className="arrow left" onClick={prevSlide}>
          {"<"}
        </button>

        <button className="arrow right" onClick={nextSlide}>
          {">"}
        </button>
      </div>
      <div className="dots">
        {slides.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === currentIndex ? "active" : ""}`}
            onClick={() => goToSlide(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default Slider;
