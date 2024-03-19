import React from "react";
import "./Sources.css";
import rasm1 from "../../assets/images/sources-1.svg";
import rasm2 from "../../assets/images/sources-2.svg";

function Sources() {
  return (
    <div className="sources">
      <div className="container">
        <div className="sources-all">
          <div className="sources-top">
            <h1>Articles & resources</h1>
            <div className="sources-btn">
              <button className="btn-1">Get a free quote</button>
              <button className="btn-2">Browse articles</button>
            </div>
          </div>
          <div className="sources-wrapper">
            <div className="sources-card">
              <img src={rasm1} alt="" />
              <div className="sources-info">
                <h1>
                  8 best vacuum cleaners to clean any mess for your home in 2022
                </h1>
                <p>
                  Lorem ipsum dolor sit amet conse ctetur adip iscing elit justo
                  quis odio sit sit ac port titor sit males.
                </p>
                <div className="sources-info1">
                  <h3>Jan 28, 2022</h3>
                  <div></div>
                </div>
              </div>
            </div>
            <div className="sources-card">
              <img src={rasm2} alt="" />
              <div className="sources-info">
                <h1>
                  How to properly disinfect your phone and other electronics
                </h1>
                <p>
                  Lorem ipsum dolor sit amet conse ctetur adip iscing elit justo
                  quis odio sit sit ac port titor sit males.
                </p>
                <div className="sources-info1">
                  <h3>Feb 1, 2022</h3>
                  <div></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sources;
