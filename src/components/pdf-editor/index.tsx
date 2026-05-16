import React, { useCallback, useEffect, useState } from "react";
import {
  ResumeProfile,
  pdfToPages,
  renderPDF,
} from "@/components/pdf-editor/pdf-handler";
import PDFViewer from "./PDFViewer";
import { PDFPageProxy } from "pdfjs-dist";
import ResumeTemplate from "@/components/pdf-editor/templates/resume-template";
import { TemplateId } from "@/components/resume/resume-data";
import { Button } from "@/components/ui/button";
import { Download, LayoutTemplate } from "lucide-react";

export default function PDFEditor({
  pdfData,
  selectedTemplate,
}: {
  pdfData: ResumeProfile;
  selectedTemplate: TemplateId;
}) {
  const [pages, setPages] = useState<PDFPageProxy[]>([]);

  const renderTemplate = useCallback(async () => {
    const blob = await renderPDF(() => (
      <ResumeTemplate resume={pdfData} templateId={selectedTemplate} />
    ));

    const url = URL.createObjectURL(blob);
    setPages(await pdfToPages(url));
  }, [pdfData, selectedTemplate]);

  useEffect(() => {
    renderTemplate();
  }, [renderTemplate]);

  async function downloadPDF() {
    const blob = await renderPDF(() => (
      <ResumeTemplate resume={pdfData} templateId={selectedTemplate} />
    ));
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `${pdfData.first || "resume"}-${pdfData.last || "builder"}.pdf`;
    link.click();
    URL.revokeObjectURL(url);
  }

  return (
    <div className="h-full min-h-[680px] overflow-hidden rounded-lg border border-slate-800/20 bg-slate-950 shadow-soft">
      <div className="flex h-full flex-col">
        <div className="flex min-h-14 items-center justify-between gap-3 border-b border-white/10 bg-slate-900/80 px-4">
          <Button variant="ghost" className="text-white hover:bg-white/10 hover:text-white">
            <LayoutTemplate className="h-4 w-4" />
            {selectedTemplate}
          </Button>
          <div className="hidden items-center gap-2 sm:flex">
            <span className="h-5 w-5 rounded-full bg-blue-500 ring-2 ring-white/20" />
            <span className="h-5 w-5 rounded-full bg-slate-300 ring-2 ring-white/20" />
            <span className="h-5 w-5 rounded-full bg-teal-500 ring-2 ring-white/20" />
          </div>
          <Button onClick={downloadPDF} size="sm">
            <Download className="h-4 w-4" />
            Download PDF
          </Button>
        </div>
        <div className="relative flex-1 overflow-auto">
          <PDFViewer pages={pages} offsetTop={80} />
        </div>
      </div>
    </div>
  );
}
