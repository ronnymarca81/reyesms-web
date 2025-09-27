import type { MenuItem } from "./types";

export const menuItems: MenuItem[] = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  {
    label: "Our Services",
    href: "/services",
    subItems: [
      { label: "Office Cleaning", href: "/services/office" },
      { label: "Retail & Plaza Cleaning", href: "/services/retail-plaza" },
      { label: "Carpet Cleaning", href: "/services/carpet" },
    ]
  },
  {
    label: "Sectors",
    href: "/sectors",
    subItems: [
      { label: "Healthcare", href: "/sectors/healthcare" },
      { label: "Education", href: "/sectors/education" },
      { label: "Retail", href: "/sectors/retail" },
      { label: "Hospitality", href: "/sectors/hospitality" },
      { label: "Office Buildings", href: "/sectors/offices" }
    ]
  },
  { label: "Contact Us", href: "/contact" }
];
