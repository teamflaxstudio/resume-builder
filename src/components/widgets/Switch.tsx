import React from "react";
import "@/styles/widgets/switch.css";

export default function Switch({
  isOn,
  onChange,
}: {
  isOn: boolean;
  onChange: (isOn: boolean) => void;
}) {
  return (
    <label className="switch">
      <input
        checked={isOn}
        type="checkbox"
        onChange={(e) => onChange(e.target.checked)}
      />
      <span className="slider"></span>
    </label>
  );
}
