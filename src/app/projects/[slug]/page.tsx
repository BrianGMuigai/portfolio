import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Gallery from "@/components/Gallery";
import { getProject, projects } from "@/data/projects";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
 if (!project) return {};
  return {
    title: project.title,
    description: project.summary,
    alternates: { canonical: `/projects/${project.slug}` },
  };
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getProject(slug);
 if (!project) notFound();

  const index = projects.findIndex((p) => p.slug === project.slug);
  const next = projects.length > 1 ? projects[(index + 1) % projects.length] : null;

  return (
    <main id="main" className="pb-24 pt-32">
      <div className="wrap">
        <Link href="/projects" className="font-mono text-[13px] text-muted hover:text-fg">
          ← all projects
        </Link>

        <header className="mt-8 max-w-3xl">
          <div className="flex flex-wrap items-center gap-2">
            <span className="badge">{project.status}</span>
            <span className="text-sm text-muted">{project.year}</span>
          </div>
          <h1 className="mt-4 text-4xl font-semibold leading-[1.1] tracking-tight sm:text-5xl">
            {project.title}
          </h1>
          <p className="mt-4 text-xl text-muted">{project.summary}</p>
          <div className="mt-6 flex flex-wrap gap-3">
            {project.repo && (
              <a href={project.repo} target="_blank" rel="noreferrer" className="btn btn-primary">
                View the repository
              </a>
            )}
            {project.live && (
              <a href={project.live} target="_blank" rel="noreferrer" className="btn btn-ghost">
                Open the live site
              </a>
            )}
          </div>
          <ul className="mt-6 flex flex-wrap gap-1.5" aria-label="Technologies">
            {project.tags.map((t) => (
              <li key={t} className="tag">
                {t}
              </li>
            ))}
          </ul>
        </header>

        <section aria-labelledby="overview" className="mt-14 border-t border-line pt-10">
          <h2 id="overview" className="text-2xl font-semibold tracking-tight">
            Overview
          </h2>
          <div className="mt-4 max-w-prose space-y-4 text-lg">
            {project.overview.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
          {project.note && (
            <p className="mt-5 max-w-prose rounded-lg border border-line bg-surface px-4 py-3 text-[16px] text-muted">
              {project.note}
            </p>
          )}
        </section>

        {project.gallery && project.gallery.length > 0 && (
          <section aria-labelledby="gallery" className="mt-14 border-t border-line pt-10">
            <h2 id="gallery" className="mb-6 text-2xl font-semibold tracking-tight">
              {project.galleryTitle ?? "Gallery"}
            </h2>
            <Gallery items={project.gallery} />
          </section>
        )}

        {project.highlights.length > 0 && (
          <section aria-labelledby="highlights" className="mt-14 border-t border-line pt-10">
            <h2 id="highlights" className="mb-8 text-2xl font-semibold tracking-tight">
              {project.highlightsTitle}
            </h2>
            <dl className="grid gap-px overflow-hidden rounded-xl border border-line bg-line md:grid-cols-2">
              {project.highlights.map((h, i) => (
                <div key={h.title} className="bg-surface p-6">
                  <dt className="flex items-baseline gap-3 font-medium">
                    <span className="font-mono text-xs text-accent">0{i + 1}</span>
                    {h.title}
                  </dt>
                  <dd className="mt-2 text-[15.5px] leading-relaxed text-muted">{h.body}</dd>
                </div>
              ))}
            </dl>
          </section>
        )}

        {next && (
          <nav aria-label="Next project" className="mt-16 border-t border-line pt-8">
            <p className="text-sm text-muted">Next project</p>
            <Link
              href={`/projects/${next.slug}`}
              className="mt-1 inline-block text-xl font-semibold tracking-tight hover:text-accent"
            >
              {next.title}
            </Link>
          </nav>
        )}
      </div>
    </main>
  );
}
