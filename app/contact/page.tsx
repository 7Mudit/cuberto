// @ts-nocheck
"use client";
import { useState, useRef, useEffect } from "react";
import wavingHand from "../../public/assets/wavinghand.png";
import Image from "@/node_modules/next/image";
import { motion } from "framer-motion";
import { slideInFromBottom, slideInFromLeft } from "@/utils/motion";
import Footer from "@/components/home/Footer";
import { inputdata } from "../../components/contact/contactinputsdata";
import { GoPaperclip } from "react-icons/go";
import { useForm } from "react-hook-form";
import gsap from "gsap";
import Navbar from "@/components/shared/Navbar";
import StickyCursor from "@/components/stickyCursor";
import Cursor from "../../components/home/Cursor";
import { clientInterest } from "../../data/clientInterests";
import { budgetdata } from "../../components/contact/budgetdata";
import axios from "axios";
import { toast } from "react-hot-toast";

export default function Contact() {
  const { register, handleSubmit, reset } = useForm();
  const [formData, setFormData] = useState({});
  const [selectedFile, setSelectedFile] = useState(null);
  const [selectedInterests, setSelectedInterests] = useState([]);
  const stickyElement = useRef(null);
  const [isActive, setIsActive] = useState(false);
  const [isWhiteCursor, setIsWhiteCursor] = useState(true);
  const [loading, setLoading] = useState(false);
  const bannerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    // Ensure elements are present
    if (bannerRef.current) {
      const animatableElements = bannerRef.current.querySelectorAll(
        ".animatable-element"
      );
      // GSAP animation for fade in and pop in effect
      // autoalpha - Animate both CSS opacity and visibility to hide/show elements
      gsap.set(animatableElements, { autoAlpha: 0, scale: 0.95 });

      // Animate to final state
      // first param is my target element
      // second are properties going from intial to final state
      gsap.to(animatableElements, {
        duration: 3, // Animation duration in seconds
        autoAlpha: 1, // Animate to fully visible
        scale: 1, // Animate to normal size
        stagger: 0.3,
        ease: "back.out(1.7)", // Easing for "pop" effect
      });
    }
  }, []);

  const updateFormData = (selectedInterests) => {
    setFormData({ ...formData, interests: selectedInterests });
  };

  const [selectedBudgets, setSelectedBudgets] = useState([]);

  const toggleBudget = (budget) => {
    if (selectedBudgets.includes(budget)) {
      setSelectedBudgets(selectedBudgets.filter((item) => item !== budget));
    } else {
      setSelectedBudgets([...selectedBudgets, budget]);
    }

    updateFormData(selectedBudgets);
  };

  const onSubmit = async (data) => {
    try {
      setLoading(true);
      toast.loading("Submitting your form...");

      const formDataWithFile = {
        ...data,
        file: selectedFile,
        interests: selectedInterests,
        budgetOptions: selectedBudgets,
      };

      const response1 = await axios.post(
        "https://cubertomailsending.onrender.com/api/v1/apply",
        formDataWithFile
      );
      const response2 = await axios.post(
        "https://cubertomailsending.onrender.com/api/v1/recieve",
        formDataWithFile
      );

      setLoading(false);

      toast.dismiss(); // Dismiss the loading toast
      toast.success("Form submitted successfully!");

      reset();
      setSelectedFile(null);
      setSelectedInterests([]);
      setSelectedBudgets([]);
    } catch (error) {
      setLoading(false);
      toast.dismiss(); // Dismiss the loading toast
      toast.error("Error submitting the form, please try again.");

      reset();
      setSelectedFile(null);
      setSelectedInterests([]);
      setSelectedBudgets([]);
      console.log("this is the error ", error);
    }
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const toggleInterest = (interest) => {
    if (selectedInterests.includes(interest)) {
      setSelectedInterests(
        selectedInterests.filter((item) => item !== interest)
      );
    } else {
      setSelectedInterests([...selectedInterests, interest]);
    }
    updateFormData(selectedInterests);
  };

  return (
    <>
      <section className="relative">
        {loading && (
          <div className="absolute w-screen h-full z-50 bg-white opacity-80 "></div>
        )}
        <Navbar
          ref={stickyElement}
          // @ts-ignore
          isActive={isActive}
          setIsActive={setIsActive}
        />

        {isWhiteCursor && <StickyCursor stickyElement={stickyElement} />}

        <div className="w-full flex flex-col px-5 py-10 sm:p-20">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={slideInFromBottom(0.8)}
            className="text-[10vw] sm:text-[8vw] flex gap-4 md:gap-8"
          >
            <span className="italic font-thin">Hey!</span> <p>Tell us all</p>
          </motion.div>

          <motion.span
            initial="hidden"
            animate="visible"
            variants={slideInFromBottom(1.2)}
            className="flex gap-4 md:gap-8 items-center"
          >
            <p className="text-[10vw] sm:text-[8vw]">the things</p>
            <Image
              src={wavingHand}
              width={120}
              height={120}
              alt="waving hand"
              className="w-[7vw] h-[7vw] sm:w-[5vw] sm:h-[5vw] md:w-16 md:h-16"
            />
          </motion.span>
        </div>

        <div className="w-full">
          <div className="flex flex-col gap-10 w-full">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={slideInFromLeft(0.2)}
              className="w-full text-[3vw] md:text-[2vw] font-thin px-5 text-slate-600 sm:px-20"
            >
              I&apos;m interested in...
            </motion.div>

            <div className="w-full md:w-9/12 flex gap-3 flex-wrap px-5 md:px-20">
              {clientInterest.map((interest, index) => (
                <motion.div
                  initial="hidden"
                  animate="visible"
                  variants={slideInFromBottom(index / 2)}
                  key={index}
                  className={`p-3 md:p-5 flex justify-center items-center w-auto rounded-full cursor-pointer ${
                    selectedInterests.includes(interest)
                      ? "bg-black text-white"
                      : "border border-black"
                  }`}
                  onClick={() => toggleInterest(interest)}
                >
                  <p className="font-bold sm:text-[2vw] md:text-[1.5vw]">
                    {interest}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* <ClientInterest updateFormData={updateFormData} /> */}

        <div className="w-full  px-5 md:px-20 py-20">
          <div className="w-full md:w-8/12 lg:w-7/12 flex flex-col gap-6 ">
            {inputdata.map((input, index) => (
              <input
                type={input.type}
                key={index}
                placeholder={input.placeholder}
                // name={input.placeholder.toLowerCase().split(" ").join("_")}
                className="outline-none border-b-2 p-4 text-[4vw] sm:text-[5vw] md:text-3xl hover:border-black transition-all duration-300 focus:border-slate-400"
                {...register(
                  input.placeholder.toLowerCase().split(" ").join("_")
                )}
                onChange={handleInputChange}
              />
            ))}
          </div>
        </div>

        {/* <BudgetOptions updateFormData={updateFormData} /> */}

        {/* <div className="w-full">
          <div className="flex flex-col gap-10 w-full">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={slideInFromLeft(0.2)}
              className="w-full text-[4vw] md:text-[2vw] font-thin px-5 text-slate-600 sm:px-20"
            >
              Project budget (USD)
            </motion.div>

            <div className="w-full md:w-9/12 flex gap-3 flex-wrap px-5 md:px-20">
              {budgetdata.map((budget, index) => (
                <motion.div
                  initial="hidden"
                  animate="visible"
                  variants={slideInFromBottom(index / 2)}
                  key={index}
                  className={`p-3 md:p-5 flex justify-center items-center w-auto rounded-full cursor-pointer ${
                    selectedBudgets.includes(budget)
                      ? "bg-black text-white"
                      : "border border-black"
                  }`}
                  onClick={() => toggleBudget(budget)}
                >
                  <p className="font-bold sm:text-[2vw] md:text-[1.5vw]">
                    {budget}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div> */}
        {/* 
        <label htmlFor="fileInput" className="cursor-pointer">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={slideInFromLeft(0.8)}
            className="w-full px-5 md:px-20 py-20 flex gap-3 text-[5vw] md:text-[3vw] items-center"
          >
            <GoPaperclip />
            <p>Attachments</p>
          </motion.div>
        </label>

        <input
          id="fileInput"
          type="file"
          accept=".pdf,.jpeg,.jpg,.png"
          style={{ display: "none" }}
          onChange={handleFileChange}
        /> */}

        <div className="px-10 py-5 md:px-20 pb-20 md:pt-10 flex justify-start">
          <button
            onClick={handleSubmit(onSubmit)}
            className="animated-button-submit"
          >
            <span>Submit</span>
          </button>
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
          {!isWhiteCursor && <Cursor isActive={isActive} text="Explore" />}
        </div>
      </section>
    </>
  );
}
