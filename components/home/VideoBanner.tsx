import React from "react";

const VideoBanner = () => {
  return (
    <div className="w-full h-[550px]  sm:h-[800px] animatable-element  ">
      <video
        className="pointer-events-none w-full object-cover h-full  "
        autoPlay
        loop
        muted
        playsInline={true}
      >
        <source src="/assets/HOME_FRONT.mp4" type="video/mp4" />
      </video>
    </div>
  );
};

export default VideoBanner;
