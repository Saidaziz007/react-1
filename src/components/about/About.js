import React from "react";
import "./About.css";
import card1 from "../../assets/images/card-1.svg";
import card2 from "../../assets/images/card-2.svg";
import card3 from "../../assets/images/card-3.svg";

function About() {
  return (
    <div className="container">
      <div className="about">
        <div className="about-top">
          <h1>About Us</h1>
          <p>
            Sagittis nibh scelerisque vitae eget vulputate sem elementum sed
            neque nisi felis non ultrices massa id egestas quam velit pretium
            nu.
          </p>
        </div>
        <div className="about-wrapper">
          <div className="about-card">
            <img src={card1} alt="" />
            <h1>1. Schedule online</h1>
            <p>
              Sagittis nibh scelerisque vitae egetolment vulputate sem elementum
              sed n.
            </p>
          </div>
          <div className="about-card">
            <img src={card2} alt="" />
            <h1>2. Pay online easily</h1>
            <p>
              Vitae ut accumsan blandit ullamcorperolm suscipit dui gravida amet
              at nunc.
            </p>
          </div>
          <div className="about-card">
            <img src={card3} alt="" />
            <h1>3. Get your house cleaned</h1>
            <p>
              Nunc maecenas sollicitudin metus tellus mattis sed porttitor
              cursus eleifend.
            </p>
          </div>
        </div>
        <div className="about-btn">
          <button className="btn-1">Get a free quote</button>
          <button className="btn-2">Explore services</button>
        </div>
      </div>
    </div>
  );
}

export default About;
