import React from "react";
import "./Contact.css";
import rasm from "../../assets/images/hero-call.svg";

function Contact() {
  return (
    <div className="contacts">
      <div className="container">
        <div className="contact">
          <div className="contact-all">
            <div className="contact-left">
              <h1>Contact Us</h1>
              <p>
                In dignissim euismod pretium amet enim a eu nam ut urna accumsan
                pellentesque lacus duis pharetra eutortor.
              </p>
              <div className="hero-call">
                <img src={rasm} alt="" />
                <div className="hero-num">
                  <p>Call us now</p>
                  <h3>(414) 567 - 2109</h3>
                </div>
              </div>
              <hr />
              <h2>Not convinced yet?</h2>
              <p>
                Massa bibendum consectetur maurisid gravida purus, dolor dui
                amet morbi non nunc urna purus diam.
              </p>
              <button>Browse our packages</button>
            </div>
            <div className="contact-right">
              <div className="contact-wrapper">
                <div className="contact-input">
                  <label htmlFor="#">Full name</label>
                  <input type="text" />
                </div>
                <div className="contact-input">
                  <label htmlFor="#">Phone number</label>
                  <input type="text" />
                </div>
                <div className="contact-input">
                  <label htmlFor="#">Address</label>
                  <input type="text" />
                </div>
                <div className="contact-input">
                  <label htmlFor="#">Email</label>
                  <input type="text" />
                </div>
                <div className="contact-input">
                  <label htmlFor="#">Requested service</label>
                  <input type="text" />
                </div>
                <div className="contact-input">
                  <label htmlFor="#">Day of service</label>
                  <input type="text" />
                </div>
              </div>
              <div className="contact-text">
                <label htmlFor="#">Add a note</label>
                <textarea name="" id="" cols="30" rows="10"></textarea>
              </div>
              <button>Submit message</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
