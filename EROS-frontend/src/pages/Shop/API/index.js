// src/api/index.js
import { useState, useEffect } from "react";
import axios from "axios";
import img from "../assets/Kajju.png"; // default placeholder image

// 🔹 1. Fetch raw products using a custom hook
export const useProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetch = async () => {
      try {
        const { data } = await axios.get("http://localhost:5000/product");
        setProducts(Array.isArray(data) ? data : []);
      } catch (err) {
        console.error("Error fetching products:", err);
        setProducts([]);
      }
    };
    fetch();
  }, []);

  return products;
};

// 🔹 2. Format products for UI use
export const formatProducts = (products = []) =>
  products.map((p) => ({
    id: p._id,
    name: p.ProductName,
    price: p.Price,
    image: p.ProductImage, // use default image or p.Image if you have one
    category: p.Category,
    subcategory: p.SubCategory,
    description: p.Description,
    weightOptions: p.WeightOption,
    bestseller: true,
    newArrival: true,
  }));

// export const fetchCategories = (products = [] ) => {
//   // Build a lookup { categoryName: runningTotal }
//   const totals = products.reduce((acc, p) => {
//     const cat = p.category ?? "Uncategorised";      // fallback name
//     acc[cat] = (acc[cat] || 0) + 1;
//     return acc;
//   }, {});

//   // Convert the lookup into an array [{ category, count }]
//   return Object.entries(totals).map(([category, count]) => ({
//     category,
//     count,
//   }));
// };

// api/index.js  (add at the bottom)

// ---------- helper we already made ----------
export const countByCategory = (products = []) => {
  const totals = products.reduce((acc, p) => {
    const cat = p.Category ?? "Uncategorised";
    acc[cat] = (acc[cat] || 0) + 1;
    return acc;
  }, {});
  return Object.entries(totals).map(([category, count]) => ({ category, count }));
};

// ---------- NEW: fetchCategories ----------



export const fetchCategories = async () => {
  try {
    // pull products from the same endpoint
    const { data } = await axios.get("http://localhost:5000/product");
    const products = Array.isArray(data) ? data : [];
    // return [{ category:'Sweets', count:3 }, ...]
    return countByCategory(products);
  } catch (err) {
    console.error("Error fetching categories:", err);
    return [];
  }
};
