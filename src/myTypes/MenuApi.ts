import type { MenuItem } from "@components/layout/types";

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
      { label: "Spring / Deep Cleaning", href: "/services/spring-deep" },
      {
        label: "Minor Renovations & Demolitions",
        href: "/services/renovation"
      },
      {
        label: "Light Maintenance and Bulb Replacement",
        href: "/services/light-maintenance"
      }
    ]
  },
  { label: "Contact Us", href: "/contact" }
];
