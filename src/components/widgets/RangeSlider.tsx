import React, { useEffect, useRef } from "react";
import "@/styles/widgets/range-slider.css";

export default function RangeSlider({
  value,
  max,
  onChange,
}: {
  value: number;
  max: number;
  onChange: (value: number) => void;
}) {
  const sliderInput = useRef<HTMLInputElement | null>(null);
  const sliderProgress = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    onSliderChange(value);
  }, [value]);

  function onSliderChange(value: number) {
    if (!sliderProgress.current || !sliderInput.current) return;

    const percent = ((value + 1) / max) * 100;
    sliderProgress.current.style.width = `${percent}%`;
    onChange(value);
  }
  return (
    <div className="range-slider">
      <div className="dots-layer">
        {[...Array(max)].map((_, i) => (
          <span key={i}></span>
        ))}
      </div>
      <input
        ref={sliderInput}
        type="range"
        max={max - 1}
        value={value}
        onChange={(e) => onSliderChange(parseFloat(e.target.value))}
      />
      <div ref={sliderProgress} className="progress"></div>
    </div>
  );
}
