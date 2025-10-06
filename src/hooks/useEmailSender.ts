import { send } from '@emailjs/browser';
import { useMutation } from '@tanstack/react-query';
import { EMAIL_CONFIG } from '../config/email';
import { type FormData } from '@features/getQuote/types';
import { isValidEmail, isValidPhone, isWithinLimit } from '@utils/validators';
import * as Sentry from '@sentry/react'; // Optional: swap with PostHog if preferred

const { publicKey, serviceId, templateId } = EMAIL_CONFIG;

const validateFormData = (data: FormData): boolean => {
  return (
    isValidEmail(data.email) &&
    isValidPhone(data.phoneNumber) &&
    isWithinLimit(data.message, 500) &&
    !data.honeypot // honeypot must be empty
  );
};

export const useEmailSender = () => {
  const mutation = useMutation({
    mutationFn: async (formData: FormData) => {
      if (!validateFormData(formData)) {
        throw new Error('Validation failed: Invalid form data.');
      }

      const enrichedData = {
        ...formData,
        timestamp: new Date().toISOString(),
        source: window.location.pathname,
      };

      await send(serviceId, templateId, enrichedData, publicKey);
    },
    onSuccess: () => {
      console.info('Quote email sent successfully.');
    },
    onError: (error) => {
      console.error('Failed to send quote email:', error);
      Sentry.captureException(error); // Or use posthog.capture("email_error", { error })
    },
  });

  return {
    sendQuoteEmail: mutation.mutateAsync,
    isSending: mutation.isPending,
    error: mutation.error,
  };
};
