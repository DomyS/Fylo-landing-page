import React, { Component } from "react";
import "./Footer.css";
import Logo from "./logo.svg";
import Location from "./icon-location.svg";
import Phone from "./icon-phone.svg";
import Email from "./icon-email.svg";

class Footer extends Component {
  render() {
    return (
      <div className="mainFooter">
        <div className="mainText">
          <img src={Logo} className="Logo" alt="Logo" />
          <div className="footerMenu">
            <div className="menu2">
              <img src={Location} className="Location" alt="Location" />
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua
              </p>
            </div>
            <div className="menu1">
              <div className="connect">
                <img src={Phone} className="Phone" alt="Phone" />
                <p>+1-543-123-4567</p>
              </div>
              <div className="connect">
                <img src={Email} className="Email" alt="Email" />
                <p>example@fylo.com</p>
              </div>
            </div>
            <div className="menu1">
              <p>About Us</p>
              <p>Jobs</p>
              <p>Press</p>
              <p>Blog</p>
            </div>
            <div className="menu1">
              <p>Contact Us</p>
              <p>Terms</p>
              <p>Privacy</p>
            </div>
            <div className="menuSoc">
              <a href="www.google.com">
                <i className="fa fa-facebook-f"></i>
              </a>
              <a href="www.google.com">
                <i className="fa fa-twitter"></i>
              </a>
              <a href="www.google.com">
                <i className="fa fa-instagram"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
