"use client";

import React from "react";
import Marquee from "react-fast-marquee";
import TestimonialCard from "./TestimonialCard";

const testimonials = [
  {
    name: "Mary",
    role: "Small Business Owner",
    message:
      "As a single mother, I faced many challenges. But CYRUS believed in me when no one else did. With their help, I was able to provide for my children and secure a better future for us all",
    image: "/images/person.avif",
    bgColor: "bg-pink-100",
  },
  {
    name: "Fatima",
    role: "Micro-entrepreneur",
    message:
      "Cyrus Africa made it easy for me to secure a loan for my small business. Their team is incredibly supportive.",
    image: "/images/mia.avif",
    bgColor: "bg-blue-100",
  },
  {
    name: "Beatrice",
    role: "Small Business Owner",
    message:
      "CYRUS gave me more than just a loan; they gave me the confidence to pursue my dreams. With their support, I turned my small business into a thriving enterprise.",
    image: "/images/mariam.avif",
    bgColor: "bg-pink-200",
  },
];

const Testimonials: React.FC = () => {
  return (
    <section className="py-16 bg-white" id="testimonial">
      <div className="max-w-6xl mx-auto px-6 text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-dark">
          What’s Client Say?
        </h2>
      </div>

      <div className="overflow-hidden container mx-auto px-4">
        <Marquee
          gradient={true}
          gradientColor={"#fff"}
          gradientWidth={20}
          speed={50}
          direction="left"
          //   pauseOnHover={true}
          className="space-x-6"
        >
          {testimonials.map((testimonial, index) => (
            <div key={index} className="mx-3">
              <TestimonialCard {...testimonial} />
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  );
};

export default Testimonials;
