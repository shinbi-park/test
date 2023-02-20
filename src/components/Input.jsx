import React, { useState } from "react";

const Input = React.forwardRef(
  (
    { placeholder, notice, title, required, value, name, type, onChange },

    ref
  ) => {
    return (
      <div className="Input">
        <div>
          <label>{title}</label>
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
          ref={ref}
        />
      </div>
    );
  }
);

export default Input;
