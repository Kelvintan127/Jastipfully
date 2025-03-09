import { motion } from "framer-motion";

const mainSteps = [
  {
    step: 1,
    title: "Kirim Orderan",
    desc: "Kirim orderan kapan pun, kita akan rekap jika diinformasikan FINAL.",
  },
  {
    step: 2,
    title: "Konfirmasi Rekapan",
    desc: "Kita kirim rekapan dan menerima konfirmasi.",
  },
  {
    step: 3,
    title: "Pembukaan Invoice",
    desc: "Kita buka invoice dan menerima pembayaran.",
  },
  {
    step: 4,
    title: "Info Barang Ready",
    desc: "Dinfo barang ready dan dilakukan pelunasan ongkir.",
  },
  {
    step: 5,
    title: "Barang Dikirim",
    desc: "Barang siap dikirim.",
  },
];

const additionalSteps = [
  {
    step: 1,
    title: "Order dan Pantau",
    desc: "Kita order dan pantau sisa produk yang belum dikirim",
  },
  {
    step: 2,
    title: "Sortir dan Cek Barang",
    desc: "Barang ready dibatam kita sortir dan cek per item",
  },
];

export default function Prosedur() {
  return (
    <motion.div 
      className="py-16 px-4 max-w-6xl mx-auto"
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
          <h2 className="text-3xl font-bold text-orange-600 mb-8">Prosedur Pemesanan</h2>
          <div className="relative">
            <div className="left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-orange-400 to-orange-600 transform -translate-x-1/2  lg:absolute" />
            <div className="space-y-6">
              {mainSteps.map(({ step, title, desc }) => (
                <motion.div
                  key={step}
                  className="flex items-center"
                  initial={{ x: step % 2 === 0 ? 50 : -50, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: step * 0.1 }}
                >
                  <motion.div
                    className={`w-full md:w-96 bg-white shadow-lg rounded-xl p-6 hover:shadow-2xl transition-shadow duration-300 ${
                      step % 2 === 0 ? 'ml-auto' : 'mr-auto'
                    }`}
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="flex items-start space-x-4">
                      <motion.div 
                        className="w-12 h-12 flex-shrink-0 flex items-center justify-center bg-gradient-to-r from-orange-500 to-orange-400 text-white text-xl font-bold rounded-full shadow-lg"
                        whileHover={{ scale: 1.1, rotate: 360 }}
                        transition={{ duration: 0.3 }}
                      >
                        {step}
                      </motion.div>
                      <div>
                        <h3 className="text-xl font-semibold text-orange-600">{title}</h3>
                        <p className="text-gray-600 mt-2">{desc}</p>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div 
          className="text-center"
          initial={{ y: 20 }}
          whileInView={{ y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-orange-600 mb-8">Prosedur Internal</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {additionalSteps.map(({ step, title, desc }) => (
              <motion.div
                key={step}
                className="bg-white shadow-lg rounded-xl p-6 hover:shadow-2xl transition-shadow duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: step * 0.2 }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="flex items-start space-x-4">
                  <motion.div 
                    className="w-12 h-12 flex-shrink-0 flex items-center justify-center bg-gradient-to-r from-orange-500 to-orange-400 text-white text-xl font-bold rounded-full shadow-lg"
                    whileHover={{ scale: 1.1, rotate: 360 }}
                    transition={{ duration: 0.3 }}
                  >
                    {step}
                  </motion.div>
                  <div className="text-left">
                    <h3 className="text-xl font-semibold text-orange-600">{title}</h3>
                    <p className="text-gray-600 mt-2">{desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
