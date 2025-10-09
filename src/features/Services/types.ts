import * as LucideIcons from 'lucide-react';

export interface ServiceData {
  id: number;
  image: string;
  title: string;
  description: string;
  href: string;
}

export interface SafetyFeature {
   title: string;
   icon?: IconName;
   label?: string; // e.g. "Guarantee"
   score?: string; // e.g. "100%"
   desc?: string;
   backgroundImage?: string;
}
export type IconName = keyof typeof LucideIcons;


export const safetyFeatures: SafetyFeature[] = [
  { title: 'Sanitize and disinfect', icon: 'Check', label: 'Guarantee', score: '100%' },
  { title: 'Wear a mask', icon: 'Check', label: 'Guarantee', score: '100%' },
  { title: 'Wears gloves', icon: 'Check', label: 'Guarantee', score: '100%' },
  { title: 'Rinsing hands', icon: 'Check', label: 'Guarantee', score: '100%' },
];
