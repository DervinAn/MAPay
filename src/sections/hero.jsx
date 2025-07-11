import React from 'react';
import { FaCheckCircle } from 'react-icons/fa';
import bgImage from '../assets/design-element.svg';

const HeroSection = () => {
  return (
    <section
      className="h-screen w-full bg-cover bg-center flex items-center text-white px-6 md:px-16"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="max-w-2xl text-left space-y-6">
        {/* Title */}
        <h1 className="text-5xl md:text-7xl font-extrabold leading-tight">
          All-in-one <br />
          <span className="text-blue-400">Business Account</span>
        </h1>

        {/* Bullet Points */}
        <ul className="space-y-3 text-lg">
             <li className="flex items-center gap-3">
            <FaCheckCircle className="text-green-400" />
           Automate your corporate finance management
          </li>
          <li className="flex items-center gap-3">
            <FaCheckCircle className="text-green-400" />
            Save time on expense reports
          </li>
          <li className="flex items-center gap-3">
            <FaCheckCircle className="text-green-400" />
            Truly optimize your accounting process
          </li>
        </ul>

        {/* CTA Buttons */}
        <div className="space-x-4 mt-6">
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded">
            Get Started
          </button>
          <button className="bg-white text-blue-600 hover:bg-gray-200 px-6 py-3 rounded">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
