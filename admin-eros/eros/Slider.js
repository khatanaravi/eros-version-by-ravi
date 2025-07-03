import React, { useState, useEffect } from 'react';
import './Slider.css';
import image1 from '../assets/1_image.png';
import image2 from '../assets/2.png';
import image3 from '../assets/3.png';
import image4 from '../assets/4.png';
import image5 from '../assets/5.png';

const Slider = () => {
  const slides = [
    {
      image: image1,
      mainText: "Indulge in Sweet Bliss!",
      subText: ("Authentic Indian mithais that melt in your mouth – from laddoos to kaju katli, made with love."),
      ctaText: "Order Your Favorites Now!",
      ctacolor: "rgb(250, 94, 94)",
      colors: 'white'
    },
    {
      image: image2,
      mainText: "Savor the Crunch, Relish the Spice!",
      subText: "Explore our range of crispy, spicy, and tangy namkeens for every craving.",
      ctaText: "Shop Namkeens Today!",
      ctacolor: "darkgoldenrod;",
      colors:'white'
    },

    {
      image: image3,
      mainText: "Snack Smart, Save Big!",
      subText: "Explore our range of crispy, spicy, and tangy namkeens for every craving.",
      ctaText: "Grab the Offer Now!",
      ctacolor: "rgb(155, 44, 155)",
      colors:'white'
    },

    {
      image: image4,
      mainText: "Make Weddings Sweeter!",
      subText: "Premium sweet & namkeen gift hampers – perfect for wedding favors and celebrations",
      ctaText: "Explore Wedding Hampers!",
      ctacolor: "rgb(81, 1, 81)",
      colors:'white'
    },

    {
      image: image5,
      mainText: "Celebrate This Season with Delicious Treats!",
      subText: "Special sweets and namkeens for your festive moments. Share the joy!",
      ctaText: "Shop Festive Favorites!",
      ctacolor: "rgb(10, 162, 212)",
      colors:'white'
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
    setCurrentIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
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
            <div className="slide-content" style={{color:slide.colors}}>
              <h2>{slide.mainText}</h2>
              <p>{slide.subText}</p>
              <button className="cta-button" style={{background: slide.ctacolor}}>{slide.ctaText}</button>
            </div>
          </div>
        ))}
      </div>
      <button className="arrow left" onClick={prevSlide}>
        {"<"}
      </button>
      <button className="arrow right" onClick={nextSlide}>
        {">"}
      </button>
      <div className="dots">
        {slides.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === currentIndex ? 'active' : ''}`}
            onClick={() => goToSlide(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default Slider;
