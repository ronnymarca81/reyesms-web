// TypeScript interfaces
export interface LogoProps {
  className?: string;
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