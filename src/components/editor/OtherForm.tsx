import React from "react";
import {
  HobbyIcon,
  LanguageIcon,
  AnnouncementIcon,
  CertificateIcon,
  LinkIcon
} from "../icons";

export default function OtherForm() {
  return (
    <div className="other-section">
      <h3>Add Extra Section</h3>
      <div>
        <button className="btn plain"><LinkIcon/> Project Link</button>
        <button className="btn plain">
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
    </div>
  );
}
