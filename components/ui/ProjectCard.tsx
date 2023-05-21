import type { Image as LiveImage } from "deco-sites/std/components/types.ts";

export interface card {
  src: LiveImage;
  alt: string;
  title: string;
  description: string;
  preview?: string;
  repository: string;
}

export interface Props {
  projects: card[];
  pageTitle: string;
}

function ProjectCard({ projects = [], pageTitle }: Props) {
  return (
    <div class="text-center">
      <h2 class="text-5xl m-9">{pageTitle}</h2>
      <div class="flex w-11/12 m-auto flex-wrap gap-4 my-3 flex-col md:flex-row">
        {projects.map((project) => (
          <div class="rounded-lg w-full md:w-1/4 h-90 p-6 shadow-[0px_3px_8px] shadow-[rgba(0,0,0,0.24)] hover:shadow-[0px_10px_20px_2px] transition transform hover:-translate-y-1 hover:cursor-pointer">
            <h2 class="text-center mb-1">
              <span class="font-medium text-2xl">{project.title}</span>
            </h2>
            <img src={project.src} alt={project.alt} class="h-70 mb-1" />
            <p class="text-justify mb-2">{project.description}</p>
            <div class="underline flex justify-between self-end">
              <a href={project?.preview}>Preview</a>
              <a href={project.repository}>Ver Código</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProjectCard;
