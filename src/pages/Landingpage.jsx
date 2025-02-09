import React from "react";
import Navbar from "../components/Navbar";
import { LampDemo } from "../components/LampEffect";
import { ImagesSliderDemo } from "../components/ImagesSliderDemo";
import { HeroHighlightDemo } from "../components/HeroHighlightDemo";
import Signin from "./Signin";
import About from "./About";
import Footer from '../components/Footer';
import Signup from "./Signup";
import Contact from "./Contact";

const Landingpage = () => {
  return (
    <div>
      {/* Navbar */}
      <Navbar />
      
      {/* Lamp Effect */}
      <LampDemo />

      {/* Image Slider */}
      <ImagesSliderDemo />

      {/* Hero Highlight */}
      <HeroHighlightDemo />
      

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Landingpage;
