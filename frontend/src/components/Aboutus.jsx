import React, { useEffect, useState, memo } from "react";
import { aboutData } from "../content/content";
import LoadingSkeleton from "./LoadingSkeleton";
import TextReveal from "./TextReveal";

const About = memo(() => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAboutData = async () => {
      setLoading(true);
      // Fetch logic...
      setLoading(false);
    };
    fetchAboutData();
  }, []);

  if (loading) return <LoadingSkeleton />;

  return (
    <div id="aboutus" className="w-full h-screen px-4 md:px-8 py-12 relative">
      {/* Version number */}
      <div className="absolute top-4 right-4 text-sm text-gray-500">
        {aboutData.version}
      </div>

      <TextReveal className="text-center mb-6" delay={0.2}>
        <h2 className="text-4xl font-bold">About Us</h2>
      </TextReveal>

      <div className="relative flex overflow-x-hidden  py-8 flex-col items-center justify-center mb-6">
        <div className="animate-marquee whitespace-nowrap">
          <span className="text-8xl font-medium text-black mx-4">• ABOUT</span>
          <span className="text-8xl font-medium text-black mx-4">• ABOUT</span>
          <span className="text-8xl font-medium text-black mx-4">ABOUT</span>
          <span className="text-8xl font-medium text-black mx-4">ABOUT</span>
        </div>

        <div className="absolute top-5 animate-marquee2 whitespace-nowrap">
          <span className="text-8xl font-medium text-black mx-4">• ABOUT</span>
          <span className="text-8xl font-medium text-black mx-4">• ABOUT</span>
          <span className="text-8xl font-medium text-black mx-4">• ABOUT</span>
          <span className="text-8xl font-medium text-black mx-4">• ABOUT</span>
        </div>
      </div>

      {/* Content section */}
      <div className="flex flex-col md:flex-row gap-12 items-start justify-between mb-15">
        {/* Logo and submark */}
        <div className="text-2xl font-bold">{aboutData.logo.text}</div>

        {/* Description */}
        <div className="max-w-xl">
          {aboutData.description}
          <br />
          <button className="mt-8 px-6 py-2 border border-black rounded-full text-sm hover:bg-black hover:text-white transition-all duration-500">
            LEARN MORE
          </button>
        </div>
      </div>

      <hr className="w-full border-2 border-gray-200 my-12" />
    </div>
  );
});

export default About;
