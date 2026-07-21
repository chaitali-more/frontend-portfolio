export interface Project {
  id: string;
  category: 'Live Project' | 'Practice Project';
  videoUrl?: string;
  imageUrl?: string;
  title: string;
  description: string;
  longDescription?: string;
  iconName?: 'Globe' | 'ShoppingBag' | 'Coins' | 'Activity' | 'Code' | 'Layers';
  tags: string[];
  liveUrl: string;
  githubUrl: string;
  metrics?: { label: string; value: string }[];
  challenges?: string[];
  solutions?: string[];
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  bullets: string[];
  tags: string[];
}

export interface Stat {
  label: string;
  value: string;
  suffix?: string;
  description: string;
}

export interface SkillCategory {
  title: string;
  skills: string[];
}
