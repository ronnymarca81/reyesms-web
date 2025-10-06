import { send } from '@emailjs/browser';
import { type FormData } from '@features/getQuote/types';
import { EMAIL_CONFIG } from '../config/email';

const { publicKey, serviceId, templateId } = EMAIL_CONFIG;

export const useEmailSender = () => {
  const sendQuoteEmail = async (formData: FormData): Promise<void> => {
    try {
      const enrichedData = {
        ...formData,
        timestamp: new Date().toISOString(),
        source: window.location.pathname,
      };

      await send(serviceId, templateId, enrichedData, publicKey);
      console.info('Quote email sent successfully.');
    } catch (error) {
      console.error('Failed to send quote email:', error);
      throw error; // Optional: bubble up to show toast or alert
    }
  };

  return { sendQuoteEmail };
};
