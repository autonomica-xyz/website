import Link from "next/link"
import type { Metadata } from "next"
import SiteNav from "@/components/site-nav"
import SiteFooter from "@/components/site-footer"
import { SectionLabel } from "@/components/section-label"
import { Reveal } from "@/components/reveal"
import NewsletterSignup from "@/components/newsletter-signup"

export const metadata: Metadata = {
  title: "Mission - Autonomica",
  description:
    "One founder, infinite AI. Autonomica is building the first company where AI owns the operational loop, not just assists with it.",
  openGraph: {
    title: "Mission - Autonomica",
    description:
      "One founder, infinite AI. Autonomica is building the first company where AI owns the operational loop, not just assists with it.",
    url: "https://autonomica.ai/mission",
    siteName: "Autonomica",
  },
}

const pillars = [
  {
    number: "01",
    title: "Autonomous Operations",
    paragraphs: [
      "Most companies use AI the way they used spreadsheets in the 90s: a tool that sits inside human workflows. Somebody prompts it, reviews the output, clicks approve. The human is still the bottleneck. We're doing something different. At Autonomica, AI owns the loop. It receives inputs, makes decisions, executes tasks, and reviews its own output. The human founder sets direction and handles edge cases that genuinely require judgment. Everything else runs without waiting for a person to be available, awake, or in the right mood.",
      "This sounds riskier than it is. An AI agent that deploys code, monitors the result, and rolls back on failure is more reliable than a tired engineer pushing at 2 AM. The trick is scoping autonomy correctly: give agents clear boundaries, good monitoring, and real consequences for failure (like automatic rollbacks), and they outperform human-in-the-loop setups on both speed and error rate.",
      "What breaks when you remove humans? Less than you'd think. Most operational work is pattern matching and execution against known criteria. The parts that actually need human judgment, like picking which market to enter or deciding company values, are strategic and infrequent. The 95% that's operational? That's where AI thrives.",
    ],
  },
  {
    number: "02",
    title: "AI Decision Making",
    paragraphs: [
      "Here's the uncomfortable truth about most \"AI-powered\" companies: a human still makes every decision that matters. The AI drafts, suggests, recommends. Then someone clicks approve. That's not AI decision making. That's autocomplete with extra steps.",
      "At Autonomica, AI makes real calls. Not just \"should this email use subject line A or B\" but \"should we pursue this partnership, and if so, what terms should we propose?\" The system evaluates options against defined criteria, weighs tradeoffs, and acts. The founder doesn't review every decision. The founder reviews the decision-making framework, and adjusts it when the outcomes indicate the criteria need updating.",
      "The trust problem is real, and we don't pretend it isn't. You build trust the same way you would with a new hire: start with low-stakes decisions, monitor outcomes, widen the scope as the track record develops. The difference is that AI decisions are fully logged, auditable, and reproducible. When a human VP makes a bad call, you get a post-hoc rationalization. When an AI agent makes a bad call, you get the exact reasoning chain and can fix the model that produced it.",
    ],
  },
  {
    number: "03",
    title: "Scalable Growth",
    paragraphs: [
      "Traditional companies hit a ceiling: to do more, you hire more people. More people means more coordination, more meetings, more management overhead. Scaling a team from 10 to 100 doesn't give you 10x output. It gives you maybe 3x output and 10x communication cost.",
      "An AI-operated company has different economics. Adding capacity means spinning up more agents, not onboarding new employees. There's no ramp-up time. No culture fit interviews. No benefits administration. The infrastructure compounds: every system we build makes the next one cheaper to deploy. One founder with the right stack can sustain throughput that would normally require a mid-size team.",
      "\"One founder, unlimited throughput\" isn't a tagline. It's an engineering constraint we design around. It forces us to build systems that don't require human attention to function, monitoring that surfaces only what actually needs intervention, and workflows that heal themselves. If something requires a human touch to run, we haven't finished building it yet.",
    ],
  },
  {
    number: "04",
    title: "Open Blueprints",
    paragraphs: [
      "We publish everything. Not because it's a nice marketing story, but because the value of autonomous business operations increases when more people do it. A single company running on AI agents is an experiment. A thousand companies doing it creates an ecosystem, shared tooling, proven patterns, and a labor market for people who build these systems.",
      "Our blueprints are runnable configurations, not whitepapers. You won't find 40-page PDFs with conceptual diagrams. You'll find agent configs, prompt templates, monitoring dashboards, and deployment scripts. Things you can fork, modify, and run today. The goal is that someone with technical ability and a business idea can go from zero to an operational AI-run company by following the blueprint and adapting it to their domain.",
      "Who is this for? Founders who want to build companies that run lean from day one. Engineers who want to understand how to wire AI agents into production business workflows. And researchers who want real-world data on what happens when you remove humans from operational loops. We're the experiment. The blueprints are the lab notes.",
    ],
  },
]

