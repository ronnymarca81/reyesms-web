// TypeScript interfaces
export interface LogoProps {
  className?: string;
}

export interface ButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline" | "phone" | "custom";
  size?: "sm" | "md" | "lg";
  onClick?: () => void;
  className?: string;
  href?: string;
}

export interface MenuItem {
  label: string;
  href: string;
  subItems?: MenuItem[];
}

export interface NavBarProps {
  menuItems: MenuItem[];
  logoText?: string;
  phoneNumber?: string;
}