"use client";
import React from "react";
import dynamic from "next/dynamic";

const World = dynamic(() => import("./ui/Globe").then((m) => m.World), {
  ssr: false,
});

export function GlobeDemo() {
  const globeConfig = {
    pointSize: 4,
    globeColor: "#062056",
    showAtmosphere: true,
    atmosphereColor: "#FFFFFF",
    atmosphereAltitude: 0.2,
    emissive: "#062056",
    emissiveIntensity: 0.1,
    shininess: 0.9,
    polygonColor: "rgba(255,255,255,0.7)",
    ambientLight: "#38bdf8",
    directionalLeftLight: "#ffffff",
    directionalTopLight: "#ffffff",
    pointLight: "#ffffff",
    arcTime: 3,
    arcLength: 0.9,
    rings: 1,
    maxRings: 3,
    initialPosition: { lat: 4.3193, lng: 101.6841 },
    autoRotate: false,
    autoRotateSpeed: 0.5,
  };
  const colors = ["#06b6d4", "#3b82f6", "#6366f1"];
  const sampleArcs = [
    {
      order: 1,
      startLat: 3.1319,
      startLng: 101.6841,
      endLat: 3.5092, 
      endLng: 101.5248,
      arcAlt: 4,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    
  ];

  return (
    <div className="flex flex-row items-center justify-center py-20 h-screen md:h-screen bg-[#1f1f1f]
    relative max-w-[50vh] mx-20">
        {/* <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 1,
          }}
          className="div"
        >
          <h2 className="text-center text-xl md:text-4xl font-bold text-black dark:text-white">
            We sell soap worldwide
          </h2>
          <p className="text-center text-base md:text-lg font-normal text-neutral-700 dark:text-neutral-200 max-w-md mt-2 mx-auto">
            This globe is interactive and customizable. Have fun with it, and
            don&apos;t forget to share it. :)
          </p>
        </motion.div>
        <div className="absolute w-full bottom-0 inset-x-0 h-40 bg-gradient-to-b pointer-events-none select-none from-transparent dark:to-black to-white z-40" /> */}
        <div className="fixed w-[50vw] h-full top-0 bottom-0 ">
          <World data={sampleArcs} globeConfig={globeConfig} />
          </div>
    </div>
  );
}
