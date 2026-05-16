import PDFEditor from "@/components/pdf-editor";
import { AppShell } from "@/components/layout/AppShell";
import { ResumeEditor } from "@/components/resume/ResumeEditor";
import { TemplateGallery } from "@/components/resume/TemplateGallery";
import { useResume } from "@/components/resume/ResumeContext";
import { ResumeStats } from "@/components/resume/ResumeStats";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export { ResumeDataContext } from "@/components/resume/ResumeContext";

export default function Editor() {
  const { resumeData, selectedTemplate, setSelectedTemplate } = useResume();

  return (
    <AppShell>
      <div className="grid min-h-screen gap-6 px-4 py-6 sm:px-6 lg:grid-cols-[minmax(0,1fr)_minmax(420px,46vw)] lg:px-8">
        <section className="min-w-0">
          <div className="mb-6 rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
            <div className="flex flex-col justify-between gap-4 xl:flex-row xl:items-center">
              <div>
                <p className="mb-2 text-sm font-medium text-blue-700">Resume Builder Editor</p>
                <h1 className="m-0 text-3xl font-bold tracking-normal text-slate-950">Create your resume</h1>
                <p className="mt-2 max-w-2xl text-slate-600">
                  Edit each section and watch the resume preview update instantly beside the form.
                </p>
              </div>
              <div className="flex gap-2">
                <Button variant="outline">
                  <Link href="/templates">Templates</Link>
                </Button>
                <Button>
                  <Link href="/download">Download</Link>
                </Button>
              </div>
            </div>
          </div>
          <div className="mb-6">
            <ResumeStats resumeData={resumeData} />
          </div>
          <ResumeEditor />
          <div className="mt-6">
            <h2 className="mb-4 text-xl font-semibold text-slate-950">Templates</h2>
            <TemplateGallery selectedTemplate={selectedTemplate} onSelect={setSelectedTemplate} />
          </div>
        </section>
        <aside className="lg:sticky lg:top-6 lg:h-[calc(100vh-3rem)]">
          <PDFEditor pdfData={resumeData} selectedTemplate={selectedTemplate} />
        </aside>
      </div>
    </AppShell>
  );
}
