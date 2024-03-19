import React from "react";
import "./Covid.css";
import covidimg from "../../assets/images/covid.svg";
import call from "../../assets/images/hero-call.svg";

function Covid() {
  return (
    <div className="container">
      <div className="covid">
        <div className="covid-left">
          <img src={covidimg} alt="" />
        </div>
        <div className="covid-right">
          <h3>Covid-19 sanitization</h3>
          <h1>We follow guidelines to keep you safe from the COVID-19 virus</h1>
          <p>
            Lobortis mattis odio leo eget mauris met aliquet semper molestie
            sollicitudin congue massa mauris lectus.
          </p>
          <div className="covid-btn">
            <button>Get a free quote</button>
            <div className="covid-call">
              <img src={call} alt="" />
              <div className="covid-num">
                <p>Call us now</p>
                <h3>(414) 567 - 2109</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Covid;
