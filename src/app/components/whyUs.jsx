import { useState } from "react";
import { FaCheckCircle, FaClock, FaBoxOpen, FaTruck, FaShieldAlt, FaChevronDown } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const whyChooseUs = [
  {
    title: "Fully Check Barang",
    desc: "Kita melakukan fully check terhadap barang (hitung kuantiti dan cocokin size & warna). Ketika barang sampai dan segera komplen seller jika terjadi kesalahan.",
    icon: <FaCheckCircle />,
  },
  {
    title: "Aktif Setiap Hari",
    desc: "Kita aktif setiap hari dan bersedia cross check ke seller jika ada pertanyaan",
    icon: <FaClock />,
  },
  {
    title: "Proses Cepat",
    desc: "After payment segera diproses (bukan system PO)",
    icon: <FaBoxOpen />,
  },
  {
    title: "Repacking & Kurir Online",
    desc: "Melakukan repacking agar jastipers mudah ambil barang dan kita yang order kurir online (Gojek, Grab, Maxim)",
    icon: <FaTruck />,
  },
  {
    title: "Packing Kayu & Asuransi",
    desc: "Menyediakan jasa packing kayu dan asuransi untuk produk fragile bagi customer luar kota",
    icon: <FaShieldAlt />,
  },
];

export default function WhyUs() {
  const [expandedIndex, setExpandedIndex] = useState(null);
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

              <AnimatePresence mode="wait">
                <motion.div
                  initial={false}
                  animate={{ 
                    height: expandedIndex === index ? "auto" : "3rem",
                    opacity: expandedIndex === index ? 1 : 0.7
                  }}
                  className="overflow-hidden"
                >
                  <p className="text-gray-600 leading-relaxed">
                    {desc}
                  </p>
                </motion.div>
              </AnimatePresence>

              <motion.button
                onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
                className="mt-6 text-orange-500 font-medium flex items-center gap-2 group"
                whileHover={{ x: 8 }}
              >
                <span className="group-hover:text-orange-600 transition-colors">
                  {expandedIndex === index ? "Show Less" : "Learn More"}
                </span>
                <motion.div
                  animate={{ 
                    rotate: expandedIndex === index ? 180 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <FaChevronDown className="text-sm" />
                </motion.div>
              </motion.button>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
