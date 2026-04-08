import { useState } from "react";
import "./InputWordField.css";

export default function InputWordField({
  value,
  onChange,
  label = "Enter word to be processed",
  maxLength = 50,
  disabled = false,
}) {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <label
      className={`custom-field three ${isFocused ? "focused" : ""} ${
        disabled ? "disabled" : ""
      }`}
    >
      <input
        type="text"
        value={value}
        onChange={onChange}
        maxLength={maxLength}
        disabled={disabled}
        required
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        aria-label={label}
      />
      <span className="placeholder">{label}</span>
      <span className="border"></span>
      <span className="char-count">
        {value.length}/{maxLength}
      </span>
    </label>
  );
}
