import React, { useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";
import "./Progress.css";

const ProgressBar = () => {
  const ref = useRef(null);

  // Hook to get scroll progress
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["350px end", "end end"],
  });

  // Transform the scrollYProgress into a width percentage and a left offset for the icon
  const width = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const left = useTransform(
    scrollYProgress,
    [0, 1],
    ["0%", "calc(100% - 50px)"]
  ); // Assumes icon width of 50px

  // Opacity changes based on scroll progress, toggle between icons
  const opacitySad = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const opacityHappy = useTransform(scrollYProgress, [0.5, 1], [0, 1]);

  return (
    <div className="h-[500px] relative">
      <h1 className="text-black font-matterRegular  leading-[40px] text-[50px] pl-[30px]">
        Build your Dream House
      </h1>
      <div ref={ref} className="h-full p-6 sm:p-10 overflow-hidden">
        {/* Animated progress bar with gradient */}
        <motion.div
          className="h-[50px] sm:h-[80px] relative bg-red-900"
          style={{ width }}
        />

        {/* Icon and text for sad house */}
        <div className="flex absolute sm:left-[100px] top-[200px] left-[30px] flex-col gap-6 items-center justify-center">
          <motion.img
            src="/assets/logo.png"
            // style={{
            //   opacity: opacitySad,
            // }}
            className="sm:w-[200px] w-[100px] h-[50px] sm:h-[80px]"
            alt="logo"
          />
        </div>
        {/* Icon and text for happy house */}
        <div className="flex flex-col absolute  sm:right-[100px] top-[200px] right-[30px] gap-6 items-center justify-center">
          <motion.img
            src="/assets/dream_house.jpeg"
            style={{
              opacity: opacityHappy,
            }}
            className="w-[70px] h-[53px] shadow-xl object-contain rounded-xl sm:w-[250px] sm:h-[200px] "
          />
        </div>
      </div>
    </div>
  );
};

export default ProgressBar;
