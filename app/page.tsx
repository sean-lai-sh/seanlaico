'use client';
import AboutPage from "@/components/AboutPage";
import Hero from "@/components/Hero";
import Loader  from "@/components/Loader";
import { motion } from "framer-motion";
import React, { useEffect, useState, useRef } from "react";

export default function Home() {
  /// Below is a code snippet that disables throughout all components the scroll, thereby forcing the user to wait for the loading animation to finish :)
  const [isLoading, setIsLoading] = useState(true);
  const aboutMeRef = useRef(null); // Ref for the about me section
  useEffect(() => {
    if (typeof document !== "undefined") {
      // Disable scrolling while loading
      if (isLoading) {
        document.body.style.overflow = "hidden";
      } else {
        document.body.style.overflowY = ""; // Reset to default
      }
    }

    // Clean up on component unmount
    return () => {
      if (typeof document !== "undefined") {
        document.body.style.overflow = "";
      }
    };
  }, [isLoading]);

  useEffect(() => {
    // Simulate loading for 4 seconds
    const timer = setTimeout(() => {
      setIsLoading(false); // Stop loading
    }, 4000);

    return () => clearTimeout(timer); // Clean up timer on unmount
  }, []);

  const containerUp = {
          hidden: {
              clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
          
          },
          show: {
              clipPath: "polygon(0 0, 100% 0, 100% 0%, 0 0%)",
              display: "none",
              transition: {
                  delay:4.2,
                  duration: 0.6,
                  ease: "easeInOut",
              }
          }
      }
  
  return (
      <>
        <Loader />
        <motion.div className="bg-[#05051d] overflow-x-clip absolute inset-0 z-20 mix-blend-exclusion" variants={containerUp} initial="hidden" animate="show" />
        <div className="w-full overflow-x-clip">
          
          <Hero nextSectionRef={aboutMeRef} />
          <AboutPage ref={aboutMeRef} />
          {/* <GlobeDemo /> */}
        </div>
      </>
  );
}
