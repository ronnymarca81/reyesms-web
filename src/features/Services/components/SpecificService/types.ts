import type { LucideIcon } from "lucide-react";
import * as LucideIcons from 'lucide-react';

export interface ThemeConfig {
  container: string;
  text: string;
  card: string;
  border: string;
  hover: string;
  accent: string;
  subtext: string;
}

export interface themeProps {
  theme?: "light" | "dark" | "gradient" | "cta";
}

export interface TaskItem {
  title: string;
  icon?: IconName;
  label?: string; // e.g. "Guarantee"
  score?: string; // e.g. "100%"
  desc?: string;
  backgroundImage?: string;
}
export type IconName = keyof typeof LucideIcons;

export interface FrequencyOption {
  price: string;
  visits: string;
  best: string;
}


export type Frequencies = {
  daily: FrequencyOption;
  weekly: FrequencyOption;
  biweekly: FrequencyOption;
  monthly: FrequencyOption;
  custom: FrequencyOption;
  onDemand: FrequencyOption;
  specialEvent: FrequencyOption;
  quarterly: FrequencyOption;
  biannually: FrequencyOption;
  annually: FrequencyOption;
};

export interface Benefit {
  icon: LucideIcon; 
  title: string; 
  desc: string; 
  stat: string; 
  metric: string; 
}
