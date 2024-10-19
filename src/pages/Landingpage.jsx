import React from "react";
import Navbar from "../components/Navbar";
import { LampDemo } from "../components/LampEffect"; // Named import


const Landingpage = () => {
  
  return (
    
    <div>
      {/* Navbar */}
      <Navbar />
      
      {/* Lamp Effect */}
      <LampDemo />
      {/* Footer */}
    </div>
  );
}

export default Landingpage;
