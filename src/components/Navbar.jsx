import React from 'react';
import logo from '../assets/logo.png';

const Navbar = () => {
  return (
    <nav className="bg-black shadow-lg">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        
       
        <div className="text-3xl font-bold text-white">
          <img src={logo} alt="Point 5 Media Logo" className="h-28 w-auto" />
        </div>

        
        <ul className="flex space-x-12 text-xl font-medium">
          <li>
            <a href="/" className="text-white hover:text-green-400">
              Home
            </a>
          </li>
          <li>
            <a href="/services" className="text-white hover:text-green-400">
              Services
            </a>
          </li>
          <li>
            <a href="/about" className="text-white hover:text-green-400">
              About
            </a>
          </li>
          <li>
            <a href="contact" className="text-white hover:text-green-400">
              Contact
            </a>
          </li>
        </ul>

        <div className="flex space-x-3">
          <a
            href="/signin"
            className="bg-black text-white px-5 py-2 rounded-full hover:bg-green-600 transition-all"
          >
            Sign In
          </a>
          <a
            href="/signup"
            className="bg-green-500 text-white px-5 py-2 rounded-full hover:bg-green-600 transition-all"
          >
            Get Started
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
