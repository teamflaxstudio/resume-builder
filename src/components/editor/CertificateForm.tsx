import React, { useContext } from "react";
import InputField from "../widgets/InputField";
import { ResumeDataContext } from "@/pages/editor";
import { AddIcon, DeleteIcon } from "../icons";
import DraggableFormChild from "../widgets/DraggableFormChild";
import { Certificate, ResumeLink } from "../pdf-editor/pdf-handler";

export default function CertificateForm({ onClose }: { onClose: () => void }) {
  const { resumeData, setResumeData } = useContext(ResumeDataContext);
  function onAdd() {
    const cert: Certificate = {
      name: "",
      institute: "",
      certificateDate: "",
      url: "",
      description: "",
    };
    setResumeData({
      ...resumeData,
      certificates: [...resumeData.certificates, cert],
    });
  }

  function onRemove(index: number) {
    const certs = resumeData.certificates.filter((_, i) => i !== index);
    setResumeData({ ...resumeData, certificates: certs });
  }

  // -------------------  Project Form Update -------------------  //

  function onNameChange(index: number, value: string) {
    const certs = resumeData.certificates.map((link, i) => {
      if (i === index) {
        return { ...link, name: value };
      }
      return link;
    });
    setResumeData({ ...resumeData, certificates: certs });
  }

  function onInstituteChange(index: number, value: string) {
    const certs = resumeData.certificates.map((link, i) => {
      if (i === index) {
        return { ...link, institute: value };
      }
      return link;
    });
    setResumeData({ ...resumeData, certificates: certs });
  }

  function onUrlChange(index: number, value: string) {
    const certs = resumeData.certificates.map((link, i) => {
      if (i === index) {
        return { ...link, url: value };
      }
      return link;
    });
    setResumeData({ ...resumeData, certificates: certs });
  }

  function onCertificateDateChange(index: number, value: string) {
    const certs = resumeData.certificates.map((link, i) => {
      if (i === index) {
        return { ...link, certificateDate: value };
      }
      return link;
    });
    setResumeData({ ...resumeData, certificates: certs });
  }

  function onDescriptionChange(index: number, value: string) {
    const certs = resumeData.certificates.map((link, i) => {
      if (i === index) {
        return { ...link, description: value };
      }
      return link;
    });
    setResumeData({ ...resumeData, certificates: certs });
  }

  return (
    <div className="input-group">
      <div className="removable">
        <h3>Certificates</h3>
        <button onClick={onClose} className="btn icon-btn">
          <DeleteIcon />
        </button>
      </div>
      <p>Explain how you got your certificates.</p>

      <div className="draggable-form">
        {resumeData.certificates.map((cert, index) => (
          <DraggableFormChild
            key={index}
            title={cert.name}
            onRemove={() => {
              onRemove(index);
            }}
          >
            <div className="col-2">
              <InputField
                title="Certificate Name"
                type="text"
                placeholder="e.g. Academic certificate"
                value={cert.name}
                onChange={(e) => {
                  onNameChange(index, e);
                }}
              />
              <InputField
                title="Institute"
                type="text"
                placeholder="e.g. University of California, Berkeley"
                value={cert.institute}
                onChange={(e) => {
                  onInstituteChange(index, e);
                }}
              />
              <InputField
                title="Url"
                type="text"
                placeholder="e.g. https://example.com"
                value={cert.url}
                onChange={(e) => {
                  onUrlChange(index, e);
                }}
              />
              <InputField
                title="Certificate Date"
                type="text"
                placeholder="e.g. 12 may 2020"
                value={cert.certificateDate}
                onChange={(e) => {
                  onCertificateDateChange(index, e);
                }}
              />
            </div>
            <div className="col-1">
              <InputField
                title="Summery"
                type="textarea"
                placeholder="e.g. Earned a certificate in Data Science from University of California, Berkeley"
                value={cert.description}
                onChange={(e) => {
                  onDescriptionChange(index, e);
                }}
              />
            </div>
          </DraggableFormChild>
        ))}
      </div>

      <button onClick={onAdd} className="btn plain">
        <AddIcon /> Add more project
      </button>
    </div>
  );
}
