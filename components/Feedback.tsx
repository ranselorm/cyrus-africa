"use client";

import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Icon } from "@iconify/react/dist/iconify.js";

const Feedback = () => {
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <motion.section
      className="py-16 bg-white"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <motion.div
        className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12"
        variants={containerVariants}
      >
        <motion.div
          className="relative h-[500px] md:h-auto"
          variants={itemVariants}
        >
          <img
            src="/images/feedback.jpg"
            alt="Contact Us"
            className="w-full h-full object-cover rounded-xl"
          />
        </motion.div>

        <motion.form className="space-y-6" variants={containerVariants}>
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
            variants={itemVariants}
          >
            <div>
              <Label htmlFor="firstName">First Name *</Label>
              <Input
                id="firstName"
                placeholder="Stephen"
                className="mt-2 focus:ring-primary focus:ring-2 focus:outline-none"
                required
              />
            </div>
            <div>
              <Label htmlFor="lastName">Last Name *</Label>
              <Input
                id="lastName"
                placeholder="Doh"
                className="mt-2 focus:ring-primary focus:ring-2 focus:outline-none"
                required
              />
            </div>
          </motion.div>

          <motion.div variants={itemVariants}>
            <Label htmlFor="email">E-mail Address *</Label>
            <Input
              id="email"
              placeholder="stephdoh@example.com"
              type="email"
              required
              className="mt-2 focus:ring-primary focus:ring-2 focus:outline-none"
            />
          </motion.div>

          <motion.div variants={itemVariants}>
            <Label htmlFor="phone">Phone *</Label>
            <Input
              id="phone"
              placeholder="+233 244 558 5250"
              type="tel"
              required
              className="mt-2 focus:ring-primary focus:ring-2 focus:outline-none"
            />
          </motion.div>

          <motion.div variants={itemVariants}>
            <Label htmlFor="message">Message *</Label>
            <textarea
              id="message"
              placeholder="Write your message here..."
              rows={4}
              className="mt-2 w-full border border-gray-300 rounded-md p-3 focus:ring-1 focus:ring-dark
              focus:outline-none"
              required
            ></textarea>
          </motion.div>

          <motion.div variants={itemVariants}>
            <Button
              type="submit"
              className="w-full md:w-auto rounded-full hover:bg-primary"
            >
              Send
              <Icon icon="formkit:arrowright" className="text-3xl" />
            </Button>
          </motion.div>
        </motion.form>
      </motion.div>
    </motion.section>
  );
};

export default Feedback;
