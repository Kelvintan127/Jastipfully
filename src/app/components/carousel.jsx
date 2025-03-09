import { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { AnimatePresence, motion } from "framer-motion";

const images = [
    {
        title: "Mountain View",
        url: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Pemandangan_Gunung_Kerinci_dari_Kebun_Teh_07.jpg/2560px-Pemandangan_Gunung_Kerinci_dari_Kebun_Teh_07.jpg"
    },
    {
        title: "Landscape",
        url: "https://media.suara.com/pictures/653x366/2020/07/06/71947-gambar-pemandangan.jpg"
    },
    {
        title: "Nature",
        url: "https://images.pexels.com/photos/2174974/pexels-photo-2174974.jpeg?cs=srgb&dl=pexels-quang-nguyen-vinh-222549-2174974.jpg&fm=jpg"
    }
];

export default function Carousel() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isHovered, setIsHovered] = useState(false);

    useEffect(() => {
        if (!isHovered) {
            const interval = setInterval(() => {
                setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
            }, 5000);
            return () => clearInterval(interval);
        }
    }, [isHovered]);

    return (
        <div 
            className="relative w-full h-[600px] overflow-hidden bg-black"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <AnimatePresence mode="wait">
                <motion.div
                    key={currentIndex}
                    className="absolute inset-0"
                    initial={{ opacity: 0, scale: 1.1 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 1, ease: "easeInOut" }}
                >
                    <motion.img
                        src={images[currentIndex].url}
                        alt={images[currentIndex].title}
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/60" />
                    <motion.h2
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.3 }}
                        className="absolute bottom-16 left-1/2 -translate-x-1/2 text-4xl font-bold text-white text-center"
                    >
                        {images[currentIndex].title}
                    </motion.h2>
                </motion.div>
            </AnimatePresence>

            <motion.button
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white p-4 rounded-full backdrop-blur-sm"
                onClick={() => setCurrentIndex((currentIndex - 1 + images.length) % images.length)}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
            >
                <FaChevronLeft className="text-2xl" />
            </motion.button>

            <motion.button
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white p-4 rounded-full backdrop-blur-sm"
                onClick={() => setCurrentIndex((currentIndex + 1) % images.length)}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
            >
                <FaChevronRight className="text-2xl" />
            </motion.button>

            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3">
                {images.map((_, index) => (
                    <motion.button
                        key={index}
                        className={`w-3 h-3 rounded-full transition-all duration-300 ${
                            currentIndex === index ? 'bg-white w-8' : 'bg-white/50'
                        }`}
                        onClick={() => setCurrentIndex(index)}
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 0.9 }}
                    />
                ))}
            </div>
        </div>
    );
}