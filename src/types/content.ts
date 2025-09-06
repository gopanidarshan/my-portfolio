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

export interface HiringPlanCard {
  period: string;
  title: string;
  outcomes: string[];
  deliverables: string[];
}

export interface HiringPlan {
  title: string;
  subtitle: string;
  cards: HiringPlanCard[];
}

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
  hiringPlan: HiringPlan;
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
}

export interface ContactFormData {
  name: string;
  email: string;
  message: string;
  successMessage: string;
  errorMessage: string;
}
