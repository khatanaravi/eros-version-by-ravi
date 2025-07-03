import React from "react";
import "../style/Shop.css";
import specialOfferIcon from "../assets/offers.png";
import tagIcon from "../assets/discount.png";
import deliveryIcon from "../assets/delievery.png";

const PromosSection = () => {
  return (
    <div className="promos-container-shop">
      <h2 className="promos-title-shop">PROMOS</h2>
      <div className="promos-section-shop">
        <div className="promo-card-shop">
          <div className="promo-sticker-shop promo-sticker-1">
            <img src={specialOfferIcon} alt="Special Offer" />
          </div>
          <p className="promo-text-shop">15% OFF on all combos</p>
          <small className="promo-code-shop">Use Code: COMBO11</small>
        </div>

        <div className="promo-card-shop">
          <div className="promo-sticker-shop promo-sticker-2">
            <img src={tagIcon} alt="Tag Offer" />
          </div>
          <p className="promo-text-shop">10% OFF on First Order</p>
          <small className="promo-code-shop">Use Code: SIGNUP10</small>
        </div>

        <div className="promo-card-shop">
          <div className="promo-sticker-shop promo-sticker-3">
            <img src={deliveryIcon} alt="Free Delivery" />
          </div>
          <p className="promo-text-shop">Free Delivery</p>
          <small className="promo-code-shop">On orders above ₹250</small>
        </div>
      </div>
    </div>
  );
};

export default PromosSection;
