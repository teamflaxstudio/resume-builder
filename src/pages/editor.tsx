import React, { useEffect, createElement, useRef, useState } from "react";
import logo from "@/assets/img/favicon.ico";
import PDFEditor from "@/components/pdf-editor";
import { PDFProps, ResumeProfile } from "@/components/pdf-editor/pdf-handler";
import "@/styles/editor/index.css";
import InputField from "@/components/widgets/InputField";
import { ArrowHeadLeft } from "@/components/icons";

export default function Editor() {
  const [data, setData] = useState<ResumeProfile>({
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

  const [showAdditional, setShowAdditional] = useState(false);
  return (
    <main className="editor">
      <div className="editor-input-area">
        <div className="input-group">
          <h3>Personal Details</h3>
          <p>Enter your personal details to complete your form.</p>
          <div className="col-2">
            <InputField
              title="Job Title"
              placeholder="e.g Software Developer"
            />
            <InputField title="First Name" placeholder="e.g Robert" />
            <InputField title="Last Name" placeholder="e.g Tony" />
            <InputField title="Email" placeholder="e.g example@gmail.com" />
            <InputField title="Phone" placeholder="e.g +911000000005" />
            <InputField title="City" placeholder="e.g Surat" />
            <InputField title="Country" placeholder="e.g India" />
          </div>
          <div className="additional-details">
            {showAdditional && (
              <div className="col-2">
                <InputField title="State" placeholder="e.g Gujarat" />
                <InputField title="Postal Code" placeholder="e.g 844114" />
                <InputField
                  title="Address"
                  placeholder="e.g 456 Park Avenue, India"
                />
              </div>
            )}
            <span onClick={() => setShowAdditional(!showAdditional)}>
              {showAdditional ? "Hide" : "Show"} additional details
              <ArrowHeadLeft className={showAdditional ? "active" : ""} />
            </span>
          </div>
        </div>

        <div className="input-group">
          <h3>Professional Summary</h3>
          <p>
            Write 2-4 short & energetic sentences to interest the reader!
            Mention your role, experience & most importantly - your biggest
            achievements, best qualities and skills
          </p>

          <InputField type="textarea" placeholder="e.g. Experienced software engineer proficient in developing scalable applications. Skilled in multiple programming languages and frameworks, with 6+ years of hands-on experience." />
          
      
        </div>
      </div>
      <PDFEditor pdfData={data} />
    </main>
  );
}
