import { useState, useEffect } from "react";
import {
  FaExclamationTriangle,
  FaChevronLeft,
  FaChevronRight,
  FaShip,
  FaPlane,
  FaMap,
  FaCheckCircle,
  FaClock,
  FaBoxOpen,
  FaTruck,
  FaShieldAlt,
  FaChevronDown,
} from "react-icons/fa";
import { GiCargoShip } from "react-icons/gi";
import { IoAirplane } from "react-icons/io5";
import { AnimatePresence, motion } from "framer-motion";
import ReactCountryFlag from "react-country-flag";

const images = [
  "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Pemandangan_Gunung_Kerinci_dari_Kebun_Teh_07.jpg/2560px-Pemandangan_Gunung_Kerinci_dari_Kebun_Teh_07.jpg",
  "https://media.suara.com/pictures/653x366/2020/07/06/71947-gambar-pemandangan.jpg",
  "https://images.pexels.com/photos/2174974/pexels-photo-2174974.jpeg?cs=srgb&dl=pexels-quang-nguyen-vinh-222549-2174974.jpg&fm=jpg",
];

const countries = [
    { code: "MY", name: "Malaysia" },
    { code: "CN", name: "China" },
    { code: "SG", name: "Singapore" }
];

export default function HomePage() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedTab, setSelectedTab] = useState("tentangKami");
  const [expandedIndex, setExpandedIndex] = useState(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  const tabContent = {
    tentangKami:
      "Jastipfully adalah tempat jasa titip beli barang dari Taobao yang berdiri sejak 13 November 2020.",
    visi: "Menjadi jasa titip cina-batam-indonesia terbaik dan terpercaya dengan pengiriman yang tepat waktu dan bertanggung jawab.",
    misi: "Meningkatkan jasa layanan dan memberikan Harga yang kompetitif beserta ‘handling every product with care.",
  };

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

  return (
    <div className="bg-white">
      {/* Navbar */}
      <nav className="flex justify-between items-center px-20 py-4 bg-gradient-to-r from-orange-600 to-yellow-400 text-white">
        <div className="text-lg font-bold">LOGO / NAMA COMPANY</div>
        <div className="flex space-x-6">
          <a href="#" className="hover:underline">
            Home
          </a>
          <a href="#" className="hover:underline">
            Product
          </a>
          <a href="#" className="hover:underline">
            Contact
          </a>
        </div>
      </nav>

      {/* Carousel */}
      <div className="relative w-full max-w-4xl mx-auto mt-10 overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.img
            key={currentIndex}
            src={images[currentIndex]}
            alt="Company Slide"
            className="w-full h-64 object-cover rounded-lg"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
          />
        </AnimatePresence>
        <button
          className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-gray-700 text-white p-2 rounded-full"
          onClick={() =>
            setCurrentIndex((currentIndex - 1 + images.length) % images.length)
          }
        >
          <FaChevronLeft />
        </button>
        <button
          className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gray-700 text-white p-2 rounded-full"
          onClick={() => setCurrentIndex((currentIndex + 1) % images.length)}
        >
          <FaChevronRight />
        </button>
      </div>

      {/* Tentang Kami Section */}
      <div className="text-center mt-12">
        <h2 className="text-2xl font-bold">Tentang Kami</h2>
        <div className="border border-red-500 rounded-lg p-6 mt-4 max-w-2xl mx-auto">
          <div className="flex space-x-6 justify-center text-lg font-semibold">
            {Object.keys(tabContent).map((key) => (
              <button
                key={key}
                className={`pb-2 ${
                  selectedTab === key
                    ? "text-orange-600 border-b-2 border-orange-600"
                    : "text-black"
                }`}
                onClick={() => setSelectedTab(key)}
              >
                {key.charAt(0).toUpperCase() + key.slice(1)}
              </button>
            ))}
          </div>
          <motion.p
            key={selectedTab}
            className="mt-4 text-lg font-medium text-black"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            {tabContent[selectedTab]}
          </motion.p>
        </div>
      </div>

      {/* Shipped By Us Section */}
      <div className="flex justify-center space-x-6 mt-8">
        <div className="w-64 h-32 bg-gradient-to-r from-red-600 to-yellow-400 text-white flex flex-col justify-center items-center rounded-lg">
          <div className="flex space-x-4 items-center">
            <GiCargoShip className="text-3xl" />
            <IoAirplane className="text-3xl" />
          </div>
          <span className="text-lg font-semibold mt-2">Shipped By Us</span>
        </div>
        
        
        <div className="w-64 h-32 bg-gradient-to-r from-red-600 to-yellow-400 text-white flex flex-col justify-center items-center rounded-lg">
          <span className="text-lg font-semibold">From</span>
          <div className="flex space-x-4 mt-2 mx-4">
            {countries.map(({ code, name }) => (
              <ReactCountryFlag
                key={code}
                countryCode={code}
                svg
                style={{
                  width: "40px",
                  height: "30px",
                }}
                title={name}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Produk & Jasa */}
      <div className="text-center mt-12">
        <h2 className="text-2xl font-bold">Produk & Jasa</h2>
        <div className="flex justify-center space-x-6 mt-4">
          <div className="w-64 h-32 bg-gradient-to-r from-orange-600 to-yellow-400 text-black flex flex-col justify-center items-center rounded-lg">
            <FaShip className="text-3xl" />
            <span className="text-lg font-semibold mt-2">Sea Shipment</span>
          </div>
          <div className="w-64 h-32 bg-gradient-to-r from-orange-600 to-yellow-400 text-black flex flex-col justify-center items-center rounded-lg">
            <FaPlane className="text-3xl" />
            <span className="text-lg font-semibold mt-2">Air Shipment</span>
          </div>
          <div className="w-64 h-32 bg-gradient-to-r from-orange-600 to-yellow-400 text-black flex flex-col justify-center items-center rounded-lg">
            <FaMap className="text-3xl" />
            <span className="text-lg font-semibold mt-2">Luar Kota Batam</span>
          </div>
        </div>
      </div>
      <div>
        {/* (Bagian sebelumnya tetap sama...) */}

        {/* Cara Order */}
        <div className="text-center mt-12">
          <h2 className="text-2xl font-bold">Cara Order</h2>
          <div className="flex items-center justify-center space-x-8 mt-6">
            <img
              src="https://e7.pngegg.com/pngimages/144/10/png-clipart-shopping-cartoon-taobao-others-taobao-cartoon.png"
              alt="Shopping Illustration"
              className="w-60 h-60 object-contain"
            />
            <div className="space-y-4">
              {[
                "Copy link produk di Taobao",
                "Paste dan kirim ke admin",
                "Kirim screenshot varian checkout",
              ].map((text, index) => (
                <div key={index} className="flex items-center space-x-4">
                  <div className="w-10 h-10 flex items-center justify-center bg-gradient-to-r from-red-600 to-yellow-400 text-white text-xl font-bold rounded-full">
                    {index + 1}
                  </div>
                  <div className="bg-gradient-to-r from-red-600 to-yellow-400 text-white px-6 py-2 rounded-full font-semibold text-lg">
                    {text}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Prosedur Jastip */}
        <div className="text-center mt-12">
          <h2 className="text-2xl font-bold text-orange-600">
            Prosedur Jastip
          </h2>
          <div className="border-l-4 border-orange-600 pl-4 mt-4 max-w-2xl mx-auto space-y-4">
            {[
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
            ].map(({ step, title, desc }) => (
              <div
                key={step}
                className="flex items-center bg-white shadow-md rounded-lg p-4"
              >
                <div className="w-10 h-10 flex items-center justify-center bg-orange-600 text-white text-xl font-bold rounded-full">
                  {step}
                </div>
                <div className="ml-4 text-left">
                  <h3 className="text-lg font-semibold">{title}</h3>
                  <p className="text-sm text-gray-600">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Prosedur Internal */}
        <div className="text-center mt-12">
          <h2 className="text-2xl font-bold text-orange-600">
            Prosedur Jastip
          </h2>
          <div className="border-l-4 border-orange-600 pl-4 mt-4 max-w-2xl mx-auto space-y-4">
            {[
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
            ].map(({ step, title, desc }) => (
              <div
                key={step}
                className="flex items-center bg-white shadow-md rounded-lg p-4"
              >
                <div className="w-10 h-10 flex items-center justify-center bg-orange-600 text-white text-xl font-bold rounded-full">
                  {step}
                </div>
                <div className="ml-4 text-left">
                  <h3 className="text-lg font-semibold">{title}</h3>
                  <p className="text-sm text-gray-600">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* Ketentuan Jastip */}
        <div className="text-center mt-12">
          <h2 className="text-2xl font-bold text-orange-600">
            Ketentuan Jastip
          </h2>
          <div className="mt-4 max-w-2xl mx-auto space-y-4">
            {[
              {
                title: "Barang Kosong",
                desc: "Jika barang kosong akan segera diinformasikan untuk tukar barang atau retur.",
              },
              {
                title: "Pengiriman Lambat",
                desc: "Jika terjadi red line atau peak season, barang cenderung lambat sampai.",
              },
              {
                title: "Kerusakan Produk",
                desc: "Jika produk terjadi kerusakan, kita akan komplain ke seller. Namun, seller mungkin tidak memberikan kompensasi.",
              },
            ].map(({ title, desc }) => (
              <div
                key={title}
                className="flex items-center bg-white border border-red-500 shadow-md rounded-lg p-4"
              >
                <div className="w-10 h-10 flex items-center justify-center text-red-600 text-xl font-bold">
                  <FaExclamationTriangle />
                </div>
                <div className="ml-4 text-left">
                  <h3 className="text-lg font-semibold text-black">{title}</h3>
                  <p className="text-sm text-gray-600">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="text-center mt-12">
          <h2 className="text-2xl font-bold text-orange-400">WHY CHOOSE US?</h2>
          <div className="mt-4 max-w-2xl mx-auto space-y-4">
            {whyChooseUs.map(({ title, desc, icon }, index) => (
              <div
                key={title}
                className="bg-gradient-to-bl from-orange-300 to-orange-500 shadow-md rounded-lg p-4 cursor-pointer"
                onClick={() =>
                  setExpandedIndex(expandedIndex === index ? null : index)
                }
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="w-10 h-10 flex items-center justify-center text-orange-700 text-xl font-bold">
                      {icon}
                    </div>
                    <h3 className="ml-4 text-lg font-semibold text-gray-700">
                      {title}
                    </h3>
                  </div>
                  <div className="text-orange-700 text-xl">
                    {expandedIndex === index ? (
                      <FaChevronDown />
                    ) : (
                      <FaChevronRight />
                    )}
                  </div>
                </div>
                {expandedIndex === index && (
                  <p className="text-left text-gray-700 mt-2 font-bold">{desc}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
