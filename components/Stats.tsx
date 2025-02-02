"use client";
import React from "react";

import { motion } from "framer-motion";

const stats = [
  {
    value: "99",
    label: "Total communities",
  },
  {
    value: "1200",
    label: "Happy Women",
  },
  {
    value: "7",
    label: "Countries",
  },
];

const Stats = () => {
  return (
    <section className="py-12 mt-8 text-dark">
      <div className="container mx-auto px-4">
        <motion.div
          className="flex flex-col md:flex-row justify-center items-center md:space-x-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={{ visible: { transition: { staggerChildren: 0.2 } } }}
        >
          {stats.map((stat, index) => (
            <React.Fragment key={index}>
              <motion.div
                className="flex flex-col items-center gap-y-4"
                variants={{
                  hidden: { opacity: 0, y: 50 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
                }}
              >
                <motion.h3
                  className="text-6xl font-bold text-main"
                  whileInView={{ scale: [0.8, 1] }}
                  transition={{ duration: 0.6 }}
                >
                  {stat.value}
                </motion.h3>
                <p className="text-gray-700 text-base">{stat.label}</p>
              </motion.div>

              {/* Vertical Separator */}
              {index < stats.length - 1 && (
                <motion.div
                  className="border-l border-gray-600 h-20 mx-4"
                  initial={{ opacity: 0, scaleY: 0 }}
                  whileInView={{ opacity: 1, scaleY: 1 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                ></motion.div>
              )}
            </React.Fragment>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Stats;
