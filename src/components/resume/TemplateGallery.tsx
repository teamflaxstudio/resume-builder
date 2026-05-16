import { CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { templates, TemplateId } from "./resume-data";
import { cn } from "@/lib/utils";

export function TemplateGallery({
  selectedTemplate,
  onSelect,
}: {
  selectedTemplate: TemplateId;
  onSelect: (template: TemplateId) => void;
}) {
  return (
    <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
      {templates.map((template) => {
        const active = selectedTemplate === template.id;
        return (
          <Card
            key={template.id}
            className={cn(
              "group overflow-hidden border-slate-200 bg-white p-4 transition hover:-translate-y-1 hover:shadow-soft",
              active && "border-blue-500 ring-2 ring-blue-100"
            )}
          >
            <div className="mb-4 aspect-[3/4] rounded-md border border-slate-200 bg-slate-50 p-4">
              <div className="mb-4 h-10 rounded-sm" style={{ backgroundColor: template.accent }} />
              <div className="space-y-2">
                <div className="h-2 w-3/4 rounded bg-slate-300" />
                <div className="h-2 w-1/2 rounded bg-slate-200" />
                <div className="mt-5 h-2 w-full rounded bg-slate-200" />
                <div className="h-2 w-5/6 rounded bg-slate-200" />
                <div className="mt-5 grid grid-cols-2 gap-2">
                  <div className="h-16 rounded bg-white shadow-sm" />
                  <div className="h-16 rounded bg-white shadow-sm" />
                </div>
              </div>
            </div>
            <div className="mb-4 flex items-start justify-between gap-3">
              <div>
                <h3 className="m-0 text-base font-semibold text-slate-950">{template.name}</h3>
                <p className="m-0 mt-1 text-sm text-slate-500">{template.bestFor}</p>
              </div>
              {active && <CheckCircle2 className="h-5 w-5 text-blue-600" />}
            </div>
            <p className="mb-4 text-sm text-slate-600">{template.description}</p>
            <Button className="w-full" variant={active ? "default" : "outline"} onClick={() => onSelect(template.id)}>
              {active ? "Selected" : "Use template"}
            </Button>
          </Card>
        );
      })}
    </div>
  );
}
