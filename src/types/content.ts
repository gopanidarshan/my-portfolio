export interface Site {
  name: string;
  role: string;
  tagline: string;
  location: string;
  email: string;
  social: {
    linkedin: string;
    github: string;
    x: string;
  };
  meta: {
    title: string;
    description: string;
  };
}

export interface NavItem {
  label: string;
  href: string;
}

export interface Hero {
  title: string;
  subtitle: string;
  primaryCta: {
    label: string;
    href: string;
  };
  secondaryCta: {
    label: string;
    href: string;
  };
  alt: string;
}

export interface StatsItem {
  icon: string;
  text: string;
  description: string;
}

export interface SignatureCaseStudy {
  eyebrow: string;
  title: string;
  description: string;
  bullets: Array<{
    label: string;
    text: string;
  }>;
  cta: {
    label: string;
    href: string;
  };
}

// Removed HiringPlan types

export interface ToolboxItem {
  name: string;
  icon: string;
  description: string;
}

export interface Toolbox {
  title: string;
  subtitle: string;
  tools: ToolboxItem[];
}

export interface CtaBanner {
  title: string;
  subtitle: string;
  primaryCta: {
    label: string;
    href: string;
  };
  secondaryCta: {
    label: string;
    href: string;
  };
}

export interface Home {
  hero: Hero;
  highlights: string[];
  statsStrip: StatsItem[];
  signatureCaseStudy: SignatureCaseStudy;
  toolbox: Toolbox;
  ctaBanner: CtaBanner;
}

export interface About {
  title: string;
  summary: string[];
  focusAreas: string[];
}

export interface Project {
  slug: string;
  title: string;
  role: string;
  period: string;
  stack: string[];
  summary: string;
  problem: string;
  approach: string;
  outcome: string;
  links: {
    demo: string;
    repo: string;
  };
}

export interface Projects {
  intro: string;
  items: Project[];
}

export interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  highlights: string[];
}

export interface Experience {
  intro: string;
  items: ExperienceItem[];
}

export interface Skills {
  [category: string]: string[];
}

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  tags: string[];
  date: string;
}

export interface Blog {
  intro: string;
  posts: BlogPost[];
}

export interface ContactForm {
  fields: string[];
  successMessage: string;
  errorMessage: string;
}

export interface Contact {
  title: string;
  summary: string;
  form: ContactForm;
}

export interface SEOPage {
  path: string;
  title: string;
  description: string;
}

export interface FooterBrand {
  name: string;
  role: string;
  tagline: string;
  location: string;
}

export interface FooterSection {
  title: string;
  links: Array<{
    label: string;
    href: string;
  }>;
}

export interface FooterSocial {
  name: string;
  href: string;
  icon: string;
}

export interface FooterConnect {
  title: string;
  social: FooterSocial[];
}

export interface FooterBottomBar {
  copyright: string;
  builtWith: string;
}

export interface Footer {
  brand: FooterBrand;
  explore: FooterSection;
  resources: FooterSection;
  connect: FooterConnect;
  bottomBar: FooterBottomBar;
}

export interface SEO {
  pages: SEOPage[];
}

// Education types (all sections optional; page skips missing ones)
export interface Degree {
  institution: string;
  degree: string;
  field?: string;
  startDate?: string;
  endDate?: string;
  gpa?: string;
  location?: string;
  highlights?: string[];
  coursework?: string[];
}

export interface Certification {
  provider: string;
  title: string;
  issueDate?: string;
  expiryDate?: string;
  credentialId?: string;
  verifyUrl?: string;
}

export interface AcademicProject {
  title: string;
  context?: string;
  stack?: string[];
  summary?: string;
  outcome?: string;
  links?: {
    repo?: string;
    demo?: string;
  };
}

export interface CourseItem {
  name: string;
  category: string; // e.g., ML, Data Engineering, Analytics, Programming
  outcome?: string; // short outcome/what you learned
  tools?: string[]; // badges for tools/tech
}

export interface Honor {
  title: string;
  year?: string;
  issuer?: string;
}

export interface DownloadItem {
  label: string;
  href: string;
}

export interface Activity {
  role: string; // e.g., "Mentor", "Club Lead", "TA"
  organization?: string; // club/org/society name
  period?: string; // e.g., "2023–2024"
  description?: string; // short description
  highlights?: string[]; // bullets
}

export interface Education {
  hero?: {
    subtitle?: string;
    updated?: string; // ISO date string
  };
  degrees?: Degree[];
  certifications?: Certification[];
  coursework?: string[];
  courses?: CourseItem[]; // structured coursework for filterable grid
  projects?: AcademicProject[];
  honors?: Honor[];
  downloads?: DownloadItem[];
  activities?: Activity[];
}

export interface Content {
  site: Site;
  nav: NavItem[];
  home: Home;
  about: About;
  projects: Projects;
  experience: Experience;
  skills: Skills;
  blog: Blog;
  contact: Contact;
  footer: Footer;
  seo: SEO;
  education?: Education; // optional until JSON provided
}

export interface ContactFormData {
  name: string;
  email: string;
  message: string;
  successMessage: string;
  errorMessage: string;
}
