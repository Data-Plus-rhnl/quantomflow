export interface BlogPost {
  slug: string;
  title: string;
  category: string;
  readTime: string;
  publishedDate: string;
  author: string;
  excerpt: string;
  contentHtml: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  companyName?: string;
  projectType: string;
  packageSelected?: string;
  budgetRange?: string;
  message: string;
}

export interface PortfolioProject {
  id: string;
  title: string;
  clientName: string;
  location: string;
  category: 'restaurants' | 'clinics' | 'ecommerce' | 'salons' | 'corporate' | 'childcare' | 'personal-brand';
  categoryLabel: string;
  image: string;
  metrics: {
    primary: string;
    label: string;
  };
  summary: string;
  challenge: string;
  solution: string;
  deliverables: string[];
  techStack: string[];
  liveUrl?: string;
}

export interface ServicePackage {
  id: string;
  name: string;
  tagline: string;
  priceAed: string;
  priceNote: string;
  turnaround: string;
  badge?: string;
  popular?: boolean;
  description: string;
  features: string[];
  notIncluded?: string[];
  bestFor: string;
}

export interface TechCard {
  icon: string;
  title: string;
  description: string;
}

export interface ServiceCard {
  number: string;
  title: string;
  description: string;
  tags: string[];
}

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
}

export interface WhyUsItem {
  title: string;
  description: string;
  iconType: 'shield' | 'lock' | 'clock' | 'activity';
}
