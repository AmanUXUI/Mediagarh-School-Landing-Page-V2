export interface Lead {
  id: string;
  name: string;
  email: string;
  phone: string;
  schoolName: string;
  city: string;
  schoolType: 'K-12' | 'Play School' | 'Boarding' | 'Higher Ed';
  currentEnrollment: number;
  marketingBudget: string;
  biggestChallenge: string;
  status: 'New' | 'Contacted' | 'Audit Scheduled' | 'Converted';
  timestamp: string;
  auditNotes?: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  designation: string;
  school: string;
  avatar: string;
  rating: number;
}

export interface ServiceDetail {
  id: string;
  title: string;
  tagline: string;
  description: string;
  deliverables: string[];
  impactMetric: string;
  iconName: string;
}
