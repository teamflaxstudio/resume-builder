import React, { useContext, useEffect, useState } from "react";
import InputField from "../widgets/InputField";
import { ResumeDataContext } from "@/pages/editor";
import Switch from "../widgets/Switch";
import Chips from "../widgets/Chips";
import RangeSlider from "../widgets/RangeSlider";
import DraggableFormChild from "../widgets/DraggableFormChild";
import { Skill } from "../pdf-editor/pdf-handler";
import RangeSliderInputField from "../widgets/RangeSliderInput";
import { levelToLevelString, skills } from "@/lib/utils";
import { AddIcon } from "../icons";

export default function SkillsForm() {
  const { resumeData, setResumeData } = useContext(ResumeDataContext);
  const [chipData, setChipData] = useState<string[]>(skills);
  const [isShowExperience, setIsShowExperience] = useState<boolean>(true);

  function onAdd(title: string = "", level: number = 0) {
    const skill: Skill = {
      title: title,
      level: level,
    };

    // check if skill already exists
    if (resumeData.skills.some((s) => s.title === title)) return;
    setResumeData({
      ...resumeData,
      skills: [...resumeData.skills, skill],
    });
  }

  function onRemove(name: string) {
    const skills = resumeData.skills.filter((old, i) => old.title !== name);
    setResumeData({ ...resumeData, skills });
  }

  function onTitleChange(index: number, value: string) {
    const skills = resumeData.skills.map((skill, i) =>
      i === index ? { ...skill, title: value } : skill
    );
    setResumeData({ ...resumeData, skills });
  }
  function onLevelChange(index: number, value: number) {
    const skills = resumeData.skills.map((skill, i) =>
      i === index ? { ...skill, level: value } : skill
    );
    setResumeData({ ...resumeData, skills });
  }

  function onChipToggle(name: string) {
    if (!chipData.includes(name)) return;

    // remove chip if it exists otherwise add it
    if (resumeData.skills.some((item) => item.title === name)) {
      onRemove(name);
    } else {
      onAdd(name);
    }
  }
  return (
    <div className="input-group">
      <h3>Skills</h3>
      <p>
        Choose 5 important skills that show you fit the position. Make sure they
        match the key skills mentioned in the job listing (especially when
        applying via an online system).
      </p>

      <div className="switch-x">
        <Switch
          isOn={isShowExperience}
          onChange={(e) => setIsShowExperience(e)}
        />
        <span>Show experience level</span>
      </div>

      <Chips
        data={chipData}
        selected={resumeData.skills.map((item) => item.title)}
        onToggle={onChipToggle}
      />
      <br />
      <div className="draggable-form">
        {resumeData.skills.map((skill, index) => (
          <DraggableFormChild
            key={index}
            title={skill.title}
            onRemove={() => {
              onRemove(skill.title);
            }}
          >
            <div className="col-2 align-bottom">
              <InputField
                title="Skill"
                type="text"
                placeholder="e.g. Javascript"
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
        <AddIcon /> Add custom skill
      </button>
    </div>
  );
}
