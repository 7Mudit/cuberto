import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { FreeMode, Pagination } from "swiper/modules";

export const resourcedata = [
  {
    tagline: "Ayan Buildtech transformed my home into a modern marvel!",
    name: "John Doe",
  },
  {
    tagline: "Excellent service and top-notch quality. Highly recommend!",
    name: "Jane Smith",
  },
  {
    tagline: "Professional, reliable, and exceptional craftsmanship.",
    name: "Emily Johnson",
  },
];

import Cursor from "../../components/home/Cursor";

const Resources = ({ isWhiteCursor }: any) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="bg-black w-full h-auto px-8 md:px-16 rounded-t-[70px] pt-13 md:pt-20 ">
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
          modules={[FreeMode, Pagination]}
          className="mySwiper"
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
              <div className="w-full h-[200px] sm:h-[250px] xl:h-[200px] flex flex-col justify-center items-center text-center bg-gray-100 rounded-2xl p-6 shadow-lg">
                <p className="font-sans text-black text-lg md:text-xl">
                  &quot;{resource.tagline}&quot;
                </p>
                <p className="font-sans text-black text-sm md:text-md mt-4 self-end italic">
                  - {resource.name}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      {!isWhiteCursor && <Cursor isActive={isActive} text="Drag" />}
    </div>
  );
};

export default Resources;
