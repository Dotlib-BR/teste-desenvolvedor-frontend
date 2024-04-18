import React from "react";
import "./Input.scss";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  errorMessage?: string;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ label, errorMessage, name, ...props }, ref) => {
    return (
      <div className="input-container">
        {label && (
          <label htmlFor={name} className="label">
            {label}
          </label>
        )}
        <input
          {...props}
          name={name}
          ref={ref}
          className={`input ${errorMessage && "error-input"}`}
        />
        {errorMessage && <span className="error-message">{errorMessage}</span>}
      </div>
    );
  }
);

Input.displayName = "Input";
