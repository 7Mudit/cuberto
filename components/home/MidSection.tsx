import React from "react";

const MidSection = () => {
  return (
    <div className="w-full auto bg-white flex flex-col md:flex-row gap-4 py-16">
      <div className="w-full md:w-6/12 flex justify-center">
        <video autoPlay loop muted className="w-9/12 h-9/12" playsInline={true}>
          <source src="/assets/midsectionvideo.mp4" type="video/mp4" />
        </video>
      </div>

      <div className="w-full md:w-6/12 flex flex-col  lg:gap-10 items-center justify-center ">
        <p className="text-black text-lg sm:text-2xl lg:text-3xl font-thin p-16 text-center">
          Cuberto is a leading digital product agency focused on branding, UI/UX
          design, mobile, and web development.
        </p>
        {/* <div className="group relative animated-button hover:scale-105 transition-all duration-100 w-56 md:w-72 h-32 border text-black flex justify-center items-center ">
          <span className="absolute z-10 md:text-2xl group-hover:text-white duration-100">
            How we work
          </span>
        </div> */}
        <button className="animated-button">
          <span>Our Work</span>
        </button>
      </div>
    </div>
  );
};

export default MidSection;
