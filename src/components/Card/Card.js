import React from "react";
import "./Card.css";

const Card = props => {
  return (
    <div>
      <div className="card">
        <p>{props.mainText}</p>
        <div className="testimonial">
          <img src={props.profile} alt="profile" />
          <div className="titles">
            <h5>{props.mainName}</h5>
            <p>{props.jobtitle}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Card;
