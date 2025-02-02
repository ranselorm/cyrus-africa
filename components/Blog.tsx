"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const blogPosts = [
  {
    id: 1,
    title: "CYRUS Africa's Mobile Solutions for Accessing Market Information",
    date: "Jan 2, 2024",
    category: "Technology",
    image: "/images/market.jpg",
    link: "#",
  },
  {
    id: 2,
    title: "CYRUS Africa's Drone Technology Revolutionizing Agriculture",
    date: "Jan 2, 2024",
    category: "Agriculture",
    image: "/images/blog2.jpg",
    link: "#",
  },
  {
    id: 3,
    title:
      "The West African Nation's Shea Nut Industry and Economic Opportunities",
    date: "Jan 2, 2024",
    category: "Business",
    image: "/images/blog3.jpg",
    link: "#",
  },
];

const Blog = () => {
  return (
    <section className="bg-gray-50 py-16 px-6 md:px-12">
      <div className="container mx-auto">
        <div className="flex justify-between">
          <h2 className="text-3xl md:text-4xl font-bold text-dark capitalize font-heading">
            Latest Blogs
          </h2>
          <Link href="#" className="text-lg text-dark underline font-bold">
            Read More
          </Link>
        </div>

        <motion.div
          className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={{ visible: { transition: { staggerChildren: 0.2 } } }}
        >
          {blogPosts.map((post, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden w-full h-[400px] flex flex-col"
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
              }}
            >
              <div className="relative">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-56 object-cover"
                />
                <span className="absolute bottom-0 left-4 bg-dark uppercase text-white px-3 py-1 text-xs font-medium rounded-md">
                  {post.category}
                </span>
              </div>

              <div className="p-6 text-left flex-grow">
                <p className="text-gray-500 text-sm">{post.date}</p>
                <h3 className="text-lg font-semibold text-gray-900 mt-2 font-heading">
                  <Link
                    href={post.link}
                    className="hover:text-green-600 transition"
                  >
                    {post.title}
                  </Link>
                </h3>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Blog;
