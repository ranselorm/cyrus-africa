"use client";

import React from "react";
import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { Dialog, DialogContent, DialogTitle, DialogTrigger } from "./ui/dialog";
import { Card, CardHeader, CardTitle, CardContent } from "./ui/card";

const Projects = () => {
  return (
    <section className="py-8">
      <motion.div
        className="container mx-auto px-4 border border-gray-500 rounded-3xl flex flex-col md:flex-row items-center gap-8 py-6 md:py-0"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={{ visible: { transition: { staggerChildren: 0.2 } } }}
      >
        <motion.div
          className="flex-1 w-full"
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
          }}
        >
          <img
            src="/images/project.jpg"
            alt="Project"
            className="w-full rounded-3xl"
          />
        </motion.div>

        <motion.div
          className="flex-1 flex flex-col gap-y-6 items-start"
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
          }}
        >
          <motion.h3
            className="text-2xl md:text-4xl text-dark font-heading uppercase"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
            }}
          >
            The Ekulibi Project
          </motion.h3>
          <motion.p
            className="text-lg md:text-3xl text-gray-500"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 1 } },
            }}
          >
            Understanding Poverty: A Multi-dimensional Perspective
          </motion.p>

          <motion.div
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 1.2 } },
            }}
          >
            <Dialog>
              <DialogTrigger asChild>
                <Button className="rounded-full py-4 mt-6 uppercase text-xs">
                  More Information
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-3xl p-8">
                <DialogTitle className="font-heading uppercase">
                  The Ekulibi Project
                </DialogTitle>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                  <Card>
                    <CardHeader>
                      <CardTitle className="font-heading">
                        Empowering Shea Nuts Farmers
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 text-lg">
                        The Role of Technology and Algorithms in Access to
                        Capital
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="font-heading">
                        Decoding Credit Risk
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 text-lg">
                        How Algorithms are Revolutionizing Lending to Shea Nuts
                        Farmers
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </DialogContent>
            </Dialog>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Projects;
