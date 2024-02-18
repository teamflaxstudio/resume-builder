import React, { useContext, useState } from "react";
import InputField from "../widgets/InputField";
import { ArrowHeadLeft } from "../icons";
import { ResumeDataContext } from "@/pages/editor";

export default function PersonalForm() {
  const { resumeData, setResumeData } = useContext(ResumeDataContext);
  const [showAdditional, setShowAdditional] = useState(false);

  function onJobTitleChange(value: string) {
    setResumeData({ ...resumeData, jobTitle: value });
  }

  function onFirstNameChange(value: string) {
    setResumeData({ ...resumeData, first: value });
  }

  function onLastNameChange(value: string) {
    setResumeData({ ...resumeData, last: value });
  }

  function onEmailChange(value: string) {
    setResumeData({ ...resumeData, email: value });
  }

  function onPhoneChange(value: string) {
    setResumeData({ ...resumeData, phone: value });
  }

  function onCityChange(value: string) {
    setResumeData({ ...resumeData, city: value });
  }

  function onCountryChange(value: string) {
    setResumeData({ ...resumeData, country: value });
  }

  function onStateChange(value: string) {
    setResumeData({ ...resumeData, state: value });
  }

  function onZipCodeChange(value: string) {
    setResumeData({ ...resumeData, zipCode: value });
  }

  function onAddressChange(value: string) {
    setResumeData({ ...resumeData, address: value });
  }

  return (
    <div className="input-group">
      <h3>Personal Details</h3>
      <p>Enter your personal details to complete your form.</p>
      <div className="col-2">
        <InputField
          title="Job Title"
          placeholder="e.g Software Developer"
          value={resumeData.jobTitle}
          onChange={onJobTitleChange}
        />
        <InputField
          title="First Name"
          placeholder="e.g Robert"
          value={resumeData.first}
          onChange={onFirstNameChange}
        />
        <InputField
          title="Last Name"
          placeholder="e.g Tony"
          value={resumeData.last}
          onChange={onLastNameChange}
        />
        <InputField
          title="Email"
          placeholder="e.g example@gmail.com"
          value={resumeData.email}
          onChange={onEmailChange}
        />
        <InputField
          title="Phone"
          placeholder="e.g +911000000005"
          value={resumeData.phone}
          onChange={onPhoneChange}
        />
        <InputField
          title="City"
          placeholder="e.g Surat"
          value={resumeData.city}
          onChange={onCityChange}
        />
        <InputField
          title="Country"
          placeholder="e.g India"
          value={resumeData.country}
          onChange={onCountryChange}
        />
      </div>
      <div className="additional-details">
        {showAdditional && (
          <div className="col-2">
            <InputField
              title="State"
              placeholder="e.g Gujarat"
              value={resumeData.state}
              onChange={onStateChange}
            />
            <InputField
              title="Postal Code"
              placeholder="e.g 844114"
              value={resumeData.zipCode}
              onChange={onZipCodeChange}
            />
            <InputField
              title="Address"
              placeholder="e.g. 456 Park Avenue, India"
              value={resumeData.address}
              onChange={onAddressChange}
            />
          </div>
        )}
        <span onClick={() => setShowAdditional(!showAdditional)}>
          {showAdditional ? "Hide" : "Show"} additional details
          <ArrowHeadLeft className={showAdditional ? "active" : ""} />
        </span>
      </div>
    </div>
  );
}
