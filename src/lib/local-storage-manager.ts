import { ResumeProfile } from "@/components/pdf-editor/pdf-handler";

export function loadResumeData(): ResumeProfile {
  let resumeData: ResumeProfile = {
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
    socialLinks: [],
    projectLinks: [],
  };
  const data = localStorage.getItem("resumeData");

  if (!data) return resumeData;
  try {
    resumeData = JSON.parse(data);
  } catch (error) {
    console.log(error);
  }

  return resumeData;
}

export function saveResumeData(data: ResumeProfile) {
  localStorage.setItem("resumeData", JSON.stringify(data));
}
