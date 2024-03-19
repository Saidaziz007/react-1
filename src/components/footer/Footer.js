import React from "react";
import "./Footer.css";
import rasm from "../../assets/images/nav-logo.svg";

function Footer() {
  return (
    <div className="container">
      <div className="footer">
        <div className="footer-all">
          <div className="footer-1">
            <h1>Quality cleaning for your home</h1>
            <p>
              Lorem ipsum dolor sit amet cteturdo adipiscing elit, sed do
              eiusmo.
            </p>
            <ul className="footer-list">
              <li className="footer-item"></li>
              <li className="footer-item"></li>
              <li className="footer-item"></li>
              <li className="footer-item"></li>
              <li className="footer-item"></li>
            </ul>
          </div>
          <div className="footer-2">
            <h1>Contact us</h1>
            <p>1827 Nickel Road, Los Angeles, CA, 90017, United States</p>
            <p>(414) 567 - 2109</p>
            <p>contact@cleaning.com</p>
          </div>
          <div className="footer-3">
            <h1>Hours</h1>
            <h3>Monday to Friday</h3>
            <p>6:00 AM - 9:00 PM</p>
            <h3>Saturday & Sunday</h3>
            <p>8:00 AM - 8:00 PM</p>
          </div>
          <div className="footer-4">
            <h1>Get a free estimate</h1>
            <h2>(414) 567 - 2109</h2>
            <p>
              Lorem ipsum dolor sit amet ectetur adipiscing elit, sed do
              eiusmod.
            </p>
            <button>Request a free quote</button>
          </div>
        </div>
      </div>
      <hr />
      <div className="footer-bottom">
        <img src={rasm} alt="" />
        <p>
          Copyright © Cleaning X | Designed by <span>BRIX Templates</span> -
          Powered by
          <span>Webflow Licenses</span>
        </p>
      </div>
    </div>
  );
}

export default Footer;
