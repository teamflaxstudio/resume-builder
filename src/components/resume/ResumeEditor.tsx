import { Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { FormField } from "./FormField";
import { RepeaterItem } from "./RepeaterItem";
import { SectionCard } from "./SectionCard";
import { useResume } from "./ResumeContext";
import { Certificate, Education, Experience, ResumeLink, Skill } from "@/components/pdf-editor/pdf-handler";

const grid = "grid gap-4 sm:grid-cols-2";

export function ResumeEditor() {
  const { resumeData, setResumeData } = useResume();

  const setField = (key: keyof typeof resumeData, value: string) => {
    setResumeData((current) => ({ ...current, [key]: value }));
  };

  const updateList = <T,>(key: keyof typeof resumeData, index: number, patch: Partial<T>) => {
    setResumeData((current) => ({
      ...current,
      [key]: (current[key] as T[]).map((item, itemIndex) =>
        itemIndex === index ? { ...item, ...patch } : item
      ),
    }));
  };

  const addItem = <T,>(key: keyof typeof resumeData, item: T) => {
    setResumeData((current) => ({
      ...current,
      [key]: [...(current[key] as T[]), item],
    }));
  };

  const removeItem = (key: keyof typeof resumeData, index: number) => {
    setResumeData((current) => ({
      ...current,
      [key]: (current[key] as unknown[]).filter((_, itemIndex) => itemIndex !== index),
    }));
  };

  return (
    <div className="space-y-6">
      <SectionCard
        title="Personal Info"
        description="Start with the details recruiters need at a glance."
      >
        <div className={grid}>
          <FormField label="Job Title" value={resumeData.jobTitle} placeholder="Senior Product Designer" onChange={(value) => setField("jobTitle", value)} />
          <FormField label="First Name" value={resumeData.first} placeholder="Aarav" onChange={(value) => setField("first", value)} />
          <FormField label="Last Name" value={resumeData.last} placeholder="Mehta" onChange={(value) => setField("last", value)} />
          <FormField label="Email" value={resumeData.email} type="email" placeholder="you@example.com" onChange={(value) => setField("email", value)} />
          <FormField label="Phone" value={resumeData.phone} placeholder="+91 98765 43210" onChange={(value) => setField("phone", value)} />
          <FormField label="City" value={resumeData.city} placeholder="Bengaluru" onChange={(value) => setField("city", value)} />
          <FormField label="Country" value={resumeData.country} placeholder="India" onChange={(value) => setField("country", value)} />
          <FormField label="Address" value={resumeData.address} placeholder="Optional address" onChange={(value) => setField("address", value)} />
        </div>
      </SectionCard>

      <SectionCard title="Professional Summary" description="Write a concise, outcome-focused introduction.">
        <FormField
          label="Summary"
          value={resumeData.summary}
          textarea
          placeholder="Product designer with 7+ years of experience..."
          onChange={(value) => setField("summary", value)}
        />
      </SectionCard>

      <SectionCard
        title="Experience"
        description="Add measurable work history and impact."
        action={<Button type="button" variant="outline" size="sm" onClick={() => addItem<Experience>("experience", { title: "", company: "", location: "", startDate: "", endDate: "", description: "" })}><Plus className="h-4 w-4" /> Add</Button>}
      >
        <div className="space-y-4">
          {resumeData.experience.map((item, index) => (
            <RepeaterItem key={index} title={item.title} fallback={`Experience ${index + 1}`} onRemove={() => removeItem("experience", index)}>
              <div className={grid}>
                <FormField label="Job Title" value={item.title} placeholder="Lead Product Designer" onChange={(value) => updateList<Experience>("experience", index, { title: value })} />
                <FormField label="Company" value={item.company} placeholder="Northstar Labs" onChange={(value) => updateList<Experience>("experience", index, { company: value })} />
                <FormField label="Location" value={item.location} placeholder="Remote" onChange={(value) => updateList<Experience>("experience", index, { location: value })} />
                <div className={grid}>
                  <FormField label="Start" type="date" value={item.startDate} onChange={(value) => updateList<Experience>("experience", index, { startDate: value })} />
                  <FormField label="End" type="date" value={item.endDate} onChange={(value) => updateList<Experience>("experience", index, { endDate: value })} />
                </div>
              </div>
              <div className="mt-4">
                <FormField label="Description" textarea value={item.description} placeholder="Led redesign of..." onChange={(value) => updateList<Experience>("experience", index, { description: value })} />
              </div>
            </RepeaterItem>
          ))}
        </div>
      </SectionCard>

      <SectionCard
        title="Education"
        description="Include degrees, programs, and relevant study."
        action={<Button type="button" variant="outline" size="sm" onClick={() => addItem<Education>("education", { school: "", degree: "", field: "", startDate: "", endDate: "", isStudying: false, description: "" })}><Plus className="h-4 w-4" /> Add</Button>}
      >
        <div className="space-y-4">
          {resumeData.education.map((item, index) => (
            <RepeaterItem key={index} title={item.school} fallback={`Education ${index + 1}`} onRemove={() => removeItem("education", index)}>
              <div className={grid}>
                <FormField label="School" value={item.school} placeholder="National Institute of Design" onChange={(value) => updateList<Education>("education", index, { school: value })} />
                <FormField label="Degree" value={item.degree} placeholder="Bachelor of Design" onChange={(value) => updateList<Education>("education", index, { degree: value })} />
                <FormField label="Field" value={item.field} placeholder="Interaction Design" onChange={(value) => updateList<Education>("education", index, { field: value })} />
                <div className={grid}>
                  <FormField label="Start" type="date" value={item.startDate} onChange={(value) => updateList<Education>("education", index, { startDate: value })} />
                  <FormField label="End" type="date" value={item.endDate} onChange={(value) => updateList<Education>("education", index, { endDate: value })} />
                </div>
              </div>
            </RepeaterItem>
          ))}
        </div>
      </SectionCard>

      <SectionCard
        title="Skills"
        description="Highlight the capabilities that match the target role."
        action={<Button type="button" variant="outline" size="sm" onClick={() => addItem<Skill>("skills", { title: "", level: 3 })}><Plus className="h-4 w-4" /> Add</Button>}
      >
        <div className="mb-4 flex flex-wrap gap-2">
          {["React", "Leadership", "Figma", "Analytics", "Strategy"].map((skill) => (
            <Badge key={skill} className="cursor-pointer border-blue-100 bg-blue-50 text-blue-700" onClick={() => addItem<Skill>("skills", { title: skill, level: 3 })}>{skill}</Badge>
          ))}
        </div>
        <div className="space-y-4">
          {resumeData.skills.map((item, index) => (
            <RepeaterItem key={index} title={item.title} fallback={`Skill ${index + 1}`} onRemove={() => removeItem("skills", index)}>
              <div className={grid}>
                <FormField label="Skill" value={item.title} placeholder="Design Systems" onChange={(value) => updateList<Skill>("skills", index, { title: value })} />
                <FormField label="Level" type="number" value={String(item.level)} placeholder="1-5" onChange={(value) => updateList<Skill>("skills", index, { level: Number(value) })} />
              </div>
            </RepeaterItem>
          ))}
        </div>
      </SectionCard>

      <LinkSection title="Projects" description="Add portfolio, case studies, GitHub, or shipped work." field="projectLinks" items={resumeData.projectLinks} add={() => addItem<ResumeLink>("projectLinks", { name: "", url: "" })} update={(index, patch) => updateList<ResumeLink>("projectLinks", index, patch)} remove={(index) => removeItem("projectLinks", index)} />

      <SectionCard
        title="Certifications"
        description="Add professional certificates and credentials."
        action={<Button type="button" variant="outline" size="sm" onClick={() => addItem<Certificate>("certificates", { name: "", institute: "", certificateDate: "", url: "", description: "" })}><Plus className="h-4 w-4" /> Add</Button>}
      >
        <div className="space-y-4">
          {resumeData.certificates.map((item, index) => (
            <RepeaterItem key={index} title={item.name} fallback={`Certification ${index + 1}`} onRemove={() => removeItem("certificates", index)}>
              <div className={grid}>
                <FormField label="Certificate" value={item.name} placeholder="Advanced UX Research" onChange={(value) => updateList<Certificate>("certificates", index, { name: value })} />
                <FormField label="Institute" value={item.institute} placeholder="Interaction Design Foundation" onChange={(value) => updateList<Certificate>("certificates", index, { institute: value })} />
                <FormField label="Date" value={item.certificateDate} placeholder="2023" onChange={(value) => updateList<Certificate>("certificates", index, { certificateDate: value })} />
                <FormField label="URL" value={item.url} placeholder="https://..." onChange={(value) => updateList<Certificate>("certificates", index, { url: value })} />
              </div>
            </RepeaterItem>
          ))}
        </div>
      </SectionCard>
    </div>
  );
}

function LinkSection({
  title,
  description,
  items,
  add,
  update,
  remove,
}: {
  title: string;
  description: string;
  field: string;
  items: ResumeLink[];
  add: () => void;
  update: (index: number, patch: Partial<ResumeLink>) => void;
  remove: (index: number) => void;
}) {
  return (
    <SectionCard title={title} description={description} action={<Button type="button" variant="outline" size="sm" onClick={add}><Plus className="h-4 w-4" /> Add</Button>}>
      <div className="space-y-4">
        {items.map((item, index) => (
          <RepeaterItem key={index} title={item.name} fallback={`${title} ${index + 1}`} onRemove={() => remove(index)}>
            <div className={grid}>
              <FormField label="Name" value={item.name} placeholder="Portfolio" onChange={(value) => update(index, { name: value })} />
              <FormField label="URL" value={item.url} placeholder="https://example.com" onChange={(value) => update(index, { url: value })} />
            </div>
          </RepeaterItem>
        ))}
      </div>
    </SectionCard>
  );
}
