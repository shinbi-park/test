import React from "react";

const Input = ({ name, notice, type, placeholder, required }) => {
  return (
    <div className="Input">
      <label>
        {name}
        <span>{notice}</span>
      </label>

      <input type={type} placeholder={placeholder} required={required} />
    </div>
  );
};

export default Input;
