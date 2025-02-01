"use client";

import { motion } from "framer-motion";
import { Icon } from "@iconify/react";

const HopeCard = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto flex justify-center px-4">
        <motion.div
          className="bg-primary rounded-2xl shadow-lg py-8 px-5"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className="flex items-start justify-center">
            {/* Heading */}
            <h2 className="text-2xl md:text-4xl font-bold text-white max-w-lg text-left font-heading flex-1">
              We bring a lot of hope for the future.
            </h2>

            {/* Description */}
            <p className="text-white leading-loose w-1/2 text-lg font-heading">
              Our mission is to empower women through trading, financial
              independence, and entrepreneurship. With the right resources,
              **women can build businesses, support their families, and uplift
              entire communities. Join us in making a lasting impact!
            </p>
          </div>
          {/* Trust Badges */}
          <div className="mt-12 flex flex-wrap justify-between gap-4 font-heading flex-1">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-2 bg-gray-100 px-4 py-2 rounded-full text-gray-700 font-medium shadow-sm"
            >
              <Icon icon="mdi:shield-check" className="text-primary text-xl" />
              Trusted Community
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-2 bg-gray-100 px-4 py-2 rounded-full text-gray-700 font-medium shadow-sm"
            >
              <Icon icon="mdi:file-document" className="text-primary text-xl" />
              Full Transparency
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-2 bg-gray-100 px-4 py-2 rounded-full text-gray-700 font-medium shadow-sm"
            >
              <Icon icon="mdi:charity" className="text-primary text-xl" />
              Non-Profit Community
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-2 bg-gray-100 px-4 py-2 rounded-full text-gray-700 font-medium shadow-sm"
            >
              <Icon icon="mdi:charity" className="text-primary text-xl" />
              Non-Profit Community
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HopeCard;
