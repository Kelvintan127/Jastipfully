import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { GiCargoShip } from "react-icons/gi";
import { IoAirplane } from "react-icons/io5";
import ReactCountryFlag from "react-country-flag";

const tabContent = [
  {
    title: "Tentang Kami",
    description:
      "Jastipfully adalah jasa titip barang impor yang beroperasi sejak November 2020, menghubungkan pelanggan di Indonesia dengan produk berkualitas dari China, Singapura, dan Malaysia.",
  },
  {
    title: "Visi",
    description: "Menjadi penyedia jasa titip dan pengiriman terbaik di Indonesia dengan layanan terpercaya dan inovatif."
  },
  {
    title: "Misi",
    description:
      "Memberikan layanan terbaik, menjaga kepercayaan pelanggan, dan terus berkembang melalui inovasi teknologi."
  }
];

const countries = [
  { code: "MY", name: "Malaysia" },
  { code: "CN", name: "China" },
  { code: "SG", name: "Singapore" },
];

export default function AboutUs() {
  const [selectedTab, setSelectedTab] = useState(0); // Change to use index

  return (
    <motion.div
      id="about"
      className="flex flex-col items-center space-y-12 py-8 px-4 w-full max-w-6xl mx-auto"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="text-center w-full">
        <motion.h2
          className="text-3xl font-bold text-orange-600 mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          Tentang Kami
        </motion.h2>
        <motion.div
          className="bg-orange-50 shadow-lg rounded-2xl p-8 border-2 border-orange-200 min-h-[200px] w-full"
          whileHover={{ boxShadow: "0 8px 30px rgba(234, 88, 12, 0.15)" }}
        >
          <div className="flex space-x-8 justify-center text-lg font-semibold mb-6">
            {tabContent.map((tab, index) => (
              <motion.button
                key={index}
                className={`pb-2 relative px-4 ${
                  selectedTab === index ? "text-orange-600" : "text-orange-400"
                }`}
                onClick={() => setSelectedTab(index)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {tab.title}
                {selectedTab === index && (
                  <motion.div
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-orange-600"
                    layoutId="underline"
                    initial={false}
                  />
                )}
              </motion.button>
            ))}
          </div>
          <AnimatePresence mode="wait">
            <motion.p
              key={selectedTab}
              className="text-lg font-medium text-orange-900 leading-relaxed min-h-[80px]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              {tabContent[selectedTab].description}
            </motion.p>
          </AnimatePresence>
        </motion.div>
      </div>

      <div className="flex flex-wrap justify-center gap-6 w-full">
        <motion.div
          className="w-[320px] h-[180px] bg-gradient-to-r from-orange-500 to-orange-400 text-white flex flex-col justify-center items-center rounded-xl shadow-lg"
          whileHover={{
            scale: 1.03,
            boxShadow: "0 20px 30px rgba(234, 88, 12, 0.2)",
          }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <div className="flex space-x-6 items-center">
            <motion.div
              whileHover={{ scale: 1.2 }}
              transition={{ duration: 0.5 }}
            >
              <GiCargoShip className="text-4xl" />
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.2 }}
              transition={{ duration: 0.5 }}
            >
              <IoAirplane className="text-4xl" />
            </motion.div>
          </div>
          <span className="text-xl font-semibold mt-4">Shipped By Us</span>
        </motion.div>

        <motion.div
          className="w-72 h-45 bg-gradient-to-r from-orange-500 to-orange-400 text-white flex flex-col justify-center items-center rounded-xl shadow-lg"
          whileHover={{
            scale: 1.03,
            boxShadow: "0 20px 30px rgba(234, 88, 12, 0.2)",
          }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <span className="text-xl font-semibold mb-4">From</span>
          <div className="flex space-x-6 mt-2">
            {countries.map(({ code, name }) => (
              <motion.div
                key={code}
                whileHover={{ scale: 1.2 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <ReactCountryFlag
                  countryCode={code}
                  svg
                  style={{
                    width: "48px",
                    height: "36px",
                    borderRadius: "8px",
                    boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
                  }}
                  title={name}
                />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
