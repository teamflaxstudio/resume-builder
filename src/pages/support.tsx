import { Mail, MessageCircle } from "lucide-react";
import { useState } from "react";
import { AppShell } from "@/components/layout/AppShell";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { FormField } from "@/components/resume/FormField";

export default function SupportPage() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  return (
    <AppShell>
      <section className="px-4 py-8 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-[1fr_360px]">
          <div>
            <p className="mb-2 text-sm font-medium text-blue-700">Contact / Support</p>
            <h1 className="m-0 text-3xl font-bold text-slate-950">Need help with your resume?</h1>
            <p className="mb-8 mt-2 text-slate-600">Send a message to the support team or review common questions.</p>
            <Card className="space-y-4 border-slate-200 bg-white p-6 shadow-soft">
              <div className="grid gap-4 sm:grid-cols-2">
                <FormField label="Name" value={form.name} placeholder="Your name" onChange={(name) => setForm((current) => ({ ...current, name }))} />
                <FormField label="Email" value={form.email} placeholder="you@example.com" onChange={(email) => setForm((current) => ({ ...current, email }))} />
              </div>
              <FormField label="Message" value={form.message} textarea placeholder="Tell us what you need help with" onChange={(message) => setForm((current) => ({ ...current, message }))} />
              <Button><MessageCircle className="h-4 w-4" /> Send Message</Button>
            </Card>
          </div>
          <Card className="h-fit border-slate-200 bg-white p-6 shadow-sm">
            <Mail className="mb-4 h-6 w-6 text-blue-600" />
            <h2 className="m-0 text-lg font-semibold text-slate-950">Support Desk</h2>
            <p className="mt-2 text-sm text-slate-600">For client demos, questions, and resume export help.</p>
            <div className="mt-5 rounded-md bg-slate-50 p-4 text-sm text-slate-700">
              support@resumebuilder.demo
            </div>
          </Card>
        </div>
      </section>
    </AppShell>
  );
}
