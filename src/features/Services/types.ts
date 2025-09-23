export interface ServiceData {
  id: number;
  image: string;
  title: string;
  description: string;
  href:string;
}
export interface SafetyFeature {
  text: string;
}

export const safetyFeatures: SafetyFeature[] = [
  { text: "Sanitize and disinfect" },
  { text: "Make sure you wear a mask" },
  { text: "Wears gloves at all times" },
  { text: "Rinsing our hands" }
];