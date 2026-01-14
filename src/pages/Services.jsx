import { motion } from 'framer-motion';
import { services } from '../data/services';
import { ServiceCard, CtaSection } from '../components';

const Services = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h1 className="font-bold section-heading text-gray-900">
            Our <span className="text-blue-600">Core Services</span>
          </h1>
          <p className="lead text-gray-600 max-w-3xl mx-auto">
            Comprehensive market entry and business development solutions tailored for the Indian industrial sector
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} index={index} />
          ))}
        </div>

        <CtaSection
          title="Ready to Enter the Indian Market?"
          subtitle="Let us help you navigate India's complex industrial landscape with confidence."
          buttonText="Get Started Today"
          buttonLink="/contact"
        />
      </div>
    </section>
  );
};

export default Services;
