import React, { useRef, useState } from "react";
import { resourcedata } from "../../data/resourcesdata";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { FreeMode } from "swiper/modules";
import Image from "@/node_modules/next/image";
import Cursor from "../../components/home/Cursor";
const Resources = ({ isWhiteCursor }: any) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="bg-black h-auto px-8 md:px-16 rounded-t-[70px] pt-13 md:pt-20 ">
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
      >
        <Swiper
          slidesPerView={1}
          centeredSlides={true}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          modules={[FreeMode]}
          className="mySwiper "
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 0,
            },
            700: {
              slidesPerView: 2,
              spaceBetween: 0,
            },
            1200: {
              slidesPerView: 3,
              spaceBetween: 0,
            },
          }}
        >
          {resourcedata.map((resource, index) => (
            <SwiperSlide key={index} className="w-6/12 px-2 ">
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
                  className="w-[350px] h-[260px] bg-emerald-400 object-cover rounded-2xl "
                ></div>
                {/* <p className="font-sans text-white">{resource.tagline}</p> */}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
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

      {!isWhiteCursor && <Cursor isActive={isActive} text="Drag" />}
    </div>
  );
};

export default Resources;
