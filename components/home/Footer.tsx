import React, { useEffect, useLayoutEffect, useRef } from "react";
import "./Footer.css"; // Ensure you have styles for .video-container and .circle-container
import Link from "next/link";
import { GoArrowUpRight } from "react-icons/go";
const followLinks = [
  {
    name: "Instagram",
    link: "https://linkedin.com",
  },
  {
    name: "Dribble",
    link: "https://linkedin.com",
  },
  {
    name: "Linkedin",
    link: "https://linkedin.com",
  },
  {
    name: "Github",
    link: "https://linkedin.com",
  },
  {
    name: "Youtube",
    link: "https://linkedin.com",
  },
  {
    name: "Behance",
    link: "https://linkedin.com",
  },
  {
    name: "Twitter",
    link: "https://linkedin.com",
  },
];

const Footer = () => {
  // The text you want to display

  const circularText =
    "--------Follow Us · Design · Identity · Product---------";

  return (
    <div className="bg-black h-auto  w-screen flex flex-col justify-center items-start py-24">
      <div className="flex flex-col px-4 sm:flex-row gap-10 items-center">
        <p className="text-[50px] lg:text-[132px] text-white leading-none">
          Follow Us
        </p>
        {/* video */}
        <div
          className="relative bg-white w-[160px] h-[160px] rounded-full circle-container"
          style={{ width: "160px", height: "160px" }}
        >
          {/* SVG for the circular text */}
          <svg
            viewBox="0 0 200 200"
            className="text"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Define the circular path */}
            <path
              id="circlePath"
              fill="none"
              stroke="transparent"
              d="M100,100 m-75,0 a75,75 0 1,0 150,0 a75,75 0 1,0 -150,0"
            />
            {/* Apply text to the path */}
            <text fill="black" style={{ fontSize: "24px" }}>
              {" "}
              {/* Adjust font size as needed */}
              <textPath xlinkHref="#circlePath">
                {circularText.repeat(1)}{" "}
                {/* Repeat text to fill the circle, adjust as needed */}
              </textPath>
            </text>
          </svg>
          {/* Video in the center */}
          <div
            className="absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center video-container"
            style={{
              width: "80px",
              height: "80px",
              margin: "auto",
              borderRadius: "50%",
              overflow: "hidden",
            }}
          >
            <video autoPlay loop muted playsInline className="w-full h-full">
              <source src="/assets/footer.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>
      <p className="text-[16px] py-8 px-8 lg:px-16  text-gray-300">
        Social Media and Contacts
      </p>
      <div className="flex flex-col w-full">
        {followLinks.map((follow, index) => (
          <div
            key={index}
            className="h-[88px] py-16 last:border-b-[1px] flex flex-row justify-between items-center px-8 lg:px-16 border-t-[1px] w-full  border-gray-700"
          >
            <p className="text-[33px] text-[500] text-white leading-[29px]">
              {follow.name}
            </p>
            <Link href={follow.link} className="">
              <GoArrowUpRight size={50} color="white" />
            </Link>
          </div>
        ))}
      </div>
      <div className="flex mt-16 px-4 sm:px-16 flex-col lg:flex-row gap-[100px] lg:gap-[250px] items-center justify-center">
        <div className="flex flex-col items-start justify-center">
          <div className="flex flex-row justify-center items-center gap-2">
            <p className="captialize text-[12px] text-white leading-normal">
              MAIN OFFICE
            </p>
            <p className="text-[24px] text-white leading-normal">
              901 N Pitt Street
            </p>
          </div>
          <p className="text-[24px] text-white leading-normal">
            Alexandria VA, 22314
          </p>
          <button className="footer-button2 mt-8 w-full">
            <span>INFO@CUBERTO.COM</span>
          </button>
        </div>
        <div className="flex flex-col items-start justify-center">
          <div className="flex flex-row justify-center items-center gap-2">
            <p className="captialize text-[12px] text-white leading-normal">
              SECOND OFFICE
            </p>
            <p className="text-[24px] text-white leading-normal">Na Perstyne</p>
          </div>
          <p className="text-[24px] text-white leading-normal">
            342/1, 11000 Prague
          </p>
          <button className="footer-button mt-8 w-full">
            <span>+1 301 549 9309</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Footer;