export default function MissionPage() {
  return (
    <div className="min-h-screen bg-[#050505] text-[#f0ece4] relative overflow-x-hidden">
      {/* Dot grid background */}
      <div
        className="pointer-events-none fixed inset-0 z-0"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(180,255,57,0.05) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      <SiteNav currentPage="mission" />

      {/* Page Header */}
      <section className="relative z-10 pt-32 md:pt-40 pb-20 md:pb-28">
        <div className="container mx-auto px-4">
          <Reveal>
            <SectionLabel number="01" label="Mission" />
          </Reveal>

          <div className="max-w-3xl">
            <Reveal>
              <h1 className="font-display text-5xl md:text-6xl lg:text-7xl leading-[0.95] tracking-tight mb-10">
                One founder.
                <br />
                <em className="italic text-lime-400">Infinite AI.</em>
              </h1>
            </Reveal>
            <Reveal delay={100}>
              <p className="text-neutral-300 text-lg md:text-xl leading-relaxed mb-6">
                Autonomica is building the first company where AI doesn't just assist operations, it owns them. A single human founder sets direction. Everything else, from product development to customer operations to financial management, runs on AI systems that make decisions, execute, and improve on their own.
              </p>
            </Reveal>
            <Reveal delay={200}>
              <p className="text-neutral-300 text-lg md:text-xl leading-relaxed">
                This page explains the four pillars that make it work, written with enough specificity that you could disagree with us. That's the point.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="relative z-10 w-full h-px bg-gradient-to-r from-transparent via-lime-400/20 to-transparent" />

      {/* Pillars */}
      {pillars.map((pillar, i) => (
        <div key={pillar.number}>
          <section className="relative z-10 py-24 md:py-32">
            <div className="container mx-auto px-4">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12">
                {/* Number + Title */}
                <div className="md:col-span-4">
                  <Reveal>
                    <span className="font-mono font-medium text-[11px] tracking-[0.25em] text-lime-400/40 block mb-4">
                      {pillar.number}
                    </span>
                    <h2 className="font-display text-3xl md:text-4xl lg:text-5xl leading-[1.05]">
                      {pillar.title}
                    </h2>
                  </Reveal>
                </div>

                {/* Content */}
                <div className="md:col-span-7 md:col-start-6 space-y-6">
                  {pillar.paragraphs.map((p, j) => (
                    <Reveal key={j} delay={80 + j * 60}>
                      <p className="text-neutral-300 text-base md:text-lg leading-relaxed">
                        {p}
                      </p>
                    </Reveal>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Divider between pillars */}
          {i < pillars.length - 1 && (
            <div className="relative z-10 w-full h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />
          )}
        </div>
      ))}

      {/* Divider */}
      <div className="relative z-10 w-full h-px bg-gradient-to-r from-transparent via-lime-400/20 to-transparent" />

      {/* CTA Section */}
      <section className="relative z-10 py-32 md:py-40">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <Reveal>
              <h2 className="font-display text-4xl md:text-5xl leading-[1.05] mb-6">
                Follow the
                <br />
                <em className="italic text-lime-400">experiment.</em>
              </h2>
            </Reveal>
            <Reveal delay={100}>
              <p className="text-neutral-300 text-lg leading-relaxed mb-12">
                Get updates on what we're building, what's working, and what isn't. No hype, just progress reports from inside an AI-run company.
              </p>
            </Reveal>
            <Reveal delay={200}>
              <NewsletterSignup />
            </Reveal>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  )
}
