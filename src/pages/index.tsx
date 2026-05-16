import Link from "next/link";
import { ArrowRight, Download, FileText, LayoutDashboard, Sparkles } from "lucide-react";
import { AppShell } from "@/components/layout/AppShell";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const features = [
  { label: "Clean editor", icon: LayoutDashboard },
  { label: "Modern templates", icon: FileText },
  { label: "PDF download", icon: Download },
];

export default function Home() {
  return (
    <AppShell>
      <section className="px-4 py-8 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid min-h-[calc(100vh-4rem)] items-center gap-10 lg:grid-cols-[1fr_460px]">
            <div>
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-3 py-1 text-sm font-medium text-blue-700">
                <Sparkles className="h-4 w-4" />
                Professional resume studio
              </div>
              <h1 className="mb-5 max-w-3xl text-4xl font-bold tracking-normal text-slate-950 sm:text-6xl">
                Build a polished resume with live preview and modern templates.
              </h1>
              <p className="mb-8 max-w-2xl text-lg leading-8 text-slate-600">
                A clean dashboard-like builder for editing profile details, work history, skills, projects, and certifications with instant PDF export.
              </p>
              <div className="flex flex-col gap-3 sm:flex-row">
                <Button size="lg">
                  <Link href="/editor" className="flex items-center gap-2 text-white">
                    Open Builder <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline">
                  <Link href="/templates">View Templates</Link>
                </Button>
              </div>
            </div>
            <Card className="border-slate-200 bg-white p-5 shadow-soft">
              <div className="rounded-lg bg-slate-950 p-4 text-white">
                <div className="mb-5 flex items-center justify-between">
                  <span className="text-sm font-semibold">Live resume preview</span>
                  <span className="rounded-full bg-blue-500 px-2 py-1 text-xs">PDF</span>
                </div>
                <div className="rounded-md bg-white p-5 text-slate-950">
                  <div className="mb-4 h-14 rounded bg-blue-600" />
                  <div className="space-y-2">
                    <div className="h-3 w-2/3 rounded bg-slate-800" />
                    <div className="h-2 w-1/2 rounded bg-slate-300" />
                    <div className="mt-5 h-2 w-full rounded bg-slate-200" />
                    <div className="h-2 w-5/6 rounded bg-slate-200" />
                    <div className="mt-5 grid grid-cols-2 gap-3">
                      <div className="h-24 rounded border border-slate-200 bg-slate-50" />
                      <div className="h-24 rounded border border-slate-200 bg-slate-50" />
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
          <div className="grid gap-4 pb-10 md:grid-cols-3">
            {features.map(({ label, icon: Icon }) => (
              <Card key={label} className="border-slate-200 bg-white p-5 shadow-sm">
                <Icon className="mb-4 h-5 w-5 text-blue-600" />
                <h3 className="m-0 text-base font-semibold text-slate-950">{label}</h3>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </AppShell>
  );
}
