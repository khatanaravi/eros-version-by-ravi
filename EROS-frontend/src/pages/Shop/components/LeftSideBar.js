import React, { useState } from "react";
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
  const [expandedCategory, setExpandedCategory] = useState(null);

  const handleSortChange = (e) => {
    const { name, checked } = e.target;
    if (checked) {
      setSortOption(name);
    } else {
      setSortOption("");
    }
  };

  const handleCategoryClick = (catId) => {
    if (expandedCategory === catId) {
      setExpandedCategory(null);
    } else {
      setExpandedCategory(catId);
    }
    onSelectCategory(catId);
  };

  

  return (
    <div className="left-sidebar">
      {/* Categories Box */}
      <div className="box categories-box">
        <h2>Categories</h2>
        <ul className="category-list">
          {categories?.map((cat) => (
            <React.Fragment key={cat.id}>
              <li
                className={selectedCategory === cat.id ? "active" : ""}
                onClick={() => handleCategoryClick(cat.id)}
              >
                <img src={cat.image} alt={cat.name} className="category-image" />
                <span className="category-name">{cat.name}</span>
                <span className="category-count">({cat.count})</span>
              </li>

              {/* Subcategories with Animation */}
              <ul
                className={`subcategory-list ${
                  expandedCategory === cat.id ? "show" : ""
                }`}
              >
                {cat.subcategories?.map((sub) => (
                  <li
                    key={sub.id}
                    className={`subcategory-item ${
                      selectedCategory === sub.id ? "active" : ""
                    }`}
                    onClick={(e) => {
                      e.stopPropagation();
                      onSelectCategory(sub.id);
                    }}
                  >
                    {sub.name}
                    <span className="subcategory-count">({sub.count})</span>
                  </li>
                ))}
              </ul>
            </React.Fragment>
          ))}
        </ul>
      </div>

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
