import type { Metadata } from "next";

import { Roboto_Flex } from "next/font/google";
import "../globals.css";

const roboto_flex = Roboto_Flex({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function AboutLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className={`${roboto_flex.className} w-full h-full bg-white`}>
      {children}
    </div>
  );
}
