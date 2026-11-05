import Reveal from "./Reveal";

/** A page section with a numbered mono eyebrow, a title and an optional intro. */
export default function View({
  id,
  index,
  title,
  intro,
  children,
}: {
  id: string;
  index: string;
  title: string;
  intro?: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} aria-labelledby={`${id}-title`} className="section">
      <div className="wrap">
        <Reveal>
          <header className="mb-12 grid gap-4 lg:grid-cols-[200px_1fr] lg:gap-14">
            <p className="eyebrow pt-2">
              <span className="text-accent">{index}</span>
              <span className="mx-2 opacity-40">/</span>
              {id}
            </p>
            <div className="max-w-2xl">
              <h2 id={`${id}-title`} className="text-3xl font-semibold tracking-tight sm:text-4xl">
                {title}
              </h2>
              {intro && <p className="mt-3 text-lg text-muted">{intro}</p>}
            </div>
          </header>
        </Reveal>
        {children}
      </div>
    </section>
  );
}
