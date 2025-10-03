const isDev = import.meta.env.DEV;

export const EMAIL_CONFIG = {
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID,
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY
};

if (
  !EMAIL_CONFIG.serviceId ||
  !EMAIL_CONFIG.templateId ||
  !EMAIL_CONFIG.publicKey
) {
  throw new Error("Missing EmailJS environment variables");
}
if (
  !EMAIL_CONFIG.serviceId ||
  !EMAIL_CONFIG.templateId ||
  !EMAIL_CONFIG.publicKey
) {
  if (isDev) {
    console.warn("⚠️ Missing EmailJS environment variables");
  } else {
    throw new Error("Missing EmailJS environment variables");
  }
}
