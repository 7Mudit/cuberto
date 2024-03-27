"use client";
import styles from "./page.module.scss";
import { useRef, useState } from "react";
import StickyCursor from "@/components/stickyCursor";
import Navbar from "@/components/shared/Navbar";
import Banner from "@/components/home/Banner";

export default function Home() {
  const stickyElement = useRef(null);
  const [isActive, setIsActive] = useState(false);
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
          <Banner />
        </div>
      </main>
    </>
  );
}
