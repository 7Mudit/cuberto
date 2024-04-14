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
      <motion.div className="scroller w-[9000px] flex gap-16  " style={{ x }}>
        <span>{children} </span>
        <span>{children} </span>
        <span>{children} </span>
        <span>{children} </span>
        <span>{children} </span>
        <span>{children} </span>
        <span>{children} </span>
        <span>{children} </span>
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

const ProjectReel = () => {
  const circularText = "--------Product · Design · Identity · Product---------";

  return (
    <section className="w-full py-20">
      <ParallaxText baseVelocity={-5}>
        <div className="w-full flex gap-7 items-center text-white">
          <p className="text-[10vw]">VIEW</p>
          <p className="text-[10vw]">CASE</p>
          <div
            className="relative bg-white w-[160px] h-[160px] rounded-full circle-container"
            style={{ width: "160px", height: "160px" }}
          >
            {/* SVG for the circular text */}
            <svg
              viewBox="0 0 200 200"
              className="text"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Define the circular path */}
              <path
                id="circlePath"
                fill="none"
                stroke="transparent"
                d="M100,100 m-75,0 a75,75 0 1,0 150,0 a75,75 0 1,0 -150,0"
              />
              {/* Apply text to the path */}
              <text fill="black" style={{ fontSize: "24px" }}>
                {" "}
                {/* Adjust font size as needed */}
                <textPath xlinkHref="#circlePath">
                  {circularText.repeat(1)}{" "}
                  {/* Repeat text to fill the circle, adjust as needed */}
                </textPath>
              </text>
            </svg>
            {/* Video in the center */}
            <div
              className="absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center video-container"
              style={{
                width: "80px",
                height: "80px",
                margin: "auto",
                borderRadius: "50%",
                overflow: "hidden",
              }}
            >
              <video autoPlay loop muted playsInline className="w-full h-full">
                <source src="/assets/footer.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      </ParallaxText>
    </section>
  );
};

export default ProjectReel;
