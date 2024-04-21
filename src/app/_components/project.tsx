import { Button } from "@/components/ui/button";
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { getFilesFromDir } from "@/lib/utils";
import { type Project } from "@/server/db/schema";
import { ChevronDown, Github, Server } from "lucide-react";
import Link from "next/link";
import React from "react";
import Databases from "./databases";
import Frameworks from "./frameworks";
import Languages from "./languages";
import Libraries from "./libraries";
import OtherUtils from "./other-utils";
import ProjectImages from "./project-images";

function Project({ project }: { project: Project }): React.JSX.Element {
  const images = project.imagesPath ? getFilesFromDir(project.imagesPath) ?? [] : [];

  return (
    <div className="flex flex-col items-center justify-center gap-4 px-4 md:px-24 lg:flex-row">
      {images && (
        <div className="min-w-[18rem] sm:min-w-[28rem]">
          <ProjectImages projectId={project.id} imagesPath={project.imagesPath!} images={images} />
        </div>
      )}
      <div className="relative flex max-w-[40rem] flex-col items-center">
        <Card className="shadow-sm shadow-primary hover:shadow-md hover:shadow-primary">
          <CardHeader className="px-6 py-4">
            <CardTitle className="text-gradient text-lg lg:text-3xl">{project.name}</CardTitle>
            <CardDescription>{project.description}</CardDescription>
          </CardHeader>

          <CardFooter className="flex justify-end gap-2">
            {project.github && (
              <Link href={project.github} target="_blank">
                <Button variant="ghost" size="sm">
                  <Github className="text-primary" />
                </Button>
              </Link>
            )}
            {project.host && (
              <Link href={project.host} target="_blank">
                <Button variant="ghost" size="sm">
                  <Server className="text-primary" />
                </Button>
              </Link>
            )}
          </CardFooter>
        </Card>
        <ProjectContent project={project} />
      </div>
    </div>
  );
}

export default Project;

const ProjectContent = ({ project }: { project: Project }) => {
  return (
    <div className="group flex h-4 w-11/12 flex-col items-center justify-between rounded-b-md bg-primary/90 shadow-sm shadow-primary transition-all duration-1000 hover:h-[20rem]">
      <div className="scrollbar-none bg-gradient flex h-full w-full flex-col justify-center gap-4 overflow-auto rounded-b-md p-4 opacity-0 transition-opacity duration-700 ease-in group-hover:opacity-100 sm:px-8 md:px-14 2xl:px-20">
        <Languages projectId={project.id} />
        <Frameworks projectId={project.id} />
        <Databases projectId={project.id} />
        <Libraries projectId={project.id} />
        <OtherUtils projectId={project.id} />
      </div>
      <ChevronDown className="absolute bottom-0 size-4 group-hover:hidden" />
    </div>
  );
};
