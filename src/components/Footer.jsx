import React from 'react';
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
const Footer = () => {
  return (
    <footer className="bg-black text-white py-10">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0">
          <h2 className="text-2xl font-bold">Point 5 Media</h2>
          <p className="text-gray-400 mt-1">PRODUCTIONS</p>
        </div>

        <ul className="flex space-x-12 text-lg">
          <li>
            <a href="#" className="hover:text-green-400">Home</a>
          </li>
          <li>
            <a href="#" className="hover:text-green-400">Services</a>
          </li>
          <li>
            <a href="#" className="hover:text-green-400">About</a>
          </li>
          <li>
            <a href="#" className="hover:text-green-400">Contact</a>
          </li>
        </ul>

        <div className="flex space-x-4 mt-4 md:mt-0">
          <a href="#" className="hover:text-green-400"><FaFacebook /></a>
          <a href="#" className="hover:text-green-400"><FaTwitter /></a>
          <a href="#" className="hover:text-green-400"><FaInstagram /></a>
          <a href="#" className="hover:text-green-400"><FaLinkedin /></a>
        </div>
      </div>

      <div className="border-t border-gray-700 mt-8 pt-4 text-center">
        <p className="text-gray-400 text-sm">
          &copy; {new Date().getFullYear()} Point 5 Media. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
