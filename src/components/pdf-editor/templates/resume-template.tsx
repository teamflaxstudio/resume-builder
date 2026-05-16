import React from "react";
import { Document, Page, StyleSheet, Text, View } from "@react-pdf/renderer";
import { Certificate, Education, Experience, ResumeLink, ResumeProfile, Skill } from "@/components/pdf-editor/pdf-handler";
import { TemplateId, templates } from "@/components/resume/resume-data";

type TemplateMeta = (typeof templates)[number];
type TemplateProps = {
  resume: ResumeProfile;
  template: TemplateMeta;
};

const styles = StyleSheet.create({
  page: {
    padding: 36,
    fontSize: 10,
    color: "#111827",
    fontFamily: "Helvetica",
    backgroundColor: "#ffffff",
  },
  row: {
    flexDirection: "row",
  },
  header: {
    paddingBottom: 18,
    marginBottom: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#dbe3ef",
  },
  name: {
    fontSize: 28,
    fontWeight: 700,
    color: "#0f172a",
  },
  title: {
    marginTop: 5,
    fontSize: 12,
    color: "#2563eb",
  },
  contact: {
    marginTop: 8,
    color: "#475569",
  },
  section: {
    marginBottom: 14,
  },
  sectionTitle: {
    marginBottom: 7,
    fontSize: 11,
    fontWeight: 700,
    textTransform: "uppercase",
    letterSpacing: 1.1,
    color: "#1d4ed8",
  },
  rowTitle: {
    fontSize: 11,
    fontWeight: 700,
    color: "#111827",
  },
  muted: {
    color: "#64748b",
  },
  text: {
    marginTop: 4,
    lineHeight: 1.45,
    color: "#334155",
  },
  item: {
    marginBottom: 9,
  },
  skillRow: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 6,
  },
  skill: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 4,
    backgroundColor: "#eff6ff",
    color: "#1d4ed8",
  },
  sidebar: {
    width: 168,
    padding: 22,
    color: "#0f172a",
    backgroundColor: "#f8fafc",
  },
  content: {
    flex: 1,
    padding: 28,
  },
  smallTitle: {
    marginBottom: 5,
    fontSize: 9,
    fontWeight: 700,
    textTransform: "uppercase",
    letterSpacing: 0.8,
  },
});

const compactStyles = StyleSheet.create({
  page: {
    padding: 28,
    fontSize: 8.8,
    color: "#1f2937",
    fontFamily: "Helvetica",
  },
  header: {
    marginBottom: 10,
    paddingBottom: 8,
    borderBottomWidth: 2,
    borderBottomColor: "#64748b",
  },
  grid: {
    flexDirection: "row",
    gap: 16,
  },
  column: {
    flex: 1,
  },
});

const academicStyles = StyleSheet.create({
  page: {
    paddingHorizontal: 42,
    paddingVertical: 38,
    fontSize: 10,
    color: "#111827",
    fontFamily: "Times-Roman",
  },
  header: {
    marginBottom: 18,
    paddingBottom: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#9ca3af",
    textAlign: "center",
  },
  name: {
    fontSize: 27,
    fontFamily: "Times-Bold",
  },
  sectionTitle: {
    marginBottom: 7,
    fontSize: 12,
    fontFamily: "Times-Bold",
    color: "#312e81",
  },
});

export default function ResumeTemplate({
  resume,
  templateId,
}: {
  resume: ResumeProfile;
  templateId: TemplateId;
}) {
  const template = templates.find((item) => item.id === templateId) || templates[0];
  const Template = templateRenderers[template.id] || ModernTemplate;

  return (
    <Document>
      <Template resume={resume} template={template} />
    </Document>
  );
}

const templateRenderers: Record<TemplateId, React.ComponentType<TemplateProps>> = {
  modern: ModernTemplate,
  classic: ClassicTemplate,
  minimal: MinimalTemplate,
  executive: ExecutiveTemplate,
  compact: CompactTemplate,
  creative: CreativeTemplate,
  technical: TechnicalTemplate,
  academic: AcademicTemplate,
};

