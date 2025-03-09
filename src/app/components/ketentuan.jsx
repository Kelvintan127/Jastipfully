import { motion } from "framer-motion";
import { FaBox, FaClock, FaTools } from "react-icons/fa";

export default function Ketentuan() {
  const terms = [
    {
      icon: <FaBox className="text-4xl mb-4" />,
      title: "Ketersediaan Barang",
      description: "Jika barang kosong akan segera diinformasikan untuk penukaran barang atau retur.",
      gradient: "from-blue-500 to-blue-600"
    },
    {
      icon: <FaClock className="text-4xl mb-4" />,
      title: "Waktu Pengiriman",
      description: "Jika terjadi red line atau peak season, barang cenderung lambat sampai ke tujuan.",
      gradient: "from-orange-500 to-orange-600"
    },
    {
      icon: <FaTools className="text-4xl mb-4" />,
      title: "Kerusakan Produk",
      description: "Jika produk terjadi kerusakan, kami akan mengajukan komplain ke seller. Namun perlu diketahui bahwa seller mungkin saja tidak memberikan kompensasi sama sekali.",
      gradient: "from-red-500 to-red-600"
    }
  ];

  return (
    <div className="relative overflow-hidden py-24">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-gray-900 via-gray-900 to-black"></div>
      
      <div className="relative max-w-7xl mx-auto px-6">
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <motion.h2 
            className="text-5xl font-bold mb-6 bg-gradient-to-r from-orange-400 to-orange-600 inline-block text-transparent bg-clip-text"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            Ketentuan Layanan
          </motion.h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Syarat dan ketentuan yang berlaku dalam penggunaan layanan kami untuk memastikan pengalaman berbelanja yang terbaik
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {terms.map((term, index) => (
            <motion.div
              key={term.title}
              className="group relative"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-gray-800 to-gray-900 rounded-2xl transform transition-transform group-hover:scale-105" />
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-r from-orange-500/20 to-orange-600/20 rounded-2xl transition-opacity" />
              <motion.div
                className="relative p-8 h-full"
                whileHover={{ y: -5 }}
              >
                <div className={`bg-gradient-to-r ${term.gradient} p-3 rounded-xl inline-block text-white`}>
                  {term.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4 mt-4 text-white">{term.title}</h3>
                <p className="text-gray-300 leading-relaxed">
                  {term.description}
                </p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}