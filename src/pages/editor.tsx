import React, {
  useEffect,
  createElement,
  useRef,
  useState,
  createContext,
} from "react";
import logo from "@/assets/img/favicon.ico";
import PDFEditor from "@/components/pdf-editor";
import {
  Education,
  PDFProps,
  ResumeProfile,
} from "@/components/pdf-editor/pdf-handler";
import "@/styles/editor/index.css";
import InputField from "@/components/widgets/InputField";
import { ArrowHeadLeft } from "@/components/icons";
import QuillEditor from "@/components/widgets/QuillEditor";
import DraggableFormChild from "@/components/widgets/DraggableFormChild";
import EducationForm from "@/components/editor/EducationForm";
import PersonalForm from "@/components/editor/PersonalForm";
import ProfessionalSummaryForm from "@/components/editor/ProfessionalSummary";
import EmploymentHistoryForm from "@/components/editor/EmpolymentHistoryForm";

export type ResumeState = {
  resumeData: ResumeProfile;
  setResumeData: React.Dispatch<React.SetStateAction<ResumeProfile>>;
};

export const ResumeDataContext = createContext<ResumeState>({
  resumeData: {
    jobTitle: "",
    first: "",
    last: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    zipCode: "",
    state: "",
    country: "",
    profilePic: "",
    summary: "",
    experience: [],
    education: [],
    skills: [],
    languages: [],
    hobby: "",
    references: [],
    certificates: [],
  },
  setResumeData: () => {},
});

export default function Editor() {
  const [resumeData, setResumeData] = useState<ResumeProfile>({
    jobTitle: "",
    first: "",
    last: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    zipCode: "",
    country: "",
    profilePic: "",
    summary: "",
    experience: [],
    education: [],
    skills: [],
    languages: [],
    hobby: "",
    references: [],
    certificates: [],
  });

  

  return (
    <main className="editor">
      <ResumeDataContext.Provider value={{ resumeData, setResumeData }}>
        <div className="editor-input-area">
          <PersonalForm/>
          <ProfessionalSummaryForm/>
          <EducationForm />
          <EmploymentHistoryForm/>
        </div>
      </ResumeDataContext.Provider>

      <PDFEditor pdfData={resumeData} />
    </main>
  );
}
