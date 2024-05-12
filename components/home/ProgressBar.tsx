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
      <h1 className="text-black font-semibold leading-[40px] text-[40px] pl-[30px]">
        Build your dream house
      </h1>
      <div ref={ref} className="h-full p-10 overflow-hidden">
        {/* Animated progress bar with gradient */}
        <motion.div
          className="h-[50px] relative bg-gradient-to-r from-red-500 to-green-500"
          style={{ width }}
        />
        {/* Icon and text for sad house */}
        <div
          style={{ position: "absolute", left: "100px", top: "200px" }}
          className="flex flex-col items-center justify-center"
        >
          <motion.img
            src="/assets/sad.jpeg"
            style={{
              width: "150px",
              height: "150px",
              opacity: opacitySad,
            }}
          />
          <motion.div
            style={{ color: "black", marginTop: "5px", opacity: opacitySad }}
            className="font-matterRegular text-[16px] leading-[25px]"
          >
            My Crappy House
          </motion.div>
        </div>
        {/* Icon and text for happy house */}
        <div
          style={{ position: "absolute", right: "100px", top: "200px" }}
          className="flex flex-col items-center justify-center"
        >
          <motion.img
            src="/assets/happy.jpeg"
            style={{
              width: "150px",
              height: "150px",
              opacity: opacityHappy,
            }}
          />
          <motion.div
            style={{ color: "black", marginTop: "5px", opacity: opacityHappy }}
            className="font-matterRegular text-[16px] leading-[25px]"
          >
            My Dream House
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ProgressBar;
