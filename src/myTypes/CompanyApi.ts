import type{ ContactInfo } from './types' 
export const defaultBrandName: string = "Reyes Maintenance";
export const defaultLastName: string = "Service Inc"
export const defaultFullName: string = `${defaultBrandName} ${defaultLastName}`;

export const defaultContactInfo: ContactInfo = {
  address: "52 Antares Dr Suite #203, Ottawa, ON K2E 7V1",
  email: "info@reyesms.ca",
  phone: "(613) 266-4914",
  socialLinks: {
    facebook: "https://www.facebook.com/profile.php?id=100064625636217"
  },
  webSite: "www.reyesms.ca",
  companyDescription:
    `${defaultFullName}. is a locally owned company ` +
    "with over 15 years of experience, delivering comprehensive commercial cleaning and maintenance " +
    "services in Ottawa.",
  companyCuenta:
    "Discover our services or contact us to start now. " +
    "Always Satisfaction Guaranteed!"
};
