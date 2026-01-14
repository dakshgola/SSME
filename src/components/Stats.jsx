import { useEffect, useRef } from 'react';
import { motion, useInView, animate } from 'framer-motion';

const stats = [
  {
    id: 1,
    value: 50,
    suffix: '+',
    label: 'Happy Clients',
    icon: <svg className="w-8 h-8 mx-auto mb-2 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M15 21a6 6 0 00-9-5.197M15 21a6 6 0 006-6v-1a3 3 0 00-3-3H9a3 3 0 00-3 3v1a6 6 0 006 6z" /></svg>
  },
  {
    id: 2,
    value: 98,
    suffix: '%',
    label: 'Success Rate',
    icon: <svg className="w-8 h-8 mx-auto mb-2 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
  },
  {
    id: 3,
    value: 24,
    suffix: '/7',
    label: 'Support',
    icon: <svg className="w-8 h-8 mx-auto mb-2 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 0a5 5 0 10-7.07 7.071m7.07-7.071l-3.535 3.536m0 0l-3.536-3.535m3.536 3.535l3.536 3.536m-7.07-7.071l-3.536 3.536" /></svg>
  },
];

const Counter = ({ from = 0, to, suffix }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      animate(from, to, {
        duration: 2,
        onUpdate: (latest) => {
          if (ref.current) {
            ref.current.textContent = `${Math.round(latest)}${suffix}`;
          }
        },
      });
    }
  }, [isInView, to, from, suffix]);

  return <span ref={ref} />;
};

const Stats = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className="bg-white py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-blue-50 p-6 rounded-xl shadow-sm hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300"
            >
              {stat.icon}
              <p className="text-4xl font-bold text-blue-600 mb-2">
                <Counter to={stat.value} suffix={stat.suffix} />
              </p>
              <p className="text-gray-600">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
           initial={{ opacity: 0, scale: 0.9 }}
           animate={isInView ? { opacity: 1, scale: 1 } : {}}
           transition={{ duration: 0.5, delay: 0.8 }}
           className="mt-16 bg-gradient-to-r from-blue-600 to-indigo-600 p-8 rounded-xl shadow-lg text-white"
        >
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <div>
              <h2 className="text-2xl font-bold mb-2">Growth</h2>
              <p className="text-blue-100">Year over Year</p>
            </div>
            <div className="text-4xl font-bold mt-4 sm:mt-0">
              <Counter to={127} suffix='%' />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Stats;
