// src/api/index.js

// api/index.js
import { useState, useEffect } from "react";
import axios from "axios";
import img from "../assets/Kajju.png";   // adjust path

/* 1️⃣  Custom hook: fetch raw products */
export const useProducts = () => {
  const [products, setProducts] = useState([]);        // always array

  useEffect(() => {
    const fetch = async () => {
      try {
        const { data } = await axios.get("http://localhost:5000/product");
        setProducts(Array.isArray(data) ? data : []);
      } catch (err) {
        console.error("Error fetching products:", err);
        setProducts([]);                               // keep array shape
      }
    };
    fetch();
  }, []);                                              // run once

  return products;
};

/* 2️⃣  Plain utility: format any array you pass in */
export const formatProducts = (products = []) =>
  products.map((p) => ({
    id:            p._id,
    name:          p.ProductName,
    price:         p.Price,
    image:         img,
    category:      p.Category,
    subcategory:   p.SubCategory,
    description:   p.Description,
    weightOptions: p.WeightOption,
    bestseller:    true,
    newArrival:    true,
  }));
  



export const fetchCategories = async (products) => {
  const categoryList = [
    {
      id: 0,
      image: img,
      name: "All",
      subcategories: [],
    },
    {
      id: 1,
      image: img,
      name: "Sweets",
      subcategories: [
        { id: 101, name: "Dryfruit Sweets" },
        { id: 102, name: "Milk Sweets" },
        { id: 103, name: "Mawa Barfis" },
        { id: 104, name: "Pedas" },
        { id: 105, name: "Ladoos" },
        { id: 106, name: "Ghee Sweets" },
        { id: 107, name: "Khajas" },
        { id: 108, name: "Aflatoons" },
        { id: 109, name: "Halwas" },
        { id: 110, name: "Sugarfree Mithai" },
        { id: 111, name: "Assorted Sweets" },
        { id: 112, name: "Modaks" },
      ],
    },

    {
      id: 2,
      image: img,
      name: "Namkeens",
      subcategories: [
        { id: 201, name: "Pooris" },
        { id: 202, name: "Mixtures" },
        { id: 203, name: "Chivdas" },
        { id: 204, name: "Chakli" },
        { id: 205, name: "Dals" },
        { id: 206, name: "Papdi & Gathiyas" },
        { id: 207, name: "Sev & Bhujia" },
        { id: 208, name: "Boondi" },
        { id: 209, name: "Para & Sticks" },
        { id: 210, name: "Makhanas" },
        { id: 211, name: "Chips & Wafers" },
        { id: 212, name: "Baked & Roasted" },
        { id: 213, name: "Chana Jor" },
        { id: 214, name: "Kachori & Bhakarwadi" },
        { id: 215, name: "Kumras" },
        { id: 216, name: "Khakhras" },
      ],
    },

    {
      id: 3,
      image: img,
      name: "Baklava",
      subcategories: [
        { id: 301, name: "Aloo Bhujia" },
        { id: 302, name: "Sev" },
      ],
    },

    {
      id: 4,
      image: img,
      name: "Bengali Sweets",
      subcategories: [
        { id: 201, name: "Aloo Bhujia" },
        { id: 202, name: "Sev" },
      ],
    },

    {
      id: 5,
      image: img,
      name: "Dry Fruits",
      subcategories: [
        { id: 501, name: "Premium Dryfruits" },
        { id: 502, name: "Exotic Dryfruits" },
        { id: 503, name: "Berries" },
        { id: 504, name: "Nut Mixtures" },
        { id: 505, name: "Flavored Nuts" },
        { id: 506, name: "Healthy Mixes" },
      ],
    },

    {
      id: 6,
      image: img,
      name: "Healthy & Sugarfree Treats",
      subcategories: [
        { id: 201, name: "Aloo Bhujia" },
        { id: 202, name: "Sev" },
      ],
    },

    {
      id: 7,
      image: img,
      name: "Snacks",
      subcategories: [
        { id: 201, name: "Aloo Bhujia" },
        { id: 202, name: "Sev" },
      ],
    },

    {
      id: 8,
      image: img,
      name: "Bakery Products",
      subcategories: [
        { id: 801, name: "Nankhatai" },
        { id: 802, name: "Cookies" },
        { id: 803, name: "Tea Time Cakes" },
        { id: 804, name: "Khari" },
        { id: 805, name: "Toast" },
        { id: 806, name: "Butter" },
      ],
    },

    {
      id: 9,
      image: img,
      name: "Cakes & Pastries",
      subcategories: [
        { id: 201, name: "Aloo Bhujia" },
        { id: 202, name: "Sev" },
      ],
    },

    {
      id: 10,
      image: img,
      name: "Chocolates",
      subcategories: [
        { id: 1001, name: "Barks" },
        { id: 1002, name: "Bars" },
        { id: 1003, name: "Bonbons" },
        { id: 1004, name: "Dragees" },
        { id: 1005, name: "Pralines" },
        { id: 1006, name: "Rocks" },
      ],
    },

    {
      id: 11,
      image: img,
      name: "Gifting",
      subcategories: [
        { id: 1101, name: "Hampers" },
        { id: 1102, name: "Luxury Trays" },
        { id: 1103, name: "Premium Sweet Packaging" },
        { id: 1104, name: "Corporate Gifting" },
        { id: 1105, name: "Wedding Gifting" },
        { id: 1106, name: "Personalized Gifting" },
      ],
    },

    {
      id: 12,
      image: img,
      name: "Festival Specials",
      subcategories: [
        { id: 1201, name: "Diwali" },
        { id: 1202, name: "Ganesh Chaturthi" },
        { id: 1203, name: "Raksha Bandhan" },
        { id: 1204, name: "Gudi Padwa" },
        { id: 1205, name: "Dussehra" },
        { id: 1206, name: "Navratri" },
        { id: 1207, name: "Ramadan & Eid" },
        { id: 1208, name: "Christmas" },
        { id: 1209, name: "New Year" },
        { id: 1210, name: "Parsee New Year" },
        { id: 1211, name: "Navroz" },
        { id: 1212, name: "Janmashtami" },
        { id: 1213, name: "Holi" },
        { id: 1214, name: "Valentines Day" },
        { id: 1215, name: "Womens Day" },
        { id: 1216, name: "Mothers Day" },
        { id: 1217, name: "Independence Day" },
        { id: 1218, name: "Republic Day" },
      ],
    },

    {
      id: 13,
      image: img,
      name: "Others",
      subcategories: [
        { id: 201, name: "Aloo Bhujia" },
        { id: 202, name: "Sev" },
      ],
    },
  ];

  const categoryCounts = categoryList.map((category) => ({
    ...category,
    count:
      category.id === 0
        ? products.length
        : products.filter((product) => product.category === category.id).length,
    subcategories: category.subcategories?.map((sub) => ({
      ...sub,
      count: products.filter((product) => product.subcategory === sub.id)
        .length,
    })),
  }));

  return categoryCounts;
};
