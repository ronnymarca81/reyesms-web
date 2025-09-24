interface FAQItem {
  id: string;
  question: string;
  answer: string;
}
export interface FAQAccordionProps {
  title?: string;
  subtitle?: string;
  faqs: FAQItem[];
}


export const faqData: FAQItem[] = [
  {
    id: "1",
    question: "What types of commercial spaces do you clean?",
    answer:
      "We provide comprehensive cleaning services for a wide variety of commercial spaces including offices, retail stores, restaurants, medical facilities, warehouses, educational institutions, and industrial facilities. Our team is trained to handle the unique cleaning requirements of each type of business environment."
  },
  {
    id: "2",
    question: "How much does commercial cleaning cost?",
    answer:
      "Our pricing is customized based on several factors including the size of your space, frequency of service, specific cleaning requirements, and location. We offer competitive rates and provide detailed quotes after a free consultation and walkthrough of your facility. Contact us today for a personalized estimate."
  },
  {
    id: "3",
    question: "Do I have to sign a long-term commercial cleaning contract?",
    answer:
      "We offer flexible service agreements to meet your business needs. While we do provide long-term contracts that often come with better rates, we also offer month-to-month services and one-time cleaning options. We believe in earning your trust through quality service rather than binding contracts."
  },
  {
    id: "4",
    question: "Does someone need to be at the business for you to clean?",
    answer:
      "No, you don't need to be present during cleaning. We understand that business operations vary, so we can work around your schedule - whether that's after hours, early morning, or weekends. Our fully insured and bonded team can be trusted with access to your facility, and we follow strict security protocols."
  },
  {
    id: "5",
    question: "How do I pay for your commercial cleaning services?",
    answer:
      "We accept various payment methods for your convenience, including check, ACH bank transfer, and major credit cards. We typically invoice monthly for recurring services, but can accommodate different billing cycles based on your business needs. All payments are processed securely and we provide detailed invoices for your records."
  },
  {
    id: "6",
    question:
      "How is Reyes Maintenence  different from other commercial cleaning services?",
    answer:
      "Reyes Maintenence  stands out through our commitment to exceptional service, eco-friendly cleaning products, highly trained staff, and personalized approach. We use state-of-the-art equipment, maintain comprehensive insurance coverage, and provide consistent quality through detailed checklists and regular supervision. Our focus on building long-term partnerships sets us apart from competitors."
  }
];
