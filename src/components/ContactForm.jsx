import { motion } from 'framer-motion';
import { useState } from 'react';

const DEMO_MODE = true; // Keep demo mode enabled to indicate frontend-only form

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const validateField = (name, value) => {
    let error = '';
    if (name === 'name' && !value.trim()) error = 'Name is required.';
    if (name === 'email') {
      if (!value.trim()) error = 'Email is required.';
      else if (!emailRegex.test(value)) error = 'Enter a valid email address.';
    }
    if (name === 'message' && !value.trim()) error = 'Message is required.';
    return error;
  };

  const validateForm = () => {
    const nextErrors = {};
    ['name', 'email', 'message'].forEach((field) => {
      const err = validateField(field, formData[field]);
      if (err) nextErrors[field] = err;
    });
    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // live-validate single field
    setErrors(prev => ({ ...prev, [name]: validateField(name, value) }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (DEMO_MODE) {
      // Do not send anywhere in demo mode; show client-side validation only
      validateForm();
      setIsSubmitting(false);
      return;
    }

    if (!validateForm()) return;

    setIsSubmitting(true);
    // Real submission would happen here (API call)
    // For now, simulate briefly and then reset
    setTimeout(() => {
      setIsSubmitting(false);
      setFormData({ name: '', email: '', phone: '', message: '' });
      setErrors({});
    }, 1000);
  };

  const inputBase = 'w-full px-4 py-3 border rounded-lg outline-none transition-all duration-300';

  const inputClass = (field) => {
    const hasError = errors[field];
    return `${inputBase} ${hasError ? 'border-red-500 focus:ring-2 focus:ring-red-200' : 'border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500'}`;
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: 0.4 }}
      viewport={{ once: true }}
      className="lg:w-2/3 bg-white rounded-xl shadow-lg p-8"
    >
      <h3 className="text-2xl font-bold text-gray-900 mb-3">Send Us a Message</h3>

      {DEMO_MODE && (
        <div className="mb-4 bg-yellow-50 border-l-4 border-yellow-400 text-yellow-800 px-4 py-3 rounded">
          <strong>Frontend Demo - Form submission disabled.</strong>
          <div className="text-sm">This form is for demonstration only; submissions are not sent.</div>
        </div>
      )}

      <form onSubmit={handleSubmit} noValidate>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div>
            <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Your Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              aria-invalid={errors.name ? 'true' : 'false'}
              aria-describedby={errors.name ? 'name-error' : undefined}
              className={inputClass('name')}
              placeholder="Mohit Kumar"
            />
            {errors.name && <p id="name-error" className="text-sm text-red-600 mt-2">{errors.name}</p>}
          </div>
          <div>
            <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email Address</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              aria-invalid={errors.email ? 'true' : 'false'}
              aria-describedby={errors.email ? 'email-error' : undefined}
              className={inputClass('email')}
              placeholder="mohit@example.com"
            />
            {errors.email && <p id="email-error" className="text-sm text-red-600 mt-2">{errors.email}</p>}
          </div>
        </div>

        <div className="mb-6">
          <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">Phone Number</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className={`${inputBase} border-gray-300`}
            placeholder="+91 98765 XXXXX"
          />
        </div>

        <div className="mb-6">
          <label htmlFor="message" className="block text-gray-700 font-medium mb-2">Your Message</label>
          <textarea
            id="message"
            name="message"
            rows="5"
            value={formData.message}
            onChange={handleChange}
            aria-invalid={errors.message ? 'true' : 'false'}
            aria-describedby={errors.message ? 'message-error' : undefined}
            className={inputClass('message')}
            placeholder="Tell us about your project..."
          ></textarea>
          {errors.message && <p id="message-error" className="text-sm text-red-600 mt-2">{errors.message}</p>}
        </div>

        <button
          type="submit"
          disabled={DEMO_MODE || isSubmitting}
          className={`w-full ${DEMO_MODE || isSubmitting ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700'} text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 transform ${!DEMO_MODE ? 'hover:scale-105' : ''}`}
          aria-disabled={DEMO_MODE || isSubmitting}
        >
          {DEMO_MODE ? 'Demo — Submission Disabled' : isSubmitting ? 'Sending...' : 'Send Message'}
        </button>
      </form>
    </motion.div>
  );
};

export default ContactForm;
