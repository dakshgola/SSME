import { motion } from 'framer-motion';
import Button from './Button';

const CtaSection = ({ title, subtitle, buttonText, buttonLink }) => (
  <section className="py-20 bg-gradient-to-r from-blue-800 to-blue-900 text-white">
    <div className="container mx-auto px-4 text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <motion.h2
          animate={{
            scale: [1, 1.02, 1],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="text-3xl md:text-4xl font-bold mb-6"
        >
          {title}
        </motion.h2>
        <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
          {subtitle}
        </p>
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="inline-block"
        >
          <Button to={buttonLink} className="bg-yellow-400 hover:bg-yellow-300 text-blue-900 font-bold px-8 shadow-lg">
            {buttonText}
          </Button>
        </motion.div>
      </motion.div>
    </div>
  </section>
);

export default CtaSection;
