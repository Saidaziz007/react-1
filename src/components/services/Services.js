import React from "react";
import "./Services.css";
import card4 from "../../assets/images/card-4.svg";
import card5 from "../../assets/images/card-5.svg";
import card6 from "../../assets/images/card-6.svg";

function Services() {
  return (
    <div className="container">
      <div className="services">
        <div className="services-top">
          <h1>Our Services</h1>
          <button>Explore services</button>
        </div>
        <div className="services-wrapper">
          <div className="services-card">
            <img src={card4} alt="" />
            <h1>House cleaning</h1>
            <p>
              Lorem ipsum dolor sit amet consecte tur adipiscing elit semper
              dalaracc lacus vel facilisis volutpat est.
            </p>
          </div>
          <div className="services-card">
            <img src={card5} alt="" />
            <h1>Office cleaning</h1>
            <p>
              Lorem ipsum dolor sit amet consecte tur adipiscing elit semper
              dalaracc lacus vel facilisis volutpat est.
            </p>
          </div>
          <div className="services-card">
            <img src={card6} alt="" />
            <h1>Industrial cleaning</h1>
            <p>
              Lorem ipsum dolor sit amet consecte tur adipiscing elit semper
              dalaracc lacus vel facilisis volutpat est.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
