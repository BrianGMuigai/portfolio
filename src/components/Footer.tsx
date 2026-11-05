import { site } from "@/data/site";

export default function Footer() {
  return (
    <footer className="border-t border-line py-10">
      <div className="wrap flex flex-col gap-3 font-mono text-[13px] text-muted sm:flex-row sm:items-center sm:justify-between">
        <p>
          &copy; {new Date().getFullYear()} {site.name} · {site.location}
        </p>
        <p className="flex items-center gap-5">
          <a href={site.github} target="_blank" rel="noreferrer" className="hover:text-fg">
            github
          </a>
          <a href={site.linkedin} target="_blank" rel="noreferrer" className="hover:text-fg">
            linkedin
          </a>
          <a href={`mailto:${site.email}`} className="hover:text-fg">
            email
          </a>
        </p>
      </div>
    </footer>
  );
}
