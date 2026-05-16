import { ReactNode } from "react";
import { Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";

export function RepeaterItem({
  title,
  fallback,
  children,
  onRemove,
}: {
  title?: string;
  fallback: string;
  children: ReactNode;
  onRemove: () => void;
}) {
  return (
    <div className="rounded-lg border border-slate-200 bg-slate-50/70 p-4 transition hover:border-blue-200 hover:bg-blue-50/20">
      <div className="mb-4 flex items-center justify-between gap-3">
        <p className="m-0 text-sm font-semibold text-slate-800">{title || fallback}</p>
        <Button type="button" variant="ghost" size="icon" onClick={onRemove} aria-label="Remove item">
          <Trash2 className="h-4 w-4" />
        </Button>
      </div>
      {children}
    </div>
  );
}
