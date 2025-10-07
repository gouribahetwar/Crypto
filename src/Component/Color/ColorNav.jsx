import React, { useState, useEffect } from "react";
import "./ColorNav.css";

const colors = [
  "#ff7eb3",
  "#42e695",
  "#fad961",
  "#a18cd1",
  "#ff758c",
  "#3bb2b8",
  "#f76b1c",
];

const ColorNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedColor, setSelectedColor] = useState("#ffffff"); // default white

  // Apply color to all h1
  useEffect(() => {
    const h1s = document.querySelectorAll("p");
    h1s.forEach((el) => {
      el.style.color = selectedColor;
      el.style.background = "none";
    });
  }, [selectedColor]);

  return (
    <div className="color-picker-arrow">
      {/* Arrow button */}
      <div
        className={`arrow ${isOpen ? "open" : ""}`}
        onClick={() => setIsOpen(!isOpen)}
      >
       ⭐
      </div>

      {/* Color options panel */}
      {isOpen && (
        <div className="color-options">
          {colors.map((color, index) => (
            <div
              key={index}
              className="color-option"
              style={{ backgroundColor: color }}
              onClick={() => {
                setSelectedColor(color);
                setIsOpen(false);
              }}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default ColorNav;
