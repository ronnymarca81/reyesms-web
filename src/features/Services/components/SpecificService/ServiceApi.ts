import defaultHover from "/images/rm-logo.png";

import {
  Building2,
  CheckCircle2,
  Shield,
  Sparkles,
  Star,
  TrendingUp,
  Users,
  Blinds
} from "lucide-react";

import type { Task, Frequencies, Benefit, ThemeConfig } from "./types";

export const DEFAULT_HOVER_BG = defaultHover;

export const tasks: Task[] = [
  {
    icon: Sparkles,
    title: "Surface Care",
    desc: "Dusting and polishing all surfaces with premium products"
  },
  {
    icon: Building2,
    title: "Floor Maintenance",
    desc: "Professional vacuuming and mopping of all floor types",
    backgroundImage: "/images/cleaning.png"
  },
  {
    icon: Shield,
    title: "Facility Sanitization",
    desc: "Complete sanitization of restrooms and kitchen areas",
    backgroundImage: "/images/cleaning-safety.png"
  },
  {
    icon: CheckCircle2,
    title: "Waste Management",
    desc: "Efficient trash removal and recycling services",
  },
  {
    icon: Blinds,
    title: "Glass Cleaning",
    desc: "Streak-free interior glass and window cleaning",
  },
  {
    icon: Shield,
    title: "Touch Point Disinfection",
    desc: "Thorough disinfection of high-contact surfaces",

  }
];

export const frequencies: Frequencies = {
  daily: {
    price: "$150-200",
    visits: "5x/week",
    best: "High-traffic offices"
  },
  weekly: {
    price: "$120-160",
    visits: "1x/week",
    best: "Medium-sized teams"
  },
  biweekly: {
    price: "$100-140",
    visits: "2x/month",
    best: "Smaller offices"
  },
  monthly: { price: "$80-120", visits: "1x/month", best: "Basic maintenance" }
};

export const benefits: Benefit[] = [
  {
    icon: Users,
    title: "Healthier Work Environment",
    desc: "Reduces sick days by up to 30% and promotes overall wellness",
    stat: "30%",
    metric: "Fewer Sick Days"
  },
  {
    icon: TrendingUp,
    title: "Boosts Productivity",
    desc: "Clean workspaces increase focus and employee satisfaction",
    stat: "23%",
    metric: "Productivity Increase"
  },
  {
    icon: Building2,
    title: "Professional Image",
    desc: "Impress clients and visitors with immaculate facilities",
    stat: "85%",
    metric: "Client Satisfaction"
  },
  {
    icon: Star,
    title: "Extends Asset Life",
    desc: "Proper maintenance preserves furniture and equipment value",
    stat: "40%",
    metric: "Longer Lifespan"
  }
];

export const containerTheme: Record<
  "light" | "dark" | "gradient" | "cta",
  ThemeConfig
> = {
  light: {
    container: "bg-gray-50",
    text: "text-gray-900",
    card: "bg-white shadow-sm border border-gray-200",
    border: "border-gray-200",
    hover: "hover:bg-gray-100",
    accent: "bg-gradient-to-br from-blue-500 to-indigo-600",
    subtext: "text-gray-600"
  },
  dark: {
    container: "bg-neutral-950",
    text: "text-gray-100",
    card: "bg-neutral-900 border border-neutral-800 shadow-md",
    border: "border-neutral-800",
    hover: "hover:bg-neutral-800",
    accent: "bg-gradient-to-br from-indigo-400 to-emerald-400",
    subtext: "text-gray-400"
  },
  gradient: {
    container: "bg-gradient-to-br from-sky-50 via-indigo-50 to-rose-50",
    text: "text-gray-900",
    card: "bg-white/80 border border-gray-200 backdrop-blur-md shadow-md",
    border: "border-gray-200",
    hover: "hover:bg-white",
    accent: "bg-gradient-to-br from-pink-500 via-violet-500 to-indigo-500",
    subtext: "text-gray-700"
  },
  cta: {
    container: "bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600",
    text: "text-white",
    card: "bg-white/10 backdrop-blur-lg border border-white/20 shadow-xl",
    border: "border-white/30",
    hover: "hover:bg-white/20",
    accent: "bg-gradient-to-r from-yellow-400 to-orange-500",
    subtext: "text-white/80"
  }
};
