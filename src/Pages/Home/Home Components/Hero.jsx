import React, { useState, useEffect } from "react";
import { FaAnglesRight } from "react-icons/fa6";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

const Hero = () => {
  const slides = [
    {
      id: 1,
      image: "/1.jpg",
      title: "New Collection",
      price: "Starting at $20.00",
    },
    {
      id: 2,
      image: "/2.jpg",
      title: "Explore Fresh Fruits",
      price: "Starting at $29.99",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 4000);
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div className="relative w-full mt-4 mb-6 lg:my-10">
      <div className="flex transition-transform duration-700 ease-in-out rounded-2xl overflow-hidden">
        <AnimatePresence initial={false} custom={currentSlide}>
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.8 }}
            className="w-full flex-shrink-0 relative"
          >
            <div className="h-[400px] md:h-[500px] lg:h-[600px] w-full overflow-hidden">
              <img
                src={slides[currentSlide].image}
                alt={slides[currentSlide].title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute top-1/3 left-4 md:left-10 lg:left-20 2xl:left-30 flex flex-col gap-1">
              <motion.h1
                className="text-4xl md:text-5xl lg:text-6xl font-semibold text-gray-700 mb-4"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                {slides[currentSlide].title}
              </motion.h1>
              <motion.p
                className="text-[#63B295] text-lg md:text-xl lg:text-2xl mb-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
              >
                {slides[currentSlide].price}
              </motion.p>
              <Link to="/products"
                className="bg-black text-white px-6 py-3 rounded-md hover:bg-gray-800 cursor-pointer transition duration-300 w-fit"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.2 }}
              >
                Shop Now
                <FaAnglesRight className="inline-block ml-2" />
              </Link>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <div
            key={index}
            className={`w-3 h-3 rounded-full cursor-pointer ${
              index === currentSlide ? "bg-black" : "bg-gray-400"
            } transition duration-300`}
            onClick={() => setCurrentSlide(index)}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Hero;
