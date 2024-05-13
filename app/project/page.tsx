"use client";
import React, { useRef, useState } from "react";
import { IoIosArrowRoundDown } from "react-icons/io";

import Footer from "@/components/home/Footer";
import Navbar from "@/components/shared/Navbar";
import StickyCursor from "@/components/stickyCursor";
import Project from "@/components/Project/Projects";
import Cursor from "@/components/home/Cursor";

const Page = () => {
  const [isActive, setIsActive] = useState(false);
  const [isWhiteCursor, setIsWhiteCursor] = useState(true);
  const [isBlackCursor, setIsBlackCursor] = useState(true);

  const stickyElement = useRef(null);

  return (
    <>
      <Navbar
        ref={stickyElement}
        // @ts-ignore
        isActive={isActive}
        setIsActive={setIsActive}
      />

      {isWhiteCursor && isBlackCursor && (
        <StickyCursor stickyElement={stickyElement} />
      )}
      <main className={` ${isActive ? "blurEffect" : ""}`}>
        <div className="w-full flex items-start justify-center  flex-col  md:gap-2 pt-20 lg:py-20 px-5 md:px-20">
          {/* <p className="text-[18px] font-matterLight font-[400] text-gray-600  ">
            Filter
          </p> */}
          <div className="hover-underline-animation hover:cursor-pointer  relative   flex justify-start items-center   gap-3  text-5xl  ">
            <p className="text-[45px] font-matterRegular  leading-[52px] md:text-[54px] md:leading-[62px]">
              All Projects
            </p>
            <IoIosArrowRoundDown className="animate-bounce" size={24} />
          </div>
        </div>

        <div
          onMouseOver={() => {
            setIsBlackCursor(false);
          }}
          onMouseLeave={() => {
            setIsBlackCursor(true);
          }}
        >
          <Project isBlackCursor={isBlackCursor} />
        </div>
        <div
          onMouseOver={() => {
            setIsWhiteCursor(false);
          }}
          onMouseLeave={() => {
            setIsWhiteCursor(true);
          }}
        >
          <Footer />
        </div>
      </main>
      {!isWhiteCursor && <Cursor isActive={isActive} text="Drag" />}
    </>
  );
};

export default Page;
