"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { nav, site } from "@/data/site";

export default function Nav() {
  const pathname = usePathname();
  const onHome = pathname === "/";
  const [active, setActive] = useState("home");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!onHome) return;
    const targets = nav
      .map((n) => document.getElementById(n.id))
      .filter((el): el is HTMLElement => el !== null);
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id);
        }
      },
      { rootMargin: "-45% 0px -45% 0px" },
    );
    targets.forEach((t) => observer.observe(t));
    return () => observer.disconnect();
  }, [onHome]);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const current = onHome ? active : pathname.startsWith("/projects") ? "projects" : "";
  const hrefFor = (id: string) => `${onHome ? "" : "/"}#${id}`;

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-line bg-bg/80 backdrop-blur-md">
      <nav aria-label="Primary" className="wrap flex h-16 items-center justify-between">
      
        <Link href="/" className="group flex items-center gap-2.5 text-[16px] font-semibold tracking-tight">
         <img src="/logo.png" alt="" className="h-7 w-7 object-contain" />
           {site.name}
             </Link>
          <ul className="hidden items-center gap-1 md:flex">
          {nav.map((n) => (
            <li key={n.id}>
              <Link
                href={hrefFor(n.id)}
                aria-current={current === n.id ? "true" : undefined}
                className={`relative rounded-md px-3 py-2 text-[14.5px] transition-colors ${
                  current === n.id ? "font-medium text-fg" : "text-muted hover:text-fg"
                }`}
              >
                {n.label}
                {current === n.id && (
                  <span
                    className="absolute inset-x-3 -bottom-[13px] h-0.5 rounded bg-accent"
                    aria-hidden="true"
                  />
                )}
              </Link>
            </li>
          ))}
        </ul>

        <a
          href="/brian-muigai-cv.pdf"
          target="_blank"
          rel="noreferrer"
          className="btn btn-ghost hidden !py-1.5 !text-[14px] md:inline-flex"
        >
          CV <span aria-hidden="true">↗</span>
        </a>

        <button
          type="button"
          className="rounded-md border border-line px-3 py-1.5 text-sm md:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((o) => !o)}
        >
          {open ? "Close" : "Menu"}
        </button>
      </nav>

      {open && (
        <ul
          id="mobile-menu"
          className="wrap flex flex-col gap-1 border-t border-line bg-bg pb-4 pt-2 md:hidden"
        >
          {nav.map((n) => (
            <li key={n.id}>
              <Link
                href={hrefFor(n.id)}
                onClick={() => setOpen(false)}
                className={`block rounded-md px-2 py-2.5 text-base ${
                  current === n.id ? "font-medium text-fg" : "text-muted"
                }`}
              >
                {n.label}
              </Link>
            </li>
          ))}
          <li>
            <a
              href="/brian-muigai-cv.pdf"
              target="_blank"
              rel="noreferrer"
              className="block rounded-md px-2 py-2.5 text-base text-muted"
            >
              CV ↗
            </a>
          </li>
        </ul>
      )}
    </header>
  );
}
