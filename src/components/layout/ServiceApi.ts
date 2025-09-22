import type { MenuItem } from "./types";

export const menuItems: MenuItem[] = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  {
    label: "Our Services",
    href: "/services",
    subItems: [
      { label: "Residential Cleaning", href: "/services/residential" },
      { label: "Commercial Cleaning", href: "/services/commercial" },
      { label: "Deep Cleaning", href: "/services/deep-cleaning" },
      { label: "Move-in/Move-out", href: "/services/move-cleaning" },
      { label: "Post Construction", href: "/services/construction-cleanup" }
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
