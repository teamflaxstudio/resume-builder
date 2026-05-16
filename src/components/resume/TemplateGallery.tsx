import { CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { templates, TemplateId } from "./resume-data";
import { cn } from "@/lib/utils";

function TemplatePreview({ id, accent }: { id: TemplateId; accent: string }) {
  if (id === "compact") {
    return (
      <div className="space-y-2">
        <div className="h-5 rounded-sm" style={{ backgroundColor: accent }} />
        <div className="grid grid-cols-2 gap-2">
          <div className="space-y-1">
            <div className="h-1.5 rounded bg-slate-300" />
            <div className="h-1.5 w-4/5 rounded bg-slate-200" />
            <div className="h-1.5 rounded bg-slate-200" />
          </div>
          <div className="space-y-1">
            <div className="h-1.5 rounded bg-slate-300" />
            <div className="h-1.5 rounded bg-slate-200" />
            <div className="h-1.5 w-3/4 rounded bg-slate-200" />
          </div>
        </div>
        <div className="grid grid-cols-3 gap-1">
          <div className="h-10 rounded bg-white shadow-sm" />
          <div className="h-10 rounded bg-white shadow-sm" />
          <div className="h-10 rounded bg-white shadow-sm" />
        </div>
      </div>
    );
  }

  if (id === "creative") {
    return (
      <div className="flex h-full gap-3">
        <div className="w-8 rounded-sm" style={{ backgroundColor: accent }} />
        <div className="flex-1 space-y-2">
          <div className="h-8 rounded-sm bg-white shadow-sm" />
          <div className="h-2 w-3/4 rounded bg-slate-300" />
          <div className="h-2 rounded bg-slate-200" />
          <div className="h-2 w-5/6 rounded bg-slate-200" />
          <div className="mt-4 h-16 rounded bg-white shadow-sm" />
        </div>
      </div>
    );
  }

  if (id === "technical") {
    return (
      <div className="space-y-3">
        <div className="rounded-sm border border-slate-200 bg-white p-2">
          <div className="mb-2 h-3 w-2/3 rounded" style={{ backgroundColor: accent }} />
          <div className="grid grid-cols-3 gap-1">
            <div className="h-4 rounded bg-slate-100" />
            <div className="h-4 rounded bg-slate-100" />
            <div className="h-4 rounded bg-slate-100" />
          </div>
        </div>
        <div className="space-y-1">
          <div className="h-2 rounded bg-slate-300" />
          <div className="h-2 w-5/6 rounded bg-slate-200" />
          <div className="h-2 rounded bg-slate-200" />
        </div>
        <div className="h-12 rounded bg-white shadow-sm" />
      </div>
    );
  }

  if (id === "academic") {
    return (
      <div className="space-y-2">
        <div className="border-b border-slate-300 pb-2">
          <div className="mx-auto h-3 w-2/3 rounded" style={{ backgroundColor: accent }} />
          <div className="mx-auto mt-2 h-1.5 w-1/2 rounded bg-slate-200" />
        </div>
        <div className="space-y-1.5">
          <div className="h-2 rounded bg-slate-300" />
          <div className="h-1.5 rounded bg-slate-200" />
          <div className="h-1.5 w-5/6 rounded bg-slate-200" />
        </div>
        <div className="space-y-1.5">
          <div className="h-2 rounded bg-slate-300" />
          <div className="h-1.5 rounded bg-slate-200" />
          <div className="h-1.5 w-4/5 rounded bg-slate-200" />
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-2">
      <div className={cn("mb-4 h-10 rounded-sm", id === "minimal" && "h-2", id === "executive" && "h-14")} style={{ backgroundColor: accent }} />
      <div className="h-2 w-3/4 rounded bg-slate-300" />
      <div className="h-2 w-1/2 rounded bg-slate-200" />
      <div className="mt-5 h-2 w-full rounded bg-slate-200" />
      <div className="h-2 w-5/6 rounded bg-slate-200" />
      <div className={cn("mt-5 grid gap-2", id === "classic" ? "grid-cols-1" : "grid-cols-2")}>
        <div className="h-16 rounded bg-white shadow-sm" />
        {id !== "classic" && <div className="h-16 rounded bg-white shadow-sm" />}
      </div>
    </div>
  );
}

export function TemplateGallery({
  selectedTemplate,
  onSelect,
}: {
  selectedTemplate: TemplateId;
  onSelect: (template: TemplateId) => void;
}) {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
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
              <TemplatePreview id={template.id} accent={template.accent} />
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
