"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Icon } from "@iconify/react";
import Link from "next/link";
import { Link as ScrollLink } from "react-scroll";

const navLinks = [
  { name: "About Us", href: "about" },
  { name: "Volunteer", href: "volunteer" },
  { name: "Projects", href: "projects" },
  { name: "Testimonial", href: "testimonial" },
  { name: "Blog", href: "blog" },
  { name: "Feedback", href: "feedback" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // Prevent scrolling when menu is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
  }, [isOpen]);

  return (
    <nav className="bg-white shadow-md w-full z-50">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="container mx-auto flex justify-between items-center p-4"
      >
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          className="w-24 md:w-32"
        >
          <Link href="/">
            <img
              src="/images/cyrus.png"
              className="w-full h-full object-cover"
            />
          </Link>
        </motion.div>

        {/* Desktop Navigation */}
        <motion.div
          className="hidden md:flex gap-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {navLinks.map(({ name, href }) => (
            <motion.div key={name} whileHover={{ scale: 1.1 }}>
              <ScrollLink
                className="text-gray-700 hover:text-primary transition cursor-pointer"
                activeClass="primary"
                to={href}
                spy={true}
                smooth={true}
                offset={-30}
                duration={500}
              >
                {name}
              </ScrollLink>
            </motion.div>
          ))}
        </motion.div>

        <motion.button
          className="bg-primary text-white px-6 py-2 rounded-full text-xl font-medium transition hidden md:flex items-center gap-x-6 border border-primary hover:bg-blue-600 duration-200"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          Donate Now
        </motion.button>

        {/* Mobile Menu Toggle */}
        <motion.div
          className="md:hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <button onClick={() => setIsOpen(true)}>
            <Icon icon="mdi:menu" className="text-3xl text-gray-700" />
          </button>
        </motion.div>
      </motion.div>

      {/* Mobile Full-Screen Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 bg-white flex flex-col items-center justify-center z-50 h-screen"
          >
            {/* Close Button (Fixed at the Top-Right) */}
            <button
              className="absolute top-6 right-6 text-gray-700 text-4xl hover:text-primary transition z-50"
              onClick={() => setIsOpen(false)}
            >
              <Icon icon="mdi:close" />
            </button>

            {navLinks.map(({ name, href }) => (
              <motion.div
                key={name}
                whileHover={{ scale: 1.1 }}
                className="mb-6"
              >
                <ScrollLink
                  className="text-gray-700 hover:text-primary transition text-2xl cursor-pointer"
                  activeClass="primary"
                  to={href}
                  spy={true}
                  smooth={true}
                  offset={-30}
                  duration={500}
                  onClick={() => setIsOpen(false)}
                >
                  {name}
                </ScrollLink>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
