import React, { createElement } from "react";

//@ts-ignore
// import * as pdfjsLib from "pdfjs-dist/webpack.mjs";
import * as PDF from "pdfjs-dist";
//@ts-ignore
import {} from "pdfjs-dist/build/pdf.worker.mjs";

export type PDFProps = {
  title: string;
  author: string;
  description: string;
};

export interface ResumeProfile {
  jobTitle: string;
  first: string;
  last: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  zipCode: string;
  state: string;
  country: string;
  profilePic: string;
  summary: string;
  experience: Experience[];
  education: Education[];
  skills: Skill[];
  languages: Language[];
  hobby: string;
  references: Reference[];
  certificates: Certificate[];
}

export interface Experience {
  title: string;
  company: string;
  location: string;
  startDate: string;
  endDate: string;
  description: string;
}

export interface Education {
  school: string;
  degree: string;
  field: string;
  startDate: string;
  endDate: string;
  isStudying: boolean;
  description: string;
}
export interface Reference {
  name: string;
  position: string;
  company: string;
  email: string;
  phone: string;
}

export interface Certificate {
  name: string;
  institute: string;
  certificateDate: string;
  description: string;
  url: string;
}

export interface CommonField {
  title: string;
  value: string;
}
export interface Skill extends CommonField {}
export interface Language extends CommonField {}

export const renderPDF = async (
  template: (pdfProps: PDFProps) => React.JSX.Element
) => {
  const { pdf } = await import("@react-pdf/renderer");
  // const { PDF } = await import('./PDF');
  return pdf(createElement(template)).toBlob();
};

export async function pdfToPages(url: string) {
  // pdfjsLib.GlobalWorkerOptions.workerSrc = "pdfjs-dist/build/pdf.worker.mjs"
  const pdf = await PDF.getDocument(url).promise;

  const pages = Array<PDF.PDFPageProxy>();
  for (let i = 1; i <= pdf.numPages; i++) {
    pages.push(await pdf.getPage(i));
  }
  return pages;
}
