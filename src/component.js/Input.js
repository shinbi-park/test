import React from "react";

const Input = ({ name, notice, type, placeholder }) => {
  return (
    <div className="Input">
      <label>
        {name}
        <span>{notice}</span>
      </label>

      <input type={type} placeholder={placeholder} />
    </div>
  );
};

export default Input;
