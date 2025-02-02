"use client";

import { motion } from "framer-motion";
import { Icon } from "@iconify/react";

const supportCards = [
  {
    title: "Support Cyrus Africa International Projects",
    description:
      "Find out how we're tackling gender equality, social inclusion, economic resilience, and climate action in the most effective way.",
    icon: "mdi:hand-heart-outline",
    linkText: "SEE HOW",
    linkUrl: "#",
  },
  {
    title: "Get Involved in Community Programs",
    description:
      "Join hands to uplift women entrepreneurs and provide skill-based training that helps them succeed in trading and business.",
    icon: "mdi:account-group-outline",
    linkText: "SEE HOW",
    linkUrl: "#",
  },
  {
    title: "Mentor & Guide Emerging Entrepreneurs",
    description:
      "Your expertise can help empower women with financial literacy, mentorship, and networking opportunities to grow their businesses.",
    icon: "mdi:school-outline",
    linkText: "SEE HOW",
    linkUrl: "#",
  },
];

const SupportSection = () => {
  return (
    <section className="bg-white py-16 px-6 md:px-12">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          Here's where you come in
        </h2>

        {/* Cards Section */}
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
              className="bg-light rounded-lg shadow-lg p-8 flex flex-col items-center text-center w-full h-[450px]"
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
              <h3 className="text-lg font-semibold text-gray-800 font-heading">
                {card.title}
              </h3>
              <div className="flex-grow">
                <p className="text-gray-600 mt-8 text-xl leading-relaxed">
                  {card.description}
                </p>
              </div>
              <a
                href={card.linkUrl}
                className="text-orange-500 font-bold mt-6 hover:underline"
              >
                {card.linkText}
              </a>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default SupportSection;
