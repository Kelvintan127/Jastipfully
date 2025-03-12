import { motion } from 'framer-motion';
import { FaShip, FaPlane, FaInfoCircle } from 'react-icons/fa';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

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

  const seaTooltipContent = (
    <div className="p-4 bg-white rounded-lg shadow-lg border border-blue-100">
      <h4 className="font-bold mb-2 text-blue-600">Waktu Estimasi Pengiriman</h4>
      <p className="mb-2 text-gray-700">Pengiriman Laut: 4-6 minggu</p>
      <p className="text-sm text-gray-600">Estimasi bisa berubah jika ada kendala cuaca, redline, dan peak season.</p>
    </div>
  );

  const airTooltipContent = (
    <div className="p-4 bg-white rounded-lg shadow-lg border border-orange-100">
      <h4 className="font-bold mb-2 text-orange-600">Waktu Estimasi Pengiriman</h4>
      <p className="mb-2 text-gray-700">Pengiriman Udara: 10-16 hari kerja</p>
      <p className="text-sm text-gray-600">Estimasi bisa berubah jika ada kendala cuaca, redline, dan peak season.</p>
    </div>
  );

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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Sea Shipment */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl shadow-lg p-10 relative overflow-hidden group"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-blue-600/5 opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="relative">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                  <FaShip className="text-2xl text-blue-600" />
                </div>
                <div className="flex items-center gap-2">
                  <h3 className="text-xl font-bold text-gray-800">Pengiriman Laut</h3>
                  <Tippy content={seaTooltipContent} interactive={true} placement="right">
                    <button className="text-blue-600 hover:text-blue-700 transition-colors">
                      <FaInfoCircle size={16} />
                    </button>
                  </Tippy>
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
            className="bg-white rounded-2xl shadow-lg p-10 relative overflow-hidden group"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-orange-600/5 opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="relative">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center">
                  <FaPlane className="text-2xl text-orange-600" />
                </div>
                <div className="flex items-center gap-2">
                  <h3 className="text-xl font-bold text-gray-800">Pengiriman Udara</h3>
                  <Tippy content={airTooltipContent} interactive={true} placement="right">
                    <button className="text-orange-600 hover:text-orange-700 transition-colors">
                      <FaInfoCircle size={16} />
                    </button>
                  </Tippy>
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
      </div>
    </div>
  );
}