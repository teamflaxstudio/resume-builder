import { CheckCircle2, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import ResumeTemplate from "@/components/pdf-editor/templates/resume-template";
import { renderPDF, ResumeProfile } from "@/components/pdf-editor/pdf-handler";
import { TemplateId } from "./resume-data";

export function DownloadPanel({
  resumeData,
  selectedTemplate,
}: {
  resumeData: ResumeProfile;
  selectedTemplate: TemplateId;
}) {
  const checks = [
    ["Personal details", Boolean(resumeData.first && resumeData.email)],
    ["Professional summary", Boolean(resumeData.summary)],
    ["Experience", resumeData.experience.length > 0],
    ["Skills", resumeData.skills.length > 0],
  ];

  async function downloadPDF() {
    const blob = await renderPDF(() => (
      <ResumeTemplate resume={resumeData} templateId={selectedTemplate} />
    ));
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `${resumeData.first || "resume"}-${resumeData.last || "builder"}.pdf`;
    link.click();
    URL.revokeObjectURL(url);
  }

  return (
    <Card className="border-slate-200 bg-white shadow-soft">
      <CardHeader>
        <CardTitle>Ready to Download</CardTitle>
      </CardHeader>
      <CardContent className="space-y-5">
        <div className="grid gap-3 sm:grid-cols-2">
          {checks.map(([label, complete]) => (
            <div key={String(label)} className="flex items-center gap-3 rounded-md border border-slate-200 p-3">
              <CheckCircle2 className={complete ? "h-5 w-5 text-blue-600" : "h-5 w-5 text-slate-300"} />
              <span className="text-sm font-medium text-slate-700">{label}</span>
            </div>
          ))}
        </div>
        <Button size="lg" onClick={downloadPDF}>
          <Download className="h-4 w-4" />
          Download Resume PDF
        </Button>
      </CardContent>
    </Card>
  );
}
