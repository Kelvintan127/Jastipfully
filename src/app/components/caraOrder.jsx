import { motion } from "framer-motion";
import { FaCopy, FaPaperPlane, FaCamera } from "react-icons/fa";

const orderSteps = [
  {
    text: "Copy link produk di Taobao",
    icon: <FaCopy />,
    description: "Salin link produk yang ingin Anda beli dari website Taobao"
  },
  {
    text: "Paste dan kirim ke admin",
    icon: <FaPaperPlane />,
    description: "Kirimkan link produk ke admin kami melalui WhatsApp"
  },
  {
    text: "Kirim screenshot varian checkout",
    icon: <FaCamera />,
    description: "Screenshot detail varian produk yang Anda inginkan"
  }
];

export default function CaraOrder() {
  return (
    <motion.div 
      className="py-24 px-6 bg-gradient-to-br from-orange-50 via-white to-orange-50"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
    >
      <div className="max-w-6xl mx-auto">
        <motion.div 
          className="text-center mb-16"
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
            Cara Order
          </motion.h2>
          <motion.p className="text-gray-600 max-w-2xl mx-auto text-lg">
            3 Langkah Mudah Untuk Mulai Berbelanja
          </motion.p>
        </motion.div>

        <div className="flex items-center justify-center flex-wrap gap-16">
          <motion.div
            className="relative w-96 h-96"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-br from-orange-200 to-orange-100 rounded-full blur-3xl opacity-60"
              animate={{ 
                scale: [1, 1.2, 1],
                rotate: [0, 180, 360]
              }}
              transition={{ 
                duration: 20,
                repeat: Infinity,
                ease: "linear"
              }}
            />
            <motion.img
              src="assets/taobao.png"
              alt="Shopping Illustration"
              className="relative w-full h-full object-contain p-8"
              whileHover={{ scale: 1.05, rotate: 5 }}
              transition={{ type: "spring", stiffness: 300 }}
            />
          </motion.div>

          <div className="space-y-12">
            {orderSteps.map(({ text, icon, description }, index) => (
              <motion.div 
                key={index} 
                className="flex items-start space-x-6"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
              >
                <motion.div 
                  className="w-16 h-16 flex-shrink-0 flex items-center justify-center bg-gradient-to-br from-orange-500 to-orange-400 text-white text-2xl font-bold rounded-2xl shadow-lg"
                  whileHover={{ scale: 1.1, rotate: 10 }}
                  whileTap={{ scale: 0.9 }}
                >
                  {icon}
                </motion.div>
                <motion.div 
                  className="relative overflow-hidden bg-white rounded-2xl p-6 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.1)]"
                  whileHover={{ y: -5, scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <div className="space-y-2">
                    <div className="flex items-center gap-3">
                      <span className="flex items-center justify-center w-8 h-8 bg-orange-100 text-orange-600 rounded-full font-bold">
                        {index + 1}
                      </span>
                      <h3 className="text-gray-800 text-lg font-semibold">{text}</h3>
                    </div>
                    <p className="text-gray-600 text-sm">{description}</p>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}