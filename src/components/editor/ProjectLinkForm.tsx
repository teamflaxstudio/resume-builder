import React, { useContext } from "react";
import InputField from "../widgets/InputField";
import { ResumeDataContext } from "@/pages/editor";
import { AddIcon } from "../icons";
import DraggableFormChild from "../widgets/DraggableFormChild";
import { ResumeLink } from "../pdf-editor/pdf-handler";

export default function ProjectLinkForm() {
  const { resumeData, setResumeData } = useContext(ResumeDataContext);
  function onAdd() {
    const project: ResumeLink = {
      name: "",
      url: "",
    };
    setResumeData({
      ...resumeData,
      projectLinks: [...resumeData.projectLinks, project],
    });
  }

  function onRemove(index: number) {
    const projects = resumeData.projectLinks.filter((_, i) => i !== index);
    setResumeData({ ...resumeData, projectLinks: projects });
  }

  // -------------------  Project Form Update -------------------  //

  function onTitleChange(index: number, value: string) {
    const projects = resumeData.projectLinks.map((link, i) => {
      if (i === index) {
        return { ...link, name: value };
      }
      return link;
    });
    setResumeData({ ...resumeData, projectLinks: projects });
  }

  function onUrlChange(index: number, value: string) {
    const projects = resumeData.projectLinks.map((link, i) => {
      if (i === index) {
        return { ...link, url: value };
      }
      return link;
    });
    setResumeData({ ...resumeData, projectLinks: projects });
  }

  return (
    <div className="input-group">
      <h3>Project Links</h3>
      <p>Add at least 3 - 4 project links to showcase your work.</p>

      <div className="draggable-form">
        {resumeData.projectLinks.map((link, index) => (
          <DraggableFormChild
            key={index}
            title={link.name}
            onRemove={() => {
              onRemove(index);
            }}
          >
            <div className="col-2">
              <InputField
                title="Title"
                type="text"
                placeholder="e.g. example.com"
                value={link.name}
                onChange={(e) => {
                  onTitleChange(index, e);
                }}
              />
              <InputField
                title="Url"
                type="text"
                placeholder="e.g. https://example.com"
                value={link.url}
                onChange={(e) => {
                  onUrlChange(index, e);
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
