import Link from "next/link";
import type { Project } from "@/data/projects";

/**
 * "stack": image on top, text below (used in grids of two or more).
 * "wide": image beside the text (used when there is a single project).
 * "compact": text only, so a grid of many projects still fits one screen.
 */
export default function ProjectCard({
  project,
  layout = "stack",
}: {
  project: Project;
  layout?: "stack" | "wide" | "compact";
}) {
  const wide = layout === "wide";
  const showCover = Boolean(project.cover) && layout !== "compact";
  return (
    <article
      className={`group relative h-full overflow-hidden rounded-xl border border-line bg-surface transition-all duration-300 hover:-translate-y-0.5 hover:border-accent/60 hover:shadow-[0_18px_50px_-28px_rgb(var(--accent)/0.5)] ${
        wide ? "md:grid md:grid-cols-[1.1fr_1fr]" : "flex flex-col"
      }`}
    >
      {showCover && project.cover && (
        <div className="flex items-center justify-center bg-[#121212] p-4">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={project.cover.src}
            alt={project.cover.alt}
            width={project.cover.width}
            height={project.cover.height}
            loading="lazy"
            className="h-auto max-h-72 w-full object-contain"
          />
        </div>
      )}
      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <div className="flex flex-wrap items-center gap-2">
          <span className="badge">{project.status}</span>
          <span className="text-sm text-muted">{project.year}</span>
        </div>
        <h3 className="mt-3 text-xl font-semibold tracking-tight">
          {/* The link stretches over the whole card, so the card is one big target. */}
          <Link
            href={`/projects/${project.slug}`}
            className="after:absolute after:inset-0 after:content-['']"
          >
            {project.title}
          </Link>
        </h3>
        <p className="mt-2 text-[16px] text-muted">{project.summary}</p>
        <ul className="mt-4 flex flex-wrap gap-1.5" aria-label="Technologies">
          {project.tags.map((t) => (
            <li key={t} className="tag">
              {t}
            </li>
          ))}
        </ul>
        <p className="mt-auto pt-5 text-[15px] font-medium text-accent">
          Read the case study{" "}
          <span aria-hidden="true" className="inline-block transition-transform group-hover:translate-x-1">
            →
          </span>
        </p>
      </div>
    </article>
  );
}
