// src/hooks/useEmailSender.ts
import emailjs from "emailjs-com";
import { type FormData } from "@features/getQuote/types";

const SERVICE_ID = "service_5wjvwel";
const TEMPLATE_ID = "template_vzts92k";
const PUBLIC_KEY = "SPvmzo5lI0xSv8BY3";

export const useEmailSender = () => {
  const sendQuoteEmail = async (formData: FormData) => {
    const enrichedData = {
      ...formData,
      timestamp: new Date().toISOString(),
      source: window.location.pathname
    };

    return emailjs.send(SERVICE_ID, TEMPLATE_ID, enrichedData, PUBLIC_KEY);
  };

  return { sendQuoteEmail };
};