function ModernTemplate({ resume, template }: TemplateProps) {
  return (
    <Page size="A4" style={[styles.page, { padding: 0 }]}>
      <View style={styles.row}>
        <View style={[styles.sidebar, { minHeight: 842, borderRightWidth: 1, borderRightColor: "#e2e8f0" }]}>
          <Text style={[styles.name, { color: template.accent, fontSize: 25, lineHeight: 1.1 }]}>{fullName(resume)}</Text>
          <Text style={[styles.title, { color: "#334155", marginTop: 8 }]}>{resume.jobTitle || "Resume"}</Text>
          <View style={{ marginTop: 24 }}>
            <SidebarSection title="Contact" accent={template.accent}>
              <Text style={{ lineHeight: 1.45, color: "#475569" }}>{contactLine(resume)}</Text>
            </SidebarSection>
            <SidebarSection title="Skills" accent={template.accent}>
              {resume.skills.map((item) => (
                <Text key={item.title} style={{ marginBottom: 5, color: "#334155" }}>{item.title}</Text>
              ))}
            </SidebarSection>
            <SidebarSection title="Links" accent={template.accent}>
              {[...resume.socialLinks, ...resume.projectLinks].slice(0, 4).map((item) => (
                <Text key={item.url} style={{ marginBottom: 5, color: "#334155" }}>{item.name}</Text>
              ))}
            </SidebarSection>
          </View>
        </View>
        <View style={styles.content}>
          <Summary resume={resume} template={template} />
          <ExperienceSection items={resume.experience} template={template} />
          <EducationSection items={resume.education} template={template} />
          <CertificatesSection items={resume.certificates} template={template} />
        </View>
      </View>
    </Page>
  );
}

function ClassicTemplate({ resume, template }: TemplateProps) {
  return (
    <Page size="A4" style={[styles.page, { paddingHorizontal: 42 }]}>
      <View style={[styles.header, { alignItems: "center", borderBottomColor: "#111827" }]}>
        <Text style={[styles.name, { color: "#111827" }]}>{fullName(resume)}</Text>
        <Text style={[styles.title, { color: "#374151" }]}>{resume.jobTitle || `${template.name} Resume`}</Text>
        <Text style={[styles.contact, { textAlign: "center" }]}>{contactLine(resume)}</Text>
      </View>
      <Summary resume={resume} template={template} />
      <ExperienceSection items={resume.experience} template={template} />
      <EducationSection items={resume.education} template={template} />
      <SkillsSection items={resume.skills} template={template} />
      <CertificatesSection items={resume.certificates} template={template} />
      <LinksSection title="Projects" items={resume.projectLinks} template={template} />
    </Page>
  );
}

function MinimalTemplate({ resume, template }: TemplateProps) {
  return (
    <Page size="A4" style={[styles.page, { padding: 44, fontSize: 9.5 }]}>
      <View style={[styles.header, { borderBottomWidth: 0, marginBottom: 22 }]}>
        <Text style={[styles.name, { color: "#0f172a", fontSize: 24 }]}>{fullName(resume)}</Text>
        <Text style={[styles.contact, { marginTop: 6 }]}>{[resume.jobTitle, contactLine(resume)].filter(Boolean).join("  |  ")}</Text>
      </View>
      <Summary resume={resume} template={template} />
      <ExperienceSection items={resume.experience} template={template} simple />
      <EducationSection items={resume.education} template={template} simple />
      <SkillsSection items={resume.skills} template={template} simple />
      <LinksSection title="Projects" items={resume.projectLinks} template={template} />
    </Page>
  );
}

function ExecutiveTemplate({ resume, template }: TemplateProps) {
  return (
    <Page size="A4" style={[styles.page, { padding: 0 }]}>
      <View style={{ paddingHorizontal: 40, paddingVertical: 32, backgroundColor: "#111827" }}>
        <Text style={[styles.name, { color: "#ffffff", fontSize: 30 }]}>{fullName(resume)}</Text>
        <Text style={[styles.title, { color: "#bfdbfe", marginTop: 8 }]}>{resume.jobTitle || "Executive Resume"}</Text>
        <Text style={[styles.contact, { color: "#d1d5db" }]}>{contactLine(resume)}</Text>
      </View>
      <View style={{ paddingHorizontal: 40, paddingVertical: 30 }}>
        <Summary resume={resume} template={template} />
        <ExperienceSection items={resume.experience} template={template} />
        <View style={[styles.row, { gap: 18 }]}>
          <View style={{ flex: 1 }}>
            <EducationSection items={resume.education} template={template} />
            <CertificatesSection items={resume.certificates} template={template} />
          </View>
          <View style={{ width: 170 }}>
            <SkillsSection items={resume.skills} template={template} />
            <LinksSection title="Links" items={[...resume.socialLinks, ...resume.projectLinks]} template={template} />
          </View>
        </View>
      </View>
    </Page>
  );
}

