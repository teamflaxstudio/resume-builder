import React, { useContext } from "react";
import InputField from "../widgets/InputField";
import { ResumeDataContext } from "@/pages/editor";
import { DeleteIcon } from "../icons";

export default function HobbyForm({ onClose }: { onClose: () => void }) {
  const { resumeData, setResumeData } = useContext(ResumeDataContext);

  function onHobbyChange(value: string) {
    setResumeData({ ...resumeData, hobby: value });
  }
  return (
    <div className="input-group">
      <div className="removable">
        <h3>Hobby</h3>
        <button onClick={onClose} className="btn icon-btn">
          <DeleteIcon />
        </button>
      </div>
      <p>
        What do you like to do in your free time? Add 1 - 2 hobbies to showcase
      </p>

      <InputField
        type="textarea"
        placeholder="e.g. Skydiving, Hiking, Reading, etc."
        value={resumeData.hobby}
        onChange={onHobbyChange}
      />
    </div>
  );
}
