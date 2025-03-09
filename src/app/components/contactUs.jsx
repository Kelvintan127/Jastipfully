import { motion, AnimatePresence } from "framer-motion";
import { FaEnvelope, FaWhatsapp, FaMapMarkerAlt, FaClock } from "react-icons/fa";
import { useState } from "react";

export default function ContactUs() {
  const [focusedField, setFocusedField] = useState(null);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const contactInfo = [
    {
      icon: <FaWhatsapp />,
      title: "WhatsApp",
      value: "+62 812-3456-7890",
      link: "https://wa.me/+6281234567890",
      bgColor: "bg-green-50",
      iconColor: "text-green-500"
    },
    {
      icon: <FaEnvelope />,
      title: "Email",
      value: "jastipfully@gmail.com",
      link: "mailto:jastipfully@gmail.com",
      bgColor: "bg-orange-50",
      iconColor: "text-orange-500"
    },
    {
      icon: <FaMapMarkerAlt />,
      title: "Location",
      value: "Jakarta, Indonesia",
      link: "https://maps.app.goo.gl/CGKCXfG53ZzCHrWi7",
      bgColor: "bg-red-50",
      iconColor: "text-red-500"
    },
    {
      icon: <FaClock />,
      title: "Business Hours",
      value: "09:00 - 18:00 WIB",
      bgColor: "bg-blue-50",
      iconColor: "text-blue-500"
    }
  ];

  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-orange-50 via-white to-orange-50 py-24 w-full">
      <motion.div 
        className="text-center mb-16"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <motion.h2 
          className="text-5xl font-bold bg-gradient-to-r from-orange-600 to-orange-400 inline-block text-transparent bg-clip-text mb-4"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          Contact Us
        </motion.h2>
        <p className="text-gray-600 text-lg">
          Hubungi kami untuk informasi lebih lanjut
        </p>
      </motion.div>

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold text-gray-800">Contact Information</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {contactInfo.map((info, index) => (
                <motion.a 
                  key={info.title}
                  href={info.link}
                  className={`${info.bgColor} group p-6 rounded-2xl hover:shadow-lg transition-all duration-300`}
                  whileHover={{ y: -5, scale: 1.02 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="flex items-start space-x-4">
                    <div className={`w-12 h-12 ${info.bgColor} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform`}>
                      <span className={`text-2xl ${info.iconColor}`}>{info.icon}</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg text-gray-800">{info.title}</h4>
                      <p className="text-gray-600">{info.value}</p>
                    </div>
                  </div>
                </motion.a>
              ))}
            </div>
            
            <motion.div 
              className="w-full h-[300px] rounded-2xl overflow-hidden shadow-lg mt-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3989.400230568598!2d104.60095407536909!3d0.8294679991624913!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMMKwNDknNDYuMSJOIDEwNMKwMzYnMTIuNyJF!5e0!3m2!1sen!2sid!4v1741457215987!5m2!1sen!2sid"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Jastipfully Location"
              />
            </motion.div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold text-gray-800">Send Us a Message</h3>
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              {['name', 'email', 'message'].map((field) => (
                <motion.div
                  key={field}
                  initial={false}
                  animate={{ scale: focusedField === field ? 1.02 : 1 }}
                  className="bg-white rounded-2xl p-6 shadow-sm"
                >
                  <label 
                    htmlFor={field}
                    className="block text-sm font-medium text-gray-600 mb-2"
                  >
                    {field.charAt(0).toUpperCase() + field.slice(1)}
                  </label>
                  {field === 'message' ? (
                    <textarea
                      id={field}
                      value={formData[field]}
                      onChange={(e) => setFormData({ ...formData, [field]: e.target.value })}
                      onFocus={() => setFocusedField(field)}
                      onBlur={() => setFocusedField(null)}
                      rows="4"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none transition-all"
                      required
                    />
                  ) : (
                    <input
                      type={field === 'email' ? 'email' : 'text'}
                      id={field}
                      value={formData[field]}
                      onChange={(e) => setFormData({ ...formData, [field]: e.target.value })}
                      onFocus={() => setFocusedField(field)}
                      onBlur={() => setFocusedField(null)}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none transition-all"
                      required
                    />
                  )}
                </motion.div>
              ))}
              <motion.button
                type="submit"
                className="w-full bg-gradient-to-r from-orange-500 to-orange-400 text-white font-medium px-8 py-4 rounded-xl hover:shadow-lg transition-all"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Send Message
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
