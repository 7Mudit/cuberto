"use client";

import Image from "@/node_modules/next/image";
import hellogrid from "../../public/assets/hellogrid.png";

const Imagereel = () => {
  return (
    <section className="w-full relative ">
      <div className="w-full ">
        <Image alt="hello grid" src={hellogrid} className="w-full " />
      </div>

      <div className="w-full flex flex-col absolute top-0 left-0 text-[6vw] pt-5 lg:py-20 px-5 md:px-10">
        <p>WE BUILD</p>
        <p>A STABLE</p>
        <p>CODE USING</p>
        <p>IN-HOUSE</p>
        <p>SOLUTIONS</p>
        <div className="w-full text-[2vw] flex justify-end lg:py-10">
          <p className="w-6/12 ">
            Developing digital products since 2010. We help bring ideas to life
            and create digital products that work.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Imagereel;
