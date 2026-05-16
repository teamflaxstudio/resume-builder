import { ResumeProfile } from "@/components/pdf-editor/pdf-handler";
import { starterResume } from "@/components/resume/resume-data";

export function loadResumeData(): ResumeProfile {
  const data = localStorage.getItem("resumeData");

  if (!data) return starterResume;

  try {
    const resumeData = JSON.parse(data) as ResumeProfile;
    return isBlankResume(resumeData) ? starterResume : resumeData;
  } catch (error) {
    console.log(error);
  }

  return starterResume;
}

export function saveResumeData(data: ResumeProfile) {
  localStorage.setItem("resumeData", JSON.stringify(data));
}

function isBlankResume(data: ResumeProfile) {
  return (
    !data.first &&
    !data.last &&
    !data.jobTitle &&
    !data.email &&
    !data.summary &&
    data.experience.length === 0 &&
    data.education.length === 0 &&
    data.skills.length === 0
  );
}
