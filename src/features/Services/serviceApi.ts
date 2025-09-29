import type { ServiceData, CleaningServicesData } from "./types";

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

export const cleaningData: CleaningServicesData = 
{
  "services": [
    {
      "title": "Office Cleaning",
      "description": "Ensure a productive and healthy environment for your team. Our detailed office cleaning services are designed to maintain professionalism and hygiene throughout your workspace.",
      "specificTasks": [
        "Dusting and polishing all surfaces",
        "Vacuuming and mopping floors",
        "Sanitizing restrooms and kitchens",
        "Trash removal",
        "Interior glass cleaning",
        "Disinfection of high-touch points (door handles, light switches, keyboards)"
      ],
      "frequencyOptions": [
        "Daily",
        "Weekly",
        "Bi-weekly",
        "Monthly",
        "Custom schedules tailored to your operational needs and peak hours"
      ],
      "keyBenefits": [
        "Promotes a healthier work environment",
        "Boosts employee morale and productivity",
        "Projects a professional image to clients and visitors",
        "Extends the life of office furnishings"
      ]
    },
    {
      "title": "Retail & Plaza Cleaning",
      "description": "Create an inviting and immaculate space that reflects your brand's commitment to quality. Our retail and plaza cleaning services focus on enhancing customer experience and ensuring safety.",
      "specificTasks": [
        "Comprehensive floor care (sweeping, mopping, buffing, polishing)",
        "Window cleaning",
        "Sanitizing fitting rooms and common areas",
        "Cleaning display cases and shelves",
        "Immediate spill response",
        "Entrance and facade maintenance"
      ],
      "frequencyOptions": [
        "High-frequency daily cleaning for busy retail",
        "Weekly",
        "Bi-weekly",
        "Special event cleanups to prepare for sales or promotions"
      ],
      "keyBenefits": [
        "Elevates customer satisfaction",
        "Strengthens positive brand perception",
        "Provides a safe and aesthetically pleasing shopping environment",
        "Can contribute to increased sales"
      ]
    },
    {
      "title": "Carpet Cleaning",
      "description": "Revitalize your carpets and improve indoor air quality with our specialized cleaning solutions. We target deep-seated dirt and allergens to restore the freshness and appearance of your flooring.",
      "specificTasks": [
        "Pre-treatment for stubborn stains",
        "Deep steam cleaning or low-moisture cleaning",
        "Odor removal",
        "Application of protective treatments to resist future soiling",
        "Rapid drying methods to minimize downtime"
      ],
      "frequencyOptions": [
        "Quarterly",
        "Bi-annually",
        "Annually",
        "On-demand for emergency spills and high-traffic areas requiring immediate attention"
      ],
      "keyBenefits": [
        "Extends the lifespan of your carpets",
        "Significantly improves indoor air quality by removing allergens and pollutants",
        "Eliminates unpleasant odors",
        "Restores a fresh and vibrant look to your premises"
      ]
    }
  ]
}

