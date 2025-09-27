import type { ServiceData } from './types'

export const defaultServicesData: ServiceData[] = [
  {
    id: 1,
    image: "https://images.pexels.com/photos/713297/pexels-photo-713297.jpeg",
    title: "Office Cleaning",
    description:
      "Maintain a pristine and productive workspace with our meticulous office cleaning services. We cover everything from dusting and sanitizing surfaces to trash removal and floor care, ensuring a healthy environment for your employees and clients.",
    href: "/services/office"
  },
  {
    id: 2,
    image: "https://images.pexels.com/photos/6195288/pexels-photo-6195288.jpeg",
    title: "Retail & Plaza Cleaning",
    description:
      "First impressions matter. Our retail and plaza cleaning services ensure your commercial spaces are spotless and inviting, enhancing customer experience and reflecting your brand's commitment to quality and hygiene.",
    href: "/services/retail-plaza"
  },
  {
    id: 3,
    image:
      "https://images.pexels.com/photos/38325/vacuum-cleaner-carpet-cleaner-housework-housekeeping-38325.jpeg",
    title: "Carpet Cleaning",
    description:
      "Extend the life of your carpets and improve indoor air quality with our professional carpet cleaning. We use advanced techniques to remove deep-seated dirt, stains, and allergens, leaving your carpets fresh and revitalized.",
    href: "/services/carpet"
  }
];
