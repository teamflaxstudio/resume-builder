import React, { useContext } from "react";
import InputField from "../widgets/InputField";
import { ResumeDataContext } from "@/pages/editor";

export default function ProfessionalSummary() {
  const { resumeData, setResumeData } = useContext(ResumeDataContext);

  function onSummaryChange(value: string) {
    setResumeData({ ...resumeData, summary: value });
  }
  return (
    <div className="input-group">
      <h3>Professional Summary</h3>
      <p>
        Write 2-4 short & energetic sentences to interest the reader! Mention
        your role, experience & most importantly - your biggest achievements,
        best qualities and skills
      </p>

      <InputField
        type="textarea"
        placeholder="e.g. Experienced software engineer proficient in developing scalable applications. Skilled in multiple programming languages and frameworks, with 6+ years of hands-on experience."
        value={resumeData.summary}
        onChange={onSummaryChange}
      />
    </div>
  );
}
