import React, { Component } from "react";
import produc from "./illustration-stay-productive.png";
import arrow from "./icon-arrow.svg";
import "./Productive.css";

class Productive extends Component {
  render() {
    return (
      <div className="mainWrapperProd">
        <div className="containerProd">
          <img src={produc} className="product" alt="product" />
          <div className="texts">
            <h1>Stay productive, wherever you are</h1>
            <p>
              Never let location be an issue when accessing your files. Fylo has
              you covered for all of your file storage needs.
            </p>
            <p>
              Securely share files and folders with friends, family and
              colleagues for live collaboration. No email attachments required.
            </p>
            <div className="works">
              <a href="www.google.com">See how Fylo works</a>
              <img src={arrow} className="arrow" alt="arrow" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Productive;
