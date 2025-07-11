import React from 'react';
import { FaCheckCircle } from 'react-icons/fa';
import { FaApple, FaGooglePlay, FaStar } from 'react-icons/fa';
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

        {/* Subtitle */}
        <p className="text-xl md:text-2xl text-white/90">
          Automate your corporate finance management
        </p>

        {/* Bullet Points */}
        <ul className="space-y-3 text-lg">
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

        {/* Trust Section */}
        <div className="mt-10">
          <p className="font-bold text-md md:text-lg lg:text-xl text-white/80 mb-4">
            Trusted by more than <span className="font-semibold text-white">150,000 companies</span>
          </p>
          <div className="flex flex-wrap items-center gap-6 text-sm md:text-base">
            {/* Apple Store */}
            <div className="flex items-center gap-2 bg-white text-black px-4 py-2 rounded shadow">
              <FaApple />
              <span className="font-semibold">4.8</span>
              <span className="text-gray-500">on Apple Store</span>
            </div>

            {/* Play Store */}
            <div className="flex items-center gap-2 bg-white text-black px-4 py-2 rounded shadow">
              <FaGooglePlay />
              <span className="font-semibold">4.7</span>
              <span className="text-gray-500">on Play Store</span>
            </div>

            {/* Trustpilot */}
            <div className="flex items-center gap-2 bg-white text-black px-4 py-2 rounded shadow">
              <FaStar className="text-green-500" />
              <span className="font-semibold">4.7</span>
              <span className="text-gray-500">on Trustpilot</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
