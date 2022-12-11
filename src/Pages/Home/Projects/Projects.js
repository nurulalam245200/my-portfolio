import React from "react";
import img1 from "../../../assets/projects/sawpmart.jpg";
import img2 from "../../../assets/projects/doctorportal.jpg";
import img3 from "../../../assets/projects/quiz.jpg";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  const projectdata = [
    {
      id: 1,
      name: "Swap Mart",
      img: img1,
      tech: "ReactJs,Firebase,NodeJs,MongoDB",
      liveLink: "https://swapmart-cd141.web.app/",
    },
    {
      id: 2,
      name: "Doctor Portal",
      img: img2,
      tech: "React,Firebase,NodeJs,MongoDB",
      liveLink: "https://usp-dental-solution.web.app/",
    },
    {
      id: 3,
      name: "Quiz Professor",
      img: img3,
      tech: "React, API, Node Js",
      liveLink: "https://quiz-professor.netlify.app/",
    },
  ];
  return (
    <div id="project" className="mt-10 mb-10">
      <h1 className="text-4xl text-sky-400 font-bold mb-10 text-center">
        My Projects{" "}
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 w-11/12 mx-auto">
        {projectdata.map((project) => (
          <ProjectCard key={project.id} project={project}></ProjectCard>
        ))}
      </div>
    </div>
  );
};

export default Projects;
