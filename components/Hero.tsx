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
          className="relative z-10 text-white md:max-w-5xl flex flex-col gap-x-4 items-start justify-start w-full"
        >
          <h1
            className="text-3xl md:text-5xl font-bold tracking-wide mb-4 font-heading uppercase"
            style={{ lineHeight: 1.2 }}
          >
            Working together for sustainable{" "}
            <span className="text-primary">solutions</span> for everyone
          </h1>
          <p className="text-lg md:text-xl mb-6">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet
            quidem nisi animi.
          </p>
          <motion.button className="bg-primary text-white px-6 py-2 rounded-full text-xl font-medium transition flex items-center gap-x-6 border-2 border-primary hover:bg-transparent duration-200 mt-4">
            Donate
            <Icon icon="mdi-light:arrow-right" className="mr-2 text-xl" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
