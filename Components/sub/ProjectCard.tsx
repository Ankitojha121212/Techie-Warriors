import Image from "next/image";
import React from "react";

interface Props {
  src: string;
  title: string;
  
}

const ProjectCard = ({ src, title }: Props) => {
  return (
    <div className="relative overflow-hidden rounded-lg">
      <Image
        src={src}
        alt={title}
        width={2000}
        height={2000}
        className="w-96 h-64"
      />

      <div className="relative flex ml-8">
        <h1 className="text-2xl font-semibold text-black bg-gradient-to-r from-slate-900 
        via-purple-500 to-blue-500 bg-clip-text text-transparent">{title}</h1>
      </div>
    </div>
  );
};

export default ProjectCard;
