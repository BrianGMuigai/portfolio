"use client";

import { useMemo, useState } from "react";
import type { Project } from "@/data/projects";
import ProjectCard from "./ProjectCard";

/** The filter only appears once there are enough projects to need it. */
const FILTER_FROM = 4;

export default function ProjectList({ projects }: { projects: Project[] }) {
  const [tag, setTag] = useState<string | null>(null);

  const tags = useMemo(
    () => Array.from(new Set(projects.flatMap((p) => p.tags))).sort(),
    [projects],
  );
  const shown = tag ? projects.filter((p) => p.tags.includes(tag)) : projects;
  const showFilter = projects.length >= FILTER_FROM;

  return (
    <div>
      {showFilter && (
        <div className="mb-8 flex flex-wrap gap-2" role="group" aria-label="Filter projects by technology">
          {[null, ...tags].map((t) => (
            <button
              key={t ?? "all"}
              type="button"
              aria-pressed={tag === t}
              onClick={() => setTag(t)}
              className={`rounded-full border px-3.5 py-1.5 text-sm transition-colors ${
                tag === t
                  ? "border-fg bg-fg text-bg"
                  : "border-line text-muted hover:border-fg/40 hover:text-fg"
              }`}
            >
              {t ?? "All"}
            </button>
          ))}
        </div>
      )}

      <div
        className={`grid gap-6 ${shown.length === 1 ? "" : "md:grid-cols-2"}`}
        aria-live="polite"
      >
        {shown.map((p) => (
          <ProjectCard key={p.slug} project={p} layout={shown.length === 1 ? "wide" : "stack"} />
        ))}
      </div>
    </div>
  );
}
