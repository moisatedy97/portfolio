import Companies from "./companies";
import Home from "./home";
import Navbar from "./navbar";
import Projects from "./projects";

function Index(): React.JSX.Element {
  return (
    <main className="h-full">
      <Navbar />
      <div className="flex flex-col gap-64 py-12 sm:py-28 md:py-44 lg:py-52">
        <Home />
        <Projects />
        <Companies />
      </div>
    </main>
  );
}

export default Index;
