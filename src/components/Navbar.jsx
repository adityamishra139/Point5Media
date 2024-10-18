import React from 'react';
import logo from '../assets/logo.jpg'; // Import the image from the assets folder

const Navbar = () => {
  return (
    <nav className="bg-white shadow-lg">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo Section */}
        <div className="text-3xl font-bold text-black">
          <img src={logo} alt="Point 5 Media Logo" className="h-28 w-auto" />
        </div>

        {/* Navigation Links */}
        <ul className="flex space-x-8 text-xl font-medium">
          <li>
            <a href="#" className="text-black hover:text-green-500">
              Home
            </a>
          </li>
          <li>
            <a href="#" className="text-black hover:text-green-500">
              Services
            </a>
          </li>
          <li>
            <a href="#" className="text-black hover:text-green-500">
              About
            </a>
          </li>
          <li>
            <a href="#" className="text-black hover:text-green-500">
              Contact
            </a>
          </li>
        </ul>

        {/* Call-to-Action Button */}
        <a
          href="#"
          className="bg-green-500 text-white px-5 py-2 rounded-full hover:bg-green-600 transition-all"
        >
          Get Started
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
