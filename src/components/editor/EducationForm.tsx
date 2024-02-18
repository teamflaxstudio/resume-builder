import React from "react";
import { Education, Experience } from "../pdf-editor/pdf-handler";
import DraggableFormChild from "../widgets/DraggableFormChild";
import InputField from "../widgets/InputField";
import { AddIcon } from "../icons";

export default function EducationForm({ data }: { data: Array<Education> }) {
  return (
    <div className="input-group">
      <h3>Education</h3>
      <p>
        Add your most relevant education, including programs you're currently
        enrolled in.
      </p>

      <div className="draggable-form">
        {data.map((edu, index) => (
          <DraggableFormChild key={index} title="Education">
            <div className="col-2">
              <InputField
                title="School"
                type="text"
                placeholder="e.g. BrillianceBloom Institute"
              />
              <InputField
                title="Degree"
                type="text"
                placeholder="e.g. Bachelor of Science"
              />
              <InputField
                title="Field"
                type="text"
                placeholder="e.g. Computer Science"
              />
              <div className="col-2">
                <InputField title="Start Date" type="date" />
                <InputField title="End Date" type="date" />
              </div>
            </div>
            <div className="col-1">
              <InputField
                title="Summery"
                type="textarea"
                placeholder="e.g. Studied various topics including algorithms, data structures, and software engineering principles."
              />
            </div>
          </DraggableFormChild>
        ))}
      </div>

      <button className="btn plain"><AddIcon/> Add more eduction</button>
    </div>
  );
}
