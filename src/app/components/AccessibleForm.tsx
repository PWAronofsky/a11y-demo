'use client';

import { useState } from 'react';

interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
  contactMethod: string;
  newsletter: boolean;
}

export function AccessibleForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    message: '',
    contactMethod: '',
    newsletter: false,
  });
  const [submittedData, setSubmittedData] = useState<FormData | null>(null);
  const [errors, setErrors] = useState<Partial<FormData>>({});

  const formatPhoneNumber = (value: string) => {
    // Remove all non-digit characters
    const cleaned = value.replace(/\D/g, '');
    
    // Format as XXX-XXX-XXXX
    const match = cleaned.match(/^(\d{0,3})(\d{0,3})(\d{0,4})$/);
    if (match) {
      const formatted = [match[1], match[2], match[3]]
        .filter(Boolean)
        .join('-');
      return formatted;
    }
    return value;
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatPhoneNumber(e.target.value);
    setFormData(prev => ({ ...prev, phone: formatted }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: Partial<FormData> = {};

    // Validate required fields
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }
    if (!formData.contactMethod) {
      newErrors.contactMethod = 'Please select a contact method';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setSubmittedData(formData);
    setErrors({});
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="bg-gray-100 dark:bg-gray-900 p-4 rounded" aria-labelledby="form-title">
        <h3 id="form-title" className="text-lg font-semibold mb-4">Contact Information</h3>
        
        <div className="mb-4">
          <label htmlFor="name" className="block mb-2 font-medium text-gray-900 dark:text-gray-100">
            Full Name <span className="text-red-500" aria-hidden="true">*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
            required
            aria-required="true"
            className="w-full p-2 border border-gray-300 rounded bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
            aria-describedby="name-error"
          />
          {errors.name && (
            <div id="name-error" className="text-red-500 text-sm mt-1" role="alert" aria-live="polite">
              {errors.name}
            </div>
          )}
        </div>

        <div className="mb-4">
          <label htmlFor="email" className="block mb-2 font-medium text-gray-900 dark:text-gray-100">
            Email Address <span className="text-red-500" aria-hidden="true">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
            required
            aria-required="true"
            className="w-full p-2 border border-gray-300 rounded bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
            aria-describedby="email-error"
          />
          {errors.email && (
            <div id="email-error" className="text-red-500 text-sm mt-1" role="alert" aria-live="polite">
              {errors.email}
            </div>
          )}
        </div>

        <div className="mb-4">
          <label htmlFor="phone" className="block mb-2 font-medium text-gray-900 dark:text-gray-100">
            Phone Number
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handlePhoneChange}
            maxLength={12}
            className="w-full p-2 border border-gray-300 rounded bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
            aria-describedby="phone-format"
          />
          <div id="phone-format" className="text-gray-500 text-sm mt-1">
            Format: 123-456-7890
          </div>
        </div>

        <div className="mb-4">
          <label htmlFor="message" className="block mb-2 font-medium text-gray-900 dark:text-gray-100">
            Message <span className="text-red-500" aria-hidden="true">*</span>
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
            required
            aria-required="true"
            rows={4}
            className="w-full p-2 border border-gray-300 rounded bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
            aria-describedby="message-error"
          ></textarea>
          {errors.message && (
            <div id="message-error" className="text-red-500 text-sm mt-1" role="alert" aria-live="polite">
              {errors.message}
            </div>
          )}
        </div>

        <div className="mb-4">
          <fieldset className="border border-gray-300 rounded p-4">
            <legend className="font-medium text-gray-900 dark:text-gray-100 px-2">
              Preferred Contact Method <span className="text-red-500" aria-hidden="true">*</span>
            </legend>
            <div className="space-y-2">
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="contact-method"
                  value="email"
                  checked={formData.contactMethod === 'email'}
                  onChange={(e) => setFormData(prev => ({ ...prev, contactMethod: e.target.value }))}
                  required
                  aria-required="true"
                />
                Email
              </label>
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="contact-method"
                  value="phone"
                  checked={formData.contactMethod === 'phone'}
                  onChange={(e) => setFormData(prev => ({ ...prev, contactMethod: e.target.value }))}
                  required
                  aria-required="true"
                />
                Phone
              </label>
            </div>
            {errors.contactMethod && (
              <div className="text-red-500 text-sm mt-1" role="alert" aria-live="polite">
                {errors.contactMethod}
              </div>
            )}
          </fieldset>
        </div>

        <div className="mb-4">
          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              name="newsletter"
              checked={formData.newsletter}
              onChange={(e) => setFormData(prev => ({ ...prev, newsletter: e.target.checked }))}
            />
            <span>Subscribe to our newsletter</span>
          </label>
        </div>

        <button
          type="submit"
          className="bg-blue-500 dark:bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          Submit
        </button>
      </form>

      {submittedData && (
        <div className="mt-8 bg-gray-100 dark:bg-gray-900 p-4 rounded" role="region" aria-label="Submitted Information">
          <h3 className="text-lg font-semibold mb-4">Submitted Information</h3>
          <dl className="grid grid-cols-1 gap-2">
            <div className="grid grid-cols-2 gap-2">
              <dt className="font-medium">Name:</dt>
              <dd>{submittedData.name}</dd>
            </div>
            <div className="grid grid-cols-2 gap-2">
              <dt className="font-medium">Email:</dt>
              <dd>{submittedData.email}</dd>
            </div>
            {submittedData.phone && (
              <div className="grid grid-cols-2 gap-2">
                <dt className="font-medium">Phone:</dt>
                <dd>{submittedData.phone}</dd>
              </div>
            )}
            <div className="grid grid-cols-2 gap-2">
              <dt className="font-medium">Message:</dt>
              <dd>{submittedData.message}</dd>
            </div>
            <div className="grid grid-cols-2 gap-2">
              <dt className="font-medium">Preferred Contact Method:</dt>
              <dd>{submittedData.contactMethod}</dd>
            </div>
            <div className="grid grid-cols-2 gap-2">
              <dt className="font-medium">Newsletter Subscription:</dt>
              <dd>{submittedData.newsletter ? 'Yes' : 'No'}</dd>
            </div>
          </dl>
        </div>
      )}
    </div>
  );
} 