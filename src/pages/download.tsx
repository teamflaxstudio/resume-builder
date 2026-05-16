import { AppShell } from "@/components/layout/AppShell";
import { DownloadPanel } from "@/components/resume/DownloadPanel";
import { useResume } from "@/components/resume/ResumeContext";

export default function DownloadPage() {
  const { resumeData, selectedTemplate } = useResume();

  return (
    <AppShell>
      <section className="px-4 py-8 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <p className="mb-2 text-sm font-medium text-blue-700">Download Resume</p>
          <h1 className="m-0 text-3xl font-bold text-slate-950">Export your resume</h1>
          <p className="mb-8 mt-2 text-slate-600">Review the completion checklist and download a professional PDF.</p>
          <DownloadPanel resumeData={resumeData} selectedTemplate={selectedTemplate} />
        </div>
      </section>
    </AppShell>
  );
}
