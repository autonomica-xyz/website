import type { ReactNode } from "react"
import Link from "next/link"
import { ArrowDown } from "lucide-react"
import ContactForm from "@/components/contact-form"
import NavButton from "@/components/nav-button"
import { Reveal } from "@/components/reveal"
import SiteNav from "@/components/site-nav"
import SiteFooter from "@/components/site-footer"

const pillars = [
  {
    n: "01",
    title: "Own the loop",
    desc: "Receive, decide, act, review — without a human in the middle of every step.",
  },
  {
    n: "02",
    title: "Agents that run work",
    desc: "Research, competition, content, site ops — company functions as deployed agents, not chat windows.",
  },
  {
    n: "03",
    title: "Volume is the truth",
    desc: "When the job is bulk AI, unit cost is architecture. Batch work exposes what demos hide.",
  },
  {
    n: "04",
    title: "Transfer the method",
    desc: "The endgame isn’t a black box. It’s replication — blueprints and findings others can run.",
  },
]

const tracks = [
  {
    idx: "01",
    title: "Custom agent creation & deployment",
    desc: "We design, build, and deploy agents that own ongoing company work — the loops a business needs as it becomes more autonomous. Landscape research, competition monitoring, content creation, website management, and similar operating functions. Not chat demos: tools, schedules, quality gates, deploy paths, and ownership after handoff.",
    tags: [
      "Landscape research",
      "Competition monitoring",
      "Content",
      "Website ops",
      "Deploy",
    ],
    kind: "Agents",
    side: "You name the function. We ship an agent that runs it.",
  },
  {
    idx: "02",
    title: "Distributed workload automation",
    desc: "When the problem is volume — minutes, pages, images — we design distributed AI around unit cost. Transcription, OCR, image generation and manipulation, or any shardable job. Queues, workers, model routes, retries, QC, cost telemetry. The thesis dies if the economics don’t work; so we treat cost as a first-class constraint.",
    tags: ["Transcription", "OCR", "Images", "Custom batch", "Unit economics"],
    kind: "Batch",
    side: "You bring volume and constraints. We ship the pipeline.",
  },
]

const agentShapes = [
  {
    st: "Research",
    title: "Landscape research",
    desc: "Continuous scan of markets, tech, and positioning signals — findings the company can act on.",
  },
  {
    st: "Compete",
    title: "Competition monitoring",
    desc: "Track rivals, pricing, launches, and narrative shifts without a full-time analyst loop.",
  },
  {
    st: "Content",
    title: "Content creation",
    desc: "Draft, package, and ship on a cadence with review gates — not one-off prompts.",
  },
  {
    st: "Site",
    title: "Website management",
    desc: "Publish, update, and keep the public surface current as part of ops, not a project.",
  },
]

const batchShapes = [
  {
    st: "Audio",
    title: "Transcription",
    desc: "Long-form media, multi-language, cost ladders under load.",
  },
  {
    st: "Docs",
    title: "OCR / extract",
    desc: "Archives and forms; finish the corpus, don’t sample-demo it.",
  },
  {
    st: "Vision",
    title: "Image pipelines",
    desc: "Bulk gen and edits with automated QC gates.",
  },
  {
    st: "Other",
    title: "Shardable AI",
    desc: "If it parallelizes and has a quality bar, we can scope it.",
  },
]

const phases = [
  {
    num: "01",
    title: "Foundation",
    desc: "Stack + agents + batch systems that fund the experiment and prove basic loops.",
    current: true,
  },
  {
    num: "02",
    title: "Automation",
    desc: "Hand recurring functions to agents and systems, highest-leverage first.",
    current: false,
  },
  {
    num: "03",
    title: "Autonomy",
    desc: "Company runs; founder on strategy and edges.",
    current: false,
  },
  {
    num: "04",
    title: "Replication",
    desc: "Publish the playbook and research findings. Others shouldn’t rebuild from myth.",
    current: false,
  },
]

const runtimeJobs = [
  {
    name: "agent.research",
    role: "Landscape · continuous scan",
    pill: "Live",
    tone: "run" as const,
  },
  {
    name: "agent.compete",
    role: "Competition monitoring",
    pill: "Live",
    tone: "ok" as const,
  },
  {
    name: "agent.content",
    role: "Content + site ops",
    pill: "Active",
    tone: "lab" as const,
  },
  {
    name: "sys.batch",
    role: "Volume pipelines · unit cost",
    pill: "Live",
    tone: "run" as const,
  },
]

