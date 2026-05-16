import React, { createContext, useContext } from "react";
import { ResumeProfile } from "@/components/pdf-editor/pdf-handler";
import { emptyResume, TemplateId } from "./resume-data";

export type ResumeState = {
  resumeData: ResumeProfile;
  setResumeData: React.Dispatch<React.SetStateAction<ResumeProfile>>;
  selectedTemplate: TemplateId;
  setSelectedTemplate: React.Dispatch<React.SetStateAction<TemplateId>>;
};

export const ResumeDataContext = createContext<ResumeState>({
  resumeData: emptyResume,
  setResumeData: () => {},
  selectedTemplate: "modern",
  setSelectedTemplate: () => {},
});

export function useResume() {
  return useContext(ResumeDataContext);
}
