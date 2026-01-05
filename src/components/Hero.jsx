import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { AnimatedBackground } from './';

const industries = [
  "Cement Industry",
  "Mining Sector",
  "Power Plants",
  "Paper Manufacturing",
  "Fertilizers Production",
  "Process Industries"
];

const Hero = () => {
  const [loaded, setLoaded] = useState(false);
  const [currentIndustry, setCurrentIndustry] = useState(0);

  useEffect(() => {
    setLoaded(true);

    const interval = setInterval(() => {
      setCurrentIndustry((prev) => (prev + 1) % industries.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-screen flex items-center justify-center bg-gradient-to-r from-blue-900 to-blue-800 overflow-hidden">
      <AnimatedBackground />

      <div className="container mx-auto px-4 z-10">
        <div className={`max-w-4xl mx-auto text-center transition-all duration-1000 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
          >
            Sales Support & <span className="text-yellow-300">Market Entry</span> Solutions for India
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto"
          >
            Navigating India's booming industrial markets for global businesses
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 mb-8 text-left border-l-4 border-yellow-400"
          >
            <p className="text-white mb-4" aria-live="polite">
              Do your products have applications in{' '}
              <span className="font-bold text-yellow-300 transition-all duration-500">
                {industries[currentIndustry]}
              </span>?
            </p>
            <p className="text-blue-100">
              As one of the fastest-growing economies with huge market demand, India offers tremendous opportunities in engineering and manufacturing sectors.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.9 }}
            className="flex flex-col sm:flex-row justify-center gap-4"
          >
            <Link
              to="/contact"
              className="bg-yellow-400 hover:bg-yellow-300 text-blue-900 font-bold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg focus:outline-none focus:ring-4 focus:ring-yellow-300"
            >
              Explore Indian Market
            </Link>
            <Link
              to="/services"
              className="bg-transparent hover:bg-white hover:bg-opacity-20 text-white font-bold py-3 px-8 rounded-full border-2 border-white transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-white"
            >
              Our Market Entry Services
            </Link>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1.2 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
      >
        <div className="animate-bounce">
          <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
          <p className="text-white text-xs mt-2">Scroll to explore</p>
        </div>
      </motion.div>

      <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 hidden md:flex gap-2">
        {industries.map((industry, index) => (
          <button
            key={industry}
            onClick={() => setCurrentIndustry(index)}
            className={`w-3 h-3 rounded-full transition-all ${currentIndustry === index ? 'bg-yellow-400 w-6' : 'bg-white bg-opacity-30'}`}
            aria-label={`Show ${industry} content`}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;