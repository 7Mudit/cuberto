"use client";
import { useRef } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useMotionValue,
  useVelocity,
  useAnimationFrame,
} from "framer-motion";

function ParallaxText({ children, baseVelocity = 100 }: any) {
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400,
  });
  const velocityFactor = useTransform(smoothVelocity, [0, 1500], [0, 2], {
    clamp: false,
  });

  const customWrap = (min: number, max: number, value: number): number => {
    const range = max - min;
    const wrappedValue = ((((value - min) % range) + range) % range) + min;
    return wrappedValue;
  };

  const x = useTransform(baseX, (v) => `${customWrap(-20, -45, v)}%`);

  const directionFactor = useRef<number>(1);
  useAnimationFrame((t, delta) => {
    let moveBy = directionFactor.current * baseVelocity * (delta / 1000);

    if (velocityFactor.get() < 0) {
      directionFactor.current = -1;
    } else if (velocityFactor.get() > 0) {
      directionFactor.current = 1;
    }

    moveBy += directionFactor.current * moveBy * velocityFactor.get();

    baseX.set(baseX.get() + moveBy);
  });

  return (
    <div className="">
      <motion.div
        className="scroller w-[2500px] sm:w-[3000px] md:w-[9000px] flex  md:gap-10  "
        style={{ x }}
      >
        <span>{children} </span>
        <span>{children} </span>
        <span>{children} </span>
        <span>{children} </span>
        <span>{children} </span>
        <span>{children} </span>
        <span>{children} </span>
        <span>{children} </span>
      </motion.div>
    </div>
  );
}

const Reel = () => {
  return (
    <section className="w-full py-20">
      <ParallaxText baseVelocity={-5}>
        <div className="w-full flex gap-4 md:gap-10">
          <video
            autoPlay
            loop
            muted
            className="w-4/12 md:w-6/12 rounded-full"
            playsInline={true}
          >
            <source src="/assets/reelvideo.mp4" type="video/mp4" />
          </video>
          <div className="flex flex-col justify-center items-center">
            <p className="text-[6vw] md:text-8xl">CREATIVE</p>
            <p className="text-[6vw] text-8xl">DESIGN</p>
          </div>
        </div>
      </ParallaxText>

      <div className="w-full h-[0.3px] sm:h-0.5 px-2 my-10 bg-black rounded-full"></div>

      <div className="flex justify-end sm:py-10 md:py-20 px-5 md:px-10">
        <div className="w-8/12 flex items-start gap-5 md:gap-10">
          <div className="flex gap-1 sm:gap-2 text-[2vw] md:text-xl">
            <p>CREATIVE</p>
            <p>DESIGN</p>
          </div>
          <p className="text-[3vw] sm:text-[3vw] md:text-3xl">
            We don&apos;t do cookie-cutter solutions. Our user-centered design
            encourages productivity and boosts revenue.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Reel;
