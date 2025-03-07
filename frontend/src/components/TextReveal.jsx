import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const TextReveal = ({ children, className = "", delay = 0 }) => {
  const textRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const text = textRef.current;
    const container = containerRef.current;

    gsap.fromTo(
      text,
      {
        y: "100%",
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 1.2,
        delay,
        ease: "power4.out",
        scrollTrigger: {
          trigger: container,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      }
    );
  }, [delay]);

  return (
    <div ref={containerRef} className={`overflow-hidden ${className}`}>
      <div ref={textRef} className="transform will-change-transform">
        {children}
      </div>
    </div>
  );
};

export default TextReveal;
