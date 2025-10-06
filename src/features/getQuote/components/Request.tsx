import React, { useState } from 'react';
import { type FormData, formFields } from '../types';
import { useEmailSender } from '@hooks/useEmailSender';
import { isValidEmail, isValidPhone, isWithinLimit } from '@utils/validators';
import { getServiceLabel } from '@utils/serviceLabel';
import AnimatedCard from '@components/common/AnimatedCard';
import { CheckCircle } from 'lucide-react';

const initialFormData: FormData = {
  name: '',
  phoneNumber: '',
  email: '',
  service: '',
  message: '',
  timestamp: '',
  source: '',
  honeypot: '',
};

interface RequestProps {
  title?: string;
}

const Request: React.FC<RequestProps> = ({ title = 'Request a Free Quote' }) => {
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [submitted, setSubmitted] = useState(false);
  const { sendQuoteEmail, isSending, error } = useEmailSender();

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validate = (): boolean => {
    const newErrors: Partial<FormData> = {};

    formFields.forEach(({ name, required }) => {
      const value = formData[name];

      if (required && !value) {
        newErrors[name] = 'This field is required';
      }

      if (name === 'email' && value && !isValidEmail(value)) {
        newErrors.email = 'Please enter a valid email address';
      }

      if (name === 'phoneNumber' && value && !isValidPhone(value)) {
        newErrors.phoneNumber = 'Please enter a valid phone number';
      }

      if (name === 'message' && value && !isWithinLimit(value, 500)) {
        newErrors.message = 'Message must be under 500 characters';
      }
    });

    if (formData.honeypot) {
      newErrors.honeypot = 'Spam detected';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async () => {
    if (!validate()) return;

    const enrichedData: FormData = {
      ...formData,
      service: getServiceLabel(formData.service),
      timestamp: new Date().toISOString(),
      source: window.location.pathname,
    };

    try {
      await sendQuoteEmail(enrichedData);
      setSubmitted(true);
      setFormData(initialFormData);
      setTimeout(() => setSubmitted(false), 5000);
    } catch {
      alert('Failed to send quote request.');
    }
  };

  return (
    <div className="rounded-xl shadow-2xl">
      <AnimatedCard>
        <div className="mb-8 flex flex-col items-center justify-center">
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-4">{title}</h2>
          <div className="w-16 h-1 bg-blue-500 mb-6"></div>
        </div>

        {submitted && (
          <div className="bg-gradient-to-r from-green-50 to-emerald-50 border-2 border-green-300 rounded-2xl p-6 mb-8 flex items-center gap-4">
            <div className="bg-green-500 p-3 rounded-full">
              <CheckCircle className="w-6 h-6 text-white" />
            </div>
            <div>
              <p className="font-bold text-green-900 text-lg">Quote request sent successfully!</p>
              <p className="text-green-700">
                We'll contact you within 24 hours to discuss your needs.
              </p>
            </div>
          </div>
        )}

        <form className="space-y-6">
          {/* Honeypot field */}
          <input
            type="text"
            name="honeypot"
            value={formData.honeypot}
            onChange={handleInputChange}
            style={{ display: 'none' }}
            tabIndex={-1}
            autoComplete="off"
          />

          {formFields.map((field) => {
            const { name, label, required } = field;

            const commonProps = {
              name,
              value: formData[name],
              onChange: handleInputChange,
              className:
                'w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-500 focus:border-transparent',
            };

            return (
              <div key={name}>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {label} {required && <span className="text-red-500">*</span>}
                </label>

                {field.type === 'textarea' ? (
                  <textarea
                    {...commonProps}
                    placeholder={field.placeholder}
                    className={`${commonProps.className} resize-none min-h-[120px]`}
                  />
                ) : field.type === 'select' ? (
                  <select {...commonProps}>
                    <option value="">Select a service...</option>
                    {field.options.map(({ value, label }) => (
                      <option key={value} value={value}>
                        {label}
                      </option>
                    ))}
                  </select>
                ) : (
                  <input {...commonProps} type={field.type} placeholder={field.placeholder} />
                )}

                {errors[name] && <p className="text-red-600 text-sm mt-1">{errors[name]}</p>}
              </div>
            );
          })}

          <button
            type="button"
            onClick={handleSubmit}
            disabled={isSending}
            className="w-full font-bold block mx-auto bg-gradient-to-br from-blue-500 to-sky-300 border-blue-400 text-white px-6 py-3 rounded-2xl hover:border-2 disabled:opacity-50"
          >
            {isSending ? 'Sending...' : 'SUBMIT'}
          </button>
        </form>
      </AnimatedCard>
    </div>
  );
};

export default Request;
