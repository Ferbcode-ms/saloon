import React from "react";
import { footerData } from "../content/content";
import { aboutData } from "../content/content";

const Footer = () => {
  return (
    <>
      <footer className="bg-black text-white p-10 pt-20 mt-auto">
        <div className="container mx-auto px-4">
          <div className="w-[90%] mx-auto flex flex-col md:flex-row gap-10 md:gap-20">
            {/* Left Section - Logo and Email */}
            <div className="flex flex-col gap-4 md:w-1/3">
              <h1 className="text-3xl md:text-4xl font-bold">
                {aboutData.logo.text}
              </h1>
              <div className="space-y-4">
                <h2 className="text-sm font-medium">
                  {footerData.stayInKnow.title}
                </h2>
                <div className="border-b border-gray-700 pb-2"></div>
                <div className="text-gray-400 space-y-2">
                  <p className="text-sm">+1 (555) 123-4567</p>
                  <p className="text-sm">123 Salon Street, Beauty District</p>
                  <p className="text-sm">New York, NY 10001</p>
                </div>
              </div>
            </div>

            {/* Right Section - Links and Description */}
            <div className="md:w-2/3">
              <div className="mb-10">
                <p className="text-2xl md:text-3xl text-gray-300 font-extrabold">
                  {footerData.stayInKnow.description}
                </p>
              </div>

              {/* Footer Links Grid */}
              <div className="grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-10">
                {/* Social Links */}
                <div>
                  <h3 className="text-sm font-medium mb-4">
                    {footerData.links.social.title}
                  </h3>
                  <ul className="space-y-2">
                    {footerData.links.social.items.map((item) => (
                      <li key={item.id}>
                        <a
                          href={item.href}
                          className="text-gray-400 hover:text-white transition-colors text-sm"
                        >
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Pages Links */}
                <div>
                  <h3 className="text-sm font-medium mb-4">
                    {footerData.links.pages.title}
                  </h3>
                  <ul className="space-y-2">
                    {footerData.links.pages.items.map((item) => (
                      <li key={item.id}>
                        <a
                          href={item.href}
                          className="text-gray-400 hover:text-white transition-colors text-sm"
                        >
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Copyright Section */}
      <div className="bg-black border-t border-gray-800">
        <p className="p-5 text-center text-gray-400 text-sm">
          © {new Date().getFullYear()} {aboutData.logo.text}. All rights
          reserved
        </p>
      </div>
    </>
  );
};

export default Footer;
