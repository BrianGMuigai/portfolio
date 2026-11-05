import Link from "next/link";
import View from "@/components/View";
import Reveal from "@/components/Reveal";
import ProjectCard from "@/components/ProjectCard";
import CopyEmail from "@/components/CopyEmail";
import ApiCard from "@/components/ApiCard";
import { about, contact,experience, hero, profile, site, skills, stats } from "@/data/site";
import { featuredProjects, projects } from "@/data/projects";
import { FiMail } from "react-icons/fi";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Home() {
  const featured = featuredProjects(4);

  return (
    <main id="main">
      {/* Home */}
      <section id="home" aria-label="Introduction" className="relative flex min-h-[100svh] items-center overflow-hidden pb-16 pt-24">
        <div className="grid-bg pointer-events-none absolute inset-0" aria-hidden="true" />
          <div className="wrap relative">
            <div className="grid items-center gap-14 lg:grid-cols-[1.15fr_0.85fr]">
            <div className="min-w-0">
              <p className="badge">
                <span className="pulse-dot h-1.5 w-1.5 rounded-full bg-accent" aria-hidden="true" />
                {profile.status}
              </p>
              <h1 className="mt-6 max-w-3xl text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl lg:text-[3.6rem]">
                {hero.headline}
              </h1>
              <p className="mt-6 max-w-xl text-lg text-muted">{hero.intro}</p>
              <div className="mt-9 flex flex-wrap gap-3">
                <a href="#projects" className="btn btn-primary">
                  See my work
                </a>
                <a href="#contact" className="btn btn-ghost">
                  Get in touch
                </a>
              </div>
            </div>

            {/* "API response" card */}
            <Reveal delay={120} className="min-w-0">
              <ApiCard />
            </Reveal>
          </div>

          <dl className="mt-12 grid gap-px overflow-hidden rounded-xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((s) => (
              <div key={s.value} className="min-w-0 bg-bg p-5 sm:p-6">
                <dt className="text-[17px] font-semibold tracking-tight">{s.value}</dt>
                <dd className="mt-2 text-[14.5px] leading-snug text-muted">{s.label}</dd>
              </div>
            ))}
          </dl>

        </div>
      </section>

{/* About */}
<View id="about" index="01" title="How I approach backend work">
  <div className="grid gap-14 lg:grid-cols-[200px_1fr] lg:gap-14">
    <div className="hidden lg:block" />
    <div className="min-w-0">
      <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
        <Reveal>
          <div className="max-w-prose space-y-4 text-[17.5px]">
            {about.paragraphs.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
        </Reveal>

        <Reveal delay={100}>
          <div className="card divide-y divide-line">
            {skills.map((s) => (
              <div key={s.group} className="p-5">
                <h3 className="eyebrow mb-3">{s.group}</h3>
                <ul className="flex flex-wrap gap-1.5">
                  {s.items.map((i) => (
                    <li key={i} className="tag !text-fg">
                      {i}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Reveal>
      </div>

      <Reveal>
        <ol className="mt-12 grid gap-x-10 gap-y-8 border-t border-line pt-10 sm:grid-cols-2">
          {about.principles.map((p, i) => (
            <li key={p.lead} className="grid grid-cols-[2.5rem_1fr] gap-2">
              <span className="pt-0.5 font-mono text-sm text-accent">0{i + 1}</span>
              <div>
                <p className="font-medium">{p.lead}</p>
                <p className="mt-0.5 text-[15.5px] text-muted">{p.body}</p>
              </div>
            </li>
          ))}
        </ol>
      </Reveal>
    </div>
  </div>
</View>

      {/* Experience */}
      <View id="experience" index="02" title="Experience">
        <div className="grid gap-14 lg:grid-cols-[200px_1fr] lg:gap-14">
          <div className="hidden lg:block" />
          <Reveal>
            <article className="card p-6 sm:p-8">
              <header className="flex flex-col gap-3 border-b border-line pb-6 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <h3 className="text-xl font-semibold leading-snug tracking-tight">{experience.title}</h3>
                  <p className="mt-1.5 text-muted">
                    {experience.company} · {experience.place}
                  </p>
                </div>
                <span className="badge shrink-0 self-start">
                  <span className="pulse-dot h-1.5 w-1.5 rounded-full bg-accent" aria-hidden="true" />
                  {experience.period}
                </span>
              </header>
              <p className="mt-6 max-w-prose text-[17px]">{experience.summary}</p>
              <dl className="mt-8 grid gap-px overflow-hidden rounded-lg border border-line bg-line sm:grid-cols-2">
                {experience.work.map((w, i) => (
                  <div key={w.lead} className="bg-surface p-5">
                    <dt className="flex items-center gap-2.5 font-medium">
                      <span className="font-mono text-xs text-accent">0{i + 1}</span>
                      {w.lead}
                    </dt>
                    <dd className="mt-2 text-[15.5px] leading-relaxed text-muted">{w.body}</dd>
                  </div>
                ))}
              </dl>
            </article>
          </Reveal>
        </div>
      </View>

      {/* Projects */}
      <View
        id="projects"
        index="03"
        title="Selected work"
        intro="Each project has a write-up covering the design decisions, not just the stack."
      >
        <div className={`grid gap-6 ${featured.length === 1 ? "" : "md:grid-cols-2"}`}>
          {featured.map((p, i) => (
            <Reveal key={p.slug} delay={i * 80}>
              <ProjectCard
                project={p}
                layout={featured.length === 1 ? "wide" : featured.length > 2 ? "compact" : "stack"}
              />
            </Reveal>
          ))}
        </div>
        {projects.length > 1 && (
          <p className="mt-8">
            <Link href="/projects" className="font-medium text-accent underline underline-offset-4">
              See all {projects.length} projects
            </Link>
          </p>
        )}
      </View>

      {/* Contact */}
      <View id="contact" index="04" title="Contact">
        <div className="grid gap-14 lg:grid-cols-[200px_1fr] lg:gap-14">
          <div className="hidden lg:block" />
          <Reveal>
            <p className="max-w-2xl text-lg leading-relaxed text-muted sm:text-xl">{contact.statement}</p>
            <div className="mt-9 flex flex-wrap gap-3">
              <a href={`mailto:${site.email}`} className="btn btn-primary">
                <FiMail size={18} aria-hidden="true" />
                Email me
              </a>
              <a href={site.linkedin} target="_blank" rel="noreferrer" className="btn btn-ghost">
                <FaLinkedin size={18} aria-hidden="true" />
                LinkedIn
              </a>
              <a href={site.github} target="_blank" rel="noreferrer" className="btn btn-ghost">
                <FaGithub size={18} aria-hidden="true" />
                GitHub
              </a>
            </div>
            <p className="mt-6 flex flex-wrap items-center gap-3 font-mono text-sm text-muted">
              {site.email}
              <CopyEmail email={site.email} />
            </p>
          </Reveal>
        </div>
</View>
    </main>
  );
}
