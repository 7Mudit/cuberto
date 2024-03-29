"use client";
import React, { useRef, useEffect, useState } from "react";
import { Roboto_Flex } from "next/font/google";
import gsap from "gsap";
import { projectdata1 } from "@/data/projectdata";
import { FreeMode } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import Image from "next/image";
import { resourcedata } from "@/data/resourcesdata";

const roboto = Roboto_Flex({
  subsets: ["latin"],
  style: ["normal"],
  weight: ["400"],
});

const Inspo = () => {
  const movingDivRef = useRef(null);
  let lastScrollTop = 0; // Track the last scroll position
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const element = movingDivRef.current;
    if (!element) return;

    // Define the animation but don't play it immediately
    const animation = gsap.to(element, {
      animationTimingFunction: "ease",
      duration: 10,
      repeat: 1,
    });

    const handleScroll = () => {
      const st = document.documentElement.scrollTop;
      if (st > lastScrollTop) {
        // Downscroll code
        animation.play();
      } else {
        // Upscroll code
        animation.reverse();
      }
      lastScrollTop = st <= 0 ? 0 : st;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="w-full h-[700px] flex flex-col items-center justify-center gap-[100px] py-[100px]">
      <div
        ref={movingDivRef}
        className="flex flex-row w-auto justify-center items-center"
        style={{ whiteSpace: "nowrap" }} // Preventing text from wrapping
      >
        <p className={`${roboto.className} !italic text-[161px]`}>
          New Day - New Inspo.
        </p>
        <video
          className="pointer-events-none ml-4 w-[237px] h-[141px] rounded-[45%] object-cover" // Corrected width and height
          autoPlay
          loop
          muted
          playsInline={true}
        >
          <source src="/assets/inspoVideo.mp4" type="video/mp4" />
        </video>
        <p className={`${roboto.className} !italic text-[161px]`}>
          New Day - New Inspo.
        </p>
        <video
          className="pointer-events-none ml-4 w-[237px] h-[141px] rounded-[45%] object-cover" // Corrected width and height
          autoPlay
          loop
          muted
          playsInline={true}
        >
          <source src="/assets/inspoVideo.mp4" type="video/mp4" />
        </video>
      </div>
    </div>
  );
};

export default Inspo;
