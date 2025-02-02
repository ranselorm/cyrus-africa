"use client";

import { motion } from "framer-motion";
import { Icon } from "@iconify/react";
import Projects from "./Projects";

const supportCards = [
  {
    title: "Empowering Shea Nuts Farmers",
    description: "The Role of Technology and Algorithms in Access to Capital",
    icon: "mdi:hand-heart-outline",
    linkText: "SEE HOW",
    linkUrl: "#",
  },
  {
    title: "Decoding Credit Risk",
    description:
      "How Algorithms are Revolutionizing Lending to Shea Nuts Farmers",
    icon: "mdi:account-group-outline",
    linkText: "SEE HOW",
    linkUrl: "#",
  },
  {
    title: "The Ekulibi Project",
    description: "Understanding Poverty: A Multi-dimensional Perspective",
    icon: "mdi:school-outline",
    linkText: "SEE HOW",
    linkUrl: "#",
  },
];

const SupportSection = () => {
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-dark capitalize font-heading text-center">
          Our Recent Projects
        </h2>

        <motion.div
          className="mt-8 gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={{ visible: { transition: { staggerChildren: 0.2 } } }}
        >
          <Projects />
        </motion.div>
      </div>
    </section>
  );
};

export default SupportSection;
