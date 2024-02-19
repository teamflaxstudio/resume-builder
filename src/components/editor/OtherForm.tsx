import React, { useState } from "react";
import {
  HobbyIcon,
  LanguageIcon,
  AnnouncementIcon,
  CertificateIcon,
  LinkIcon,
} from "../icons";

import "@/styles/editor/other-form.css";
import ProjectLinkForm from "./ProjectLinkForm";
import LanguageForm from "./LanguageForm";
import ReferenceForm from "./ReferenceForm";
import HobbyForm from "./HobbyForm";
import CertificateForm from "./CertificateForm";

export default function OtherForm() {
  const [formActive, setFormActive] = useState({
    projectLink: false,
    language: false,
    reference: false,
    hobby: false,
    certificate: false,
  });

  function toggleForm(
    name: "projectLink" | "language" | "reference" | "hobby" | "certificate"
  ) {
    setFormActive({
      ...formActive,
      [name]: !formActive[name],
    });
  }

  return (
    <div className="other-section">
      <h3>Add Extra Section</h3>
      <div className="button-holder">
        <button
          onClick={() => toggleForm("projectLink")}
          disabled={formActive.projectLink}
          className="btn plain"
        >
          <LinkIcon /> Project Link
        </button>
        <button
          onClick={() => toggleForm("language")}
          disabled={formActive.language}
          className="btn plain"
        >
          <LanguageIcon />
          Language
        </button>
        <button
          onClick={() => toggleForm("reference")}
          disabled={formActive.reference}
          className="btn plain"
        >
          <AnnouncementIcon /> Reference
        </button>
        <button
          onClick={() => toggleForm("hobby")}
          disabled={formActive.hobby}
          className="btn plain"
        >
          <HobbyIcon /> Hobby
        </button>
        <button
          onClick={() => toggleForm("certificate")}
          disabled={formActive.certificate}
          className="btn plain"
        >
          <CertificateIcon /> Certificate
        </button>
      </div>

      <div className="draggable-section">
        {formActive.projectLink && (
          <ProjectLinkForm onClose={() => toggleForm("projectLink")} />
        )}
        {formActive.language && (
          <LanguageForm onClose={() => toggleForm("language")} />
        )}
        {formActive.reference && (
          <ReferenceForm onClose={() => toggleForm("reference")} />
        )}
        {formActive.hobby && <HobbyForm onClose={() => toggleForm("hobby")} />}
        {formActive.certificate && (
          <CertificateForm onClose={() => toggleForm("certificate")} />
        )}
      </div>
    </div>
  );
}
