import React, { useState, useRef, useEffect } from "react";
import Footer from "./Footer/Footer";
import { Outlet } from "react-router-dom";
import NavBar_New from "./Navbar/NavBar_New";
import "./Layout.css";

const Layout = () => {
  const buttonRef = useRef(null);
  const [position, setPosition] = useState({ 
    x: window.innerWidth - 80,  // 🟢 Default: Bottom Right
    y: window.innerHeight - 150 
  });
  const [isDragging, setIsDragging] = useState(false);
  const [isMoving, setIsMoving] = useState(false);
  const [clickTimeout, setClickTimeout] = useState(null);

  useEffect(() => {
    const handleResize = () => {
      setPosition((prev) => ({
        x: Math.min(prev.x, window.innerWidth - 80),
        y: Math.min(prev.y, window.innerHeight - 80),
      }));
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleDragStart = (e, isTouch = false) => {
    e.preventDefault();
    setIsDragging(true);
    setIsMoving(false);

    const startX = isTouch ? e.touches[0].clientX : e.clientX;
    const startY = isTouch ? e.touches[0].clientY : e.clientY;
    const button = buttonRef.current;
    if (!button) return;

    const offsetX = startX - button.getBoundingClientRect().left;
    const offsetY = startY - button.getBoundingClientRect().top;

    const handleMove = (moveEvent) => {
      const clientX = isTouch ? moveEvent.touches[0].clientX : moveEvent.clientX;
      const clientY = isTouch ? moveEvent.touches[0].clientY : moveEvent.clientY;

      setPosition({
        x: Math.max(0, Math.min(window.innerWidth - 60, clientX - offsetX)),
        y: Math.max(0, Math.min(window.innerHeight - 60, clientY - offsetY)),
      });

      setIsMoving(true);
    };

    const handleEnd = () => {
      setIsDragging(false);
      setIsMoving(false);
      document.removeEventListener(isTouch ? "touchmove" : "mousemove", handleMove);
      document.removeEventListener(isTouch ? "touchend" : "mouseup", handleEnd);
    };

    document.addEventListener(isTouch ? "touchmove" : "mousemove", handleMove, { passive: false });
    document.addEventListener(isTouch ? "touchend" : "mouseup", handleEnd, { passive: false });
  };

  const handleClick = (e) => {
    e.preventDefault();
    if (!isDragging && !isMoving) {
      window.open("https://wa.me/1234567890?text=Hello%20I%20want%20to%20inquire%20about%20bulk%20orders", "_blank");
    }
  };

  return (
    <>
      <NavBar_New />
      <Outlet />
      <Footer />

      <a
        href="#"
        className={`whatsapp-btn2 ${isDragging ? "dragging" : ""}`}
        ref={buttonRef}
        style={{ left: `${position.x}px`, top: `${position.y}px` }}
        onMouseDown={(e) => {
          setClickTimeout(setTimeout(() => handleDragStart(e, false), 200));
        }}
        onMouseUp={() => {
          clearTimeout(clickTimeout);
          setIsDragging(false);
          setIsMoving(false);
        }}
        onClick={handleClick}
        onTouchStart={(e) => {
          setClickTimeout(setTimeout(() => handleDragStart(e, true), 200));
        }}
        onTouchEnd={() => {
          clearTimeout(clickTimeout);
          setIsDragging(false);
          setIsMoving(false);
        }}
      >
        <i className="fa-brands fa-whatsapp"></i>
      </a>
    </>
  );
};

export default Layout;


