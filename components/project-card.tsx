import React from "react";
import Link from "next/link";
import { ArrowUpRight, Dot, Github } from "lucide-react";

interface Project {
  name: string;
  description: string;
  url: string;
  github?: string;
  techStack?: string[];
}

const ProjectCard = (project: Project) => {
  return (
    <article className="group flex flex-col justify-between gap-2 py-3 md:flex-row md:items-start">
      <div className="min-w-0">
        <div className="flex items-start gap-2">
          {/* <Dot className="mt-0.5 shrink-0 rounded-full border border-dashed text-neutral-500 dark:text-white" /> */}
          <Link
            href={project.url}
            target="_blank"
            rel="noreferrer"
            className="flex min-w-0 flex-row items-start"
          >
            <h3 className="text-2xl leading-tight font-semibold text-neutral-900 transition-colors group-hover:text-neutral-600 dark:text-white dark:group-hover:text-neutral-200">
              {project.name}
            </h3>
            <ArrowUpRight
              size={16}
              className="mt-1 shrink-0 text-neutral-500 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </Link>
        </div>

        <div className="mt-1 ml-4 space-y-2">
          <p className="text-muted-foreground max-w-xl text-sm leading-relaxed font-medium">
            {project.description}
          </p>

          {project.techStack && (
            <p className="text-muted-foreground text-xs leading-relaxed">
              {project.techStack.join(" / ")}
            </p>
          )}
        </div>
      </div>

      <div className="ml-8 flex shrink-0 items-center gap-3 text-neutral-500 md:ml-0 md:pt-1 dark:text-neutral-400">
        {project.github && (
          <Link
            href={project.github}
            target="_blank"
            rel="noreferrer"
            aria-label={`${project.name} GitHub repository`}
            className="transition-colors hover:text-black dark:hover:text-white"
          >
            <Github className="h-4 w-4" />
          </Link>
        )}
        <Link
          href={project.url}
          target="_blank"
          rel="noreferrer"
          aria-label={`Open ${project.name}`}
          className="transition-colors hover:text-black dark:hover:text-white"
        >
          <ArrowUpRight className="h-4 w-4" />
        </Link>
      </div>
    </article>
  );
};

export default ProjectCard;
