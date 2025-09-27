import { type LucideIcon } from 'lucide-react'

export interface Steps {
  icon?: LucideIcon
  number: string;
  title: string;
  description: string;
  color?: string;
  showArrow?: boolean;
}
export interface FormData {
  name: string;
  phoneNumber: string;
  email: string;
  service: string;
}

