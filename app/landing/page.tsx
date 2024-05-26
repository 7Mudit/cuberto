"use client";
import logo from "../../public/assets/logo.png";
import Image from "@/node_modules/next/image";
import section1image from "../../public/assets/landing-section1-image.png";
import sectionrrow from "../../public/assets/arrow.png";
import rocket from "../../public/assets/rocket.svg";
import thumbsup from "../../public/assets/thumbsup.svg";
import messages from "../../public/assets/message.svg";
import fan from "../../public/assets/fan.svg";
import abdice from "../../public/assets/abdice.svg";
import barchart from "../../public/assets/barchart.svg";
import { IoIosArrowRoundForward } from "react-icons/io";
import section8image from "../../public/assets/section-image.jpeg";
import section10image from "../../public/assets/section10bg-image.png";
import { ImQuotesLeft } from "react-icons/im";
import section11image1 from "../../public/assets/section11image1.jpeg";
import section11image2 from "../../public/assets/section11image2.jpeg";
import trustedby1 from "../../public/assets/trustedby1.png";
import trustedby2 from "../../public/assets/trustedby2.png";
import trustedby3 from "../../public/assets/trustedby3.png";
import trustedby4 from "../../public/assets/trustedby4.png";
import trustedby5 from "../../public/assets/trustedby5.png";
import { GiCheckMark } from "react-icons/gi";
import section13image from "../../public/assets/section13image.svg";
import section13image1 from "../../public/assets/section13image1.png";
import Link from "@/node_modules/next/link";
import section7image1 from "../../public/assets/section-7image1.jpeg";
import section7image2 from "../../public/assets/section7-image2.jpeg";
import section10image1 from "../../public/assets/section10image1.png";
import section10image2 from "../../public/assets/section10image2.png";
import section10image3 from "../../public/assets/section10image3.jpeg";
import dart from "../../public/assets/dart.svg";
import lens from "../../public/assets/lens.svg";

import React, { useEffect, useState, useRef } from "react";

import Footer from "@/components/home/Footer";

import Navbar from "@/components/shared/Navbar";
import StickyCursor from "@/components/stickyCursor";
import page from "../(home)/page";

