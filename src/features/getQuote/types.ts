import { defaultServicesData } from "@myTypes/ServiceApi";
import type { LucideIcon } from "lucide-react";

export interface StepProps {
  icon?: LucideIcon;
  number: string;
  title: string;
  description: string;
  color?: string;
  showArrow?: boolean;
  isVisible?: boolean;
  delay?: number;
}
export interface FormData {
  name: string;
  phoneNumber: string;
  email: string;
  service: string;
  message: string;
  timestamp: string;
  source: string;
  honeypot?: string; // 👈 optional hidden field for spam detection
}

export type InputField = {
  type: "text" | "tel" | "email";
  name: keyof FormData;
  label: string;
  required: boolean;
  placeholder: string;
};

export type SelectField = {
  type: "select";
  name: keyof FormData;
  label: string;
  required: boolean;
  options: { value: string; label: string }[];
};
export type TextAreaField = {
  type: "textarea";
  name: keyof FormData;
  label: string;
  required: boolean;
  placeholder: string;
};

export type FormField = SelectField | InputField | TextAreaField;

export const formFields: FormField[] = [
  {
    type: "text",
    name: "name",
    label: "Name",
    required: true,
    placeholder: "Your Full Name"
  },
  {
    type: "tel",
    name: "phoneNumber",
    label: "Phone Number",
    required: true,
    placeholder: "(555) 123-4567"
  },
  {
    type: "email",
    name: "email",
    label: "Email Address",
    required: true,
    placeholder: "your.email@example.com"
  },
  {
    type: "select",
    name: "service",
    label: "Choose a Service",
    required: true,
    options: defaultServicesData.map((item) => ({
      value: String(item.id), // 👈 convert to string
      label: item.title
    }))
  },
  {
    type: "textarea",
    name: "message",
    label: "Additional Details",
    required: false,
    placeholder:
      "Please describe your facility, cleaning frequency needs, and any specific requirements..."
  }
];
