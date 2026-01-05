import { motion } from 'framer-motion';

const FeatureCard = ({ item, index }) => (
  <motion.li
    key={index}
    initial={{ x: -10 }}
    whileInView={{ x: 0 }}
    transition={{ delay: index * 0.1 }}
    viewport={{ once: true }}
    className="flex items-start"
  >
    <svg className="h-5 w-5 text-green-500 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
    </svg>
    <span className="text-gray-700">{item}</span>
  </motion.li>
);

export default FeatureCard;
