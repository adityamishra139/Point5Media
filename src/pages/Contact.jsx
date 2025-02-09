import React from 'react';
import Footer from '/src/components/Footer';
import Navbar from '/src/components/Navbar';
import { FloatingDockDemo } from '/src/components/FloatingDockDemo.jsx';
import { FaPhoneAlt } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";

const Contact = () => {
  return (
    <div className="flex flex-col min-h-screen bg-black text-white text-xl">
      
      <Navbar className="mb-10" />

      <div className="flex flex-col items-center justify-center flex-grow px-4">
        <h1 className="text-4xl font-bold mb-8 text-green-500">Get in Touch</h1>
        
        <p className="text-center font-bold mb-4">
          We would love to hear from you!
        </p>
        
        <p className="text-center max-w-md mb-8">
          Follow us on social media or reach out via our channels.
        </p>

      
        <div className="flex mb-10">
          <FloatingDockDemo />
        </div>
        
        <div className="space-y-4 -mt-96 text-center">
          <div className="flex items-center justify-center">
            <FaPhoneAlt className="text-green-500" />
            <span className="ml-2">+91 7355415186</span>
          </div>
          <div className="flex items-center justify-center">
            <IoMdMail className="text-green-500" />
            <span className="ml-2">point5media2022@gmail.com</span>
          </div>
          <div className="flex items-center justify-center">
            <FaLocationDot className="text-green-500" />
            <span className="ml-2">Plot no. 575/A Manas Nagar Extension Durgakund Varanasi</span>
          </div>
        </div>
      </div>

      {/* Footer with increased top margin */}
      <Footer className="mt-12" />
    </div>
  );
};

export default Contact;