function CompactTemplate({ resume, template }: TemplateProps) {
  return (
    <Page size="A4" style={compactStyles.page}>
      <View style={compactStyles.header}>
        <Text style={[styles.name, { color: template.accent, fontSize: 22 }]}>{fullName(resume)}</Text>
        <Text style={[styles.contact, { marginTop: 4, fontSize: 8.5 }]}>{[resume.jobTitle, contactLine(resume)].filter(Boolean).join("  |  ")}</Text>
      </View>
      <View style={compactStyles.grid}>
        <View style={compactStyles.column}>
          <Summary resume={resume} template={template} compact />
          <ExperienceSection items={resume.experience} template={template} compact />
        </View>
        <View style={compactStyles.column}>
          <SkillsSection items={resume.skills} template={template} compact />
          <EducationSection items={resume.education} template={template} compact />
          <CertificatesSection items={resume.certificates} template={template} compact />
          <LinksSection title="Projects" items={resume.projectLinks} template={template} compact />
        </View>
      </View>
    </Page>
  );
}

function CreativeTemplate({ resume, template }: TemplateProps) {
  return (
    <Page size="A4" style={[styles.page, { padding: 34 }]}>
      <View style={{ height: 7, backgroundColor: template.accent, marginBottom: 22 }} />
      <View style={[styles.row, { gap: 22, marginBottom: 22 }]}>
        <View style={{ width: 190 }}>
          <Text style={[styles.name, { color: "#111827", fontSize: 29, lineHeight: 1.05 }]}>{fullName(resume)}</Text>
          <Text style={[styles.title, { color: template.accent }]}>{resume.jobTitle || "Creative Resume"}</Text>
        </View>
        <View style={{ flex: 1, paddingTop: 3 }}>
          <Text style={[styles.contact, { marginTop: 0 }]}>{contactLine(resume)}</Text>
          {resume.summary ? <Text style={[styles.text, { marginTop: 10 }]}>{resume.summary}</Text> : null}
        </View>
      </View>
      <View style={[styles.row, { gap: 20 }]}>
        <View style={{ flex: 1.35 }}>
          <ExperienceSection items={resume.experience} template={template} />
          <LinksSection title="Selected Work" items={resume.projectLinks} template={template} />
        </View>
        <View style={{ flex: 0.85, padding: 14, backgroundColor: "#fff1f2" }}>
          <SkillsSection items={resume.skills} template={template} simple />
          <EducationSection items={resume.education} template={template} compact />
          <CertificatesSection items={resume.certificates} template={template} compact />
        </View>
      </View>
    </Page>
  );
}

function TechnicalTemplate({ resume, template }: TemplateProps) {
  return (
    <Page size="A4" style={[styles.page, { padding: 34 }]}>
      <View style={[styles.header, { borderBottomWidth: 2, borderBottomColor: template.accent }]}>
        <Text style={[styles.name, { color: "#0f172a", fontSize: 27 }]}>{fullName(resume)}</Text>
        <Text style={[styles.title, { color: template.accent }]}>{resume.jobTitle || "Technical Resume"}</Text>
        <Text style={styles.contact}>{contactLine(resume)}</Text>
      </View>
      <View style={{ padding: 12, marginBottom: 14, backgroundColor: "#f0fdfa", borderWidth: 1, borderColor: "#ccfbf1" }}>
        <SkillsSection items={resume.skills} template={template} simple />
      </View>
      <View style={[styles.row, { gap: 18 }]}>
        <View style={{ flex: 1.25 }}>
          <ExperienceSection items={resume.experience} template={template} />
          <LinksSection title="Projects" items={resume.projectLinks} template={template} boxed />
        </View>
        <View style={{ flex: 0.85 }}>
          <EducationSection items={resume.education} template={template} />
          <CertificatesSection items={resume.certificates} template={template} />
        </View>
      </View>
    </Page>
  );
}

