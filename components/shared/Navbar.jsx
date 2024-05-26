import React from "react";
import { Coming_Soon } from "next/font/google";
const coming = Coming_Soon({ subsets: ["latin"], weight: "400" });
import { forwardRef } from "react";
import HeaderMagnetic from "../headerMagnetic/HeaderMagnetic";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import image_logo from "@/public/assets/logo.png";

const Navbar = forwardRef(function Index(props, ref) {
  const { isActive, setIsActive } = props;
  const pathname = usePathname();
  return (
    <div
      className={`flex top-0 w-screen  min-h-[65px] py-5 px-2 sm:px-12 flex-row  ${
        pathname === "/about" ? "bg-black" : "bg-white"
      } justify-between items-center`}
    >
      <Link href="/" className="z-[1000]">
        <Image src={image_logo} alt="logo image" width={200} height={200} />
      </Link>

      <HeaderMagnetic ref={ref} isActive={isActive} setIsActive={setIsActive} />
    </div>
  );
});

export default Navbar;
