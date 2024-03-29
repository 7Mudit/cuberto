// @ts-nocheck
import React, { useState, useEffect, useRef } from "react";
import { projectdata1, projectdata2 } from "../../data/projectdata";
import Image from "next/image";
import gsap from "gsap";
import Cursor from "./Cursor";

const Project = ({ isWhiteCursor }) => {
  const [hoveredProject, setHoveredProject] = useState(null);
  const [isActive, setIsActive] = useState(false);
  const [loadedVideos, setLoadedVideos] = useState({});
  const projectRefs = useRef([]);

  const handleMouseEnter = (projectType, index) => {
    const projectId = `${projectType}-${index}`;
    setHoveredProject(projectId);
    // Apply a scale animation for a smooth transition
    if (projectRefs.current[projectId]) {
      gsap.to(projectRefs.current[projectId], {
        scale: 1.05,
        duration: 1.3,
      });
    }
  };

  const handleMouseLeave = (projectType, index) => {
    const projectId = `${projectType}-${index}`;
    setHoveredProject(null);
    // Reset scale animation
    if (projectRefs.current[projectId]) {
      gsap.to(projectRefs.current[projectId], {
        scale: 1,
        duration: 1.3,
      });
    }
  };

  const handleVideoLoaded = (projectType, index) => {
    const projectId = `${projectType}-${index}`;
    setLoadedVideos((prevLoadedVideos) => ({
      ...prevLoadedVideos,
      [projectId]: true,
    }));
  };

  const RenderProject = (project, projectType, index) => {
    const projectId = `${projectType}-${index}`;
    const isVideoLoaded = loadedVideos[projectId];
    const isHovered = hoveredProject === projectId;
    projectRefs.current[projectId] = useRef();

    return (
      <div
        key={projectId}
        ref={(el) => (projectRefs.current[projectId] = el)}
        className="flex flex-col gap-10"
        onMouseEnter={() => handleMouseEnter(projectType, index)}
        onMouseLeave={() => handleMouseLeave(projectType, index)}
      >
        {isHovered && isVideoLoaded ? (
          <video
            className="w-full rounded-3xl"
            autoPlay
            loop
            muted
            playsInline
            onLoadedData={() => handleVideoLoaded(projectType, index)}
          >
            <source src={project.video} type="video/mp4" />
          </video>
        ) : (
          <Image
            alt={project.name}
            width={projectType === "projectdata1" ? 434 : 400}
            height={projectType === "projectdata1" ? 434 : 400}
            src={project.image}
            className="w-full object-contain rounded-3xl"
            onLoad={() => handleVideoLoaded(projectType, index)}
          />
        )}
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
      {!isWhiteCursor && <Cursor isActive={isActive} />}
    </>
  );
};

export default Project;
