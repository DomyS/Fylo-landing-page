import React, { Component } from "react";
import access from "./icon-access-anywhere.svg";
import anyFile from "./icon-any-file.svg";
import arrow from "./icon-security.svg";
import collab from "./icon-collaboration.svg";
import "./LogoPage.css";

class LogoPage extends Component {
  render() {
    return (
      <div className="mainWrapper">
        <div className="container">
          <div className="card">
            <img src={access} className="access" alt="access" />
            <h3>Access your files, anywhere</h3>
            <p>
              The ability to use a smartphone, tablet, or computer to access
              your account means your files follow you everywhere.
            </p>
          </div>
          <div className="card">
            <img src={arrow} className="arrow" alt="arrow" />
            <h3>Security you can trust</h3>
            <p>
              2-factor authentication and user-controlled encryption are just a
              couple of the security features we allow to help secure your
              files.
            </p>
          </div>
          <div className="card">
            <img src={collab} className="collab" alt="collab" />
            <h3>Real-time collaboration</h3>
            <p>
              Securely share files and folders with friends, family and
              colleagues for live collaboration. No email attachments required.
            </p>
          </div>
          <div className="card">
            <img src={anyFile} className="anyFile" alt="anyFile" />
            <h3>Store any type of file</h3>
            <p>
              Whether you're sharing holidays photos or work documents, Fylo has
              you covered allowing for all file types to be securely stored and
              shared.
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default LogoPage;
