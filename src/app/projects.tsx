import { getAllProjects } from "@/server/db/queries";
import React from "react";
import Project from "./_components/project";

async function Projects(): Promise<React.JSX.Element | undefined> {
  const data = await getAllProjects();

  if (data.length > 0) {
    return (
      <div className="flex flex-col gap-16">
        {data.reverse().map((project) => (
          <div key={project.id}>
            <Project project={project} />
          </div>
        ))}
      </div>
    );
  }
}

export default Projects;
