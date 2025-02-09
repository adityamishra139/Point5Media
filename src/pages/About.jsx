import { motion } from "framer-motion";
import { Users, Target, Award, ThumbsUp } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import introVideo from "../assets/Intro.mp4";

const teamMembers = [
  { name: "John Doe", role: "Founder & CEO", image: "/placeholder.svg" },
  { name: "Jane Smith", role: "Creative Director", image: "/placeholder.svg" },
  { name: "Mike Johnson", role: "Lead Photographer", image: "/placeholder.svg" },
  { name: "Sarah Brown", role: "Digital Marketing Specialist", image: "/placeholder.svg" },
];

const reasons = [
  { title: "Experienced Team", description: "Our team brings years of expertise to every project.", icon: <Users className="w-6 h-6" /> },
  { title: "Cutting-edge Technology", description: "We use the latest tech to deliver outstanding results.", icon: <Target className="w-6 h-6" /> },
  { title: "Award-winning Work", description: "Recognized with multiple industry awards.", icon: <Award className="w-6 h-6" /> },
  { title: "Client Satisfaction", description: "We prioritize client satisfaction above all.", icon: <ThumbsUp className="w-6 h-6" /> },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col bg-black text-white">
      <Navbar />

      {/* Hero Section with Background Video */}
      <div className="relative h-[80vh] flex items-center justify-center">
      <video autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover brightness-50">
  <source src={introVideo} type="video/mp4" />
</video>
        <div className="relative z-10 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-5xl md:text-7xl font-extrabold"
          >
            About Point 5 Media
          </motion.h1>
          <div className="w-32 h-1 bg-[#9FE870] mx-auto mt-4"></div>
        </div>
      </div>

      {/* Company Overview */}
      <section className="py-20 bg-gradient-to-b from-black to-zinc-900">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-8">Who We Are</h2>
          <p className="text-gray-400 max-w-3xl mx-auto">
            Point 5 Media is a creative powerhouse dedicated to exploring new realms of creativity. We specialize in branding, digital marketing, social media management, photography, videography, and graphic design.
          </p>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-8">Our Mission</h2>
          <motion.p 
            initial={{ opacity: 0, scale: 0.9 }} 
            animate={{ opacity: 1, scale: 1 }} 
            transition={{ duration: 1 }} 
            className="text-[#9FE870] text-xl font-semibold max-w-3xl mx-auto"
          >
            "To empower businesses and individuals by creating captivating visual stories and innovative digital solutions that inspire, engage, and drive success."
          </motion.p>
        </div>
      </section>

      {/* Meet the Team */}
      <section className="py-20 bg-gradient-to-b from-zinc-900 to-black">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-16">Meet Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div 
                key={index} 
                initial={{ opacity: 0, y: 20 }} 
                animate={{ opacity: 1, y: 0 }} 
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="p-6 bg-zinc-800 rounded-lg shadow-lg hover:scale-105 transition-transform"
              >
                <div className="relative w-32 h-32 mx-auto mb-4 overflow-hidden rounded-full border-4 border-[#9FE870]">
                  <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                </div>
                <h3 className="text-xl font-semibold">{member.name}</h3>
                <p className="text-[#9FE870]">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-16">Why Choose Point 5 Media</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {reasons.map((reason, index) => (
              <motion.div 
                key={index} 
                initial={{ opacity: 0, x: -20 }} 
                animate={{ opacity: 1, x: 0 }} 
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="flex items-center p-6 bg-zinc-800 rounded-lg shadow-lg hover:bg-zinc-700 transition-colors"
              >
                <div className="mr-4 text-[#9FE870]">{reason.icon}</div>
                <div>
                  <h3 className="text-xl font-semibold">{reason.title}</h3>
                  <p className="text-gray-400">{reason.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