const caps = [
  "Autonomy thesis",
  "Agent deployment",
  "Research loops",
  "Batch systems",
]

function Pill({
  children,
  tone,
}: {
  children: ReactNode
  tone: "run" | "ok" | "lab"
}) {
  const styles =
    tone === "run"
      ? "bg-[rgba(200,245,66,0.12)] text-[#c8f542]"
      : tone === "ok"
        ? "bg-[rgba(94,228,162,0.12)] text-[#5ee4a2]"
        : "bg-white/[0.06] text-[#b4bac4]"
  return (
    <span
      className={`rounded-full px-2 py-1 font-mono text-[10px] uppercase tracking-[0.08em] ${styles}`}
    >
      {children}
    </span>
  )
}

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-[#07080a] text-[#ece8df]">
      <div
        className="pointer-events-none fixed inset-0 z-0"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(180,255,57,0.04) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      <SiteNav variant="home" />

      {/* ── Hero ─────────────────────────────────────────────── */}
      <section className="relative z-10 pt-28 pb-16 md:pt-32 md:pb-20">
        <div className="absolute left-[35%] top-[18%] h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-[#c8f542] opacity-[0.05] blur-[180px] pointer-events-none" />

        <div className="container relative mx-auto max-w-[1180px] px-5">
          <div className="hero-fade-1 mb-7 flex flex-wrap gap-2.5">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/[0.08] px-3 py-1.5 font-mono text-[11px] uppercase tracking-[0.12em] text-[#b4bac4]">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#c8f542] opacity-75" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-[#c8f542]" />
              </span>
              lab.active
            </span>
            <span className="inline-flex items-center rounded-full border border-white/[0.08] px-3 py-1.5 font-mono text-[11px] uppercase tracking-[0.12em] text-[#b4bac4]">
              phase 01 · foundation
            </span>
            <span className="inline-flex items-center rounded-full border border-white/[0.08] px-3 py-1.5 font-mono text-[11px] uppercase tracking-[0.12em] text-[#b4bac4]">
              agents · research · batch
            </span>
          </div>

          <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <h1 className="hero-fade-2 mb-6 font-display text-[clamp(2.8rem,5.5vw,4.5rem)] font-normal leading-[0.96] tracking-[-0.02em]">
                An applied AI lab
                <br />
                building companies
                <br />
                that <em className="italic text-[#c8f542]">run themselves.</em>
              </h1>

              <p className="hero-fade-3 mb-4 max-w-[34rem] text-lg leading-[1.7] text-[#b4bac4]">
                One founder, production systems, and a public experiment: can
                autonomous operations outrun hire-to-grow? We don’t sell a
                catalog — we ship agents and systems that execute, then publish
                what we learn.
              </p>

              <p className="hero-fade-3 mb-7 max-w-[34rem] border-l-2 border-[rgba(200,245,66,0.35)] pl-3.5 text-[0.98rem] leading-[1.65] text-[#b4bac4]">
                Today that means{" "}
                <strong className="font-medium text-[#ece8df]">
                  custom agent creation and deployment
                </strong>{" "}
                — landscape research, competition monitoring, content, website
                ops — and{" "}
                <strong className="font-medium text-[#ece8df]">
                  distributed batch AI
                </strong>{" "}
                when volume and unit cost are the constraint. Same bar:
                production only, no pilots.
              </p>

              <div className="hero-fade-4 mb-7 flex flex-wrap gap-3">
                <NavButton
                  eventName="see_work_click"
                  eventCategory="navigation"
                  className="h-auto rounded bg-[#c8f542] px-[18px] py-3 font-mono text-xs font-medium uppercase tracking-[0.08em] text-[#0a0c08] hover:brightness-110"
                  href="#applied"
                >
                  See the work
                  <ArrowDown className="ml-2 h-3.5 w-3.5" />
                </NavButton>
                <NavButton
                  eventName="work_with_us_click"
                  eventCategory="navigation"
                  variant="outline"
                  className="h-auto rounded border-white/10 bg-transparent px-[18px] py-3 font-mono text-xs font-medium uppercase tracking-[0.08em] text-[#ece8df] hover:bg-white/[0.03]"
                  href="#work-with-us"
                >
                  Work with us
                </NavButton>
              </div>

              <div className="hero-fade-4 flex flex-wrap gap-2">
                {caps.map((cap) => (
                  <span
                    key={cap}
                    className="rounded border border-white/[0.08] px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.08em] text-[#b4bac4]"
                  >
                    {cap}
                  </span>
                ))}
              </div>
            </div>

            {/* Runtime panel */}
            <div
              className="hero-fade-4 overflow-hidden rounded-xl border border-white/[0.08] shadow-[0_40px_80px_rgba(0,0,0,0.5)]"
              style={{
                background:
                  "linear-gradient(180deg, #12161d 0%, #0b0d11 100%)",
              }}
              aria-label="Lab runtime"
            >
              <div className="flex items-center justify-between border-b border-white/[0.08] bg-white/[0.02] px-3.5 py-3">
                <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-[#b4bac4]">
                  runtime · agents + systems
                </span>
                <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-[#b4bac4]">
                  lab · evidence
                </span>
              </div>
              <div className="grid gap-3 p-4">
                <div className="space-y-0.5 font-mono text-[11px] leading-[1.7] text-[#b4bac4]">
                  <div>&gt; autonomica up</div>
                  <div>&gt; thesis: own the loop</div>
                  <div>
                    &gt; status:{" "}
                    <span className="text-[#c8f542]">running</span> · agents +
                    batch
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-2">
                  {[
                    ["Agents", "Deployed loops"],
                    ["Research", "Live signals"],
                    ["Batch", "$/unit proof"],
                  ].map(([label, sub]) => (
                    <div
                      key={label}
                      className="rounded-md border border-white/[0.08] bg-white/[0.025] px-2.5 py-3"
                    >
                      <b className="mb-1 block font-display text-[1.35rem] font-normal leading-none text-[#c8f542]">
                        {label}
                      </b>
                      <small className="font-mono text-[9px] uppercase tracking-[0.1em] text-[#b4bac4]">
                        {sub}
                      </small>
                    </div>
                  ))}
                </div>

                {runtimeJobs.map((job) => (
                  <div
                    key={job.name}
                    className="grid grid-cols-[1fr_auto] items-center gap-2.5 rounded-md border border-white/[0.08] bg-black/25 px-3 py-2.5"
                  >
                    <div>
                      <div className="font-mono text-xs">{job.name}</div>
                      <div className="mt-0.5 text-xs text-[#b4bac4]">
                        {job.role}
                      </div>
                    </div>
                    <Pill tone={job.tone}>{job.pill}</Pill>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="relative z-10 h-px w-full bg-gradient-to-r from-transparent via-[rgba(200,245,66,0.2)] to-transparent" />

      {/* ── Thesis ───────────────────────────────────────────── */}
      <section id="lab" className="relative z-10 border-t border-white/[0.08] py-20 md:py-24">
        <div className="container mx-auto max-w-[1180px] px-5">
          <div className="grid items-start gap-12 lg:grid-cols-2">
            <Reveal>
              <div>
                <div className="mb-3.5 font-mono text-[11px] tracking-[0.2em] text-[rgba(200,245,66,0.55)]">
                  01 · Thesis
                </div>
                <h2 className="mb-3.5 font-display text-[clamp(2rem,3.5vw,2.85rem)] font-normal leading-[1.08]">
                  AI shouldn’t wait
                  <br />
                  for a human to{" "}
                  <em className="italic text-[#c8f542]">click approve.</em>
                </h2>
                <p className="mb-4 text-[1.05rem] leading-[1.7] text-[#b4bac4]">
                  Most “AI” still drafts and waits. Autonomica tests the
                  opposite: agents and systems that execute inside clear
                  boundaries, while we run our own company as the long experiment
                  in autonomous operations.
                </p>
                <p className="text-[1.05rem] leading-[1.7] text-[#b4bac4]">
                  Client work is research under pressure — real functions, real
                  volume, real failure modes. We won’t run a six-week demo that
                  dies in a shared drive. If it ships, it has owners, metrics,
                  and a cost model. Patterns that hold get published.
                </p>
              </div>
            </Reveal>

            <div className="grid gap-5">
              {pillars.map((item, i) => (
                <Reveal key={item.n} delay={80 + i * 60}>
                  <div className="border-t border-white/[0.08] pt-4">
                    <div className="mb-2 font-mono text-[11px] tracking-[0.2em] text-[rgba(200,245,66,0.45)]">
                      {item.n}
                    </div>
                    <h3 className="mb-2 font-display text-[1.35rem] font-normal">
                      {item.title}
                    </h3>
                    <p className="max-w-md text-[0.98rem] leading-[1.65] text-[#b4bac4]">
                      {item.desc}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Applied work ─────────────────────────────────────── */}
      <section
        id="applied"
        className="relative z-10 border-t border-white/[0.08] py-20 md:py-24"
      >
        <div className="container mx-auto max-w-[1180px] px-5">
          <Reveal>
            <div className="mb-10 max-w-xl">
              <div className="mb-3.5 font-mono text-[11px] tracking-[0.2em] text-[rgba(200,245,66,0.55)]">
                02 · Where the thesis meets the world
              </div>
              <h2 className="mb-3.5 font-display text-[clamp(2rem,3.5vw,2.85rem)] font-normal leading-[1.08]">
                Two evidence tracks.
                <br />
                <em className="italic text-[#c8f542]">Same production bar.</em>
              </h2>
              <p className="text-[1.05rem] leading-[1.7] text-[#b4bac4]">
                Both feed the autonomy experiment. Both ship systems you can run
                — not theater.
              </p>
            </div>
          </Reveal>

          <p className="mb-7 font-mono text-xs text-[#b4bac4]">
            // evidence · agents first · batch when volume demands it
          </p>

          <div className="border-t border-white/[0.08]">
            {tracks.map((track, i) => (
              <Reveal key={track.idx} delay={i * 80}>
                <article className="grid gap-3 border-b border-white/[0.08] py-8 md:grid-cols-[100px_1fr_auto] md:gap-6">
                  <div className="pt-1 font-mono text-xs tracking-[0.12em] text-[rgba(200,245,66,0.4)]">
                    {track.idx}
                  </div>
                  <div>
                    <h3 className="mb-2.5 font-display text-[clamp(1.6rem,2.5vw,2.1rem)] font-normal">
                      {track.title}
                    </h3>
                    <p className="mb-3.5 max-w-xl leading-[1.7] text-[#b4bac4]">
                      {track.desc}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {track.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded border border-white/[0.08] px-2 py-1 font-mono text-[10px] uppercase tracking-[0.08em] text-[#b4bac4]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="md:min-w-[140px] md:text-right">
                    <div className="mb-2 font-mono text-[10px] uppercase tracking-[0.12em] text-[#c8f542]">
                      {track.kind}
                    </div>
                    <p className="text-[13px] leading-[1.5] text-[#b4bac4]">
                      {track.side}
                    </p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>

          <Reveal delay={120}>
            <div className="mt-9">
              <div className="mb-4 font-mono text-[11px] tracking-[0.2em] text-[rgba(200,245,66,0.55)]">
                Agent shapes we deploy
              </div>
              <div className="grid overflow-hidden rounded-xl border border-white/[0.08] bg-white/[0.08] sm:grid-cols-2 lg:grid-cols-4">
                {agentShapes.map((shape) => (
                  <div
                    key={shape.title}
                    className="min-h-[160px] border-white/[0.08] bg-[#0e1014] p-5 sm:border-r sm:border-b last:border-r-0 lg:border-b-0"
                  >
                    <div className="mb-3 font-mono text-[10px] uppercase tracking-[0.14em] text-[#c8f542]">
                      {shape.st}
                    </div>
                    <h4 className="mb-2 font-display text-xl font-normal">
                      {shape.title}
                    </h4>
                    <p className="text-[13px] leading-[1.55] text-[#b4bac4]">
                      {shape.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={160}>
            <div className="mt-9">
              <div className="mb-4 font-mono text-[11px] tracking-[0.2em] text-[rgba(200,245,66,0.55)]">
                Batch shapes we industrialize
              </div>
              <div className="grid overflow-hidden rounded-xl border border-white/[0.08] bg-white/[0.08] sm:grid-cols-2 lg:grid-cols-4">
                {batchShapes.map((shape) => (
                  <div
                    key={shape.title}
                    className="min-h-[160px] border-white/[0.08] bg-[#0e1014] p-5 sm:border-r sm:border-b last:border-r-0 lg:border-b-0"
                  >
                    <div className="mb-3 font-mono text-[10px] uppercase tracking-[0.14em] text-[#c8f542]">
                      {shape.st}
                    </div>
                    <h4 className="mb-2 font-display text-xl font-normal">
                      {shape.title}
                    </h4>
                    <p className="text-[13px] leading-[1.55] text-[#b4bac4]">
                      {shape.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Experiment ───────────────────────────────────────── */}
      <section
        id="experiment"
        className="relative z-10 border-t border-white/[0.08] py-20 md:py-24"
      >
        <div className="container mx-auto max-w-[1180px] px-5">
          <Reveal>
            <div className="mb-10 max-w-xl">
              <div className="mb-3.5 font-mono text-[11px] tracking-[0.2em] text-[rgba(200,245,66,0.55)]">
                03 · Long experiment
              </div>
              <h2 className="mb-3.5 font-display text-[clamp(2rem,3.5vw,2.85rem)] font-normal leading-[1.08]">
                Four phases.
                <br />
                <em className="italic text-[#c8f542]">One company.</em>
              </h2>
              <p className="text-[1.05rem] leading-[1.7] text-[#b4bac4]">
                Applied work funds the path and keeps the research honest. The
                long goal is a company that largely runs itself — and methods
                others can reuse.
              </p>
            </div>
          </Reveal>

          <div className="border-t border-white/[0.08]">
            {phases.map((phase, i) => (
              <Reveal key={phase.num} delay={i * 70}>
                <div
                  className={`grid gap-2 border-b border-white/[0.08] py-7 md:grid-cols-[140px_1fr_100px] md:gap-6 ${
                    phase.current ? "opacity-100" : "opacity-40 hover:opacity-75"
                  }`}
                >
                  <div className="flex items-center gap-2.5 font-mono text-[11px] uppercase tracking-[0.14em] text-[#b4bac4]">
                    <span
                      className={`h-2 w-2 rounded-full ${
                        phase.current
                          ? "bg-[#c8f542]"
                          : "border border-white/25 bg-transparent"
                      }`}
                    />
                    Phase {phase.num}
                  </div>
                  <div>
                    <h3 className="mb-1.5 font-display text-2xl font-normal">
                      {phase.title}
                    </h3>
                    <p className="max-w-lg leading-[1.6] text-[#b4bac4]">
                      {phase.desc}
                    </p>
                  </div>
                  <div className="md:text-right">
                    {phase.current && (
                      <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-[#c8f542]">
                        Current
                      </span>
                    )}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <div className="relative z-10 h-px w-full bg-gradient-to-r from-transparent via-[rgba(200,245,66,0.2)] to-transparent" />

      {/* ── Contact ──────────────────────────────────────────── */}
      <section
        id="work-with-us"
        className="relative z-10 border-t border-white/[0.08] py-20 md:py-24"
      >
        <div className="container mx-auto max-w-[1180px] px-5">
          <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr]">
            <Reveal>
              <div>
                <div className="mb-3.5 font-mono text-[11px] tracking-[0.2em] text-[rgba(200,245,66,0.55)]">
                  04 · Plug into the experiment
                </div>
                <h2 className="mb-3.5 font-display text-[clamp(2rem,3.5vw,2.85rem)] font-normal leading-[1.08]">
                  Fund a proof.
                  <br />
                  <em className="italic text-[#c8f542]">Or become one.</em>
                </h2>
                <p className="mb-3 text-[1.05rem] leading-[1.7] text-[#b4bac4]">
                  Tell us which company function an agent should own (research,
                  competition, content, site, other) — or send a batch workload
                  with volume, formats, cost pressure, and quality bar.
                </p>
                <p className="mb-5 text-[0.98rem] leading-[1.7] text-[#b4bac4]">
                  You’ll get production systems. We’ll get evidence for the
                  autonomy thesis. If it’s not a fit, we’ll say so quickly.
                </p>
                <div className="rounded-lg border border-dashed border-[rgba(200,245,66,0.25)] p-4 font-mono text-xs leading-[1.7] text-[#b4bac4]">
                  Prefer email?{" "}
                  <Link
                    href="mailto:hello@autonomica.xyz"
                    className="text-[#c8f542] hover:underline"
                  >
                    hello@autonomica.xyz
                  </Link>
                </div>
              </div>
            </Reveal>

            <Reveal delay={100}>
              <ContactForm />
            </Reveal>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  )
}
