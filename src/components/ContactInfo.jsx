import { motion } from 'framer-motion';
import { contactDetails, businessHours } from '../data/contact';

const ContactInfo = () => (
  <motion.div
    initial={{ opacity: 0, x: -50 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.5, delay: 0.2 }}
    viewport={{ once: true }}
    className="lg:w-1/3 bg-white rounded-xl shadow-lg p-8 h-fit"
  >
    <h3 className="text-2xl font-bold text-gray-900 mb-6">Get in Touch</h3>

    <div className="space-y-6">
      {contactDetails.map((detail, index) => (
        <div key={index} className="flex items-start">
          <div className="bg-blue-100 p-3 rounded-full mr-4">
            <span className="text-xl">{detail.icon}</span>
          </div>
          <div>
            <h4 className="font-bold text-gray-900 mb-1">{detail.title}</h4>
            <p className="text-gray-600" dangerouslySetInnerHTML={{ __html: detail.info }}></p>
          </div>
        </div>
      ))}
    </div>

    <div className="mt-8">
      <h4 className="font-bold text-gray-900 mb-4">Business Hours</h4>
      <div className="space-y-2 text-gray-600">
        {businessHours.map((item, index) => (
          <p key={index} className="flex justify-between">
            <span>{item.day}</span>
            <span>{item.time}</span>
          </p>
        ))}
      </div>
    </div>
  </motion.div>
);

export default ContactInfo;
