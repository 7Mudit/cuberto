import React from "react";
import { Roboto_Flex, Martel_Sans } from "next/font/google";

const robot = Roboto_Flex({
  subsets: ["latin"],
  weight: "400",
});
const martel = Martel_Sans({
  subsets: ["latin"],
  weight: ["300"],
});

const Banner = () => {
  return (
    <div className="flex flex-col pl-[20px] sm:pl-[134px] w-full items-start justify-center gap-5">
      <div className="w-full">
        <span
          className={`text-[46px] leading-[41px] sm:text-[62px] xs:leading-[55px] xl:text-[125px] animatable-element xl:leading-[112px] ${martel.className}`}
        >
          Crafting{" "}
          <span
            className={` ${robot.className} animatable-element !text-[400] !italic`}
          >
            infrastructure
          </span>
        </span>
      </div>

      <div className="flex flex-row items-center justify-center gap-2">
        <div className="w-[160px] animatable-element h-[110px] ">
          <video
            className="pointer-events-none w-[160px] h-[110px] rounded-[40%] object-cover "
            autoPlay
            loop
            muted
            playsInline={true}
          >
            <source src="/assets/HOME_FRONT.mp4" type="video/mp4" />
          </video>
        </div>
        <div
          className={`text-[24px] leading-[41px] sm:text-[62px] xs:leading-[55px] xl:text-[125px] animatable-element xl:leading-[112px] ${martel.className}`}
        >
          for 2 decades{" "}
        </div>
      </div>
      <div className="w-full">
        <span
          className={`text-[46px] leading-[41px] sm:text-[62px] xs:leading-[55px] xl:text-[125px] animatable-element xl:leading-[112px] ${martel.className}`}
        >
          and beyond
        </span>
      </div>
    </div>
  );
};

export default Banner;
