import { ResumeProfile } from "@/components/pdf-editor/pdf-handler";

export type TemplateId = "modern" | "classic" | "minimal" | "executive" | "compact" | "creative" | "technical" | "academic";

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
  {
    id: "compact",
    name: "Compact",
    description: "Dense single-page structure with tight spacing and efficient section grouping.",
    accent: "#475569",
    bestFor: "Experienced candidates",
  },
  {
    id: "creative",
    name: "Creative",
    description: "Bold accent rail and editorial hierarchy for memorable applications.",
    accent: "#be123c",
    bestFor: "Design and marketing",
  },
  {
    id: "technical",
    name: "Technical",
    description: "Skills-first layout that highlights tools, projects, and delivery impact.",
    accent: "#0f766e",
    bestFor: "Software and engineering",
  },
  {
    id: "academic",
    name: "Academic",
    description: "Formal publication-inspired layout with education and credentials up front.",
    accent: "#4f46e5",
    bestFor: "Research and education",
  },
];

export const starterResume: ResumeProfile = {
  ...emptyResume,
  jobTitle: "Frontend Engineer",
  first: "Riya",
  last: "Sharma",
  email: "riya.sharma@example.com",
  phone: "+91 98765 43210",
  address: "Indiranagar",
  city: "Bengaluru",
  zipCode: "560038",
  state: "Karnataka",
  country: "India",
  summary:
    "Frontend engineer with 5+ years of experience building fast, accessible web applications with React, Next.js, TypeScript, and design systems. Strong at turning product requirements into polished UI, reusable components, and reliable user workflows.",
  experience: [
    {
      title: "Senior Frontend Engineer",
      company: "Northstar Labs",
      location: "Bengaluru, India",
      startDate: "2022-03",
      endDate: "Present",
      description:
        "Built a Next.js analytics dashboard used by 40K+ monthly users. Improved page load performance by 32%, created shared UI primitives, and partnered with design and backend teams to ship complex reporting workflows.",
    },
    {
      title: "Frontend Developer",
      company: "PixelForge Studio",
      location: "Hyderabad, India",
      startDate: "2019-07",
      endDate: "2022-02",
      description:
        "Developed responsive React interfaces for SaaS and ecommerce clients. Migrated legacy screens to TypeScript, added form validation patterns, and reduced UI bug reports by improving component test coverage.",
    },
    {
      title: "Web Developer Intern",
      company: "BrightApps",
      location: "Pune, India",
      startDate: "2018-12",
      endDate: "2019-06",
      description:
        "Created landing pages, reusable CSS modules, and API-connected admin views while learning production Git workflows and accessibility basics.",
    },
  ],
  education: [
    {
      school: "PES University",
      degree: "Bachelor of Technology",
      field: "Computer Science",
      startDate: "2015-08",
      endDate: "2019-05",
      isStudying: false,
      description: "Graduated with coursework in data structures, web engineering, databases, and human-computer interaction.",
    },
    {
      school: "Coursera",
      degree: "Professional Certificate",
      field: "Frontend Performance",
      startDate: "2023-01",
      endDate: "2023-04",
      isStudying: false,
      description: "Focused on Core Web Vitals, rendering performance, and production monitoring.",
    },
  ],
  skills: [
    { title: "React", level: 4 },
    { title: "Next.js", level: 4 },
    { title: "TypeScript", level: 4 },
    { title: "Tailwind CSS", level: 4 },
    { title: "Accessibility", level: 3 },
    { title: "Testing Library", level: 3 },
  ],
  languages: [
    { title: "English", level: 4 },
    { title: "Hindi", level: 4 },
    { title: "Kannada", level: 2 },
  ],
  hobby: "Sketching interfaces, reading product case studies, weekend cycling, and mentoring early-career developers.",
  references: [
    {
      name: "Ananya Rao",
      position: "Engineering Manager",
      company: "Northstar Labs",
      email: "ananya.rao@example.com",
      phone: "+91 98765 11111",
    },
    {
      name: "Karan Iyer",
      position: "Product Lead",
      company: "PixelForge Studio",
      email: "karan.iyer@example.com",
      phone: "+91 98765 22222",
    },
  ],
  certificates: [
    {
      name: "React Advanced Patterns",
      institute: "Frontend Masters",
      certificateDate: "2024",
      description: "Compound components, hooks architecture, performance profiling, and state management patterns.",
      url: "https://example.com/certificates/react-advanced",
    },
    {
      name: "Web Accessibility Specialist",
      institute: "Deque University",
      certificateDate: "2023",
      description: "WCAG fundamentals, keyboard navigation, semantic HTML, and accessible UI testing.",
      url: "https://example.com/certificates/accessibility",
    },
  ],
  socialLinks: [
    { name: "LinkedIn", url: "https://linkedin.com/in/riyasharma" },
    { name: "GitHub", url: "https://github.com/riyasharma" },
  ],
  projectLinks: [
    { name: "Portfolio", url: "https://riya-sharma.dev" },
    { name: "Design System Demo", url: "https://example.com/design-system" },
    { name: "Resume Builder Case Study", url: "https://example.com/resume-builder" },
  ],
};
