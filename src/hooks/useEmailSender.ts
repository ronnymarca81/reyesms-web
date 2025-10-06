// src/hooks/useEmailSender.ts
import emailjs from "emailjs-com";
import { type FormData } from "@features/getQuote/types";
import { EMAIL_CONFIG  } from "../config/email";

const { publicKey, serviceId, templateId } = EMAIL_CONFIG;


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
