import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Roboto_Flex } from "next/font/google";
import "./globals.css";
import SmoothScrolling from "@/components/scroll/SmoothScrolling";

const inter = Inter({ subsets: ["latin"] });
const roboto_flex = Roboto_Flex({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Cuberto ",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${roboto_flex.className} w-full h-full bg-white`}>
        <SmoothScrolling>{children}</SmoothScrolling>
      </body>
    </html>
  );
}
