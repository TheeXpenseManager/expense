import React from "react";
import "./input.css";

const Input = (props) => {
  return (
    <div className="input">
      <div className="input-icon">{props.icon}</div>
      <input
        className="input-fill"
        type="text"
        placeholder={props.placeholder}
      />
    </div>
  );
};

export default Input;
