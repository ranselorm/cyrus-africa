"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Icon } from "@iconify/react/dist/iconify.js";
import Stats from "./Stats";

const donationAmounts = [50, 100, 250, 500];

const Impact = () => {
  const [selectedAmount, setSelectedAmount] = useState<number | null>(100);
  const [customAmount, setCustomAmount] = useState("");

  return (
    <section className="bg-blue-100 py-16 px-4">
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
            className="rounded-xl shadow-lg w-full h-[520px] object-cover"
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
          <h2 className="text-2xl md:text-4xl font-bold text-dark flex items-center gap-2 font-heading">
            Welcome to Cyrus Africa Foundation Stablished Since 2014
          </h2>
          <div className="">
            <p className="text-gray-700 mt-6 text-lg">
              At CYRUS, we understand poverty as a complex, multi-dimensional
              issue, ensnaring individuals in a relentless cycle of material
              scarcity, physical frailty, vulnerability, powerlessness, and
              isolation. To combat this pervasive challenge, CYRUS Ghana has
              meticulously crafted a multi-dimensional strategy aimed at
              breaking the vicious cycle of poverty within our target
              communities.
            </p>
            <p className="text-gray-700 mt-6 font-sans text-lg">
              As a Microfinance Institution (MFI), CYRUS was founded with a dual
              mission: to offer both social and financial solutions to those in
              need. To assess our vulnerability to credit risk, we conduct
              comprehensive reviews of our policies and procedures at every
              stage of the lending process. This rigorous evaluation ensures
              that our practices effectively minimize delinquencies and loan
              losses to acceptable levels.
            </p>
          </div>
          {/* <motion.button className="mt-6 bg-dark text-white px-8 py-3 rounded-full text-lg font-bold hover:bg-transparent hover:text-black transition font-heading uppercase duration-300 border border-dark">
            Get In Touch
          </motion.button> */}
        </motion.div>
      </motion.div>
      <Stats />
    </section>
  );
};

export default Impact;
