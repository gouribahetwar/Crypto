import React, { useState } from "react";
import { FaHome, FaUser } from "react-icons/fa";
import { FiMenu, FiX } from "react-icons/fi"; // Hamburger + Close
import "./Navpage.css";
import "@fontsource/inter";

export const Navpage = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      {/* Left Logo */}
      <div className="logo">CRYPTO</div>

      {/* Middle Menu */}
      <div className={`nav-links ${menuOpen ? "open" : ""}`}>
        <a href="#" className="active">
          <FaHome className="icon" /> Home
        </a>
        <a href="#">Products</a>
        <a href="#">Solution</a>
        <a href="#">Company</a>
      </div>

      {/* Right Buttons */}
      <div className="nav-actions">
        <button className="login">Login</button>
        <button className="signup">Signup</button>
        <div className="profile">
          <FaUser />
        </div>

        {/* Hamburger / Close for Mobile */}
        <div
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FiX size={28} /> : <FiMenu size={28} />}
        </div>
      </div>
    </nav>
  );
};
