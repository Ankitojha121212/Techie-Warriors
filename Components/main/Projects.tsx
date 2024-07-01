import React from "react";
import ProjectCard from "../sub/ProjectCard";

const Projects = () => {
  return (
    <div
      className="flex flex-col items-center justify-center py-20"
      id="projects"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-2">
        Our Portfolio
      </h1>
      <div className="h-full w-full flex flex-col md:flex-row justify-between px-8">
        <ProjectCard
          src="/NextWebsite.png"
          title="Modern Next.js Portfolio"
        />
        <ProjectCard
          src="/portfolio.png"
          title="3D Portfolio"
          
        />
        <ProjectCard
          src="/SpaceWebsite.png"
          title="Space Themed Website"
        />
      </div>
    </div>
  );
};

export default Projects;
