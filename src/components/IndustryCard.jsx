import { motion } from 'framer-motion';

const IndustryCard = ({ industry, index }) => (
  <motion.div
    key={index}
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{
      duration: 0.5,
      delay: index * 0.1,
      type: "spring",
      stiffness: 100
    }}
    viewport={{ once: true }}
    whileHover={{
      y: -5,
      boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
    }}
    className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border-t-4 border-blue-500"
  >
    <motion.div
      whileHover={{ rotate: 5, scale: 1.1 }}
      className="text-5xl mb-4 inline-block"
    >
      {industry.icon}
    </motion.div>
    <h3 className="text-2xl font-bold text-gray-900 mb-3">{industry.name}</h3>
    <p className="text-gray-600 mb-6">{industry.description}</p>
    <div className="space-y-3">
      {industry.features.map((feature, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, x: -10 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: i * 0.05 + 0.3 }}
          viewport={{ once: true }}
          className="flex items-start"
        >
          <svg className="w-5 h-5 text-blue-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
          <span className="text-gray-700">{feature}</span>
        </motion.div>
      ))}
    </div>
  </motion.div>
);

export default IndustryCard;
