import { ResumeProfile } from "@/components/pdf-editor/pdf-handler";

export type TemplateId = "modern" | "classic" | "minimal" | "executive";

export const emptyResume: ResumeProfile = {
  jobTitle: "",
  first: "",
  last: "",
  email: "",
  phone: "",
  address: "",
  city: "",
  zipCode: "",
  state: "",
  country: "",
  profilePic: "",
  summary: "",
  experience: [],
  education: [],
  skills: [],
  languages: [],
  hobby: "",
  references: [],
  certificates: [],
  socialLinks: [],
  projectLinks: [],
};

export const templates: Array<{
  id: TemplateId;
  name: string;
  description: string;
  accent: string;
  bestFor: string;
}> = [
  {
    id: "modern",
    name: "Modern",
    description: "Balanced layout with a crisp sidebar and strong profile header.",
    accent: "#2563eb",
    bestFor: "Product, tech, operations",
  },
  {
    id: "classic",
    name: "Classic",
    description: "Traditional single-column resume with refined section hierarchy.",
    accent: "#111827",
    bestFor: "Corporate and academic roles",
  },
  {
    id: "minimal",
    name: "Minimal",
    description: "Quiet typography, generous spacing, and a recruiter-friendly scan path.",
    accent: "#0f766e",
    bestFor: "Design, writing, consulting",
  },
  {
    id: "executive",
    name: "Executive",
    description: "Premium header treatment for senior leadership applications.",
    accent: "#1d4ed8",
    bestFor: "Management and leadership",
  },
];

export const starterResume: ResumeProfile = {
  ...emptyResume,
  jobTitle: "Senior Product Designer",
  first: "Aarav",
  last: "Mehta",
  email: "aarav.mehta@example.com",
  phone: "+91 98765 43210",
  city: "Bengaluru",
  country: "India",
  summary:
    "Product designer with 7+ years of experience shaping SaaS products, design systems, and customer-facing workflows for fast-growing teams.",
  experience: [
    {
      title: "Lead Product Designer",
      company: "Northstar Labs",
      location: "Remote",
      startDate: "2021-04",
      endDate: "Present",
      description:
        "Led redesign of the analytics workspace, improving activation by 24%. Built design system patterns adopted across five product squads.",
    },
  ],
  education: [
    {
      school: "National Institute of Design",
      degree: "Bachelor of Design",
      field: "Interaction Design",
      startDate: "2014-06",
      endDate: "2018-05",
      isStudying: false,
      description: "Focused on human-centered design, prototyping, and visual systems.",
    },
  ],
  skills: [
    { title: "Product Strategy", level: 4 },
    { title: "Figma", level: 4 },
    { title: "Design Systems", level: 4 },
    { title: "User Research", level: 3 },
  ],
  certificates: [
    {
      name: "Advanced UX Research",
      institute: "Interaction Design Foundation",
      certificateDate: "2023",
      description: "Research planning, synthesis, and product discovery methods.",
      url: "https://example.com",
    },
  ],
  projectLinks: [
    { name: "Portfolio", url: "https://example.com" },
    { name: "Case Studies", url: "https://example.com/cases" },
  ],
};
