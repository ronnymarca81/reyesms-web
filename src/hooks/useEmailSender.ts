// src/hooks/useEmailSender.ts
import emailjs from "emailjs-com";
import { type FormData } from "@features/getQuote/types";
const publicKey = import.meta.env.VITE_EMAIL_PUBLIC_KEY;
const serviceId = import.meta.env.VITE_EMAIL_SERVICE_ID;
const templateId = import.meta.env.VITE_EMAIL_TEMPLATE_ID;


export const useEmailSender = () => {
  const sendQuoteEmail = async (formData: FormData) => {
    const enrichedData = {
      ...formData,
      timestamp: new Date().toISOString(),
      source: window.location.pathname
    };

    return emailjs.send(serviceId, templateId, enrichedData, publicKey);
  };

  return { sendQuoteEmail };
};
