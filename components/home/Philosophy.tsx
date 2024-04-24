import React from "react";

const Philosophy = () => {
  return (
    <div className="w-full">
      <div className="w-full flex flex-col pl-7 sm:px-20 md:px-36">
        <p className="text-7xl sm:text-9xl font-sans font-light">Our</p>
        <p className="italic text-[20vw] sm:text-9xl font-sans font-thin">
          Philosophy
        </p>
      </div>

      <div className="flex md:flex-row flex-col gap-10 items-center justify-center pt-20 lg:pt-16">
        <video
          autoPlay
          loop
          muted
          className="w-8/12 md:w-4/12 h-9/12"
          playsInline={true}
        >
          <source src="/assets/philosophyvideo.mp4" type="video/mp4" />
        </video>
        <p className="w-10/12 md:w-6/12 px-5 sm:px-16 fonrt-sans text-xl mf:text-md lg:text-xl text-justify">
          At Ayaan Infra, with over two decades of unwavering commitment to
          excellence, we shape the future by delivering superior infrastructure
          solutions. Guided by innovation, integrity, and a passion for quality,
          we empower communities and drive sustainable growth. Our legacy is
          built on trust, expertise, and a relentless pursuit of excellence,
          ensuring that every project we undertake transforms lives, enriches
          environments, and stands the test of time.
        </p>
      </div>
    </div>
  );
};

export default Philosophy;
