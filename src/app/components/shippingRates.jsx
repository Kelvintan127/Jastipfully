import { motion } from 'framer-motion';
import { FaShip, FaPlane } from 'react-icons/fa';

export default function ShippingRates() {
  const shippingRates = {
    sea: [
      { area: 'Jabodetabek', rate: '56.000/kg' },
      { area: 'Medan', rate: '56.000/kg' },
      { area: 'Jawa dan Sumatra', rate: '63.000/kg' },
      { area: 'Kepulauan Riau', rate: '33.000/kg' },
    ],
    air: [
      { area: 'Jabodetabek', rate: '163.000/kg' },
      { area: 'Medan', rate: '163.000/kg' },
      { area: 'Jawa dan Sumatra', rate: '170.000/kg' },
      { area: 'Kepulauan Riau', rate: '140.000/kg' },
    ]
  };

  return (
    <div className="py-24 bg-gradient-to-br from-orange-50 via-white to-orange-50 w-full">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <motion.h2 
            className="text-4xl font-bold bg-gradient-to-r from-orange-600 to-orange-400 inline-block text-transparent bg-clip-text mb-4"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            Shipping Rates
          </motion.h2>
          <p className="text-gray-600">Pilihan pengiriman yang sesuai dengan kebutuhan Anda</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Sea Shipment */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl shadow-lg p-8 relative overflow-hidden group"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-blue-600/5 opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="relative">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                  <FaShip className="text-2xl text-blue-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800">Pengiriman Laut</h3>
                  <p className="text-gray-500">Estimasi 4-5 minggu</p>
                </div>
              </div>
              
              <div className="space-y-4">
                {shippingRates.sea.map((rate) => (
                  <div key={rate.area} className="flex justify-between items-center py-3 border-b border-gray-100">
                    <span className="text-gray-600">{rate.area}</span>
                    <span className="font-semibold text-blue-600">{rate.rate}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Air Shipment */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl shadow-lg p-8 relative overflow-hidden group"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-orange-600/5 opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="relative">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center">
                  <FaPlane className="text-2xl text-orange-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800">Pengiriman Udara</h3>
                  <p className="text-gray-500">Estimasi 2-3 minggu</p>
                </div>
              </div>
              
              <div className="space-y-4">
                {shippingRates.air.map((rate) => (
                  <div key={rate.area} className="flex justify-between items-center py-3 border-b border-gray-100">
                    <span className="text-gray-600">{rate.area}</span>
                    <span className="font-semibold text-orange-600">{rate.rate}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div 
          className="mt-8 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-600 text-xl">
            • Tersedia opsi tambahan: Packing kayu & Asuransi
          </p>
        </motion.div>
      </div>
    </div>
  );
}