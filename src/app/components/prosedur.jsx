import { motion } from "framer-motion";

const mainSteps = [
  {
    step: 1,
    title: "Order dan Kirim",
    desc: "Order dan kirim ke alamat gudang kami untuk pengiriman yang aman dan terpercaya.",
    icon: "📦"
  },
  {
    step: 2,
    title: "Info Packing List",
    desc: "Kami akan menginformasikan kepada Anda saat barang sudah ready untuk dikirim.",
    icon: "✅"
  }
];

export default function Prosedur() {
  return (
    <motion.div 
      className="py-24 px-4 max-w-6xl mx-auto"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
    >
      <div className="space-y-16">
        <motion.div 
          className="text-center"
          initial={{ y: 20 }}
          whileInView={{ y: 0 }}
          viewport={{ once: true }}
        >
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-5xl font-bold bg-gradient-to-r from-orange-600 to-orange-400 inline-block text-transparent bg-clip-text mb-6">
              Prosedur Pengiriman
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Proses pengiriman yang mudah dan aman untuk kepuasan pelanggan
            </p>
          </motion.div>

          <div className="relative max-w-4xl mx-auto">
            {/* Connected Line with Animation */}
            <motion.div 
              className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-orange-400 to-orange-600 transform -translate-x-1/2"
              initial={{ height: 0 }}
              whileInView={{ height: "100%" }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            />
            
            <div className="relative space-y-20">
              {mainSteps.map(({ step, title, desc, icon }) => (
                <motion.div
                  key={step}
                  className="flex justify-center items-center"
                  initial={{ opacity: 0, x: step % 2 === 0 ? 50 : -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: step * 0.2, duration: 0.5 }}
                >
                  <motion.div
                    className="w-full max-w-lg bg-white shadow-lg rounded-2xl p-8 hover:shadow-2xl transition-all duration-300"
                    whileHover={{ scale: 1.03, y: -5 }}
                  >
                    <div className="flex items-start space-x-6">
                      <motion.div 
                        className="w-16 h-16 flex-shrink-0 flex items-center justify-center bg-gradient-to-r from-orange-500 to-orange-400 text-white text-2xl font-bold rounded-2xl shadow-lg"
                        whileHover={{ scale: 1.1, rotate: 360 }}
                        transition={{ duration: 0.5 }}
                      >
                        <span className="text-3xl">{icon}</span>
                      </motion.div>
                      <div>
                        <h3 className="text-2xl font-semibold text-orange-600 mb-3">{title}</h3>
                        <p className="text-gray-600 text-lg leading-relaxed">{desc}</p>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
