import React, { useState, useEffect } from "react";
import { FaBiking, FaStore, FaMapMarkerAlt } from "react-icons/fa";
import "./Delievery.css";
import pick_up from '../assets/pick-up.png'

const Delievery = () => {
  const [activeTab, setActiveTab] = useState("delivery");
  const [selectedCity, setSelectedCity] = useState("");
  const [selectedOutlet, setSelectedOutlet] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const cities = ["Mumbai"];
  const outlets = {
    Mumbai: ["South mumbai", "Bandra"],
  };

  // 🚀 When user clicks Pickup, show modal instead of switching tabs immediately
  const handleTabChange = (tab) => {
    if (tab === "pickup" && activeTab !== "pickup") {
      setIsModalOpen(true);
    } else if (tab === "delivery") {
      setActiveTab("delivery");
    }
  };

  useEffect(() => {
    if (isModalOpen) {
      document.body.classList.add("modal-open");
    } else {
      document.body.classList.remove("modal-open");
    }
  }, [isModalOpen]);
  

  // ✅ Close modal and keep user on "Delivery"
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  // ✅ Close modal and switch to "Pickup"
  const handleConfirm = () => {
    setIsModalOpen(false);
    setActiveTab("pickup");
  };

  

  return (
    <div className="delivery-container">
      <div className="delivery-card">
        <div className={`tabs ${activeTab}`}>
          <div className="delivery-left">
          <button
            className={activeTab === "delivery" ? "active" : ""}
            onClick={() => handleTabChange("delivery")}
          >
            <FaBiking /> Delivery
          </button>
          </div>

          <div className="tab-divider"></div> {/* 👈 ADD THIS */}

          <div className="pickup_right">
          <button
            className={activeTab === "pickup" ? "active disabled" : ""}
            onClick={() => handleTabChange("pickup")}
            disabled={activeTab === "pickup"} // 🚫 Disable when already in Pickup
          >
            <FaStore /> Pickup
          </button>
          </div>
          <div className="underline"></div>
        </div>

        <h3 className="subtitle">Let's Get Ordering</h3>
        <h2 className="title">
          {activeTab === "delivery"
            ? "Set Your Delivery Location To Get Started"
            : "Select Your Pickup Location"}
        </h2>
        <div className="location-section">
          <button className="location-btn">
            <FaMapMarkerAlt /> Use my current location
          </button>
          <span className="separator">OR</span>
          <div className="dropdowns">
            <div className="dropdown-wrapper_info">
              <select
                className="city-dropdown"
                value={selectedCity}
                onChange={(e) => setSelectedCity(e.target.value)}
              >
                <option value="">Select City</option>
                {cities.map((city, index) => (
                  <option key={index} value={city}>
                    {city}
                  </option>
                ))}
              </select>
            </div>
            <div className="dropdown-wrapper_info">
              <select
                className="outlet-dropdown"
                value={selectedOutlet}
                onChange={(e) => setSelectedOutlet(e.target.value)}
                disabled={!selectedCity}
              >
                <option value="">Select Outlet</option>
                {selectedCity &&
                  outlets[selectedCity].map((outlet, index) => (
                    <option key={index} value={outlet}>
                      {outlet}
                    </option>
                  ))}
              </select>
            </div>
          </div>
        </div>
      </div>

{/* Modal Section */}
{isModalOpen && (
  <div className="modal-overlay-home">
    <div className="modal-container-home">
      <div className="modal-header-wrapper">
        <h2 className="modal-header-home">Pickup Order</h2>
        <span className="close-icon-home" onClick={handleCancel}>&times;</span>
      </div>
      <div className="modal-separator-home"></div>
      <img src={pick_up} alt="Icon" className="modal-image-home" />
      <p className="modal-message-home">
        You have to collect the order from the outlet.
      </p>
      <p className="modal-warning-home">
        Delivery partners are not assigned for pickup orders.
      </p>
      <div className="modal-buttons-home">
        <button className="cancel-btn-home" onClick={handleCancel}>
          GET DELIVERY INSTEAD
        </button>
        <button className="confirm-btn-home" onClick={handleConfirm}>
          YES, I WILL PICK UP
        </button>
      </div>
    </div>
  </div>
)}





    </div>
  );
};

export default Delievery;
