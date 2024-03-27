import React from "react";

const VideoBanner = () => {
  return (
    <div className="w-full h-[550px] sm:h-[800px] animatable-element  ">
      <video
        className="pointer-events-none w-full h-full object-cover "
        autoPlay
        loop
        muted
        playsInline={true}
      >
        <source src="/assets/secondVideo.mp4" type="video/mp4" />
      </video>
    </div>
  );
};

export default VideoBanner;
