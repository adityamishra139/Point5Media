import { Camera, Palette, Share2, Users, Image, Video, Heart } from "lucide-react";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const services = [
  { title: "Branding", description: "Build your brand identity with our comprehensive branding solutions.", icon: <Palette className="w-8 h-8" /> },
  { title: "Digital Marketing", description: "Boost your online presence with strategic digital marketing campaigns.", icon: <Share2 className="w-8 h-8" /> },
  { title: "Social Media Management", description: "Engage your audience with professional social media management.", icon: <Users className="w-8 h-8" /> },
  { title: "Product & Model Photoshoot", description: "Professional photography services for products and models.", icon: <Camera className="w-8 h-8" /> },
  { title: "Graphic Designing", description: "Creative graphic design solutions for all your visual needs.", icon: <Image className="w-8 h-8" /> },
  { title: "Event Photography/Videography", description: "Capture your special events with professional photo and video coverage.", icon: <Video className="w-8 h-8" /> },
  { title: "Wedding Photography/Videography", description: "Premium wedding photography and videography services.", icon: <Heart className="w-8 h-8" /> },
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen flex flex-col bg-black text-white">
      <Navbar />

      {/* Hero Video Section */}
      <div className="relative">
        <video className="w-full h-[60vh] object-cover" src="/videos/Intro.mp4" autoPlay muted loop>
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center">
          <motion.h1 
            className="text-4xl md:text-6xl font-bold text-white text-center drop-shadow-lg"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Let's Explore New Realms of Creativity!
          </motion.h1>
          <motion.div 
            className="w-32 h-1 bg-[#9FE870] mt-4"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1 }}
          />
        </div>
      </div>

      {/* Services Section */}
      <motion.div 
        className="py-20 relative overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        {/* Gradient Background */}
        <div className="absolute top-0 left-0 w-full h-20 bg-[#9FE870] opacity-10" style={{ clipPath: "ellipse(70% 100% at 50% 0%)" }} />
        
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16 text-white">Our Services</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div 
                key={index} 
                className="group relative bg-zinc-900 bg-opacity-40 rounded-lg p-6 backdrop-blur-lg transition-all duration-300 hover:bg-opacity-70 shadow-xl"
                whileHover={{ scale: 1.05 }}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                {/* Decorative Highlight */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-[#9FE870] opacity-5 rounded-bl-full transition-all duration-300 group-hover:opacity-10" />
                
                <div className="relative z-10">
                  <div className="text-[#9FE870] mb-4">{service.icon}</div>
                  <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
                  <p className="text-gray-400">{service.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Promotional Badge */}
          <motion.div 
            className="mt-16 flex justify-center"
            whileHover={{ scale: 1.1 }}
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ repeat: Infinity, duration: 2 }}
          >
            <div className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-full font-semibold transform rotate-[-2deg] shadow-lg">
              Flat 20% Off For VN Members
            </div>
          </motion.div>
        </div>
      </motion.div>

      <Footer />
    </div>
  );
}
