import React, { useContext } from "react";
import InputField from "../widgets/InputField";
import { ResumeDataContext } from "@/pages/editor";

export default function HobbyForm() {
  const { resumeData, setResumeData } = useContext(ResumeDataContext);

  function onHobbyChange(value: string) {
    setResumeData({ ...resumeData, hobby: value });
  }
  return (
    <div className="input-group">
      <h3>Hobby</h3>
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
