'use client';
import AboutPage from "@/components/AboutPage";
import Hero from "@/components/Hero";
import Loader  from "@/components/Loader";
import { motion } from "framer-motion";
import React, { useEffect, useState, useRef } from "react";

export default function Home({loaderScreen} : {loaderScreen : string}) {
  const [isJavaScriptEnabled, setIsJavaScriptEnabled] = useState(false);
  /// Below is a code snippet that disables throughout all components the scroll, thereby forcing the user to wait for the loading animation to finish :)
  const [isLoading, setIsLoading] = useState(true);
  const aboutMeRef = useRef(null); // Ref for the about me section
  useEffect(() => {
    setIsJavaScriptEnabled(true);
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

  const [isHydrated, setisHydrated] = useState(false);
    useEffect(() => {
        setisHydrated(true);
        }
    , []);
    
    if(!isHydrated) {
        return (
        <div dangerouslySetInnerHTML={{__html: loaderScreen}} />)
    }

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
      <div className="w-screen bg-[#0c0c0c] h-auto">
        {isJavaScriptEnabled ? 
        <><Loader />
  
        <div className="w-full overflow-x-clip">
          
          <Hero nextSectionRef={aboutMeRef} jsDisabled={isJavaScriptEnabled} />
          <AboutPage ref={aboutMeRef} />
          {/* <GlobeDemo /> */}
        </div>
        </>
        :
        <noscript>
        <div className="w-full overflow-x-clip">
          
        <Hero nextSectionRef={aboutMeRef} jsDisabled={isJavaScriptEnabled} />
        <AboutPage ref={aboutMeRef} />
        {/* <GlobeDemo /> */}
      </div></noscript>}
      
        
      </div>
  );
}
