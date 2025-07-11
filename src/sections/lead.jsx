import React from 'react';
import { FaCheckCircle } from 'react-icons/fa';
import mobileImage from '../assets/mobile.svg'; // adjust if needed

const AccessSection = () => {
  return (
    <section className="bg-white py-20 px-6 md:px-16">
      <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center gap-10">
        
        {/* Left: Image */}
        <div className="w-full md:w-1/2">
          <img src={mobileImage} alt="Mobile Payment Options" className="w-full h-auto" />
        </div>

        {/* Right: Content */}
        <div className="w-full md:w-1/2 text-gray-800">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Get Access to all the Best Payment Methods for Your Company
          </h2>
          <ul className="space-y-4 text-lg mb-6">
            <li className="flex items-start gap-3">
              <FaCheckCircle className="text-green-500 mt-1" />
              Master card for you and all your team.
            </li>
            <li className="flex items-start gap-3">
              <FaCheckCircle className="text-green-500 mt-1" />
              Apple Pay and Google Pay for simple and fast payments.
            </li>
            <li className="flex items-start gap-3">
              <FaCheckCircle className="text-green-500 mt-1" />
              Send and receive transfers in France and globally.
            </li>
            <li className="flex items-start gap-3">
              <FaCheckCircle className="text-green-500 mt-1" />
              Get access to check deposit, a payment terminal, etc.
            </li>
          </ul>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded">
            Open Account
          </button>
        </div>
      </div>
    </section>
  );
};

export default AccessSection;
