import React from 'react';

export interface NavItem {
  label: string;
  href: string;
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  company?: string;
  content: string;
  rating: number;
  image: string;
}

export interface PortfolioItem {
  id: number;
  title: string;
  category: 'Corporativa' | 'Ecommerce' | 'Landing' | 'Medida';
  image: string;
  description: string;
  link?: string;
}

export interface Service {
  title: string;
  description: string;
  icon: React.ReactNode;
  features: string[];
}

export interface FaqItem {
  question: string;
  answer: string;
}