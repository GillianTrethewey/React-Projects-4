import React from "react";

const Button = (props) => {
  return (
    <div>
      <h1>{props.title}</h1>
      <button onClick={props.onClick}>{props.label} Component</button>
    </div>
  );
};
export default Button;
