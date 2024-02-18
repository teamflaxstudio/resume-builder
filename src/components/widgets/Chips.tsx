import React from "react";
import { AddIcon, CheckIcon } from "../icons";
import "@/styles/widgets/chips.css";

export default function Chips({
  data,
  selected,
  onToggle,
}: {
  data: string[];
  selected: string[];
  onToggle: (name: string) => void;
}) {
  function isChecked(chip: string) {
    return selected.includes(chip);
  }
  return (
    <div className="chip-holder">
      {data.map((chip, i) => (
        <button
          key={i}
          onClick={() => onToggle(chip)}
          className={isChecked(chip) ? "btn item active" : "btn item"}
        >
          {chip} {isChecked(chip) ? <CheckIcon /> : <AddIcon />}
        </button>
      ))}
    </div>
  );
}
