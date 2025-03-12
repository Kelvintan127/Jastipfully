import { motion } from "framer-motion";

const orderSteps = [
  {
    text: "Kirim Link & SS Varian",
    description: "Kirimkan link produk dan screenshot varian yang diinginkan"
  },
  {
    text: "Info 'FINAL' ke Admin",
    description: "Konfirmasi pesanan final kepada admin"
  },
  {
    text: "Admin Kirim Rekapan",
    description: "Admin akan mengirimkan rekapitulasi pesanan"
  },
  {
    text: "Customer Cross Check",
    description: "Pelanggan melakukan pengecekan ulang pesanan"
  },
  {
    text: "Admin Terbit Nota dan Payment",
    description: "Admin menerbitkan nota untuk pembayaran"
  },
  {
    text: "Payment Sebelum Jam 4 Proses Dihari Yang Sama",
    description: "Pembayaran sebelum jam 4 akan diproses di hari yang sama"
  },
  {
    text: "Air : 10-16 Harian & Sea : 4-5 Mingguan",
    description: "Estimasi waktu pengiriman via udara dan laut"
  },
  {
    text: "Barang Ready & Payment Ongkir",
    description: "Konfirmasi kesiapan barang dan pembayaran ongkos kirim"
  },
  {
    text: "Admin Info Resi JNT/LION +3 Hari",
    description: "Admin akan menginformasikan nomor resi pengiriman"
  },
  {
    text: "Barang Diantar Kealamat Tujuan",
    description: "Pengiriman barang ke alamat yang ditentukan"
  }
];

export default function CaraOrder() {
  return (
    <motion.div 
      className="py-24 px-6 bg-white relative overflow-hidden rounded-3xl"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
    >
      <div className="max-w-7xl mx-auto relative">
        <div className="relative z-10">
          <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-orange-600 to-orange-400 bg-clip-text text-transparent">How It Works</h2>
          {/* First Row Timeline */}
          <div className="relative mb-32">
            <div className="absolute left-0 right-0 top-6 h-0.5 bg-gray-300"></div>
            <div className="grid grid-cols-5 gap-4">
              {orderSteps.slice(0, 5).map((step, index) => (
                <motion.div
                  key={index}
                  className="relative pt-2"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-r from-orange-600 to-orange-400 flex items-center justify-center text-white font-bold text-lg mb-4">
                      {index + 1}
                    </div>
                    <h3 className="text-sm font-medium text-gray-900 text-center mb-2">{step.text}</h3>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Second Row Timeline */}
          <div className="relative">
            <div className="absolute left-0 right-0 top-6 h-0.5 bg-gray-300"></div>
            <div className="grid grid-cols-5 gap-4">
              {orderSteps.slice(5).map((step, index) => (
                <motion.div
                  key={index + 5}
                  className="relative pt-2"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: (index + 5) * 0.1 }}
                >
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-r from-orange-600 to-orange-400 flex items-center justify-center text-white font-bold text-lg mb-4">
                      {index + 6}
                    </div>
                    <h3 className="text-sm font-medium text-gray-900 text-center mb-2">{step.text}</h3>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}