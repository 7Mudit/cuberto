import React from "react";
import { Coming_Soon } from "next/font/google";
const coming = Coming_Soon({ subsets: ["latin"], weight: "400" });
import { forwardRef } from "react";
import HeaderMagnetic from "../headerMagnetic/HeaderMagnetic";

const Navbar = forwardRef(function Index(props, ref) {
  const { isActive, setIsActive } = props;
  return (
    <div className="flex top-0 w-screen  min-h-[65px] px-2 sm:px-12 flex-row bg-white justify-between items-center">
      <h1
        className={`${coming.className} tracking-normal font-extrabold text-[26px] leading-normal`}
      >
        cuberto
      </h1>
      <HeaderMagnetic ref={ref} isActive={isActive} setIsActive={setIsActive} />
    </div>
  );
});

export default Navbar;