function AcademicTemplate({ resume, template }: TemplateProps) {
  return (
    <Page size="A4" style={academicStyles.page}>
      <View style={academicStyles.header}>
        <Text style={academicStyles.name}>{fullName(resume)}</Text>
        <Text style={[styles.title, { color: template.accent, fontFamily: "Times-Roman" }]}>{resume.jobTitle || "Academic Resume"}</Text>
        <Text style={[styles.contact, { textAlign: "center" }]}>{contactLine(resume)}</Text>
      </View>
      <Summary resume={resume} template={template} academic />
      <EducationSection items={resume.education} template={template} academic />
      <CertificatesSection items={resume.certificates} template={template} academic />
      <ExperienceSection items={resume.experience} template={template} academic />
      <LinksSection title="Research & Projects" items={resume.projectLinks} template={template} academic />
      <SkillsSection items={resume.skills} template={template} academic />
    </Page>
  );
}

function Header({ resume, template }: TemplateProps) {
  return (
    <View style={styles.header}>
      <Text style={[styles.name, { color: template.accent }]}>{fullName(resume)}</Text>
      <Text style={styles.title}>{resume.jobTitle || `${template.name} Resume`}</Text>
      <Text style={styles.contact}>{contactLine(resume)}</Text>
    </View>
  );
}

function SidebarSection({ title, accent, children }: { title: string; accent: string; children: React.ReactNode }) {
  if (!children) return null;
  return (
    <View style={{ marginBottom: 18 }}>
      <Text style={[styles.smallTitle, { color: accent }]}>{title}</Text>
      {children}
    </View>
  );
}

function Summary({ resume, template, compact, academic }: TemplateProps & { compact?: boolean; academic?: boolean }) {
  if (!resume.summary) return null;
  return (
    <Section title="Profile" template={template} compact={compact} academic={academic}>
      <Text style={[styles.text, compact ? { fontSize: 8.5, lineHeight: 1.35 } : {}, academic ? { fontFamily: "Times-Roman" } : {}]}>{resume.summary}</Text>
    </Section>
  );
}

function ExperienceSection({
  items,
  template,
  simple,
  compact,
  academic,
}: {
  items: Experience[];
  template: TemplateMeta;
  simple?: boolean;
  compact?: boolean;
  academic?: boolean;
}) {
  if (!items.length) return null;
  return (
    <Section title="Experience" template={template} compact={compact} academic={academic}>
      {items.map((item, index) => (
        <View key={`${item.company}-${index}`} style={[styles.item, compact ? { marginBottom: 6 } : {}]}>
          <Text style={[styles.rowTitle, simple ? { fontWeight: 400 } : {}, compact ? { fontSize: 9.3 } : {}, academic ? { fontFamily: "Times-Bold" } : {}]}>
            {item.title || "Role"} - {item.company || "Company"}
          </Text>
          <Text style={[styles.muted, compact ? { fontSize: 8 } : {}]}>{detailLine([item.location, dateRange(item.startDate, item.endDate)])}</Text>
          {item.description ? <Text style={[styles.text, compact ? { fontSize: 8.4, lineHeight: 1.3 } : {}]}>{item.description}</Text> : null}
        </View>
      ))}
    </Section>
  );
}

function EducationSection({
  items,
  template,
  simple,
  compact,
  academic,
}: {
  items: Education[];
  template: TemplateMeta;
  simple?: boolean;
  compact?: boolean;
  academic?: boolean;
}) {
  if (!items.length) return null;
  return (
    <Section title="Education" template={template} compact={compact} academic={academic}>
      {items.map((item, index) => (
        <View key={`${item.school}-${index}`} style={[styles.item, compact ? { marginBottom: 6 } : {}]}>
          <Text style={[styles.rowTitle, simple ? { fontWeight: 400 } : {}, compact ? { fontSize: 9.3 } : {}, academic ? { fontFamily: "Times-Bold" } : {}]}>
            {item.degree || "Degree"} - {item.school || "School"}
          </Text>
          <Text style={[styles.muted, compact ? { fontSize: 8 } : {}]}>{detailLine([item.field, dateRange(item.startDate, item.endDate)])}</Text>
          {item.description && academic ? <Text style={styles.text}>{item.description}</Text> : null}
        </View>
      ))}
    </Section>
  );
}

