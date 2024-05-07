import React, { useEffect, useRef, useState } from "react";
import { resourcedata } from "../../data/resourcesdata";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { FreeMode } from "swiper/modules";
import Image from "@/node_modules/next/image";
import Cursor from "../../components/home/Cursor";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/src/all";

const Resources = ({ isWhiteCursor }: any) => {
  const [isActive, setIsActive] = useState(false);
  const sectionRef = useRef(null);
  const triggerRef = useRef(null);

  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    const pin = gsap.fromTo(
      sectionRef.current,
      {
        translateX: 0,
      },
      {
        translateX: window.innerWidth <= 450 ? "-700vw" : "-400vw",
        ease: "none",
        duration: 2,
        scrollTrigger: {
          trigger: triggerRef.current,
          start: "center 400",
          end: "2000 top",
          scrub: 0.6,
          pin: true,
        },
      }
    );
    return () => {
      pin.kill();
    };
  }, []);

  return (
    <div className="bg-black h-auto px-8 md:px-16 overflow-x-hidden rounded-t-[70px] pt-13 md:pt-20 ">
      <div className="flex flex-col items-start gap-5 py-20">
        <div className="text-[12vw] lg:text-8xl text-white font-sans ">
          Testimonials
        </div>
      </div>

      <div
        onMouseOver={() => {
          setIsActive(true);
        }}
        onMouseLeave={() => {
          setIsActive(false);
        }}
        ref={triggerRef}
      >
        <div ref={sectionRef} className="flex w-[400vw] gap-4 relative">
          {resourcedata.map((resource, index) => (
            <div key={index} className=" px-2 ">
              <div className="w-full h-[350px] sm:h-[500px] xl:h-[300px] flex flex-col gap-10">
                {/* <Image
                  src={resource.image}
                  alt="resource image"
                  width={470}
                  height={260}
                  className=" object-cover rounded-2xl"
                  onMouseOver={() => {
                    setIsActive(true);
                  }}
                  onMouseLeave={() => {
                    setIsActive(false);
                  }}
                /> */}
                <div
                  onMouseOver={() => {
                    setIsActive(true);
                  }}
                  onMouseLeave={() => {
                    setIsActive(false);
                  }}
                  className="w-[200px] md:w-[350px] h-[150px] md:h-[260px] bg-emerald-400 object-cover rounded-2xl "
                ></div>
                {/* <p className="font-sans text-white">{resource.tagline}</p> */}
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* <div className="w-full h-auto flex justify-center md:justify-end  md:py-32 px-3 md:px-6">
        <div className=" w-9/12 md:w-4/12 flex flex-col  gap-10">
          <p className="text-2xl text-slate-400 text-center font-sans">
            We regularly release design courses, offer advice to newbie
            designers, walk you through creating awesome effects, and share
            source files.
          </p>

          <button className="animated-button2    border-white text-white py-6  rounded-full flex justify-center">
            <span>View Resources</span>
          </button>
        </div>
      </div> */}

      {!isWhiteCursor && <Cursor isActive={isActive} text="Scroll" />}
    </div>
  );
};

export default Resources;
