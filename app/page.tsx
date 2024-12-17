'use client';
import AboutPage from "@/components/AboutPage";
import Hero from "@/components/Hero";
import Loader  from "@/components/Loader";
import React, { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
export default function Home() {
  const [isJavaScriptEnabled, setIsJavaScriptEnabled] = useState(false);
  /// Below is a code snippet that disables throughout all components the scroll, thereby forcing the user to wait for the loading animation to finish :)
  const [isLoading, setIsLoading] = useState(true);
  const aboutMeRef = useRef(null); // Ref for the about me section
  useEffect(() => {
    // Simulate loading for 4 seconds
    const timer = setTimeout(() => {
      setIsLoading(false); // Stop loading
    }, 4000);
    return () => clearTimeout(timer); // Clean up timer on unmount
  }, []);
  useEffect(() => {
    setIsJavaScriptEnabled(true);
    if (typeof document !== "undefined") {
      // Disable scrolling while loading
      if (isLoading) {
        document.body.style.overflow = "hidden";
      } else {
        document.body.style.overflowY = ""; // Reset to default
        document.body.style.overflowX = "hidden"; // Reset to default
      }
    }
    // Clean up on component unmount
    return () => {
      if (typeof document !== "undefined") {
        document.body.style.overflowY = "";
      }
    };
  }, [isLoading]);  

  const containerUp = {
      hidden: {
          clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
      },
      show: {
          clipPath: "polygon(0 0, 100% 0, 100% 0%, 0 0%)",
          display: "none",
          transition: {
              delay: 3.3,
              duration: 0.6,
              ease: "easeInOut",
          }
      }
  }
  /// Explaination : the loading tag that disables scroll serves perfectly as a boolean gate to prevent loader from showing up during no JS mode
  return (
      <main className="bg-[#0c0c0c] overflow-x-hidden">
          {isLoading && <><Loader />
          <motion.div className="bg-[#031a37] w-screen h-screen" 
            variants={containerUp}
            initial="hidden"
            animate="show"/></>}
          <div className="w-full overflow-x-clip">
            <Hero nextSectionRef={aboutMeRef} jsDisabled={isJavaScriptEnabled} />
            <AboutPage ref={aboutMeRef} />
          {/* <GlobeDemo /> */}
          </div>
      </main>
  );
}
