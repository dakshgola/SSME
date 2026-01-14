import { motion } from 'framer-motion';
import { useState } from 'react';
import { mission, vision } from '../data/about';

const About = () => {
  const [activeTab, setActiveTab] = useState('mission');

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            About <span className="text-blue-600">SSME Bizpro</span>
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Your trusted partner for navigating the Indian industrial market. We specialize in connecting global technology with local opportunities, driving growth and innovation.
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row items-center gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="lg:w-1/2"
          >
            <img src="/industries.png" alt="Indian Industrial Sectors" loading="lazy" decoding="async" className="rounded-xl shadow-lg" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="lg:w-1/2"
          >
            <div className="bg-gray-50 rounded-xl p-8">
              <div className="flex border-b mb-6">
                <button
                  className={`px-6 py-3 font-medium text-lg transition-colors duration-300 ${activeTab === 'mission' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500'}`}
                  onClick={() => setActiveTab('mission')}
                >
                  Our Mission
                </button>
                <button
                  className={`px-6 py-3 font-medium text-lg transition-colors duration-300 ${activeTab === 'vision' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500'}`}
                  onClick={() => setActiveTab('vision')}
                >
                  Our Vision
                </button>
              </div>

              {activeTab === 'mission' ? (
                <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">{mission.title}</h2>
                  <p className="text-gray-600 mb-4">{mission.description}</p>
                  <ul className="space-y-2">
                    {mission.points.map((point, i) => (
                      <li key={i} className="flex items-start">
                        <svg className="flex-shrink-0 h-5 w-5 text-blue-500 mt-1 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-700">{point}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ) : (
                <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">{vision.title}</h2>
                  <p className="text-gray-600">{vision.description}</p>
                </motion.div>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
