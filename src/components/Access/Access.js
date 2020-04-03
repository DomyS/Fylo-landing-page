import React, { Component } from "react";
import Button from "../Button/Button";
import "./Access.css";

class Access extends Component {
  render() {
    return (
      <div className="wrapperAccess">
        <div className="access">
          <h1>Get early access today</h1>
          <p>
            It only takes a minute to sign up and our free starter tier is
            extremely generous. If you have any questions, our support team
            would be happy to help you.
          </p>
          <div className="inputMain">
            <input type="text" className="inputField" />
            <Button padding="11px 40px" text="Get Started For Free" />
          </div>
        </div>
      </div>
    );
  }
}

export default Access;
