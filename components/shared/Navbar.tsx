import React from "react";
import Header from "@/components/header";
import { Comic_Neue } from "next/font/google";

const comic = Comic_Neue({ subsets: ["latin"], weight: "700" });

const Navbar = () => {
  return (
    <div className="flex  min-h-[65px] px-2 sm:px-8 flex-row bg-white justify-between items-center">
      <h1
        className={`${comic.className} tracking-wide font-bold text-[26px] leading-normal`}
      >
        cuberto
      </h1>
      <Header />
    </div>
  );
};

export default Navbar;
