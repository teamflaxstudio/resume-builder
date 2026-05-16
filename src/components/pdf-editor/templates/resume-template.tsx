import React from "react";
import { Document, Page, StyleSheet, Text, View } from "@react-pdf/renderer";
import { ResumeProfile } from "@/components/pdf-editor/pdf-handler";
import { TemplateId, templates } from "@/components/resume/resume-data";

const styles = StyleSheet.create({
  page: {
    padding: 36,
    fontSize: 10,
    color: "#111827",
    fontFamily: "Helvetica",
    backgroundColor: "#ffffff",
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
});

export default function ResumeTemplate({
  resume,
  templateId,
}: {
  resume: ResumeProfile;
  templateId: TemplateId;
}) {
  const template = templates.find((item) => item.id === templateId) || templates[0];
  const name = [resume.first, resume.last].filter(Boolean).join(" ") || "Your Name";
  const contact = [resume.email, resume.phone, resume.city, resume.country].filter(Boolean).join("  |  ");

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={[styles.header, template.id === "executive" ? { backgroundColor: "#f8fafc", padding: 18, marginHorizontal: -18, marginTop: -18 } : {}]}>
          <Text style={[styles.name, { color: template.accent }]}>{name}</Text>
          <Text style={styles.title}>{resume.jobTitle || template.name + " Resume"}</Text>
          <Text style={styles.contact}>{contact}</Text>
        </View>

        {resume.summary ? (
          <View style={styles.section}>
            <Text style={[styles.sectionTitle, { color: template.accent }]}>Profile</Text>
            <Text style={styles.text}>{resume.summary}</Text>
          </View>
        ) : null}

        <View style={styles.section}>
          <Text style={[styles.sectionTitle, { color: template.accent }]}>Experience</Text>
          {resume.experience.map((item, index) => (
            <View key={index} style={styles.item}>
              <Text style={styles.rowTitle}>{item.title || "Role"} - {item.company || "Company"}</Text>
              <Text style={styles.muted}>{[item.location, item.startDate, item.endDate].filter(Boolean).join(" | ")}</Text>
              <Text style={styles.text}>{item.description}</Text>
            </View>
          ))}
        </View>

        <View style={styles.section}>
          <Text style={[styles.sectionTitle, { color: template.accent }]}>Education</Text>
          {resume.education.map((item, index) => (
            <View key={index} style={styles.item}>
              <Text style={styles.rowTitle}>{item.degree || "Degree"} - {item.school || "School"}</Text>
              <Text style={styles.muted}>{[item.field, item.startDate, item.endDate].filter(Boolean).join(" | ")}</Text>
            </View>
          ))}
        </View>

        <View style={styles.section}>
          <Text style={[styles.sectionTitle, { color: template.accent }]}>Skills</Text>
          <View style={styles.skillRow}>
            {resume.skills.map((item, index) => (
              <Text key={index} style={[styles.skill, { color: template.accent }]}>{item.title}</Text>
            ))}
          </View>
        </View>

        {resume.projectLinks.length ? (
          <View style={styles.section}>
            <Text style={[styles.sectionTitle, { color: template.accent }]}>Projects</Text>
            {resume.projectLinks.map((item, index) => (
              <Text key={index} style={styles.text}>{item.name}: {item.url}</Text>
            ))}
          </View>
        ) : null}

        {resume.certificates.length ? (
          <View style={styles.section}>
            <Text style={[styles.sectionTitle, { color: template.accent }]}>Certifications</Text>
            {resume.certificates.map((item, index) => (
              <Text key={index} style={styles.text}>{item.name} - {item.institute} {item.certificateDate}</Text>
            ))}
          </View>
        ) : null}
      </Page>
    </Document>
  );
}
