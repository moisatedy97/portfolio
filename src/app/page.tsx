import { getAllProjects } from "@/server/db/queries";
import Home from "./home";
import Projects from "./projects";

async function Index(): Promise<React.JSX.Element> {
  const data = await getAllProjects();

  return (
    <main className="flex h-full flex-col gap-64 py-48">
      <Home />
      <Projects />
    </main>
  );
}

export default Index;
