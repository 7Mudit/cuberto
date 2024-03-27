"use client";
import styles from "./page.module.scss";
import { useEffect, useRef, useState } from "react";
import StickyCursor from "@/components/stickyCursor";
import Navbar from "@/components/shared/Navbar";
import Banner from "@/components/home/Banner";
import gsap from "gsap";

export default function Home() {
  const stickyElement = useRef(null);
  const [isActive, setIsActive] = useState(false);

  // for animation purpose
  const bannerRef = useRef<HTMLDivElement | null>(null); // Reference to the Banner component for animation
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
  }, []); // Empty dependency array means this effect runs once on mount
  return (
    <>
      <Navbar
        ref={stickyElement}
        // @ts-ignore
        isActive={isActive}
        setIsActive={setIsActive}
      />
      {/* <HeaderMagnetic ref={stickyElement} /> */}
      <StickyCursor stickyElement={stickyElement} />
      <main className={`${styles.main}`}>
        <div className={` ${isActive ? "blurEffect" : ""}`}>
          {/* add your components here an you can change main class */}
          <div ref={bannerRef}>
            <Banner />
          </div>
        </div>
      </main>
    </>
  );
}
