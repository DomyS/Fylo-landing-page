import React from "react";
import "./Button.css";

const Button = props => {
  return (
    <div>
      <button
        style={{ padding: `${props.padding}`, fontSize: `${props.fontSize}` }}
      >
        {props.text}
      </button>
    </div>
  );
};

export default Button;
