import React, { Component } from "react";
import Logo from "./logo.svg";
import "./navBar.css";

class navBar extends Component {
  render() {
    return (
      <div className="wrapperNavbar">
        <div className="navBar">
          <img src={Logo} className="logo" alt="logo" />
          <ul className="menu">
            <a href="www.google.com">
              <li>Features</li>
            </a>
            <a href="www.google.com">
              <li>Team</li>
            </a>
            <a href="www.google.com">
              <li>Sign In</li>
            </a>
          </ul>
        </div>
      </div>
    );
  }
}

export default navBar;
