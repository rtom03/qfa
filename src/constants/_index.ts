import type React from "react";

export interface HmPropsTp {
  statsRef: React.RefObject<HTMLElement | null> | null;
  counters: { stores: number; brands: number; jobs: number };
}

export interface Brand {
  id: string;
  name: string;
  tagline: string;
  description: string;
  color: string;
  linear: string;
  textColor: string;
  icon: string;
  link: string;
}

export interface HeroTp {
  header: string;
  content: string;
}

export interface SectionProps {
  children: React.ReactNode;
  delay?: number;
}
