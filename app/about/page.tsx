"use client";
import React, { useEffect, useState, useRef } from "react";
import { useScroll, motion, useMotionValueEvent } from "framer-motion";
// import { useInView } from 'react-intersection-observer';
import { slideInFromBottom } from "@/utils/motion";

import { useInView } from "framer-motion";

import Footer from "@/components/home/Footer";
import { projectdata1 } from "../../data/projectdata";

import Navbar from "@/components/shared/Navbar";
import StickyCursor from "@/components/stickyCursor";

const Page = () => {
  const { scrollYProgress } = useScroll();
  const { scrollY } = useScroll();
  // const { ref, inView } = useInView({ triggerOnce: true });

  const [hidden, sethidden] = useState(false);

  const artref = useRef(null);

  const artInView = useInView(artref);

  useEffect(() => {
    console.log("Element is in view: ", artInView);
  }, [artInView]);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();

    if (latest > previous!) {
      sethidden(true);
    } else {
      sethidden(false);
    }
  });
  const stickyElement = useRef(null);
  const [isActive, setIsActive] = useState(false);
  const [isWhiteCursor, setIsWhiteCursor] = useState(true);
  const [isWhiteCursor2, setIsWhiteCursor2] = useState(true);
  return (
    <>
      <Navbar
        ref={stickyElement}
        // @ts-ignore
        isActive={isActive}
        setIsActive={setIsActive}
      />
      {/* <HeaderMagnetic ref={stickyElement} /> */}
      {isWhiteCursor && isWhiteCursor2 && (
        <StickyCursor stickyElement={stickyElement} />
      )}

      <div className={` ${isActive ? "blurEffect" : ""}`}>
        <div className="introtext overflow-x-hidden w-full flex flex-col text-[13vw] lg:text-9xl bg-black px-10 md:px-20 py-20">
          <div className="flex sm:flex-row flex-col sm:items-center gap-6">
            <motion.p
              initial="hidden"
              animate="visible"
              variants={slideInFromBottom(0.8)}
              className="text-white"
            >
              WE
            </motion.p>
            <motion.div
              initial="hidden"
              animate="visible"
              variants={slideInFromBottom(0.12)}
              className="flex"
            >
              <button className=" w-auto  bg-[#e0fd60] rounded-full px-8 py-2">
                <p className="text-[11vw] lg:text-8xl ">CREATE</p>
              </button>
            </motion.div>
          </div>

          <motion.div
            initial="hidden"
            animate="visible"
            variants={slideInFromBottom(0.2)}
            className="flex items-baseline gap-3 sm:gap-5 md:gap-10"
          >
            <div className="w-[12vw] sm:w-[15vw] md:w-[80px] h-1 md:h-2 bg-white animate-pulse"></div>
            <p className="text-white ">HOMES</p>
          </motion.div>
        </div>

        <div className="w-full bg-black flex flex-col items-center gap-20 px-2 md:px-20  sm:py-20">
          <div className="w-full flex justify-end">
            <video
              autoPlay
              loop
              muted
              className=" rounded-full"
              playsInline={true}
            >
              <source src="/assets/2.mp4" type="video/mp4" />
            </video>
          </div>

          <p className="text-white text-[7vw] sm:text-[10vw] md:text-6xl px-3 sm:px-10 pb-10">
            As a tight-knit team of experts, we create memorable and emotional
            INFRASTRUCTURE.
          </p>
        </div>

        <div className="bg-black px-2 lg:px-20 py-20 flex flex-col gap-10">
          <div className="flex flex-col">
            <p className="text-[13vw] text-white">SMART</p>
            <p className="text-[13vw] text-white">DEVELOPMENT</p>
          </div>

          <div className="flex justify-center bg-gray-800 rounded-full overflow-hidden">
            <video
              autoPlay
              loop
              muted
              className="w-full lg:max-h-[233px] object-cover rounded-full"
              playsInline={true}
            >
              <source src="/assets/5.mp4" type="video/mp4" />
            </video>
          </div>
        </div>

        <div className="w-full relative ">
          <video
            autoPlay
            loop
            muted
            className="w-full h-full"
            playsInline={true}
          >
            <source src="/assets/6.mp4" type="video/mp4" />
          </video>
          <div className="absolute top-10 left-0 py-2 lg:py-32 px-2 lg:px-10 z-10 flex flex-col">
            <div className="w-full text-[10vw] text-white">
              <p>HOME</p>
              <p>IDENTITIES</p>
            </div>
          </div>
        </div>

        <div className="w-full flex flex-col gap-5 md:gap-10 py-5 lg:py-32 px-2 lg:px-20">
          <div className="flex flex-col text-[10vw]">
            <p>INVESTMENT</p>
            <p>DIRECTION</p>
          </div>
          <div className="w-full flex justify-center scale-x-105">
            <video
              autoPlay
              loop
              muted
              className="w-10/12 rounded-full  lg:rounded-[100px] "
              playsInline={true}
            >
              <source src="/assets/7.mp4" type="video/webm" />
            </video>
          </div>
        </div>

        <div className="w-full bg-black py-20 px-5 md:px-10">
          <div className="flex flex-col gap-10   md:px-10">
            <span className="text-white text-[20vw] sm:text-8xl font-sans">
              COOLEST
            </span>
            <div className="flex md:flex-row flex-col  md:items-center gap-10">
              <video
                className="pointer-events-none w-[160px] h-auto rounded-[40%] object-cover"
                autoPlay
                loop
                muted
                playsInline={true}
              >
                <source
                  src="/assets/coolestprojectvideo.mp4"
                  type="video/mp4"
                />
              </video>
              <span className="text-white italic font-thin text-[20vw] sm:text-8xl font-sans">
                PROJECT
              </span>
            </div>
          </div>

          <div className="w-full flex flex-col  gap-5 md:py-10">
            {projectdata1.map((project, index) => (
              <div key={index} className="relative ">
                <video
                  className="w-full  rounded-3xl "
                  autoPlay
                  loop
                  muted
                  playsInline={true}
                >
                  <source
                    src={project.video}
                    type="video/mp4"
                    className="w-full "
                  />
                </video>

                <div className="absolute z-10 top-1/4  ">
                  {/* <ProjectReel /> */}
                </div>
              </div>
            ))}
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
};

export default Page;