function SkillsSection({
  items,
  template,
  simple,
  compact,
  boxed,
  academic,
}: {
  items: Skill[];
  template: TemplateMeta;
  simple?: boolean;
  compact?: boolean;
  boxed?: boolean;
  academic?: boolean;
}) {
  if (!items.length) return null;
  return (
    <Section title="Skills" template={template} compact={compact} boxed={boxed} academic={academic}>
      <View style={styles.skillRow}>
        {items.map((item) => (
          <Text
            key={item.title}
            style={[
              styles.skill,
              { color: template.accent },
              simple ? { backgroundColor: "#ffffff", paddingHorizontal: 0 } : {},
              compact ? { paddingHorizontal: 5, paddingVertical: 2, fontSize: 8 } : {},
              boxed ? { backgroundColor: "#ecfdf5" } : {},
              academic ? { backgroundColor: "#ffffff", paddingHorizontal: 0, paddingVertical: 1 } : {},
            ]}
          >
            {item.title}
          </Text>
        ))}
      </View>
    </Section>
  );
}

function LinksSection({
  title,
  items,
  template,
  compact,
  boxed,
  academic,
}: {
  title: string;
  items: ResumeLink[];
  template: TemplateMeta;
  compact?: boolean;
  boxed?: boolean;
  academic?: boolean;
}) {
  if (!items.length) return null;
  return (
    <Section title={title} template={template} compact={compact} boxed={boxed} academic={academic}>
      {items.map((item, index) => (
        <Text key={`${item.name}-${index}`} style={[styles.text, compact ? { fontSize: 8.2, lineHeight: 1.3 } : {}]}>
          {item.name || "Link"}: {item.url}
        </Text>
      ))}
    </Section>
  );
}

function CertificatesSection({
  items,
  template,
  compact,
  academic,
}: {
  items: Certificate[];
  template: TemplateMeta;
  compact?: boolean;
  academic?: boolean;
}) {
  if (!items.length) return null;
  return (
    <Section title="Certifications" template={template} compact={compact} academic={academic}>
      {items.map((item, index) => (
        <Text key={`${item.name}-${index}`} style={[styles.text, compact ? { fontSize: 8.2, lineHeight: 1.3 } : {}]}>
          {detailLine([item.name, item.institute, item.certificateDate])}
        </Text>
      ))}
    </Section>
  );
}

function Section({
  title,
  template,
  children,
  compact,
  boxed,
  academic,
}: {
  title: string;
  template: TemplateMeta;
  children: React.ReactNode;
  compact?: boolean;
  boxed?: boolean;
  academic?: boolean;
}) {
  return (
    <View style={[styles.section, compact ? { marginBottom: 9 } : {}, boxed ? { padding: 10, borderWidth: 1, borderColor: "#ccfbf1", backgroundColor: "#f8fafc" } : {}]}>
      <Text
        style={[
          styles.sectionTitle,
          { color: template.accent },
          compact ? { marginBottom: 4, fontSize: 8.8, letterSpacing: 0.6 } : {},
          academic ? academicStyles.sectionTitle : {},
        ]}
      >
        {title}
      </Text>
      {children}
    </View>
  );
}

function fullName(resume: ResumeProfile) {
  return [resume.first, resume.last].filter(Boolean).join(" ") || "Your Name";
}

function contactLine(resume: ResumeProfile) {
  return [resume.email, resume.phone, resume.city, resume.country].filter(Boolean).join("  |  ");
}

function dateRange(startDate: string, endDate: string) {
  return [startDate, endDate].filter(Boolean).join(" - ");
}

function detailLine(parts: string[]) {
  return parts.filter(Boolean).join(" | ");
}
