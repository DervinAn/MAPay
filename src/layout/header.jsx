import { useState } from 'react';
import Logo from '../assets/ofspce.svg';
import { FaChevronDown } from 'react-icons/fa';

function Header() {
  return (
    <header className="w-full absolute top-0 left-0 z-50 bg-transparent">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between text-white">
        {/* Left: Logo */}
        <div className="flex items-center">
          <img src={Logo} alt="Logo" className="h-10 w-auto" />
        </div>

        {/* Center: Navigation Items */}
        <ul className="hidden md:flex space-x-8 font-medium relative">
          {/* Send & Receive */}
          <li className="relative group cursor-pointer">
            <div className="flex items-center gap-1 hover:text-blue-400">
              <a href="#">Send & Receive</a>
              <FaChevronDown className="text-xs mt-1" />
            </div>
            <ul className="absolute hidden group-hover:block bg-white text-black mt-2 py-2 w-48 rounded shadow-md">
              <li className="px-4 py-2 hover:bg-gray-100"><a href="#">Send Money</a></li>
              <li className="px-4 py-2 hover:bg-gray-100"><a href="#">Receive Payments</a></li>
            </ul>
          </li>

          {/* Pay Now */}
          <li className="relative group cursor-pointer">
            <div className="flex items-center gap-1 hover:text-blue-400">
              <a href="#">Pay Now</a>
              <FaChevronDown className="text-xs mt-1" />
            </div>
            <ul className="absolute hidden group-hover:block bg-white text-black mt-2 py-2 w-48 rounded shadow-md">
              <li className="px-4 py-2 hover:bg-gray-100"><a href="#">Credit Card</a></li>
              <li className="px-4 py-2 hover:bg-gray-100"><a href="#">Bank Transfer</a></li>
            </ul>
          </li>

          {/* Business */}
          <li className="relative group cursor-pointer">
            <div className="flex items-center gap-1 hover:text-blue-400">
              <a href="#">Business</a>
              <FaChevronDown className="text-xs mt-1" />
            </div>
            <ul className="absolute hidden group-hover:block bg-white text-black mt-2 py-2 w-48 rounded shadow-md">
              <li className="px-4 py-2 hover:bg-gray-100"><a href="#">Solutions</a></li>
              <li className="px-4 py-2 hover:bg-gray-100"><a href="#">Partners</a></li>
              <li className="px-4 py-2 hover:bg-gray-100"><a href="#">API Access</a></li>
            </ul>
          </li>

          {/* Login */}
          <li>
            <a href="#" className="hover:text-blue-400">Login</a>
          </li>
        </ul>

        {/* Right: Sign In Button */}
        <div>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded">
            Sign In
          </button>
        </div>
      </nav>
    </header>
  );
}

export default Header;
