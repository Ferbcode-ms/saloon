import React from "react";
import { heroData, bgImage, previewImage } from "../content/content";
import TextReveal from "./TextReveal"; // Import TextReveal
// Importing heroData
const Hero = () => {
  return (
    <div className="relative z-10">
      {/* Main Hero Section */}
      <main className="grid grid-cols-1 md:grid-cols-[1fr_2fr_1fr] gap-10 m-8 w-[90%] mx-auto">
        {/* Left Column - Preview Image and Followers */}
        <div className="flex flex-col">
          <img
            src={previewImage}
            alt="Preview"
            className="w-full rounded-lg h-[200px] object-cover shadow-2xl"
          />
          {/* Followers Section */}
          <div className="flex items-center gap-4 mt-5">
            <div className="flex">
              {heroData.followers.avatars.map((avatar, index) => (
                <img
                  key={index}
                  src={avatar}
                  alt={`Follower ${index + 1}`}
                  className="w-8 h-8 rounded-full border-2 border-white -ml-2.5 first:ml-0"
                />
              ))}
            </div>
            <p className="text-sm">Join our community!</p>
          </div>
        </div>

        {/* Center Column - Main Title with TextReveal */}
        <div className="flex flex-col items-center md:text-left ml-0 md:ml-10">
          <TextReveal
            className="text-[8vw] md:text-[4vw] lg:text-[5vw] leading-[0.9] font-extrabold tracking-tighter"
            delay={0.2}
          >
            {heroData.title.line1}
            <br />
            {heroData.title.line2}
            <br />
            {heroData.title.line3}
          </TextReveal>
        </div>

        {/* Right Column - Description and Arrow */}
        <div className="flex flex-col items-end justify-between text-center md:text-left">
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
            Discover premium salon services tailored to your beauty needs.
          </p>
          {/* Decorative Arrow */}
          <div className="flex items-center justify-center md:justify-end rotate-[270deg] w-20 h-20 mt-15 mr-30 border-2 rounded-full p-5 border-r-gray-200">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
              <path
                d="M32 15H3.41l8.29-8.29-1.41-1.42-10 10a1 1 0 0 0 0 1.41l10 10 1.41-1.41L3.41 17H32z"
                data-name="4-Arrow Left"
              />
            </svg>
          </div>
        </div>
      </main>
      <div className="absolute md:static top-[55%] -z-10 left-0 w-full h-full">
        <img
          src={bgImage}
          alt="Background"
          className="w-full h-[350px] object-cover"
        />
      </div>
    </div>
  );
};

export default Hero;
