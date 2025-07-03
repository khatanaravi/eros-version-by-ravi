import React, { useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [data, setData] = useState(5);

  return (
    <nav className="navbar">
      <div className="navbar-logo">
       <img src="./public/images/logo.png"  />
      </div>
    
      <div className="icon-box">
      <i class="fa-regular fa-message" id="icon"></i>
     
      <i class="fa-regular fa-bell" id="icon"></i>
      <span className="bell">{data}</span>

      <div className="profile">
          <div className="avatar">N</div>
          <p>Nidhi Patel</p>
          <i class="fa-solid fa-angle-down down"></i>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
