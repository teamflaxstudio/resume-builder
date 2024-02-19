import React, { useContext } from "react";
import InputField from "../widgets/InputField";
import { ResumeDataContext } from "@/pages/editor";
import { AddIcon } from "../icons";
import DraggableFormChild from "../widgets/DraggableFormChild";
import { Reference, ResumeLink } from "../pdf-editor/pdf-handler";

export default function ReferenceForm() {
  const { resumeData, setResumeData } = useContext(ResumeDataContext);
  function onAdd() {
    const refer: Reference = {
      name: "",
      position: "",
      company: "",
      email: "",
      phone: "",
    };
    setResumeData({
      ...resumeData,
      references: [...resumeData.references, refer],
    });
  }

  function onRemove(index: number) {
    const references = resumeData.references.filter((_, i) => i !== index);
    setResumeData({ ...resumeData, references: references });
  }

  // -------------------  References Form Update -------------------  //

  function onNameChange(index: number, value: string) {
    const references = resumeData.references.map((refer, i) => {
      if (i === index) {
        return { ...refer, name: value };
      }
      return refer;
    });
    setResumeData({ ...resumeData, references });
  }

  function onPositionChange(index: number, value: string) {
    const references = resumeData.references.map((refer, i) => {
      if (i === index) {
        return { ...refer, position: value };
      }
      return refer;
    });
    setResumeData({ ...resumeData, references });
  }

  function onCompanyChange(index: number, value: string) {
    const references = resumeData.references.map((refer, i) => {
      if (i === index) {
        return { ...refer, company: value };
      }
      return refer;
    });
    setResumeData({ ...resumeData, references });
  }

  function onEmailChange(index: number, value: string) {
    const references = resumeData.references.map((refer, i) => {
      if (i === index) {
        return { ...refer, email: value };
      }
      return refer;
    });
    setResumeData({ ...resumeData, references });
  }

  function onPhoneChange(index: number, value: string) {
    const references = resumeData.references.map((refer, i) => {
      if (i === index) {
        return { ...refer, phone: value };
      }
      return refer;
    });
    setResumeData({ ...resumeData, references });
  }

  return (
    <div className="input-group">
      <h3>References</h3>
      <p>Add at least 3 - 4 project links to showcase your work.</p>

      <div className="draggable-form">
        {resumeData.references.map((refer, index) => (
          <DraggableFormChild
            key={index}
            title={refer.name}
            onRemove={() => {
              onRemove(index);
            }}
          >
            <div className="col-2">
              <InputField
                title="Your Reference Name"
                type="text"
                placeholder="e.g. Tony Stark"
                value={refer.name}
                onChange={(e) => {
                  onNameChange(index, e);
                }}
              />
              <InputField
                title="Company"
                type="text"
                placeholder="e.g. exampleTech"
                value={refer.company}
                onChange={(e) => {
                  onCompanyChange(index, e);
                }}
              />

              <InputField
                title="Position"
                type="text"
                placeholder="e.g. Developer"
                value={refer.position}
                onChange={(e) => {
                  onPositionChange(index, e);
                }}
              />
              <InputField
                title="Phone"
                type="text"
                placeholder="e.g. +918000000001"
                value={refer.phone}
                onChange={(e) => {
                  onPhoneChange(index, e);
                }}
              />

              <InputField
                title="Email"
                type="text"
                placeholder="e.g. example@gmail.com"
                value={refer.email}
                onChange={(e) => {
                  onEmailChange(index, e);
                }}
              />
            </div>
          </DraggableFormChild>
        ))}
      </div>

      <button onClick={onAdd} className="btn plain">
        <AddIcon /> Add more project
      </button>
    </div>
  );
}
