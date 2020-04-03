import React, { Component } from "react";
import profile1 from "./profile-1.jpg";
import profile2 from "./profile-2.jpg";
import profile3 from "./profile-3.jpg";
import Card from "../Card/Card";
import blueQuotes from "../Quotes/bg-quotes.png";
import "./Quotes.css";

class Quotes extends Component {
  render() {
    return (
      <div className="wrapperQuotes">
        <img className="blueQuotes" src={blueQuotes} alt="blueQuotes" />
        <div className="mainContainer">
          <Card
            className="card"
            mainName="Satish Patel"
            jobtitle="Founder & CEO, Huddle"
            profile={profile1}
            mainText="Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine."
          />
          <Card
            className="card"
            mainName="Bruce McKenzie"
            jobtitle="Founder & CEO, Huddle"
            profile={profile2}
            mainText="Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine."
          />
          <Card
            className="card"
            mainName="Iva Boyd"
            jobtitle="Founder & CEO, Huddle"
            profile={profile3}
            mainText="Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine."
          />
        </div>
      </div>
    );
  }
}

export default Quotes;
