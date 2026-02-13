import Link from "next/link"
import type { Metadata } from "next"
import SiteNav from "@/components/site-nav"
import SiteFooter from "@/components/site-footer"
import { SectionLabel, StatusBadge } from "@/components/section-label"
import { Reveal } from "@/components/reveal"
import NewsletterSignup from "@/components/newsletter-signup"

export const metadata: Metadata = {
  title: "Systems - Autonomica",
  description:
    "The tools we build as we need them. AI operations suite, knowledgeable agents, and open source blueprints for autonomous business.",
  openGraph: {
    title: "Systems - Autonomica",
    description:
      "The tools we build as we need them. AI operations suite, knowledgeable agents, and open source blueprints for autonomous business.",
    url: "https://autonomica.xyz/systems",
    siteName: "Autonomica",
  },
}

const products = [
  {
    number: "01",
    title: "AI Operations Suite",
    status: "IN.DEV",
    active: false,
    paragraphs: [
      "Running one AI agent is simple. Running dozens of them across every department of a business, each with different tools, permissions, and failure modes, is an unsolved problem. The AI Operations Suite is our answer: a management layer for deploying, configuring, and monitoring AI agents at scale.",
      "Concretely, this means a dashboard where you can see every agent that's running, what it's doing, how it performed on its last task, and what it's about to do next. You can adjust an agent's configuration without redeploying it. You can set up orchestration rules (\"if the customer support agent escalates, route to the sales agent\") without writing code. You can kill a misbehaving agent and have its tasks redistributed automatically.",
      "We're building this because we need it. Autonomica runs on these agents, and managing them through config files and manual monitoring stopped scaling months ago. The operations suite is the control plane we wish existed. It's in active development and we're using it internally as the primary test environment.",
    ],
  },
  {
    number: "02",
    title: "Agents Managing Agents",
    status: "TESTING",
    active: true,
    paragraphs: [
      "One agent can handle a task. But running a business means hundreds of tasks happening concurrently, with dependencies between them, and somebody needs to decide what runs when, catch failures, reallocate work, and spin up new agents when load spikes. That somebody shouldn't be a human refreshing a dashboard. It should be another agent.",
      "Agents Managing Agents is our orchestration layer: supervisor agents that deploy worker agents, monitor their output, intervene when things go sideways, and scale capacity up or down based on actual demand. A supervisor agent doesn't just dispatch tasks. It evaluates whether the worker's output met the criteria, decides whether to retry or escalate, and adjusts the worker's configuration based on patterns it observes over time. The hierarchy can go multiple levels deep. A department-level agent coordinates team-level agents, which each manage individual task agents.",
      "This is how you get from \"one founder with some AI tools\" to \"one founder running an entire company.\" You don't hire more people. You give your best agents the ability to manage other agents. We're testing this internally now, and the results are clear: the bottleneck in scaling agentic work was never the agents themselves. It was the human trying to orchestrate all of them.",
    ],
  },
  {
    number: "03",
    title: "Blueprints & Marketplace",
    status: "PLANNED",
    active: false,
    paragraphs: [
      "Every system we build at Autonomica produces a byproduct: a pattern that someone else could reuse. The customer support agent we configured, the deployment pipeline we wired up, the financial monitoring dashboard we built. These are all replicable, and we plan to make them available as open source blueprints.",
      "Blueprints aren't documentation. They're runnable configurations: agent definitions, prompt templates, tool integrations, and orchestration rules packaged so you can fork them and adapt them to your context. The marketplace adds a layer on top: agent configurations that other operators have built and validated, available to deploy directly or modify.",
      "This is planned, not built. We need to get our own operations suite stable before we can package our patterns for external use. The vision is straightforward: reduce the time from \"I want an AI agent that handles X\" to \"I have one running\" from weeks to hours. We'll share more specifics when we're closer to shipping.",
    ],
  },
]

export default function SystemsPage() {
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

      <SiteNav currentPage="systems" />

      {/* Page Header */}
      <section className="relative z-10 pt-32 md:pt-40 pb-20 md:pb-28">
        <div className="container mx-auto px-4">
          <Reveal>
            <SectionLabel number="02" label="Systems" />
          </Reveal>

          <div className="max-w-3xl">
            <Reveal>
              <h1 className="font-display text-5xl md:text-6xl lg:text-7xl leading-[0.95] tracking-tight mb-10">
                Tools we build
                <br />
                <em className="italic text-neutral-400">as we need them.</em>
              </h1>
            </Reveal>
            <Reveal delay={100}>
              <p className="text-neutral-300 text-lg md:text-xl leading-relaxed mb-6">
                Autonomica builds products that solve our own problems first. Every tool listed here exists because we hit a wall running our AI-operated company and had to build something to get past it. They fund the mission and serve others on the same path.
              </p>
            </Reveal>
            <Reveal delay={200}>
              <p className="text-neutral-300 text-lg md:text-xl leading-relaxed">
                Three products, each at a different stage. We're honest about where things stand.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Products */}
      {products.map((product, i) => (
        <div key={product.number}>
          {/* Divider */}
          <div className="relative z-10 w-full h-px bg-gradient-to-r from-transparent via-lime-400/20 to-transparent" />

          <section className="relative z-10 py-24 md:py-32">
            <div className="container mx-auto px-4">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12">
                {/* Number + Title + Status */}
                <div className="md:col-span-4">
                  <Reveal>
                    <span className="font-mono font-medium text-[11px] tracking-[0.25em] text-lime-400/40 block mb-4">
                      {product.number}
                    </span>
                    <h2 className="font-display text-3xl md:text-4xl lg:text-5xl leading-[1.05] mb-6">
                      {product.title}
                    </h2>
                    <StatusBadge active={product.active}>
                      {product.status}
                    </StatusBadge>
                  </Reveal>
                </div>

                {/* Content */}
                <div className="md:col-span-7 md:col-start-6 space-y-6">
                  {product.paragraphs.map((p, j) => (
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
                Get early
                <br />
                <em className="italic text-lime-400">access.</em>
              </h2>
            </Reveal>
            <Reveal delay={100}>
              <p className="text-neutral-300 text-lg leading-relaxed mb-12">
                We ship to our mailing list first. Sign up to get access to tools as they move from internal use to public release.
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
