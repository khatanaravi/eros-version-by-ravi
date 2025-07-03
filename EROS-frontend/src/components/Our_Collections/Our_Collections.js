import React from "react";
import { useNavigate } from "react-router-dom";
import "./Our_Collections.css";
import img1 from '../assets/collection1.png';
import img2 from '../assets/collection2.png';

const collections = [
  {
    id: 1,
    title: "Corporate Collections",
    description: "Gift your employees for a wide range of products.",
    image: img1,
    link: "/corporate",
  },
  {
    id: 2,
    title: "Wedding Collections",
    description: "Beautiful gifts for your special day.",
    image: img2,
    link: "/wedding",
  },
];

function Our_Collections() {
  const navigate = useNavigate();

  const handleRedirect = (link) => {
    navigate(link);
  };

  return (
    <div className="page-container">
      <h1 className="page-title">Our Collections</h1>
      <div className="collections-container">
        {collections.map((collection) => (
          <div key={collection.id} className="collection-card">
            <div className="image-container">
              <img src={collection.image} alt={collection.title} />
            </div>
            <div className="content">
              <h3>{collection.title}</h3>
              <p>{collection.description}</p>
              <div
                className="arrow-button"
                onClick={() => handleRedirect(collection.link)}
              >{'>'}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Our_Collections;
