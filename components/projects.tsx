import React from "react";
import ProjectCard from "./project-card";
import { USER } from "@/data/user";

const Projects = () => {
  return (
    <section className="mt-8 mb-4 py-1">
      <h2 className="mb-3 text-xl font-semibold text-neutral-500 md:text-2xl">
        Projects
      </h2>

      <div className="flex w-full flex-col gap-4">
        {USER.projects.map((project) => (
          <ProjectCard
            key={project.name}
            name={project.name}
            description={project.description}
            url={project.url}
            github={project.github}
            techStack={project.techStack}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;
