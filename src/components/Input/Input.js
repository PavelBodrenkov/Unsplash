import React from "react";
import "./Input.css";

function Input({ placeholder, handleChange, value }) {
  return (
    <input
      className="input"
      type="text"
      placeholder={placeholder}
      onChange={handleChange}
      value={value}
      required
    />
  );
}

export default Input;
