// src/components/LeftSidebar.jsx
import React from "react";
import "../style/Shop.css";

const LeftSidebar = ({
  categories,
  selectedCategory,
  onSelectCategory,
  priceRange,
  setPriceRange,
  sortOption,
  setSortOption,
}) => {
  const handleSortChange = (e) => {
    const { name, checked } = e.target;
    // If you allow multiple checkboxes, you'd store them in an array.
    // If you only want one sort option at a time, you can store it as a string.
    if (checked) {
      setSortOption(name);
    } else {
      setSortOption(""); // or handle unchecking logic
    }
  };

  return (
    <div className="left-sidebar">
      {/* Filters Box */}
      <div className="box filters-box">
        <h2>Filters</h2>
        <div className="filter-item">
          <label>Price Range: 0 - {priceRange}</label>
          <input
            type="range"
            min="0"
            max="500"
            value={priceRange}
            onChange={(e) => setPriceRange(e.target.value)}
          />
        </div>
        <div className="filter-item">
          <label>Sort By:</label>
          <div>
            <label>
              <input
                type="checkbox"
                name="az"
                checked={sortOption === "az"}
                onChange={handleSortChange}
              />
              Alphabetically, A-Z
            </label>
            <label>
              <input
                type="checkbox"
                name="za"
                checked={sortOption === "za"}
                onChange={handleSortChange}
              />
              Alphabetically, Z-A
            </label>
            <label>
              <input
                type="checkbox"
                name="lowToHigh"
                checked={sortOption === "lowToHigh"}
                onChange={handleSortChange}
              />
              Price, Low to High
            </label>
            <label>
              <input
                type="checkbox"
                name="highToLow"
                checked={sortOption === "highToLow"}
                onChange={handleSortChange}
              />
              Price, High to Low
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftSidebar;
