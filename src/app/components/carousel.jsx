import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Banner() {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            setIsScrolled(scrollPosition > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div id="home" className="relative w-full h-[600px] overflow-hidden">
            <motion.div
                className="absolute inset-0"
                initial={{ opacity: 0, scale: 1.1 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, ease: "easeInOut" }}
            >
                <motion.img
                    src="/assets/banner1.jpg"
                    alt="Jastipfully Banner"
                    className="w-full h-full object-cover"
                />
                <div className={`absolute inset-0 bg-gradient-to-b from-black/30 to-black/60 transition-opacity duration-300 ${isScrolled ? 'opacity-0' : 'opacity-100'}`} />
                <motion.h2
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-4xl font-bold text-white bg-clip-text bg-gradient-to-r from-orange-400 via-orange-300 to-orange-200 drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)] text-center"
                >
                    Jasa titip dan pengiriman Impor Terpercaya!
                </motion.h2>
            </motion.div>
        </div>
    );
}