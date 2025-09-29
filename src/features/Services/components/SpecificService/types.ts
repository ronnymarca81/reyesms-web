import type { LucideIcon } from "lucide-react";

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

export interface Task {
  icon: LucideIcon;
  title: string;
  desc: string;
  backgroundImage?: string;
}

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
};

export interface Benefit {
  icon: LucideIcon; 
  title: string; 
  desc: string; 
  stat: string; 
  metric: string; 
}
