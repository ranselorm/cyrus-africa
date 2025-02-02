"use client";

import { motion } from "framer-motion";
import { Icon } from "@iconify/react";

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
      <div className="container mx-auto text-center px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-dark capitalize font-heading">
          Our Recent Projects
        </h2>

        <motion.div
          className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={{ visible: { transition: { staggerChildren: 0.2 } } }}
        >
          {supportCards.map((card, index) => (
            <motion.div
              key={index}
              className="bg-light rounded-lg p-6 flex flex-col items-center text-center w-full h-[350px]"
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
              }}
            >
              <div className="bg-white flex items-center justify-center p-4 h-16 w-16 rounded-full mb-6">
                <Icon
                  icon={card.icon}
                  className="text-4xl text-primary rounded-full"
                />
              </div>
              <h3 className="text-lg md:text-xl uppercase font-bold text-dark font-heading">
                {card.title}
              </h3>
              <div className="flex-grow">
                <p className="text-gray-600 mt-8 text-xl leading-relaxed">
                  {card.description}
                </p>
              </div>
              {/* <a
                href={card.linkUrl}
                className="text-dark font-bold mt-6 hover:underline"
              >
                {card.linkText}
              </a> */}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default SupportSection;
