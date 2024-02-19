import React from "react";
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
  return (
    <div className="other-section">
      <h3>Add Extra Section</h3>
      <div className="button-holder">
        <button className="btn plain">
          <LinkIcon /> Project Link
        </button>
        <button disabled className="btn plain">
          <LanguageIcon />
          Language
        </button>
        <button className="btn plain">
          <AnnouncementIcon /> Reference
        </button>
        <button className="btn plain">
          <HobbyIcon /> Hobby
        </button>
        <button className="btn plain">
          <CertificateIcon /> Certificate
        </button>
      </div>

      <div className="draggable-section">
        <ProjectLinkForm />
        <LanguageForm />
        <ReferenceForm />
        <HobbyForm />
        <CertificateForm />
      </div>
    </div>
  );
}
