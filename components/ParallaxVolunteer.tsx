"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const ParallaxVolunteer = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  return (
    <section
      ref={sectionRef}
      className="relative bg-fixed h-[60vh] flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage: "url('/images/market.jpg')",
      }}
    >
      {/* Parallax Background */}
      <motion.div
        className="absolute inset-0 bg-cover bg-center"
        // style={{
        //   backgroundImage: "url('/images/hero.jpg')",
        //   y: backgroundY,
        // }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-80"></div>
      </motion.div>

      <motion.div
        className="relative z-10 text-center px-6 md:px-12 text-white"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <p className="text-white font-bold uppercase tracking-wide text-lg">
          Become a Volunteer
        </p>
        <h2 className="text-3xl md:text-5xl font-bold my-8">
          Join Your Hand With Us For A <br /> Better Life And Future
        </h2>

        {/* CTA Button */}
        <motion.button
          className="bg-primary text-white px-6 py-2 rounded-full md:text-xl font-medium transition flex items-center gap-x-6 border border-primary hover:bg-blue-600 duration-200 mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          Get Started
        </motion.button>
      </motion.div>
    </section>
  );
};

export default ParallaxVolunteer;
