import React from "react";
import { Button } from "./ui/button";

const Projects = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4 border border-gray-500 rounded-3xl flex items-center">
        <div className="flex-1 w-full">
          <img src="/images/project.jpg" alt="" className="w-full" />
        </div>
        <div className="flex-1 flex flex-col gap-y-6 items-start">
          <h3 className="text-2xl md:text-4xl text-dark font-heading uppercase">
            The Ekulibi Project
          </h3>
          <p className="text-lg md:text-3xl text-gray-500">
            Understanding Poverty: A Multi-dimensional Perspective
          </p>
          <Button className="text-lg">More Information</Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