const Page = () => {
  const stickyElement = useRef(null);
  const [isActive, setIsActive] = useState(false);
  const [isWhiteCursor, setIsWhiteCursor] = useState(true);
  const [isWhiteCursor2, setIsWhiteCursor2] = useState(true);
  return (
    <>
      <Navbar
        ref={stickyElement}
        // @ts-ignore
        isActive={isActive}
        setIsActive={setIsActive}
      />
      {/* <HeaderMagnetic ref={stickyElement} /> */}
      {isWhiteCursor && isWhiteCursor2 && (
        <StickyCursor stickyElement={stickyElement} />
      )}
      <section className="w-screen">
        <div className="section1 w-full ">
          <div className=" w-full flex  lg:flex-row flex-col gap-3 lg:gap-6 lg:px-11 sm:mt-10 px-8">
            <div className="w-full lg:w-6/12 px-10 py-12 flex  flex-col gap-9">
              <div className="texts   space-y-10">
                <p className="text-2xl sm:text-5xl lg:text-4xl">
                  Supercharge your conversion rates and increase sales
                </p>
                <p className="text-sm sm:text-lg text-slate-500 ">
                  We design, manage and optimize your landing pages to boost
                  signups, lead captures, and customer conversions.
                </p>
              </div>

              <div className="flex lg:justify-start justify-center w-full gap-2">
                <button className="section1button hover:bg-[#6852c8] transition-colors duration-200 text-white px-8 text-[8px] sm:text-xl rounded-full py-5">
                  Get my free consult
                </button>
                <div className="flex items-start">
                  <Image alt="logo" src={sectionrrow} className="w-6 sm:w-8" />
                </div>
              </div>
            </div>

            <div className="w-6/12 mx-auto lg:m-0 flex justify-center ">
              <Image alt="logo" src={section1image} className="w-10/12" />
            </div>
          </div>
        </div>

        <div className="section2 w-full space-y-5 px-2 md:px-32 text-center py-10">
          <p className="text-xl sm:text-2xl md:text-3xl ">
            Don&apos;t waste money on more traffic - fix your landing pages
            first
          </p>

          <p className="text-slate-500">
            Get more leads on your existing traffic instead.
          </p>
        </div>

        <div className="section3 flex justify-center md:text-start text-center gap-10 md:gap-0 flex-wrap pt-10 pb-16">
          <div className="sm:w-7/12 flex flex-col  md:items-start items-center md:w-4/12 space-y-6 px-10">
            <Image alt="logo" src={rocket} className="w-16 md:w-10" />
            <p className="font-semibold ">Increase conversion rates</p>
            <p>
              Highly targeted landing pages will increase your conversion rates,
              and optimization with A/B testing takes you to the next level.{" "}
            </p>
          </div>
          <div className="sm:w-7/12 flex flex-col md:items-start items-center md:w-4/12 space-y-6 px-10">
            <Image alt="logo" src={thumbsup} className="w-16 md:w-10" />
            <p className="font-semibold">Increase conversion rates</p>
            <p>
              Highly targeted landing pages will increase your conversion rates,
              and optimization with A/B testing takes you to the next level.{" "}
            </p>
          </div>
          <div className="sm:w-7/12 flex flex-col md:items-start items-center md:w-4/12 space-y-6 px-10">
            <Image alt="logo" src={messages} className="w-16 md:w-10" />
            <p className="font-semibold">Increase conversion rates</p>
            <p>
              Highly targeted landing pages will increase your conversion rates,
              and optimization with A/B testing takes you to the next level.{" "}
            </p>
          </div>
        </div>

        <div className="section5 flex flex-col gap-10 py-10 items-center ">
          <p className="text-xl sm:text-2xl font-semibold">Our services</p>

          <div className="flex flex-wrap gap-8 justify-center">
            <div className="w-10/12 sm:w-6/12 bg-slate-200 rounded-lg py-10 px-5 lg:w-4/12 text-center flex flex-col items-center gap-7">
              <div className="flex justify-center gap-2">
                <Image alt="logo" src={fan} />
                <p className="text-[#7357F6]">+</p>
                <Image alt="logo" src={abdice} />
                <p className="text-[#7357F6]">+</p>
                <Image alt="logo" src={barchart} />
              </div>

              <p className="font-semibold">Full service - growth</p>
              <p className="text-slate-500">
                Serious about optimization? Outsource everything to us. We
                design, optimize, analyze and report on your results on a
                monthly retainer.
              </p>

              <button className="bg-[#7357F6] hover:bg-[#6852c8] transition-colors duration-200 text-white px-5  rounded-full py-2">
                I need help with growth
              </button>
            </div>

            <div className="w-10/12 sm:w-6/12 bg-slate-200 rounded-lg py-10 px-5 lg:w-4/12 text-center flex flex-col items-center gap-7">
              <Image alt="logo" src={fan} />

              <p className="font-semibold">Design only</p>
              <p className="text-slate-500">
                We create your custom landing page to meet your conversion
                objective and brand, including copy and design at a fixed price.
              </p>

              <button className="bg-[#7357F6] hover:bg-[#6852c8] transition-colors duration-200 text-white px-5  rounded-full py-2">
                I need help with design
              </button>
            </div>
          </div>
        </div>

        <div className="progress px-3 flex md:flex-row flex-col gap-10 md:gap-6 items-center justify-center  py-10 md:py-20">
          <div className="flex flex-col gap-3 w-8/12 md:w-3/12 text-center items-center ">
            <Image alt="logo" src={dart} className="w-10" />
            <span className="bg-[#7357F6] rounded-full w-3 h-3 p-4 flex text-white font-semibold items-center justify-center">
              1
            </span>
            <p className="font-semibold text-lg text-slate-600">Define goals</p>
            <p className="text-sm text-slate-500 lg:text-lg">
              First we establish your landing page goal. Do you need more leads,
              increase signups or drive sales?
            </p>
          </div>

          <div className="flex flex-col gap-3 w-8/12 md:w-3/12 text-center items-center ">
            <Image alt="logo" src={lens} className="w-10" />
            <span className="bg-[#7357F6] rounded-full w-3 h-3 p-4 flex text-white font-semibold items-center justify-center">
              2
            </span>
            <p className="font-semibold text-lg text-slate-600">
              Insight & hypothesis
            </p>
            <p className="text-sm text-slate-500 lg:text-lg">
              Based on insight, experience and analysis we create our hypothesis
              for testing &quot;If we implement X we expect outcome Y&quot;.
            </p>
          </div>

          <div className="flex flex-col gap-3 w-8/12 md:w-3/12 text-center items-center ">
            <Image alt="logo" src={fan} className="w-10" />
            <span className="bg-[#7357F6] rounded-full w-3 h-3 p-4 flex text-white font-semibold items-center justify-center">
              3
            </span>
            <p className="font-semibold text-lg text-slate-600">
              Design & implement
            </p>
            <p className="text-sm text-slate-500 lg:text-lg">
              We design your page, write the copy, code and implement using
              Unbounce and integrate with your current leads-flow.
            </p>
          </div>

          <div className="flex flex-col gap-3 w-8/12 md:w-3/12 text-center items-center ">
            <Image alt="logo" src={abdice} className="w-10" />
            <span className="bg-[#7357F6] rounded-full w-3 h-3 p-4 flex text-white font-semibold items-center justify-center">
              4
            </span>
            <p className="font-semibold text-lg text-slate-600">
              Test & report
            </p>
            <p className="text-sm text-slate-500 lg:text-lg">
              To validate our hypothesis for improvement we run A/B split tests
              and report to you on the progress on a weekly basis.
            </p>
          </div>
        </div>

        <div className="section-6 text-center py-16 lg:px-7 sm:px-16 md:px-28 space-y-7">
          <p className="text-2xl md:text-4xl">
            A/B testing reduced customer acquisition cost for Campaign Monitor
          </p>
          <p className="text-sm md:text-lg">
            Campaign Monitor is one of the worlds leading Email Marketing
            software providers, and they partnered up with us at ConversionLab
            to get higher conversion rates. By systematically A/B testing
            landing pages we have contributed to reducing their customer
            acquisition cost by 60%.
          </p>
        </div>

        <div className="section-7 flex flex-wrap gap-10 justify-center md:gap-6">
          <div className="flex flex-col items-start md:items-center gap-6 w-9/12 sm:w-7/12 md:w-4/12 ">
            <span className="rounded-full w-7 md:w-10 h-7 md:h-10 p-7 md:p-10 flex justify-center items-center font-bold text-white text-xl bg-blue-500">
              A
            </span>
            <Image alt="logo" src={section7image1} />
          </div>

          <div className="flex flex-col items-start md:items-center gap-6 w-9/12 sm:w-7/12 md:w-4/12 ">
            <span className="rounded-full w-7 md:w-10 h-7 md:h-10 p-7 md:p-10 flex justify-center items-center font-bold text-white text-xl bg-green-400">
              B
            </span>
            <Image alt="logo" src={section7image2} />
          </div>
        </div>

        <div className="section-8 flex lg:flex-row flex-col  lg:px-10 gap-12 py-16 items-center lg:justify-center">
          <Image
            alt="logo"
            src={section8image}
            className="w-5/12 lg:block hidden lg:w-4/12"
          />

          <div className="w-10/12 sm:w-8/12 lg:w-6/12 flex flex-col gap-10">
            <span className="space-y-7">
              <p className="text-2xl md:text-4xl">
                Elevate your growth with customized solutions and dedicated
                service
              </p>
              <p className="text-slate-400 text-sm md:text-xl">
                At ConversionLab, we understand that every client is unique, and
                that&apos;s why we&apos;re committed to providing customized
                solutions and dedicated service tailored to your specific needs.
              </p>
              <p className=" text-slate-400 text-sm md:text-xl">
                As a boutique agency, we pride ourselves on fostering close
                relationships with our clients, offering attentive support every
                step of the way. Experience the difference of working with a
                team that truly cares about your success.
              </p>
            </span>

            <div className="flex items-center gap-3 hover:cursor-pointer">
              <p className="text-sm md:text-xl ">Get my free consult</p>
              <IoIosArrowRoundForward className="text-3xl" />
            </div>
          </div>

          <Image
            src={section8image}
            alt="logo"
            className="w-9/12 sm:w-6/12 md:w-5/12  lg:hidden lg:w-4/12"
          />
        </div>

        <div className="section-9 text-center py-16 px-7 sm:px-16 md:px-28 space-y-7">
          <p className="text-2xl md:text-4xl">
            Dynamic page content for 100% relevancy
          </p>
          <p className="text-sm md:text-lg">
            By using dynamic text replacement we can tailor the content to match
            each and every ad on Google Ads without having to create multiple
            pages. The tight message match ensures higher relevancy for the user
            - and Google rewards you with higher quality score as they too will
            see the message match. The below example gave a 58% uplift in
            conversion rates using dynamic text replacement.{" "}
          </p>
        </div>

        <div className="section-10 flex md:flex-row flex-col md:justify-center items-center gap-4 w-full md:py-10">
          <div className="w-10/12 md:w-6/12 flex flex-col gap-2">
            <Image alt="logo" src={section10image1} className="w-full" />
            <Image alt="logo" src={section10image2} className="w-full" />
          </div>
          <Image
            alt="logo"
            src={section10image3}
            className=" w-10/12 md:w-5/12"
          />
        </div>

        <div className="section-11 flex gap-5 flex-wrap justify-center py-10">
          <div className="examplebox rounded-xl w-11/12 sm:w-8/12 lg:w-5/12 px-6 py-10 text-center ">
            <span className="flex flex-col items-center gap-6">
              <ImQuotesLeft className="quotes text-xl" />

              <p className="font-bold">A World-Class agency</p>

              <p className="text-slate-700">
                ConversionLab has a knack for drawing out new and inventive
                tactics from tried-and-true methods that deliver real results.
                Their reputation for optimizing is only matched by their
                friendliness, and that&apos;s incredibly rare.
              </p>
            </span>

            <div className="flex flex-col items-center py-5 gap-2">
              <p className="font-semibold text-sm text-slate-500">
                JESSICA BURNHAM
              </p>
              <p>Advocacy & Community Manager</p>
              <p className="font-semibold text-slate-500">Unbounce</p>
              <Image
                alt="logo"
                src={section11image1}
                className="w-16 rounded-full"
              />
            </div>
          </div>

          <div className="examplebox  rounded-xl w-11/12 sm:w-8/12 lg:w-5/12 px-6 py-10 text-center ">
            <span className="flex flex-col items-center gap-6">
              <ImQuotesLeft className="quotes text-xl" />

              <p className="font-bold">Record low cost per lead</p>

              <p className="text-slate-700">
                ConversionLab helped Nintex implement a conversion optimization
                strategy to grow our lead generation. They designed and
                optimized high-performing landing pages where conversion rates
                skyrocketed and cost per lead dropped to record lows!
              </p>
            </span>

            <div className="flex flex-col items-center py-5 gap-2">
              <p className="font-semibold text-sm text-slate-500">
                MENILIK HENRY DYER
              </p>
              <p>Marketing Managerr</p>
              <p className="font-semibold text-slate-500">
                Nintex & Promapp Solutions
              </p>
              <Image
                alt="logo"
                src={section11image2}
                className="w-16 rounded-full"
              />
            </div>
          </div>
        </div>

        <div className="section-12  text-center py-7 hidden md:flex flex-col gap-5">
          <p className="font-semibold">TRUSTED BY</p>
          <div className="flex gap-2 sm:gap-6 justify-center">
            <Image alt="logo" src={trustedby1} className="w-3/12 sm:w-2/12" />
            <Image alt="logo" src={trustedby2} className="w-2/12 sm:w-1/12" />
            <Image alt="logo" src={trustedby3} className="w-2/12 sm:w-1/12" />
            <Image alt="logo" src={trustedby4} className="w-2/12 sm:w-1/12" />
            <Image alt="logo" src={trustedby5} className="w-2/12 sm:w-1/12" />
          </div>
        </div>

        <div className="section-13  flex lg:flex-row flex-col lg:gap-0 gap-10 items-center justify-center px-3 py-16">
          <div className="flex flex-col w-10/12 sm:w-8/12 lg:w-6/12 gap-6">
            <p className="text-xl fonr-semibold sm:text-3xl">
              Boost sales with landing pages & seamless lead nurturing in
              HubSpot
            </p>
            <p className="sm:text-lg text-slate-500">
              A key to success for lead generation is nurturing and guiding them
              toward becoming happy customers. Here&apos;s how integrating
              landing pages and HubSpot&apos;s lead nurturing features can
              significantly increase your sales.
            </p>

            <p className="font-bold text-lg">Automated lead nurturing</p>

            <ul className="space-y-10">
              <li className="flex items-start gap-2 ">
                <GiCheckMark className="text-4xl md:text-2xl  text-[#7357F6]" />
                <span className="flex flex-wrap">
                  <p className="sm:text-md text-sm font-semibold">
                    Personalized engagement:
                  </p>
                  <p className="sm:text-md text-sm">
                    Create automated email sequences based on lead behavior and
                    interests. Deliver targeted content that addresses their
                    specific needs and pain points.
                  </p>
                </span>
              </li>
              <li className="flex items-start gap-2 ">
                <GiCheckMark className="text-4xl md:text-2xl  text-[#7357F6]" />
                <span className="flex flex-wrap">
                  <p className="sm:text-md text-sm font-semibold">
                    Stay top-of-mind:
                  </p>
                  <p className="sm:text-md text-sm">
                    HubSpot automates lead nurturing, ensuring consistent
                    communication with potential customers. Stay at the
                    forefront of their minds as they progress through the buying
                    journey.
                  </p>
                </span>
              </li>
              <li className="flex items-start gap-2 ">
                <GiCheckMark className="text-4xl md:text-2xl  text-[#7357F6]" />
                <span className="flex flex-wrap">
                  <p className=" sm:text-md text-sm font-semibold">
                    Sales-ready leads:
                  </p>
                  <p className="sm:text-md text-sm">
                    Nurture leads with valuable information that builds trust
                    and positions your company as the ideal solution. Sales
                    teams receive qualified leads who are more likely to
                    convert.
                  </p>
                </span>
              </li>
            </ul>
            <div className="flex items-center gap-3 hover:cursor-pointer">
              <p className="text-[10px] md:text-lg font-semibold ">
                Get my free consultant about Hubspot
              </p>
              <IoIosArrowRoundForward className="text-3xl" />
            </div>
          </div>
          <div className="w-8/12 lg:w-5/12 flex flex-col items-center">
            <Image alt="logo" src={section13image1} className="w-8/12" />
            <Image alt="logo" src={section13image} className="w-8/12" />
          </div>
        </div>

        <div className="section-14 flex flex-col items-center text-center py-10 gap-7 px-3 sm:px-16 md:px-32">
          <p className="text-3xl sm:text-4xl">
            Ready to supercharge your sales pipeline?
          </p>
          <p className="text-sm sm:text-lg">
            We&apos;ll help you design high-converting landing pages, craft
            engaging lead-nurturing workflows, and unlock the full potential of
            HubSpot to achieve your sales goals.
          </p>

          <div className="flex lg:justify-start justify-center  gap-2">
            <button className="section1button hover:bg-[#6852c8] transition-colors duration-200 text-white px-8 text-[10px] sm:text-lg rounded-full py-5">
              Get my free consultant now
            </button>
            <div className="flex items-start">
              <Image alt="logo" src={sectionrrow} className="w-6 sm:w-8" />
            </div>
          </div>
        </div>

        <Footer />
      </section>
    </>
  );
};

export default Page;
