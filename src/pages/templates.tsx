import { AppShell } from "@/components/layout/AppShell";
import { TemplateGallery } from "@/components/resume/TemplateGallery";
import { useResume } from "@/components/resume/ResumeContext";

export default function TemplatesPage() {
  const { selectedTemplate, setSelectedTemplate } = useResume();

  return (
    <AppShell>
      <section className="px-4 py-8 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <p className="mb-2 text-sm font-medium text-blue-700">Resume Templates</p>
          <h1 className="m-0 text-3xl font-bold text-slate-950">Choose a modern template</h1>
          <p className="mb-8 mt-2 max-w-2xl text-slate-600">
            Select a polished resume layout for your demo. The editor and download flow use the selected template.
          </p>
          <TemplateGallery selectedTemplate={selectedTemplate} onSelect={setSelectedTemplate} />
        </div>
      </section>
    </AppShell>
  );
}
