import React from "react";
import logo from "../../assets/images/nav-logo.svg";
import "./Header.css";

function Header() {
  return (
    <div className="container">
      <div className="header">
        <div className="nav-all">
          <img src={logo} alt="" />
          <ul className="nav-list">
            <li className="nav-item">Home</li>
            <li className="nav-item">About</li>
            <li className="nav-item">Services</li>
            <li className="nav-item">Articles</li>
            <li className="nav-item">Contact</li>
          </ul>
        </div>
        <div className="nav-btn">
          <p>Cart (0)</p>
          <button>Get a free quote</button>
        </div>
      </div>
    </div>
  );
}

export default Header;
