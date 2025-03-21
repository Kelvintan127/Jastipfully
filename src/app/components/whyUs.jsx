import { useState } from "react";
import { FaHeadset, FaTag, FaStore, FaShieldAlt, FaTruck, FaBox } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const whyChooseUs = [
  {
    title: "Layanan Konsultasi Gratis",
    desc: "Kami siap membantu dan memberikan panduan terbaik untuk kebutuhan jastip Anda tanpa biaya tambahan.",
    icon: <FaHeadset />,
  },
  {
    title: "Harga Terjangkau dan Kompetitif",
    desc: "Dapatkan produk dan layanan dengan harga terbaik.",
    icon: <FaTag />,
  },
  {
    title: "Dukungan Dropship & Reseller",
    desc: "Jalankan bisnis dengan mudah tanpa perlu stok barang, kami mendukung sistem dropship dan reseller.",
    icon: <FaStore />,
  },
  {
    title: "Pengiriman Fleksibel",
    desc: "Opsi pengiriman via laut atau udara sesuai kebutuhan.",
    icon: <FaTruck />,
  },
  {
    title: "Ingin Pengiriman Aman?",
    desc: "Tersedia Opsi tambahan packing kayu dan asuransi untuk barang fragile.",
    icon: <FaBox />,
  },
];

export default function WhyUs() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="py-24 px-6 w-full bg-gradient-to-br from-orange-50 via-white to-orange-50"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div 
          className="text-center mb-20"
          initial={{ y: -30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.h2 
            className="text-5xl font-bold bg-gradient-to-r from-orange-600 to-orange-400 inline-block text-transparent bg-clip-text mb-4"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            Why Choose Us?
          </motion.h2>
          <motion.p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Kami menyediakan layanan jastip terbaik dengan berbagai keunggulan
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {whyChooseUs.map(({ title, desc, icon }, index) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ y: -8, scale: 1.02 }}
              onHoverStart={() => setHoveredIndex(index)}
              onHoverEnd={() => setHoveredIndex(null)}
              className={`group relative bg-white rounded-3xl p-8 transition-all duration-500
                ${hoveredIndex === index 
                  ? 'shadow-[0_20px_50px_rgba(249,115,22,0.2)]' 
                  : 'shadow-[0_10px_30px_rgba(0,0,0,0.1)]'}`}
            >
              <motion.div 
                className="w-20 h-20 mb-6 relative"
                animate={{
                  y: hoveredIndex === index ? 5 : 0,
                }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-br from-orange-500 to-orange-400 rounded-2xl opacity-20"
                  animate={{
                    scale: hoveredIndex === index ? 1.2 : 1,
                  }}
                  transition={{ duration: 0.3 }}
                />
                <motion.div 
                  className="absolute inset-0 flex items-center justify-center text-4xl text-orange-500"
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                >
                  {icon}
                </motion.div>
              </motion.div>

              <motion.h3 
                className="text-2xl font-bold mb-4"
                animate={{
                  color: hoveredIndex === index ? "#f97316" : "#1f2937"
                }}
              >
                {title}
              </motion.h3>

              <div className="text-gray-600 leading-relaxed">
                {desc}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

