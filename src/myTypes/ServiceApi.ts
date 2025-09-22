import type{ ContactInfo } from './types' 
export const defaultBrandName: string = "Reyes Maintenance";
export const defaultLastName: string = "Service Inc"

export const defaultContactInfo: ContactInfo = {
  address: "52 Antares Dr Suite #203, Ottawa, ON K2E 7V1",
  email: "info@reyesms.ca",
  phone: "(613) 266-4914",
  socialLinks: {
    facebook: "https://www.facebook.com/profile.php?id=100064625636217"
  },
  webSite: "www.reyesms.ca",
  companyDescription:
    ` With over 30 years of experience, ${defaultBrandName} is a locally owned and ` +
    "operated professional cleaning service for commercial and janitorial " +
    "services across the Ottawa region.",
  companyCuenta:
    "Explore our various services or contact us today to get started." +
    " Customer Satisfaction is our guarantee!"
};
