import React from "react";
import "./cards.css";
import img1 from "../assets/Kajju.png";
import separator from "../assets/lines.png"; // Add your decorative image

const Cards = () => {
  const products = Array(20).fill({ image: img1, title: "Sweets" });

  return (
    <section className="cards-featured-products">
      <p className="cards-subtitle">Chef Recommended</p>
      <h2 className="cards-title">Featured products</h2>
      <img src={separator} alt="Decoration" className="cards-separator" />
      <div className="cards-products-container">
        {products.map((product, index) => (
          <div key={index} className="cards-product-card">
            <img src={product.image} alt={product.title} />
            <h3 className="cards-product-title">{product.title}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Cards;



// import React, { useEffect, useState } from "react";
// import "./cards.css";

// const Cards = () => {
//   const [categories, setCategories] = useState([]);

//   useEffect(() => {
//     // Fetch categories from the backend API
//     fetch("http://localhost:4000/cat2") // Assuming your backend is running on localhost:5000
//       .then((response) => response.json())
//       .then((data) => {
//         // Ensure only the first 6 categories are displayed
//         setCategories(data); 
//       })
//       .catch((error) => console.error("Error fetching data:", error));
//   }, []);

//   return (
//     <section className="cards-featured-products">
//       <h2 className="cards-title">Our Products</h2>
//       <div className="cards-products-container">
//         {categories.map((category) => (
//           category.name === "Corporate_Collection"? null :
//           <div key={category._id} className="cards-product-card">
//             <img src={category.image} alt={category.name} />
//             <h3 className="cards-product-title">{category.name}</h3>
//           </div>
        
//         ))}
//       </div>
//     </section>
//   );
// };

// export default Cards;

