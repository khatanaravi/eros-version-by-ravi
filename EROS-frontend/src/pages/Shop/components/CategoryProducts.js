import React, { useState, useEffect } from "react";
import "../style/Shop.css";

const CategoryProducts = ({
  Products,
  selectedCategory,
  onAddToCart,
  categories,
}) => {
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [selectedWeights, setSelectedWeights] = useState({});
  const [priceMapping, setPriceMapping] = useState({}); // Store dynamic prices


  console.log(Products)
  useEffect(() => {
    if (selectedCategory === 0) {
      setFilteredProducts(Products || []);
    } else {
      const filtered = (Products || []).filter(
        (Products) => Products.category === selectedCategory
      );
      setFilteredProducts(filtered);
    }
  }, [Products, selectedCategory]);

  const categoryName =
    categories?.find((cat) => cat.id === selectedCategory)?.name ||
    "All Products";

  // Handle weight selection & update price
  const handleWeightSelect = (productId, weight, basePrice) => {
    setSelectedWeights((prev) => ({
      ...prev,
      [productId]: weight,
    }));

    // Calculate new price based on selected weight
    const weightMultiplier = {
      "250g": 1,
      "500g": 2,
      "1kg": 4,
    };

    setPriceMapping((prev) => ({
      ...prev,
      [productId]: basePrice * (weightMultiplier[weight] || 1), // Default to 1 if weight is missing
    }));
  };
  console.log(filteredProducts)

  if (!filteredProducts || filteredProducts.length === 0) {
    return <p>No products available</p>;
  }

  return (
    <div className="category-container-shop">
      <h2 className="category-heading-shop">{categoryName}</h2>
      <div className="category-1-shop">
        {filteredProducts.map((product) => {
          // console.log(products);
          const displayedPrice = priceMapping[product.id] || product.price;
          
          return (
            <div key={product.id} className="product-card-rect-shop">
                {/* Tag Label */}
                {(product.bestseller || product.newArrival) && (
                  <div className="product-tag-shop">
                    {product.bestseller && (
                      <span className="tag-bestseller">Best Seller</span>
                    )}
                    {product.newArrival && (
                      <span className="tag-newarrival">New Arrival</span>
                    )}
                  </div>
                )}
              <div className="product-details-rect-shop">

                <div className="left-section-shop">
                  <h3 className="product-name-shop">{product.name}</h3>
                  <div className="product-rating-shop">
                    {Array.from({ length: 5 }, (_, index) => (
                      <span
                        key={index}
                        className={
                          index < product.rating ? "filled-star" : "empty-star"
                        }
                      >
                        ★
                      </span>
                    ))}
                  </div>
                  <p className="product-price-shop">₹{displayedPrice}</p>
                  <p className="product-description-shop">
                    {product.description}
                  </p>

                  {product.weightOptions && (
                    <div className="weight-options-shop">
                      {product.weightOptions.map((weight) => (
                        <button
                          key={weight}
                          className={`weight-btn-shop ${
                            selectedWeights[product.id] === weight
                              ? "selected"
                              : ""
                          }`}
                          onClick={() =>
                            handleWeightSelect(
                              product.id,
                              weight,
                              product.price
                            )
                          }
                        >
                          {weight}
                        </button>
                      ))}
                    </div>
                  )}
                </div>

                <div className="right-section-shop">
                  <div className="image-container-shop">
                    <img src={product.image} alt={product.name} />
                    <button
                      className="addToCart-shop"
                      onClick={() =>
                        onAddToCart({
                          ...product,
                          selectedWeight:
                            selectedWeights[product.id] ||
                            product.weightOptions?.[0],
                          price: displayedPrice, // Add updated price
                        })
                      }
                    >
                      Add +
                    </button>
                  </div>
                  {product.customize && (
                    <p className="customize-text-shop">Customize the item</p>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CategoryProducts;
