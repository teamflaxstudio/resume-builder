import React, { use, useContext } from "react";
import { Education, Experience } from "../pdf-editor/pdf-handler";
import DraggableFormChild from "../widgets/DraggableFormChild";
import InputField from "../widgets/InputField";
import { AddIcon } from "../icons";
import { ResumeDataContext } from "@/pages/editor";

export default function EducationForm() {
  const { resumeData, setResumeData } = useContext(ResumeDataContext);

  function onAdd() {
    const newEdu: Education = {
      degree: "",
      school: "",
      description: "",
      endDate: "",
      startDate: "",
      field: "",
      isStudying: false,
    };
    setResumeData({
      ...resumeData,
      education: [...resumeData.education, newEdu],
    });
  }

  function onRemove(index: number) {
    const newEdu = resumeData.education.filter((_, i) => i !== index);
    setResumeData({ ...resumeData, education: newEdu });
  }

  // -------------------  Education Form Update -------------------  //

  function onSchoolChange(index: number, value: string) {
    const newEdu = resumeData.education.map((edu, i) => {
      if (i === index) {
        return { ...edu, school: value };
      }
      return edu;
    });
    setResumeData({ ...resumeData, education: newEdu });
  }

  function onDegreeChange(index: number, value: string) {
    const newEdu = resumeData.education.map((edu, i) => {
      if (i === index) {
        return { ...edu, degree: value };
      }
      return edu;
    });
    setResumeData({ ...resumeData, education: newEdu });
  }

  function onFieldChange(index: number, value: string) {
    const newEdu = resumeData.education.map((edu, i) => {
      if (i === index) {
        return { ...edu, field: value };
      }
      return edu;
    });
    setResumeData({ ...resumeData, education: newEdu });
  }

  function onStartDateChange(index: number, value: string) {
    const newEdu = resumeData.education.map((edu, i) => {
      if (i === index) {
        return { ...edu, startDate: value };
      }
      return edu;
    });
    setResumeData({ ...resumeData, education: newEdu });
  }

  function onEndDateChange(index: number, value: string) {
    const newEdu = resumeData.education.map((edu, i) => {
      if (i === index) {
        return { ...edu, endDate: value };
      }
      return edu;
    });
    setResumeData({ ...resumeData, education: newEdu });
  }

  function onDescriptionChange(index: number, value: string) {
    const newEdu = resumeData.education.map((edu, i) => {
      if (i === index) {
        return { ...edu, description: value };
      }
      return edu;
    });
    setResumeData({ ...resumeData, education: newEdu });
  }
  return (
    <div className="input-group">
      <h3>Education</h3>
      <p>
        Add your most relevant education, including programs you're currently
        enrolled in.
      </p>

      <div className="draggable-form">
        {resumeData.education.map((edu, index) => (
          <DraggableFormChild
            key={index}
            title={edu.school}
            onRemove={() => {
              onRemove(index);
            }}
          >
            <div className="col-2">
              <InputField
                title="School"
                type="text"
                placeholder="e.g. BrillianceBloom Institute"
                value={edu.school}
                onChange={(e) => {
                  onSchoolChange(index, e);
                }}
              />
              <InputField
                title="Degree"
                type="text"
                placeholder="e.g. Bachelor of Science"
                value={edu.degree}
                onChange={(e) => {
                  onDegreeChange(index, e);
                }}
              />
              <InputField
                title="Field"
                type="text"
                placeholder="e.g. Computer Science"
                value={edu.field}
                onChange={(e) => {
                  onFieldChange(index, e);
                }}
              />
              <div className="col-2">
                <InputField
                  title="Start Date"
                  type="date"
                  value={edu.startDate}
                  onChange={(e) => {
                    onStartDateChange(index, e);
                  }}
                />
                <InputField
                  title="End Date"
                  type="date"
                  value={edu.endDate}
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
                value={edu.description}
                onChange={(e) => {
                  onDescriptionChange(index, e);
                }}
              />
            </div>
          </DraggableFormChild>
        ))}
      </div>

      <button onClick={onAdd} className="btn plain">
        <AddIcon /> Add more education
      </button>
    </div>
  );
}
