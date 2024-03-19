import React from "react";
import leftImg from "../../assets/images/hero-img.svg";
import callImg from "../../assets/images/hero-call.svg";
import "./Hero.css";

function Hero() {
  return (
    <div className="container">
      <div className="hero-all">
        <div className="hero-left">
          <h1>Quality cleaning for your home</h1>
          <p>
            Condimentum mauris sit cursus amet id non neque pharetra nulla
            ornare sed facilisis senectus dapibus nibh ultrices eget suscipit
            aliquet et nulla magna lacus penatibus.
          </p>
          <div className="hero-btn">
            <button>Get a free quote</button>
            <div className="hero-call">
              <img src={callImg} alt="" />
              <div className="hero-num">
                <p>Call us now</p>
                <h3>(414) 567 - 2109</h3>
              </div>
            </div>
          </div>
        </div>
        <div className="hero-right">
          <img src={leftImg} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Hero;
