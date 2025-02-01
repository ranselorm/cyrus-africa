"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Icon } from "@iconify/react";
import Link from "next/link";

const navLinks = [
  { name: "About Us", href: "/about" },
  { name: "Our Focus", href: "/focus" },
  { name: "Impact", href: "/impact" },
  { name: "Programs", href: "/programs" },
  { name: "Stories", href: "/stories" },
  { name: "Ways to Take Action", href: "/action" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md fixed w-full z-50">
      <div className="container mx-auto flex justify-between items-center p-4">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
        >
          <Link href="/">
            <span className="text-2xl font-bold text-blue-600">Cuso</span>
          </Link>
        </motion.div>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-6">
          {navLinks.map(({ name, href }) => (
            <motion.div key={name} whileHover={{ scale: 1.1 }}>
              <Link
                href={href}
                className="text-gray-700 hover:text-blue-600 transition"
              >
                {name}
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            <Icon
              icon={isOpen ? "mdi:close" : "mdi:menu"}
              className="text-3xl text-gray-700"
            />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden bg-white shadow-md"
          >
            <div className="flex flex-col items-center gap-4 p-4">
              {navLinks.map(({ name, href }) => (
                <motion.div key={name} whileHover={{ scale: 1.1 }}>
                  <Link
                    href={href}
                    className="text-gray-700 hover:text-blue-600 transition"
                  >
                    {name}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
