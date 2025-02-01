"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Icon } from "@iconify/react/dist/iconify.js";

const donationAmounts = [50, 100, 250, 500];

const Impact = () => {
  const [selectedAmount, setSelectedAmount] = useState<number | null>(100);
  const [customAmount, setCustomAmount] = useState("");

  return (
    <section className="bg-blue-100 py-16 px-6 md:px-12">
      <motion.div
        className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-12"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        {/* Left Side - Image */}
        <motion.div className="relative w-full md:w-1/2">
          <img
            src="/images/impact.jpg"
            alt="Child"
            className="rounded-xl shadow-lg w-full h-[500px] object-cover"
          />
          {/* Gift Matched Badge */}
          {/* <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="absolute top-4 right-4 bg-red-600 text-white font-bold text-sm p-3 rounded-full"
          >
            <span>Your Gift Matched</span>
            <span className="block text-3xl font-extrabold">6x</span>
          </motion.div> */}
        </motion.div>

        <motion.div className="w-full md:w-1/2 text-center md:text-left space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold text-dark flex items-center gap-2 font-heading">
            Multiply Your Impact
          </h2>
          <div className="">
            <p className="text-gray-700 mt-6 text-xl">
              Empower a Woman, Transform a Community. When women have access to
              financial resources, education, and trading opportunities, they
              don’t just change their own lives—they uplift entire families and
              communities.
            </p>
            <p className="text-gray-700 mt-6 font-sans text-xl">
              Right now, millions of women lack the resources they need to break
              free from economic barriers. But with your help, we can provide
              them with training, funding, and business opportunities to become
              successful entrepreneurs and independent traders.
            </p>
            <p className="text-gray-700 mt-6 font-sans text-xl">
              Your donation will be matched 6X, meaning every dollar you give
              goes six times further in empowering women
            </p>
          </div>
          <Link
            href="#"
            className="uppercase font-bold border-b border-dark w-max text-dark font-heading flex gap-x-2 items-center text-xl"
          >
            GET IN TOUCH
            <Icon icon="mdi-light:arrow-right" />
          </Link>
          {/* <motion.button className="mt-6 bg-dark text-white px-8 py-3 rounded-full text-lg font-bold hover:bg-transparent hover:text-black transition font-heading uppercase duration-300 border border-dark">
            Get In Touch
          </motion.button> */}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Impact;
