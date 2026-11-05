"use client";

import { useRef, useState } from "react";
import type { GalleryItem } from "@/data/projects";

/** Tabbed image viewer. Each image opens full size in a new tab. */
export default function Gallery({ items }: { items: GalleryItem[] }) {
  const [active, setActive] = useState(items[Math.min(1, items.length - 1)].id);
  const tabRefs = useRef<Record<string, HTMLButtonElement | null>>({});
  const current = items.find((i) => i.id === active) ?? items[0];

  const onKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>, i: number) => {
    let next = i;
    if (e.key === "ArrowRight") next = (i + 1) % items.length;
    else if (e.key === "ArrowLeft") next = (i - 1 + items.length) % items.length;
    else if (e.key === "Home") next = 0;
    else if (e.key === "End") next = items.length - 1;
    else return;
    e.preventDefault();
    const id = items[next].id;
    setActive(id);
    tabRefs.current[id]?.focus();
  };

  return (
    <div>
      <div role="tablist" aria-label="Views" className="-mx-1 flex gap-1 overflow-x-auto px-1">
        {items.map((item, i) => {
          const selected = item.id === active;
          return (
            <button
              key={item.id}
              ref={(el) => {
                tabRefs.current[item.id] = el;
              }}
              role="tab"
              id={`tab-${item.id}`}
              aria-selected={selected}
              aria-controls="gallery-panel"
              tabIndex={selected ? 0 : -1}
              onClick={() => setActive(item.id)}
              onKeyDown={(e) => onKeyDown(e, i)}
              className={`shrink-0 border-b-2 px-3.5 py-2 text-[15px] transition-colors ${
                selected
                  ? "border-accent font-medium text-fg"
                  : "border-transparent text-muted hover:text-fg"
              }`}
            >
              {item.label}
            </button>
          );
        })}
      </div>

      <div
        id="gallery-panel"
        role="tabpanel"
        aria-labelledby={`tab-${current.id}`}
        className="mt-4 overflow-hidden rounded-xl border border-line bg-surface"
      >
        {/* Diagrams are exported on a dark background, so they sit in a dark frame in both themes. */}
        <div className="overflow-x-auto bg-[#121212] p-3 sm:p-5">
          <a
            href={current.src}
            target="_blank"
            rel="noreferrer"
            className="mx-auto block"
            style={{
              maxWidth: Math.round(current.width * 1.3),
              minWidth: current.width > 1500 ? 900 : 560,
            }}
            aria-label={`Open "${current.label}" full size in a new tab`}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={current.src}
              alt={current.alt}
              width={current.width}
              height={current.height}
              className="h-auto w-full"
            />
          </a>
        </div>
        <div className="px-4 py-4 sm:px-5">
          <p className="max-w-prose text-[15px] text-muted">{current.caption}</p>
          {current.items && current.items.length > 0 && (
            <ul className="mt-3 flex flex-wrap gap-1.5" aria-label="Tables in this view">
              {current.items.map((t) => (
                <li key={t} className="tag">
                  {t}
                </li>
              ))}
            </ul>
          )}
          <a
            href={current.src}
            target="_blank"
            rel="noreferrer"
            className="mt-3 inline-block text-sm text-accent underline underline-offset-4"
          >
            Open full size
          </a>
        </div>
      </div>
    </div>
  );
}
