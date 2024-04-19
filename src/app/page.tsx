import { getAllProjects } from "@/server/db/queries";
import ProjectImages from "./_components/project-images";
import { getFilesFromDir } from "@/lib/utils";

async function HomePage(): Promise<React.JSX.Element> {
  const data = await getAllProjects();

  return (
    <main>
      <pre>{JSON.stringify(data, null, 2)}</pre>
      {data.map((project) => (
        <div key={project.id}>
          <div>{project.name}</div>
          {project.imagesPath && (
            <ProjectImages
              projectId={project.id}
              imagesPath={project.imagesPath}
              images={getFilesFromDir(project.imagesPath)}
            />
          )}
        </div>
      ))}
    </main>
  );
}

export default HomePage;
