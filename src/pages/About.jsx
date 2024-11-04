import React from 'react';

const About = () => {
  return (
    <div className="bg-black text-white py-10">
      <div className="container mx-auto px-4">
        {/* About Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-4">About Point 5 Media</h1>
          <p className="text-lg text-gray-300">
            Crafting compelling media experiences and impactful stories.
          </p>
        </div>

        {/* About Sections */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Mission Section */}
          <div>
            <h2 className="text-3xl font-semibold mb-4">Our Mission</h2>
            <p className="text-gray-300">
              At Point 5 Media, we aim to elevate brands by creating unique and immersive
              media experiences. Our mission is to deliver content that resonates and
              builds lasting connections.
            </p>
          </div>

          {/* Values Section */}
          <div>
            <h2 className="text-3xl font-semibold mb-4">Our Values</h2>
            <p className="text-gray-300">
              Integrity, creativity, and excellence are at the core of everything we do.
              We believe in pushing boundaries to craft innovative solutions tailored to
              our clients' needs.
            </p>
          </div>
        </div>

        {/* Vision Section */}
        <div className="mt-12">
          <h2 className="text-3xl font-semibold mb-4 text-center">Our Vision</h2>
          <p className="text-center text-gray-300 mx-auto max-w-3xl">
            To be a leading media production company known for our commitment to quality
            and our ability to inspire audiences worldwide.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
