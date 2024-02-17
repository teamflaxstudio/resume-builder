import React from "react";

export default function InputField({
  title,
  type,
  value,
  onChange,
  placeholder,
}: {
  title?: string;
  type?: "text" | "textarea" | "number" | "email" | "password";
  value?: string;
  onChange?: (e: string) => void;
  placeholder?: string;
}) {
  return (
    <div className="input-holder">
      <label>{title}</label>
      {type === "textarea" ? (
        <textarea rows={6}
          placeholder={placeholder}
          value={value}
          onChange={(e) => {
            if (onChange) onChange(e.target.value);
          }}
        ></textarea>
      ) : (
        <input
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={(e) => {
            if (onChange) onChange(e.target.value);
          }}
        />
      )}
    </div>
  );
}
