import React, { useContext } from "react";
import InputField from "../widgets/InputField";
import { ResumeDataContext } from "@/pages/editor";
import { AddIcon } from "../icons";
import DraggableFormChild from "../widgets/DraggableFormChild";
import { ResumeLink } from "../pdf-editor/pdf-handler";

export default function SocialLinkForm() {
  const { resumeData, setResumeData } = useContext(ResumeDataContext);
  function onAdd() {
    const social: ResumeLink = {
      name: "",
      url: "",
    };
    setResumeData({
      ...resumeData,
      socialLinks: [...resumeData.socialLinks, social],
    });
  }

  function onRemove(index: number) {
    const socials = resumeData.socialLinks.filter((_, i) => i !== index);
    setResumeData({ ...resumeData, socialLinks: socials });
  }

  // -------------------  Project Form Update -------------------  //

  function onTitleChange(index: number, value: string) {
    const socials = resumeData.socialLinks.map((link, i) => {
      if (i === index) {
        return { ...link, name: value };
      }
      return link;
    });
    setResumeData({ ...resumeData, socialLinks: socials });
  }

  function onUrlChange(index: number, value: string) {
    const socials = resumeData.socialLinks.map((link, i) => {
      if (i === index) {
        return { ...link, url: value };
      }
      return link;
    });
    setResumeData({ ...resumeData, socialLinks: socials });
  }

  return (
    <div className="input-group">
      <h3>Social Links</h3>
      <p>Add at least 3 - 4 social links to showcase your connection.</p>

      <div className="draggable-form">
        {resumeData.socialLinks.map((link, index) => (
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
        <AddIcon /> Add more social link
      </button>
    </div>
  );
}
