import React, { useContext } from "react";
import InputField from "../widgets/InputField";
import { ResumeDataContext } from "@/pages/editor";
import { AddIcon } from "../icons";
import DraggableFormChild from "../widgets/DraggableFormChild";
import { Experience } from "../pdf-editor/pdf-handler";

export default function EmploymentHistoryForm() {
  const { resumeData, setResumeData } = useContext(ResumeDataContext);
  function onAdd() {
    const newExp: Experience = {
      title: "",
      company: "",
      location: "",
      startDate: "",
      endDate: "",
      description: "",
    };
    setResumeData({
      ...resumeData,
      experience: [...resumeData.experience, newExp],
    });
  }

  function onRemove(index: number) {
    const newExp = resumeData.experience.filter((_, i) => i !== index);
    setResumeData({ ...resumeData, experience: newExp });
  }

  // -------------------  Experience Form Update -------------------  //

  function onTitleChange(index: number, value: string) {
    const newEdu = resumeData.experience.map((exp, i) => {
      if (i === index) {
        return { ...exp, title: value };
      }
      return exp;
    });
    setResumeData({ ...resumeData, experience: newEdu });
  }

  function onCompanyChange(index: number, value: string) {
    const newEdu = resumeData.experience.map((exp, i) => {
      if (i === index) {
        return { ...exp, company: value };
      }
      return exp;
    });
    setResumeData({ ...resumeData, experience: newEdu });
  }

  function onLocationChange(index: number, value: string) {
    const newEdu = resumeData.experience.map((exp, i) => {
      if (i === index) {
        return { ...exp, location: value };
      }
      return exp;
    });
    setResumeData({ ...resumeData, experience: newEdu });
  }

  function onStartDateChange(index: number, value: string) {
    const newEdu = resumeData.experience.map((exp, i) => {
      if (i === index) {
        return { ...exp, startDate: value };
      }
      return exp;
    });
    setResumeData({ ...resumeData, experience: newEdu });
  }

  function onEndDateChange(index: number, value: string) {
    const newEdu = resumeData.experience.map((exp, i) => {
      if (i === index) {
        return { ...exp, endDate: value };
      }
      return exp;
    });
    setResumeData({ ...resumeData, experience: newEdu });
  }

  function onDescriptionChange(index: number, value: string) {
    const newEdu = resumeData.experience.map((exp, i) => {
      if (i === index) {
        return { ...exp, description: value };
      }
      return exp;
    });
    setResumeData({ ...resumeData, experience: newEdu });
  }

  return (
    <div className="input-group">
      <h3>Employment History</h3>
      <p>
        Show your relevant experience (last 10 years). Use bullet points to note
        your achievements, if possible - use numbers/facts (Achieved X, measured
        by Y, by doing Z).
      </p>

      <div className="draggable-form">
        {resumeData.experience.map((exp, index) => (
          <DraggableFormChild
            key={index}
            title={exp.title}
            onRemove={() => {
              onRemove(index);
            }}
          >
            <div className="col-2">
              <InputField
                title="Job Title"
                type="text"
                placeholder="e.g. Full Stack Developer"
                value={exp.title}
                onChange={(e) => {
                  onTitleChange(index, e);
                }}
              />
              <InputField
                title="Company"
                type="text"
                placeholder="e.g. flaxstudio"
                value={exp.company}
                onChange={(e) => {
                  onCompanyChange(index, e);
                }}
              />
              <InputField
                title="Location"
                type="text"
                placeholder="e.g. New York, NY"
                value={exp.location}
                onChange={(e) => {
                  onLocationChange(index, e);
                }}
              />
              <div className="col-2">
                <InputField
                  title="Start Date"
                  type="date"
                  placeholder="e.g. "
                  value={exp.startDate}
                  onChange={(e) => {
                    onStartDateChange(index, e);
                  }}
                />
                <InputField
                  title="End Date"
                  type="date"
                  placeholder="e.g. Full Stack Developer"
                  value={exp.endDate}
                  onChange={(e) => {
                    onEndDateChange(index, e);
                  }}
                />
              </div>
            </div>

            <div className="col-1">
              <InputField
                title="Description"
                type="textarea"
                placeholder="e.g. Studied various topics including algorithms, data structures, and software engineering principles."
                value={exp.description}
                onChange={(e) => {
                  onDescriptionChange(index, e);
                }}
              />
            </div>
          </DraggableFormChild>
        ))}
      </div>

      <button onClick={onAdd} className="btn plain">
        <AddIcon /> Add more employment
      </button>
    </div>
  );
}
