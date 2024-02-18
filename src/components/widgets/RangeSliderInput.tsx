import React from "react";
import RangeSlider from "./RangeSlider";

export default function RangeSliderInputField({
  title,
  max,
  value,
  onChange,
}: {
  title: string;
  value: number;
  max: number;
  onChange: (value: number) => void;
}) {
  return (
    <div className="input-holder">
      <label>{title}</label>
      <RangeSlider
        max={max}
        value={value}
        onChange={onChange}
      />
    </div>
  );
}
