import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { FaHome, FaBox, FaShoppingBasket, FaStar } from "react-icons/fa";

import "../style/Shop.css";
import CartSidebar from "./CartSidebar";
// Import your components
import LeftSidebar from "./LeftSideBar";
import TopBar from "./TopBar";
import PromosSection from "./PromosSection";
import BestSellers from "./BestSellers";
import CategoryProducts from "./CategoryProducts";

// Import API calls
import { fetchProducts, fetchCategories } from "../API/index";

const CorporateCollection = () => {
  const [categories, setCategories] = useState([]);
  const [allProducts, setAllProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(0); // "All" by default

  const [priceRange, setPriceRange] = useState(7000);
  const [sortOption, setSortOption] = useState("az");

  const [cartItems, setCartItems] = useState([]);
  const [deliveryOption, setDeliveryOption] = useState("delivery");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); // For menu button
  const [isCartVisible, setIsCartVisible] = useState(false); // For mobile cart

  // Toggle functions
  const toggleCart = () => setIsCartVisible(!isCartVisible);
  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  // Fetch data
  useEffect(() => {
    const fetchData = async () => {
      const products = await fetchProducts();
      const categoriesData = await fetchCategories(products);
      setAllProducts(products);
      setCategories(categoriesData);
    };
    fetchData();
  }, []);

  // Sorting logic
  useEffect(() => {
    if (!allProducts || allProducts.length === 0) return;

    const sortedProducts = [...allProducts];
    switch (sortOption) {
      case "az":
        sortedProducts.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case "za":
        sortedProducts.sort((a, b) => b.name.localeCompare(a.name));
        break;
      case "lowToHigh":
        sortedProducts.sort((a, b) => a.price - b.price);
        break;
      case "highToLow":
        sortedProducts.sort((a, b) => b.price - a.price);
        break;
      default:
        break;
    }
    setAllProducts(sortedProducts);
  }, [sortOption]);

  const handleCategorySelect = (categoryId) => {
    setSelectedCategory(categoryId);
  };

  const onAddToCart = (product) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find(
        (item) => item.id === product.id && item.selectedWeight === product.selectedWeight
      );
      if (existingItem) {
        return prevItems.map((item) =>
          item.id === existingItem.id && item.selectedWeight === existingItem.selectedWeight
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prevItems, { ...product, quantity: 1 }];
      }
    });
  };

  const onIncrease = (id) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const onDecrease = (id) => {
    setCartItems((prevItems) =>
      prevItems
        .map((item) =>
          item.id === id ? { ...item, quantity: item.quantity - 1 } : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  return (
    <div className="ecommerce-layout">
      {/* LEFT COLUMN (Sidebar) */}
      <div className={`left-column ${isSidebarOpen ? "open" : ""}`}>
        <LeftSidebar
          categories={categories}
          selectedCategory={selectedCategory}
          onSelectCategory={handleCategorySelect}
          priceRange={priceRange}
          setPriceRange={setPriceRange}
          sortOption={sortOption}
          setSortOption={setSortOption}
        />
      </div>

      {/* MIDDLE COLUMN */}
      <div className="middle-column">
        <TopBar />
        <PromosSection />
        <BestSellers onAddToCart={onAddToCart} />
        <CategoryProducts
          products={allProducts}
          selectedCategory={selectedCategory}
          onAddToCart={onAddToCart}
        />
      </div>

      {/* RIGHT COLUMN (Cart Sidebar - Hidden in Mobile) */}
      <div className="right-column desktop-only">
        <CartSidebar
          cartItems={cartItems}
          onIncrease={onIncrease}
          onDecrease={onDecrease}
          deliveryOption={deliveryOption}
          setDeliveryOption={setDeliveryOption}
        />
      </div>

      {/* MOBILE VIEW COMPONENTS */}
      <div className="mobile-bottom-bar">
        <button className="menu-button" onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
          ☰ Menu
        </button>
        <div className="cart-bar" style={{ display: isCartVisible ? "none" : "flex" }}>
          <span>{cartItems.length} Items</span>
          <button className="view-cart" onClick={() => setIsCartVisible(true)}>View Cart</button>
        </div>
        <div className="bottom-nav">
      <NavLink to="/" className="nav-item">
        <FaHome className="icon" />
        <span>Home</span>
      </NavLink>
      <NavLink to="/shop" className="nav-item">
        <FaBox className="icon" />
        <span>Order</span>
      </NavLink>
      <NavLink to="/cart" className="nav-item">
        <FaShoppingBasket className="icon cart-icon" />
        <span>Cart</span>
        <span className="cart-badge">1</span> {/* Example cart count */}
      </NavLink>
      <NavLink to="/rewards" className="nav-item">
        <FaStar className="icon" />
        <span>Brownie Points</span>
      </NavLink>
    </div>
      </div>  

      {isSidebarOpen && (
      <div className="mobile-menu-overlay" onClick={toggleSidebar}>
        <div className="mobile-menu" onClick={(e) => e.stopPropagation()}>
          <LeftSidebar
            categories={categories}
            selectedCategory={selectedCategory}
            onSelectCategory={handleCategorySelect}
            priceRange={priceRange}
            setPriceRange={setPriceRange}
            sortOption={sortOption}
            setSortOption={setSortOption}
          />
        </div>
      </div>
    )}

      {/* MOBILE CART (Appears from Bottom) */}
      {isCartVisible && (
        <div className="mobile-cart-overlay" onClick={() => setIsCartVisible(false)}>
          <div className="mobile-cart" onClick={(e) => e.stopPropagation()}>
            <CartSidebar
              cartItems={cartItems}
              onIncrease={onIncrease}
              onDecrease={onDecrease}
              deliveryOption={deliveryOption}
              setDeliveryOption={setDeliveryOption}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default CorporateCollection;
