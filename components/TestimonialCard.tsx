"use client";

import React from "react";
import { Icon } from "@iconify/react";

interface TestimonialProps {
  name: string;
  role: string;
  message: string;
  image: string;
  bgColor: string;
}

const TestimonialCard: React.FC<TestimonialProps> = ({
  name,
  role,
  message,
  image,
  bgColor,
}) => {
  return (
    <div
      className={`p-6 rounded-2xl shadow-md bg-white border border-primary max-w-sm flex flex-col space-y-4 h-[230px] transition-all duration-300 cursor-pointer`}
    >
      {/* User Profile */}
      <div className="flex items-center space-x-3">
        <Icon
          icon="material-symbols:person-outline-rounded"
          className="w-12 h-12 rounded-full object-cover text-dark"
        />
        <div>
          <h3 className="text-lg font-semibold text-blu group-hover:text-second">
            {name}
          </h3>
          <p className="text-sm text-gray-600 group-hover:text-second">
            {role}
          </p>
        </div>
      </div>

      <p className="text-gray-800 flex-grow group-hover:text-white">
        {message}
      </p>

      {/* <div className="flex space-x-3 mt-auto">
        <Icon
          icon="mdi:twitter"
          className="text-gray-600 text-2xl cursor-pointer bg-white p-1 rounded-full"
        />
        <Icon
          icon="mdi:linkedin"
          className="text-gray-600 text-2xl cursor-pointer bg-white p-1 rounded-full"
        />
      </div> */}
    </div>
  );
};

export default TestimonialCard;
