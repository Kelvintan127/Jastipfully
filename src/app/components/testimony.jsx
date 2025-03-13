import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

const portraits = [
  "/assets/testimony/1.jpeg",
  "/assets/testimony/2.jpeg",
  "/assets/testimony/3.jpeg",
  "/assets/testimony/4.jpeg",
  "/assets/testimony/5.jpeg",
  "/assets/testimony/6.jpeg",
];

const ITEMS_PER_PAGE = 3;

export default function Testimony() {
  const [currentPage, setCurrentPage] = useState(0);
  const [direction, setDirection] = useState(0);
  const totalPages = Math.ceil(portraits.length / ITEMS_PER_PAGE);
  
  const currentImages = portraits.slice(
    currentPage * ITEMS_PER_PAGE,
    (currentPage + 1) * ITEMS_PER_PAGE
  );

  const nextPage = () => {
    setDirection(1);
    setCurrentPage((prev) => (prev + 1) % totalPages);
  };

  const prevPage = () => {
    setDirection(-1);
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
  };

  const variants = {
    enter: (direction) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    })
  };

  return (
    <div className="py-24 bg-gradient-to-br from-orange-50 via-white to-orange-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2 
            className="text-4xl font-bold bg-gradient-to-r from-orange-600 to-orange-400 inline-block text-transparent bg-clip-text mb-4"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            Our Happy Customers
          </motion.h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Real stories from our satisfied customers who have experienced our service firsthand
          </p>
        </div>

        <div className="relative overflow-hidden">
          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.div
              key={currentPage}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 }
              }}
              className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 mb-8"
            >
              {currentImages.map((image, index) => (
                <motion.div
                  key={currentPage * ITEMS_PER_PAGE + index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ 
                    delay: index * 0.1,
                    duration: 0.4,
                    ease: "easeOut"
                  }}
                  whileHover={{ 
                    scale: 1.03,
                    transition: { duration: 0.3, ease: "easeInOut" }
                  }}
                  className="group relative aspect-[3/4] rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500"
                >
                  <motion.img 
                    src={image} 
                    alt={`Customer portrait ${currentPage * ITEMS_PER_PAGE + index + 1}`}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.08 }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                  />
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/20 to-transparent"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          {/* Navigation Controls with smoother transitions */}
          <div className="flex justify-center items-center gap-4 mt-8">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={prevPage}
              className="p-2 rounded-full bg-white shadow-md hover:shadow-lg transition-all duration-300 text-orange-500 hover:text-orange-600"
            >
              <FiChevronLeft size={24} />
            </motion.button>
            
            <div className="flex gap-3">
              {[...Array(totalPages)].map((_, index) => (
                <motion.button
                  key={index}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => {
                    setDirection(index > currentPage ? 1 : -1);
                    setCurrentPage(index);
                  }}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-500 ${
                    currentPage === index 
                      ? 'bg-orange-500 w-6' 
                      : 'bg-orange-200 hover:bg-orange-300'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={nextPage}
              className="p-2 rounded-full bg-white shadow-md hover:shadow-lg transition-shadow text-orange-500 hover:text-orange-600"
            >
              <FiChevronRight size={24} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}