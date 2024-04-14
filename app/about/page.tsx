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
          <div className="flex items-center gap-6">
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
              <button className="work-button  scale-[40vw] ">
                <span className="text-[10vw] ">CREATE</span>
              </button>
            </motion.div>
          </div>
          <motion.p
            initial="hidden"
            animate="visible"
            variants={slideInFromBottom(0.15)}
            className="text-white"
          >
            MEMORABLE
          </motion.p>
          <motion.div
            initial="hidden"
            animate="visible"
            variants={slideInFromBottom(0.2)}
            className="flex items-end gap-3 sm:gap-5 md:gap-10"
          >
            <div className="w-[12vw] sm:w-[20vw] md:w-[80px] h-1 md:h-2 bg-white animate-pulse"></div>
            <p className="text-white ">WEBSITES</p>
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
              <source src="/assets/workintrovideo.mp4" type="video/mp4" />
            </video>
          </div>

          <p className="text-white text-[7vw] sm:text-[10vw] md:text-6xl px-3 sm:px-10 pb-10">
            As a tight-knit team of experts, we create memorable and emotional
            websites, digital experiences, and native apps.
          </p>
        </div>

        <div className="w-full">
          <div>{/* <Reel /> */}</div>
        </div>

        <div className="bg-black px-2 lg:px-20 py-20 flex flex-col gap-10">
          <div className="flex flex-col">
            <p className="text-[13vw] text-white">SMART</p>
            <p className="text-[13vw] text-white">DEVELOPMENT</p>
          </div>

          <div className="flex justify-center bg-gray-800 rounded-full py-10">
            <video
              autoPlay
              loop
              muted
              className="w-5/12  rounded-full"
              playsInline={true}
            >
              <source
                src="/assets/smartdevelopmentvideo.webm"
                type="video/webm"
              />
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
            <source src="/assets/backgroundvideo.mp4" type="video/mp4" />
          </video>
          <div className="absolute top-0 left-0 py-2 lg:py-32 px-2 lg:px-10 z-10 flex flex-col">
            <div className="w-full text-[10vw]">
              <p>BRAND</p>
              <p>IDENTITIES</p>
              <div className="w-full lg:py-20 lg:px-10">
                <div className="h-0.5 w-full bg-black"></div>
              </div>
            </div>

            <div className="flex justify-end py-10 sm:px-10">
              <div className="w-8/12 flex items-start gap-5 md:gap-10">
                <div className="flex gap-2 text-[2vw] lg:text-xl">
                  <p>BRAND</p>
                  <p>IDENTITIES</p>
                </div>
                <p className="text-[2vw] lg:text-[2.5vw]">
                  The only thing that matters in a brand is what you feel when
                  interacting with a product. We assist established and emerging
                  brands in creating identities that reflect the brand&apos;s
                  true identity.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full flex flex-col gap-5 md:gap-10 py-5 lg:py-32 px-2 lg:px-20">
          <div className="flex flex-col text-[10vw]">
            <p>ART</p>
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
              <source src="/assets/artdirectionvideo.webm" type="video/webm" />
            </video>
          </div>
        </div>

        <div className="w-full bg-[#e0fd60]">{/* <Imagereel /> */}</div>

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
