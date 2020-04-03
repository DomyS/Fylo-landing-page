import React, { Component } from "react";
import Ilustration from "./illustration-intro.png";
import Curvy from "./bg-curvy-desktop.svg";
import "./Header.css";
import Button from "../Button/Button";

class Header extends Component {
  render() {
    return (
      <div className="Header">
        <img src={Ilustration} className="Ilustration" alt="Ilustration" />
        <div className="texts">
          <h1>All your files in one secure location, accessible anywhere.</h1>
          <p>
            Fylo stores all your most important files in one secure location.
            Access them wherever you need, share and collaborate with friends
            family, and co-workers.
          </p>
          <Button
            padding="10px 70px 10px 70px"
            fontSize="16px"
            text="Get Started"
          />
        </div>
        <img src={Curvy} className="curvy" width="100%" alt="curvy" />
      </div>
    );
  }
}

export default Header;
