"use client";

import { motion } from "framer-motion";
import { Icon } from "@iconify/react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer
      className="relative bg-cover bg-center py-12 text-white"
      style={{ backgroundImage: "url('/images/african.webp')" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-95"></div>

      <motion.div
        className="relative container mx-auto px-6 md:px-12 text-center md:text-left"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        {/* Logo and Social Icons */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <h2 className="text-2xl font-bold flex items-center gap-2">
              <Icon icon="mdi:charity" className="text-yellow-400 text-3xl" />
              <span>Stitch</span>
            </h2>
            <p className="text-gray-300 mt-2">Non-profit Charity</p>
          </div>

          {/* Social Icons */}
          <div className="flex gap-4">
            {[
              "mdi:facebook",
              "mdi:twitter",
              "mdi:instagram",
              "mdi:youtube",
            ].map((icon, index) => (
              <motion.a
                key={index}
                href="#"
                whileHover={{ scale: 1.2 }}
                className="bg-gray-800 p-3 rounded-full"
              >
                <Icon icon={icon} className="text-yellow-400 text-xl" />
              </motion.a>
            ))}
          </div>
        </div>

        {/* Navigation Links */}
        <div className="mt-6 flex flex-wrap justify-center md:justify-start gap-6 text-gray-300">
          {[
            "Home",
            "About",
            "Services",
            "Donations",
            "Events",
            "Blog",
            "Contact",
          ].map((item, index) => (
            <Link
              key={index}
              href={`/${item.toLowerCase()}`}
              className="hover:text-yellow-400 transition"
            >
              {item}
            </Link>
          ))}
        </div>

        {/* Copyright */}
        <div className="mt-6 text-gray-400 text-sm text-center md:text-left">
          © {new Date().getFullYear()} - Stitch Non-profit Charity
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;
