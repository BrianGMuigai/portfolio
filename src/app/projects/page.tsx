import type { Metadata } from "next";
import ProjectList from "@/components/ProjectList";
import { projects } from "@/data/projects";

export const metadata: Metadata = {
  title: "Projects",
  description: "Projects by Brian Muigai, each with its own write-up.",
  alternates: { canonical: "/projects" },
};

export default function ProjectsPage() {
  return (
    <main id="main" className="pb-24 pt-32">
      <div className="wrap">
        <p className="eyebrow">projects</p>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight sm:text-5xl">Selected work</h1>
        <p className="mt-4 max-w-xl text-lg text-muted">
          Things I've built, each with its own write-up. {projects.length}{" "}
          {projects.length === 1 ? "project" : "projects"} so far.
        </p>
        <div className="mt-12">
          <ProjectList projects={projects} />
        </div>
      </div>
    </main>
  );
}
