import { motion, AnimatePresence } from "framer-motion";
import { FaEnvelope, FaWhatsapp, FaMapMarkerAlt, FaClock } from "react-icons/fa";
import { useState } from "react";

export default function ContactUs() {
  const [focusedField, setFocusedField] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    city: '',
    district: '',
    importCategory: 'sea',
    quantity: ''
  });

  const contactInfo = [
    {
      icon: <FaWhatsapp />,
      title: "WhatsApp",
      value: "+62 822-9900-5151",
      link: "https://wa.me/+6282299005151?text=Hello,%20Jastipfully!",
      bgColor: "bg-green-50",
      iconColor: "text-green-500"
    },
    {
      icon: <FaEnvelope />,
      title: "Email",
      value: "jastipfully2020@gmail.com",
      link: "mailto:jastipfully2020@gmail.com",
      bgColor: "bg-orange-50",
      iconColor: "text-orange-500"
    },
    {
      icon: <FaMapMarkerAlt />,
      title: "Location",
      value: "APR C/3A Batam, Indonesia",
      link: "https://maps.app.goo.gl/dHVoVD9ayji7xNBi7",
      bgColor: "bg-red-50",
      iconColor: "text-red-500"
    },
    // {
    //   icon: <FaClock />,
    //   title: "Business Hours",
    //   value: "09:00 - 18:00 WIB",
    //   bgColor: "bg-blue-50",
    //   iconColor: "text-blue-500"
    // }
  ];

  return (
    <div id="contact" className="relative overflow-hidden bg-gradient-to-br from-orange-50 via-white to-orange-50 py-24 w-full">
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
                  target={info.link.startsWith('http') ? "_blank" : undefined}
                    rel={info.link.startsWith('http') ? "noopener noreferrer" : undefined}
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
                src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3989.049814495919!2d104.0081750749654!3d1.1245832988646438!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMcKwMDcnMjguNSJOIDEwNMKwMDAnMzguNyJF!5e0!3m2!1sen!2sid!4v1741599857507!5m2!1sen!2sid"
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
            <h3 className="text-2xl font-bold text-gray-800">Send us a Message</h3>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Nama</label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500 py-3 px-4 text-lg"
                  required
                />
              </div>

              <div>
                <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-2">Asal dari Kota</label>
                <input
                  type="text"
                  id="city"
                  value={formData.city}
                  onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                  className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500 py-3 px-4 text-lg"
                  required
                />
              </div>

              <div>
                <label htmlFor="district" className="block text-sm font-medium text-gray-700 mb-2">Asal dari Kecamatan</label>
                <input
                  type="text"
                  id="district"
                  value={formData.district}
                  onChange={(e) => setFormData({ ...formData, district: e.target.value })}
                  className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500 py-3 px-4 text-lg"
                  required
                />
              </div>

              <div>
                <label htmlFor="importCategory" className="block text-sm font-medium text-gray-700 mb-2">Kategori Pengiriman</label>
                <div className="grid grid-cols-2 gap-4">
                  <label className="flex items-center p-4 border rounded-lg cursor-pointer hover:bg-orange-50 transition-colors">
                    <input
                      type="radio"
                      name="importCategory"
                      value="sea"
                      checked={formData.importCategory === 'sea'}
                      onChange={(e) => setFormData({ ...formData, importCategory: e.target.value })}
                      className="h-4 w-4 text-orange-500 focus:ring-orange-500"
                    />
                    <span className="ml-2 text-lg text-gray-900">Sea Shipping</span>
                  </label>
                  <label className="flex items-center p-4 border rounded-lg cursor-pointer hover:bg-orange-50 transition-colors">
                    <input
                      type="radio"
                      name="importCategory"
                      value="air"
                      checked={formData.importCategory === 'air'}
                      onChange={(e) => setFormData({ ...formData, importCategory: e.target.value })}
                      className="h-4 w-4 text-orange-500 focus:ring-orange-500"
                    />
                    <span className="ml-2 text-lg text-gray-900">Air Shipping</span>
                  </label>
                </div>
              </div>

              <div>
                <label htmlFor="quantity" className="block text-sm font-medium text-gray-700 mb-2">Rencana Kuantiti Impor (Berat/Kubikasi)</label>
                <input
                  type="text"
                  id="quantity"
                  value={formData.quantity}
                  onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
                  className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500 py-3 px-4 text-lg"
                  required
                />
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-gradient-to-r from-orange-600 to-orange-400 text-white py-3 px-6 rounded-lg font-semibold hover:from-orange-700 hover:to-orange-500 transition-all duration-300 shadow-md hover:shadow-lg"
                type="submit"
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
