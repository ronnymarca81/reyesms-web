export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}
export interface FAQAccordionProps {
  title?: string;
  subtitle?: string;
  faqs: FAQItem[];
}
