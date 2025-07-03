// src/api/index.js

import img from "../assets/Kajju.png";

export const fetchProducts = async () => { 
  return [
    {
      id: 1,
      name: "Kaju Katri",
      price: 300,
      image: img,
      category: 1,
      description: "Nutty, melt-in-your-mouth delight.",
      weightOptions: ["250g", "500g", "1kg"],
      bestseller: true,
    },
    {
      id: 2,
      name: "Kaju Katri",
      price: 300,
      image: img,
      category: 1,  
      description: "Nutty, melt-in-your-mouth delight.",
      weightOptions: ["250g", "500g", "1kg"],
      bestseller: true,
    },
    {
      id: 3,
      name: "Laddu",
      price: 200,
      image: img,
      category: 1,
      description: "Traditional Indian sweet ball.",
      weightOptions: ["250g", "500g", "1kg"],
      bestseller: true,
    },
    {
      id: 4,
      name: "Mathri",
      price: 150,
      image: img,
      category: 2,
      description: "Crispy and savory snack.",
      weightOptions: ["250g", "500g", "1kg"],
      bestseller: true,
    },
    {
      id: 5,
      name: "Cashew Nuts",
      price: 800,
      image: img,
      category: 3,
      description: "Healthy and delicious dry fruits.",
      weightOptions: ["250g", "500g", "1kg"],
      bestseller: false,
    },
    {
      id: 6,
      name: "Bread",
      price: 50,
      image: img,
      category: 4,
      description: "Freshly baked everyday.",
      weightOptions: ["250g", "500g", "1kg"],
      bestseller: false,
    },
    {
      id: 7,
      name: "Chocolate Bar",
      price: 120,
      image: img,
      category: 5,
      description: "Delicious treat for chocolate lovers.",
      weightOptions: ["250g", "500g", "1kg"],
      bestseller: false,
    },
    {
      id: 8,
      name: "Cookies",
      price: 100,
      image: img,
      category: 4,
      description: "Tasty cookies to satisfy your cravings.",
      weightOptions: ["250g", "500g", "1kg"],
      bestseller: true,
    },
  ];
};

export const fetchCategories = async (products) => {
  // You can change images or data as you like
  const categoryList = [
    { id: 0, image: img, name: "All" },
    { id: 1, image: img, name: "Sweets" },
    { id: 2, image: img, name: "Namkeen" },
    { id: 3, image: img, name: "Dry Fruits" },
    { id: 4, image: img, name: "Bakery" },
    { id: 5, image: img, name: "Chocolates" },
    { id: 6, image: img, name: "Others" },
  ];

  // Count items in each category
  const categoryCounts = categoryList.map((category) => ({
    ...category,
    count:
      category.id === 0
        ? products.length
        : products.filter((product) => product.category === category.id).length,
  }));

  return categoryCounts;
};