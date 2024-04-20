import React from "react";
import { type Project } from "@/server/db/schema";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import ProjectImages from "./project-images";
import { getFilesFromDir } from "@/lib/utils";
import Frameworks from "./frameworks";
import Link from "next/link";
import { ChevronDown, Github, Server } from "lucide-react";
import Languages from "./languages";
import Databases from "./databases";
import OtherUtils from "./other-utils";
import Libraries from "./libraries";

function Project({ project }: { project: Project }): React.JSX.Element {
  const images = project.imagesPath ? getFilesFromDir(project.imagesPath) ?? [] : [];

  return (
    <div className="flex items-center justify-center gap-2 px-24">
      {images && (
        <div className="min-w-[18rem] sm:min-w-[28rem]">
          <ProjectImages projectId={project.id} imagesPath={project.imagesPath!} images={images} />
        </div>
      )}
      <div className="relative flex w-[40rem] flex-col items-center">
        <Card className="shadow-primary hover:shadow-primary shadow-sm hover:shadow-md">
          <CardHeader>
            <CardTitle className="text-gradient text-3xl">{project.name}</CardTitle>
            <CardDescription>{project.description}</CardDescription>
          </CardHeader>

          <CardFooter className="flex justify-end gap-2">
            {project.github && (
              <Link href={project.github} target="_blank">
                <Button variant="ghost">
                  <Github className="text-primary" />
                </Button>
              </Link>
            )}
            {project.host && (
              <Link href={project.host} target="_blank">
                <Button variant="ghost">
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
    <div className="bg-primary/90 shadow-primary group flex h-4 w-11/12 flex-col items-center justify-between rounded-b-md shadow-sm transition-all duration-1000 hover:h-[20rem]">
      <div className="scrollbar-none bg-gradient flex h-full w-full flex-col justify-center gap-4 overflow-auto rounded-b-md px-2 py-4 opacity-0 transition-opacity duration-700 ease-in group-hover:opacity-100 sm:px-8 md:px-14 2xl:px-20">
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
