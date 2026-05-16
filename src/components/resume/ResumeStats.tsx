import { Award, BriefcaseBusiness, GraduationCap, Sparkles } from "lucide-react";
import { Card } from "@/components/ui/card";
import { ResumeProfile } from "@/components/pdf-editor/pdf-handler";

export function ResumeStats({ resumeData }: { resumeData: ResumeProfile }) {
  const stats = [
    { label: "Experience", value: resumeData.experience.length, icon: BriefcaseBusiness },
    { label: "Education", value: resumeData.education.length, icon: GraduationCap },
    { label: "Skills", value: resumeData.skills.length, icon: Sparkles },
    { label: "Certificates", value: resumeData.certificates.length, icon: Award },
  ];

  return (
    <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
      {stats.map(({ label, value, icon: Icon }) => (
        <Card key={label} className="border-slate-200 bg-white p-4 shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="m-0 text-xs font-medium uppercase tracking-wide text-slate-500">{label}</p>
              <p className="m-0 mt-1 text-2xl font-semibold text-slate-950">{value}</p>
            </div>
            <div className="flex h-10 w-10 items-center justify-center rounded-md bg-blue-50 text-blue-600">
              <Icon className="h-5 w-5" />
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
}
