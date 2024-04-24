// @ts-nocheck
import React, { useState, useEffect, useRef } from "react";
import { projectdata1, projectdata2 } from "../../data/projectdata";

import Cursor from "./Cursor";

const Project = ({ isWhiteCursor }) => {
  const [isActive, setIsActive] = useState(false);

  const RenderProject = (project, projectType, index) => {
    const projectId = `${projectType}-${index}`;

    // Ref to store the video element for direct manipulation
    const videoRef = useRef(null);

    // Handle onMouseEnter event to play the video
    const handleMouseEnter = () => {
      // Playing the video regardless of its loaded state
      if (videoRef.current) {
        videoRef.current.play();
      }
    };

    // Handle onMouseLeave event to pause the video and reset to start
    const handleMouseLeave = () => {
      if (videoRef.current) {
        videoRef.current.pause();
        videoRef.current.currentTime = 0; // Reset video to start
      }
    };

    // Removed the loadedVideos check to ensure videos play every hover
    return (
      <div
        key={projectId}
        className="flex flex-col gap-10"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <video
          ref={videoRef}
          className="rounded-3xl w-full "
          width={434}
          height={434}
          loop
          muted
          playsInline
        >
          <source src={project.video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <p className="text-slate-300 text-xl sm:px-8">{project.name}</p>
      </div>
    );
  };

  return (
    <>
      <div className="bg-black w-full h-auto rounded-t-[60px] px-7 sm:px-16 py-16 relative">
        <div className="w-full bg-white h-10 sm:h-32 absolute bottom-0 left-0 rounded-t-[80px]"></div>
        <div className="flex flex-col gap-10   md:px-10">
          <span className="text-white text-[20vw] sm:text-8xl font-sans">
            Featured
          </span>
          <div className="flex md:flex-row flex-col  md:items-center gap-10">
            <video
              className="pointer-events-none w-[160px] h-auto rounded-[40%] object-cover"
              autoPlay
              loop
              muted
              playsInline={true}
            >
              <source src="/assets/projectheadvideo.mp4" type="video/mp4" />
            </video>
            <span className="text-white italic font-thin text-[20vw] sm:text-8xl font-sans">
              projects
            </span>
          </div>
        </div>
        {/* Omitted other parts for brevity */}
        <div className="flex md:flex-row flex-col gap-[100px] py-32">
          <div
            className="w-full md:w-5/12 flex flex-col gap-[100px]"
            onMouseOver={() => {
              setIsActive(true);
            }}
            onMouseLeave={() => {
              setIsActive(false);
            }}
          >
            {projectdata1.map((project, index) =>
              RenderProject(project, "projectdata1", index)
            )}
          </div>
          <div
            className="w-full md:w-5/12 md:pt-52 flex flex-col gap-[150px]"
            onMouseOver={() => {
              setIsActive(true);
            }}
            onMouseLeave={() => {
              setIsActive(false);
            }}
          >
            {projectdata2.map((project, index) =>
              RenderProject(project, "projectdata2", index)
            )}
          </div>
        </div>
      </div>
      {!isWhiteCursor && <Cursor isActive={isActive} text="Explore" />}
    </>
  );
};

export default Project;
