import React from "react";
import { serviceItems } from "../content/content";
import { lazy, Suspense } from "react";
import { Link, useNavigate } from "react-router-dom";
import TextReveal from "./TextReveal";

const OptimizedImage = lazy(() => import("./OptimizedImage"));

const Services = () => {
  const navigate = useNavigate();

  const handleCardClick = (serviceTitle) => {
    navigate("/appointments", { state: { selectedService: serviceTitle } });
  };

  return (
    <section id="services" className="py-6 mb-10">
      {/* Services header with TextReveal */}
      <TextReveal className="text-center mb-6" delay={0.2}>
        <h2 className="text-4xl font-bold">Our Services</h2>
      </TextReveal>

      <div className="relative flex overflow-x-hidden py-8 flex-col items-center justify-center mb-6">
        <div className="animate-marquee whitespace-nowrap">
          <span className="text-8xl font-medium text-black mx-4">
            • SERVICES
          </span>
          <span className="text-8xl font-medium text-black mx-4">
            • SERVICES
          </span>
          <span className="text-8xl font-medium text-black mx-4">
            • SERVICES
          </span>
          <span className="text-8xl font-medium text-black mx-4">
            • SERVICES
          </span>
        </div>

        <div className="absolute top-5 animate-marquee2 whitespace-nowrap">
          <span className="text-8xl font-medium text-black mx-4">
            • SERVICES
          </span>
          <span className="text-8xl font-medium text-black mx-4">
            • SERVICES
          </span>
          <span className="text-8xl font-medium text-black mx-4">
            • SERVICES
          </span>
          <span className="text-8xl font-medium text-black mx-4">
            • SERVICES
          </span>
        </div>
      </div>

      {/* Services grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 sm-px-7 px-3 cursor-pointer ">
        {serviceItems.map((service, index) => (
          <div
            key={service.title}
            className="bg-white rounded-3xl shadow-md p-4 transition-all duration-300 group"
            onClick={() => handleCardClick(service.title)}
          >
            {/* Service Title */}
            <div className="mb-3">
              <TextReveal
                className="text-2xl font-bold text-gray-800 font-sans"
                delay={index * 0.1}
              >
                {service.title}
              </TextReveal>
              {/* Description - Only visible on hover */}
              <TextReveal
                className="text-[12px] text-gray-400 mt-1"
                delay={index * 0.1 + 0.1}
              >
                {service.description}
              </TextReveal>
            </div>

            {/* Image Container */}
            <div className="relative h-[200px] rounded-2xl overflow-hidden bg-gray-100">
              <Suspense
                fallback={
                  <div className="absolute inset-0 bg-gray-200 animate-pulse" />
                }
              >
                <OptimizedImage
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  width={400}
                  height={400}
                />
              </Suspense>
              {/* Price and Book Now */}
              <div className="flex absolute bottom-0 items-center justify-between mt-3 w-full px-4 py-2 bg-gradient-to-t from-black">
                <span className="text-2xl font-semibold text-white">
                  {service.price}
                </span>
                <div
                  onClick={(e) => {
                    handleCardClick(service.title);
                  }}
                  className="p-3 rounded-full group hover:bg-black transition-all duration-500 cursor-pointer flex items-center gap-2"
                >
                  <span className="text-white ">Book Now</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6  text-white"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
