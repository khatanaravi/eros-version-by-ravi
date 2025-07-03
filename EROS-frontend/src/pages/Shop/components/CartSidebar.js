// src/components/CartSidebar.jsx
import React, { useState } from "react";
import "../style/Shop.css";

const CartSidebar = ({
  cartItems,
  onIncrease,
  onDecrease,
  deliveryOption,
  setDeliveryOption,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalType, setModalType] = useState("");

  const handleToggleClick = (option) => {
    setModalType(option);
    setIsModalOpen(true);
  };

  const handleConfirm = () => {
    setDeliveryOption(modalType);
    setIsModalOpen(false);
  };

  const subtotal = (cartItems || []).reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="cart-sidebar">
      <h2>Your Cart</h2>

      <div className="cart-toggle">
        <button
          className={`toggle-Delivery ${deliveryOption === "delivery" ? "active" : ""}`}
          onClick={() => handleToggleClick("delivery")}
        >
          Delivery <span className="delivery-time"><br />(Next Day)</span>
        </button>
        <button
          className={`toggle-Delivery ${deliveryOption === "pickup" ? "active" : ""}`}
          onClick={() => handleToggleClick("pickup")}
        >
          Pick Up
        </button>
      </div>

      <div className="cart-items">
        {(cartItems || []).map((item) => (
          <div key={item.id} className="cart-item">
            <div className="cart-item-info">
              <p className="cart-item-name">{item.name} {item.selectedWeight && `[${item.selectedWeight}]`}</p>
              <p className="cart-item-price">
                {item.quantity} × ₹{item.price} = ₹{item.price * item.quantity}
              </p>
            </div>
            <div className="quantity-controls">
              <button onClick={() => onDecrease(item.id)}>-</button>
              <span>{item.quantity}</span>
              <button onClick={() => onIncrease(item.id)}>+</button>
            </div>
          </div>
        ))}
      </div>

      <p className="subtotal">
        Subtotal <span className="subtotal-amount">₹{subtotal}.00</span>
      </p>
      <button className="checkout-button">
        Checkout <span className="checkout-amount">₹{subtotal}.00</span>
      </button>

{isModalOpen && (
  <div className="modal-overlay" onClick={() => setIsModalOpen(false)}>
    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
      <h3>{modalType === "delivery" ? "Delivery Order" : "Pickup Order"}</h3>
      <img
        src={modalType === "delivery" ? "/delivery.png" : "/pickup.png"}
        alt="Order Type"
      />
      <p>Lorem ipsum refers to placeholder text often used in publishing.</p>
      <div className="modal-buttons">
        <button className="confirm-button" onClick={handleConfirm}>
          {modalType === "delivery" ? "Confirm Delivery" : "Confirm Pickup"}
        </button>
        <button className="cancel-button" onClick={() => setIsModalOpen(false)}>
          Cancel
        </button>
      </div>
    </div>
  </div>
)}

    </div>
  );
};

export default CartSidebar;
