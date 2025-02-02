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
      <div className="absolute inset-0 bg-black bg-opacity-95"></div>

      <motion.div
        className="relative container mx-auto px-4 text-center md:text-left"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="flex flex-col md:flex-row justify-between gap-6 items-start">
          <div className="w-24 md:w-40">
            <Link href="/" className="">
              <img
                src="/images/footer-logo.png"
                className="w-full h-full object-cover"
              />
            </Link>
          </div>

          <div className="flex flex-wrap justify-center md:justify-start gap-6 text-gray-300">
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
                className="hover:text-primary transition"
              >
                {item}
              </Link>
            ))}
          </div>
        </div>
        <div className="flex justify-between border-t border-gray-800 pt-12 mt-8">
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
                className="bg-gray-800 p-2 w-10 h-10 rounded-full flex items-center justify-center"
              >
                <Icon icon={icon} className="text-primary text-xl" />
              </motion.a>
            ))}
          </div>
          <div className="mt-6 text-gray-400 text-sm text-center md:text-left">
            © {new Date().getFullYear()} - Cyrus Africa
          </div>
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;
