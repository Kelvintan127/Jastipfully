import { motion } from "framer-motion";

export default function Ketentuan() {
  const terms = [
    {
      title: "Perhitungan Biaya Pengiriman",
      description: "Charge tertinggi antara volume dan KG"
    },
    {
      title: "Pembayaran dan Konfirmasi",
      description: "Semua transaksi dalam Rupiah (IDR) dengan kurs saat pemesanan dan tidak ada refund setelah pesanan diproses."
    },
    {
      title: "Kebijakan Selisih Item",
      description: "Beda item dan selisih item yang terjadi, refund dan kompensasi bergantung pada kebijakan seller."
    }
  ];

  return (
    <div className="py-8 px-8 bg-white rounded-3xl my-16">
      <div className="max-w-4xl mx-auto">
        <motion.div 
          className="text-center mb-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
        <h2 className="text-2xl font-bold mb-2 bg-gradient-to-r from-orange-600 to-orange-400 bg-clip-text text-transparent ">
           Syarat & Ketentuan
         </h2> 
        </motion.div>

        <div className="space-y-4">
          {terms.map((term, index) => (
            <motion.div
              key={term.title}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="text-left"
            >
              <h3 className="text-base font-semibold mb-1 text-gray-900">{term.title}</h3>
              <p className="text-gray-600 text-xs">
                {term.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}