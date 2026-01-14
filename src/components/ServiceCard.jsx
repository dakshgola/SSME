import { motion } from 'framer-motion';
import { useState } from 'react';
import Button from './Button';
import PropTypes from 'prop-types';

const ServiceCard = ({ service, index }) => {
  const [hovered, setHovered] = useState(false);
  const [expanded, setExpanded] = useState(false);

  const toggleExpand = () => {
    setExpanded(!expanded);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.5,
        delay: index * 0.1,
        type: "spring",
        stiffness: 100
      }}
      viewport={{ once: true }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={`bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 ${hovered ? 'transform -translate-y-2 shadow-xl' : ''}`}
    >
      <div
        className={`p-8 cursor-pointer ${expanded ? 'pb-4' : ''}`}
        onClick={toggleExpand}
      >
        <div className="flex items-start">
          <motion.div
            whileHover={{ rotate: 10, scale: 1.1 }}
            className="text-4xl mr-6 transition-transform duration-300"
          >
            {service.icon}
          </motion.div>
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
            <p className="text-gray-600">{service.description}</p>
          </div>
        </div>
      </div>

      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={{
          height: expanded ? 'auto' : 0,
          opacity: expanded ? 1 : 0
        }}
        transition={{
          duration: 0.4,
          ease: "easeInOut"
        }}
        className="overflow-hidden"
      >
        <div className="px-8 pb-6">
          <ul className="space-y-3">
            {service.features.map((feature, i) => (
              <motion.li
                key={i}
                initial={{ x: -10, opacity: 0 }}
                animate={{
                  x: expanded ? 0 : -10,
                  opacity: expanded ? 1 : 0
                }}
                transition={{
                  delay: 0.1 + i * 0.05,
                  duration: 0.3
                }}
                className="flex items-start"
              >
                <svg
                  className="flex-shrink-0 h-5 w-5 text-blue-500 mt-0.5 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700">{feature}</span>
              </motion.li>
            ))}
          </ul>
          <div className="mt-4">
            <Button variant="link" className="inline-flex items-center">
              Learn More
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Button>
          </div>
        </div>
      </motion.div>

      <motion.div
        className={`h-1 bg-gradient-to-r from-blue-500 to-blue-300`}
        initial={{ width: 0 }}
        animate={{ width: (hovered || expanded) ? '100%' : '0%' }}
        transition={{ duration: 0.4 }}
      />
    </motion.div>
  );
};

export default ServiceCard;

ServiceCard.propTypes = {
  service: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string,
    features: PropTypes.arrayOf(PropTypes.string),
    icon: PropTypes.node,
  }).isRequired,
  index: PropTypes.number,
};
