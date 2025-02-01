"use client";
import { Icon } from "@iconify/react/dist/iconify.js";
import { motion, AnimatePresence } from "framer-motion";

const Hero = () => {
  return (
    <section
      className="relative h-screen flex items-center bg-cover bg-center"
      style={{ backgroundImage: "url('/images/hero.jpg')" }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-75"></div>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-white md:max-w-5xl flex flex-col items-start justify-start w-full"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-4 font-satoshi uppercase">
            Economic resilience. Working together for sustainable solutions for
            everyone
          </h1>
          <p className="text-lg md:text-xl mb-6">
            Join us in making a difference by supporting economic resilience
            worldwide.
          </p>
          <motion.button
            whileHover={{ scale: 1.1 }}
            className="bg-yellow-500 text-black px-6 py-3 rounded-lg text-lg font-medium shadow-lg hover:bg-yellow-600 transition flex items-center"
          >
            <Icon icon="mdi:email" className="mr-2 text-xl" /> SUBSCRIBE TO OUR
            NEWSLETTER
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
