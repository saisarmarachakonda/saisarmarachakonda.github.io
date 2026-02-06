
import React from 'react';

export interface ArchitectureStep {
  label: string;
  description: string;
  icon: React.ElementType;
}

export interface CaseStudy {
  id: string;
  title: string;
  provider: string;
  description: string;
  metric: string;
  metricLabel: string;
  icon: React.ElementType;
  color: string;
  bg: string;
  shadow: string;
  problem: string;
  solution: string;
  architecture: ArchitectureStep[];
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  icon: React.ElementType;
}

export interface NavLink {
  label: string;
  href: string;
}

export enum SectionId {
  HERO = 'hero',
  SERVICES = 'services',
  SHOWCASE = 'showcase',
  WORKFLOW = 'workflow',
  STATS = 'stats',
  CASE_STUDIES = 'case-studies',
  CAREERS = 'careers',
  CONTACT = 'contact'
}
