import { profile } from "@/data/site";

const q = (s: string) => `"${s}"`;

function Line({ indent = 1, children }: { indent?: 0 | 1 | 2; children: React.ReactNode }) {
  const pad = indent === 0 ? "" : indent === 1 ? "pl-4" : "pl-8";
  return <span className={`block ${pad}`}>{children}</span>;
}

function Key({ children }: { children: string }) {
  return <span className="text-zinc-500">{q(children)}</span>;
}

function Str({ children }: { children: string }) {
  return <span className="text-teal-300">{q(children)}</span>;
}

export default function ApiCard() {
  return (
    <div
      className="w-full min-w-0 overflow-hidden rounded-xl border border-line shadow-[0_20px_60px_-30px_rgb(0_0_0/0.35)]"
      style={{ background: "rgb(var(--term))" }}
      aria-label="Profile summary"
    >
      <div className="flex flex-wrap items-center justify-between gap-x-4 gap-y-1 border-b border-white/10 px-4 py-2.5 font-mono text-[11.5px] text-zinc-400 sm:text-[12px]">
        <span className="min-w-0 truncate">
          <span className="text-emerald-400">GET</span> /engineers/brian-muigai
        </span>
        <span className="text-emerald-400">200 OK</span>
      </div>

      <pre className="overflow-x-auto p-4 font-mono text-[12px] leading-6 text-zinc-300 sm:p-5 sm:text-[13px] sm:leading-7">
        <code>
          <Line indent={0}>{"{"}</Line>
          <Line>
            <Key>role</Key>: <Str>{profile.role}</Str>,
          </Line>
          <Line>
            <Key>location</Key>: <Str>{profile.location}</Str>,
          </Line>
          <Line>
            <Key>stack</Key>: [
          </Line>
          {profile.stack.map((item, i) => (
            <Line key={item} indent={2}>
              <Str>{item}</Str>
              {i < profile.stack.length - 1 ? "," : ""}
            </Line>
          ))}
          <Line>],</Line>
          <Line>
            <Key>focus</Key>: [
          </Line>
          {profile.focus.map((item, i) => (
            <Line key={item} indent={2}>
              <Str>{item}</Str>
              {i < profile.focus.length - 1 ? "," : ""}
            </Line>
          ))}
          <Line>],</Line>
          <Line>
            <Key>status</Key>: <Str>{profile.status}</Str>
          </Line>
          <Line indent={0}>{"}"}</Line>
        </code>
      </pre>
    </div>
  );
}
