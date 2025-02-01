"use client";

import { motion } from "framer-motion";
import { Icon } from "@iconify/react";

const volunteerData = [
  {
    title: "Become a Volunteer",
    description:
      "Join us to mentor and uplift women in business, trading, and financial independence.",
    icon: "mdi:account-group-outline",
  },
  {
    title: "Quick Fundraise",
    description:
      "Help raise funds to support training, mentorship, and resources for women entrepreneurs.",
    icon: "mdi:currency-usd",
  },
  {
    title: "Start Donating",
    description:
      "Your donations provide education, capital, and tools for women-led businesses.",
    icon: "mdi:hand-heart-outline",
  },
  {
    title: "Empower Through Training",
    description:
      "Support skill-building programs that equip women with the knowledge to succeed.",
    icon: "mdi:school-outline",
  },
];

const Volunteer = () => {
  return (
    <section className="bg-white py-16 font-heading">
      <div className="container mx-auto px-4">
        <motion.div
          className="mt-8 grid grid-cols-1 md:grid-cols-4 gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={{
            visible: { transition: { staggerChildren: 0.3 } },
          }}
        >
          {volunteerData.map((item, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-lg border border-dark/50 p-6 flex flex-col items-center text-center h-[300px]"
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
              }}
            >
              <div className="bg-gray-300 flex items-center justify-center p-4 h-16 w-16 rounded-full mb-6">
                <Icon
                  icon={item.icon}
                  className="text-4xl text-primary rounded-full"
                />
              </div>

              <h3 className="text-lg font-semibold text-gray-800">
                {item.title}
              </h3>
              <p className="text-gray-600 mt-2">{item.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Volunteer;
