import React from "react";
import googlePlay from "../assets/play store.png";
import appStore from "../assets/app store.png";
import qrCode from "../assets/app_qr.png"
import arrowPng from '../assets/arrow_png.png'
import "./AppDownload.css";
import separator from "../assets/lines.png"; // Add your decorative image

const AppDownload = () => {
  return (
    <>
    <div className="app_download_section">
    <div className="white_gradient">
      <div className="download_app_links">
        <div className="app_links_heading">
          Get the EROS App Now
          <div className="hr_line"></div>
        </div>
        <div className="app_links_des">
          Download App From
        </div>
        <div className="app_links">
          <img src={googlePlay} alt="" srcset="" />
          <img src={appStore} alt="" srcset="" />
        </div>
      </div>
      <div className="scanner_section">
        <span>Scan QR Code to Download App</span>
        <img src={arrowPng} alt="" id='arrow_png' srcset="" />
        <img src={qrCode} alt="" id="app_qr_png" srcset="" />
      </div>
      </div>
    </div>

    <div className="like">
        <div className="heading-app">
          <h2>Like Our Products?</h2>
          <img src={separator} alt="Decoration" className="heading-separator-like" />
          <p>Treat yourself to your favourite Eros products or surprise your loved ones with an edible gift.</p>
          <button>ORDER ONLINE</button>
        </div>
      </div>
    </>
  );
};

export default AppDownload;
