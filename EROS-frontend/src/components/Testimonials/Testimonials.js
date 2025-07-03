import { useState, useEffect } from "react";
import "./Testimonials.css";
import leftSnack from "../assets/left.png"; // Left side image
import rightSnack from "../assets/right.png"; // Right side image
import quoteIcon from "../assets/Quote.png"; // Quote icon
import separator from "../assets/lines.png"; // Add your decorative image

const testimonials = [
  {
    text: "The cakes are an absolute delight! Every bite melts in your mouth, and the flavors are always on point. ",
    name: "Ananya Sharma",
  },
  {
    text: "Absolutely loved the pastries! They were fresh, delicious, and beautifully decorated. Perfect for any occasion!",
    name: "Rohan Mehta",
  },
  {
    text: "Great customer service and even better desserts! The variety of options and the taste is unbeatable. Will order again!",
    name: "Sneha Kapoor",
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(true);
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
        setFade(false);
      }, 500);
    }, 3000);

    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <section className="testimonials-section">
      <h2 className="testimonials-heading">Testimonials</h2>
      <img src={separator} alt="Decoration" className="cards-separator" />
      <img src={leftSnack} alt="Left Snack" className="snack-left" />
      <img src={rightSnack} alt="Right Snack" className="snack-right" />
      
      <div className="testimonials-container">
        <div className="testimonial-box">
          <img src={quoteIcon} alt="Quote Icon" className="quote-icon" />
          <div className={`testimonial-content ${fade ? 'fade-out' : 'fade-in'}`}>
            <p className="testimonial-text">{testimonials[currentIndex].text}</p>
            <h4 className="testimonial-name">{testimonials[currentIndex].name}</h4>
          </div>
          <div className="testimonial-navigation">
            <button className="nav-btn" onClick={() => setCurrentIndex((currentIndex - 1 + testimonials.length) % testimonials.length)}>
              {"<"}
            </button>
            <button className="nav-btn" onClick={() => setCurrentIndex((currentIndex + 1) % testimonials.length)}>
              {">"}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
