import React from "react";
import "./Button.css";

const Button = (props) => {
  return (
    <div>
      <button onClick={props.onClick}>
        {props.label} Counter from Component
      </button>
    </div>
  );
};
export default Button;
