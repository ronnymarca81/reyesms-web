// Types
export interface DropdownItem {
  label: string;
  href: string;
}

export interface NavItem {
  label: string;
  href: string;
  dropdown?: DropdownItem[];
  onClick?: () => void; // 👈 allow click handler
}

export interface ContactInfo {
  address?: string;
  email: string;
  phone: string;
  socialLinks: {
    facebook: string;
  };
}

export interface NavbarProps {
  brandName?: string;
  contactInfo?: ContactInfo;
  navItems?: NavItem[];
}

// Default data
export const defaultNavItems: NavItem[] = [
  { label: "About", href: "/about" },
  {
    label: "Residential",
    href: "#residential",
    dropdown: [
      { label: "Residential Cleaning", href: "#residential-cleaning" },
      { label: "Deep Cleaning", href: "#deep-cleaning" },
      { label: "Move In/Out", href: "#move-in-out" },
      { label: "Regular Maintenance", href: "#regular-maintenance" },
    ],
  },
  {
    label: "Commercial",
    href: "#commercial",
    dropdown: [
      { label: "Office Cleaning", href: "#office-cleaning" },
      { label: "Retail Cleaning", href: "#retail-cleaning" },
      { label: "Medical Facilities", href: "#medical-facilities" },
      { label: "Post Construction", href: "#post-construction" },
    ],
  },
  {
    label: "Resources",
    href: "#resources",
    dropdown: [
      { label: "Blog", href: "#blog" },
      { label: "Testimonials", href: "#testimonials" },
      { label: "FAQ", href: "#faq" },
      { label: "Cleaning Tips", href: "#cleaning-tips" },
    ],
  },
  { label: "Contact", href: "/contact" },
];
export const defaultBrandName: string = "Reyes Maintenance";

export const defaultContactInfo: ContactInfo = {
  address: "52 Antares Dr Suite #203, Ottawa, ON K2E 7V1",
  email: "info@reyesms.ca",
  phone: "(613) 266-4914",
  socialLinks: {
    facebook: "https://www.facebook.com/profile.php?id=100064625636217",
  },
};
