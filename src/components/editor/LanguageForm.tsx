import React, { useContext, useEffect, useState } from "react";
import InputField from "../widgets/InputField";
import { ResumeDataContext } from "@/pages/editor";
import Switch from "../widgets/Switch";
import Chips from "../widgets/Chips";
import RangeSlider from "../widgets/RangeSlider";
import DraggableFormChild from "../widgets/DraggableFormChild";
import { Skill } from "../pdf-editor/pdf-handler";
import RangeSliderInputField from "../widgets/RangeSliderInput";
import { levelToLevelString } from "@/lib/utils";
import { AddIcon, DeleteIcon } from "../icons";

export default function LanguageForm({ onClose }: { onClose: () => void }) {
  const { resumeData, setResumeData } = useContext(ResumeDataContext);
  const [isShowExperience, setIsShowExperience] = useState<boolean>(true);

  function onAdd(title: string = "", level: number = 0) {
    const skill: Skill = {
      title: title,
      level: level,
    };

    // check if skill already exists
    if (resumeData.languages.some((s) => s.title === title)) return;
    setResumeData({
      ...resumeData,
      languages: [...resumeData.languages, skill],
    });
  }

  function onRemove(name: string) {
    const languages = resumeData.languages.filter(
      (old, i) => old.title !== name
    );
    setResumeData({ ...resumeData, languages });
  }

  function onTitleChange(index: number, value: string) {
    const languages = resumeData.languages.map((skill, i) =>
      i === index ? { ...skill, title: value } : skill
    );
    setResumeData({ ...resumeData, languages });
  }
  function onLevelChange(index: number, value: number) {
    const languages = resumeData.languages.map((skill, i) =>
      i === index ? { ...skill, level: value } : skill
    );
    setResumeData({ ...resumeData, languages });
  }

  return (
    <div className="input-group">
      <div className="removable">
        <h3>Languages</h3>
        <button onClick={onClose} className="btn icon-btn">
          <DeleteIcon />
        </button>
      </div>
      <p>Add 1 - 2 languages you are proficient in.</p>
      {resumeData.languages.length > 0 && (
        <div className="switch-x">
          <Switch
            isOn={isShowExperience}
            onChange={(e) => setIsShowExperience(e)}
          />
          <span>Show experience level</span>
        </div>
      )}

      <div className="draggable-form">
        {resumeData.languages.map((skill, index) => (
          <DraggableFormChild
            key={index}
            title={skill.title}
            onRemove={() => {
              onRemove(skill.title);
            }}
          >
            <div className="col-2 align-bottom">
              <InputField
                title="Name"
                type="text"
                placeholder="e.g. English"
                value={skill.title}
                onChange={(e) => {
                  onTitleChange(index, e);
                }}
              />

              {isShowExperience && (
                <RangeSliderInputField
                  title={"level - " + levelToLevelString(skill.level)}
                  value={skill.level}
                  max={5}
                  onChange={(e) => {
                    onLevelChange(index, e);
                  }}
                />
              )}
            </div>
          </DraggableFormChild>
        ))}
      </div>
      <button onClick={() => onAdd()} className="btn plain">
        <AddIcon /> Add more language
      </button>
    </div>
  );
}
