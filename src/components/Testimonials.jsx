import { motion } from 'framer-motion';
import Button from './Button';
import { testimonials } from '../data/testimonials';
import { TestimonialCard } from './';

const Testimonials = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-extrabold section-heading text-gray-900">
            Success Stories from <span className="text-blue-600">Indian Businesses</span>
          </h2>
          <p className="lead max-w-2xl text-gray-600 mx-auto">
            How we've helped companies navigate the Indian business landscape
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} index={index} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-xl p-8 shadow-lg text-white">
            <h3 className="font-bold section-heading">Ready to Grow Your Business in India?</h3>
            <p className="lead text-blue-100 mb-6 max-w-2xl mx-auto">
              Let us help you navigate the Indian market with confidence and strategic insight.
            </p>
            <Button to="/contact" className="bg-yellow-400 hover:bg-yellow-300 text-blue-900 font-bold px-8 transform hover:scale-105 shadow-lg focus-visible:ring-yellow-300">
              Get in Touch
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
