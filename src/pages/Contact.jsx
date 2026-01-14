import { motion } from 'framer-motion';
import { ContactInfo, ContactForm } from '../components';

const Contact = () => (
  <section className="py-20 bg-gray-50">
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Contact <span className="text-blue-600">Us</span>
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Have questions or want to discuss your project? Reach out to our team.
        </p>
      </motion.div>

      <div className="flex flex-col lg:flex-row gap-12">
        <ContactInfo />
        <ContactForm />
      </div>
    </div>
  </section>
);

export default Contact;
