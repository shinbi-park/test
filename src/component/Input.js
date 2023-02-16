import React, { useState } from "react";

const Input = ({
  name,
  title,
  notice,
  type,
  placeholder,
  required,
  value,
  onChange,
}) => {
  return (
    <div className="Input">
      <div>
        <label>
          {title}
          <span>{notice}</span>
        </label>
        {required && (
          <div className="requiredInput">
            필수 <span>*</span>
          </div>
        )}
      </div>

      <input
        name={name}
        type={type}
        placeholder={placeholder}
        required={required}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default Input;
