import React from "react";
import Navbar from "../components/Navbar";
import { LampDemo } from "../components/LampEffect"; // Named import
import { ImagesSliderDemo } from "../components/ImagesSliderDemo";



const Landingpage = () => {
  
  return (
    
    <div>
      {/* Navbar */}
      <Navbar />
      
      {/* Lamp Effect */}
      <LampDemo />


      {/* Image Slider */}

      <ImagesSliderDemo />

      {/* Footer */}
    </div>
  );
}

export default Landingpage;
