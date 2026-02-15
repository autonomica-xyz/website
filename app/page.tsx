import Link from "next/link"
import { ArrowRight, ArrowDown } from "lucide-react"
import NewsletterSignup from "@/components/newsletter-signup"
import NavButton from "@/components/nav-button"
import { Reveal } from "@/components/reveal"
import SiteNav from "@/components/site-nav"
import SiteFooter from "@/components/site-footer"
import { StatusBadge, SectionLabel } from "@/components/section-label"

export default function Home() {
  const pillars = [
    {
      title: "Autonomous Operations",
      desc: "AI handles work end to end. No human in the middle approving things.",
    },
    {
      title: "AI Decision Making",
      desc: "The AI makes real decisions, not recommendations a human has to sign off on.",
    },
    {
      title: "Scalable Growth",
      desc: "Adding capacity means spinning up more agents, not hiring more people.",
    },
    {
      title: "Open Blueprints",
      desc: "Everything we learn gets published. The playbook for autonomous business, open source.",
    },
  ]

  const products = [
    {
      title: "AI Operations Suite",
      description:
        "A control panel for running dozens of AI agents across a business. See what each one is doing, adjust configurations without redeploying, and kill misbehaving ones.",
      status: "IN.DEV",
      statusColor: "text-amber-400",
      dotColor: "bg-amber-400",
    },
    {
      title: "Agents Managing Agents",
      description:
        "Supervisor agents that manage worker agents. Instead of a human coordinating everything, an AI agent does the dispatching, monitors output, and handles failures.",
      status: "TESTING",
      statusColor: "text-lime-400",
      dotColor: "bg-lime-400",
    },
    {
      title: "Blueprints & Marketplace",
      description:
        "Open source configs and templates for running AI agents in production. Fork them, adapt them, deploy them.",
      status: "PLANNED",
      statusColor: "text-neutral-400",
      dotColor: "bg-neutral-500",
    },
  ]

  const phases = [
    {
      title: "Foundation",
      description:
        "We build the AI stack and ship products that pay for what comes next.",
      current: true,
    },
    {
      title: "Automation",
      description:
        "Functions transfer from human to AI, one at a time, starting with the most repetitive.",
      current: false,
    },
    {
      title: "Autonomy",
      description:
        "The AI runs the company. The founder steps back to strategy and edge cases.",
      current: false,
    },
    {
      title: "Replication",
      description:
        "We publish everything so someone else can do this without starting from scratch.",
      current: false,
    },
  ]

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

      <SiteNav />

      {/* ── Hero Section ─────────────────────────────────────── */}
      <section className="relative z-10 min-h-screen flex flex-col justify-center pt-20">
        {/* Breathing glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] md:w-[900px] md:h-[900px] rounded-full bg-lime-400 animate-breathe blur-[200px]" />

        <div className="container mx-auto px-4 relative">
          {/* Status badges */}
          <div className="hero-fade-1 flex flex-wrap gap-3 mb-10 md:mb-14">
            <StatusBadge active>sys.active</StatusBadge>
            <StatusBadge>phase 01 / foundation</StatusBadge>
          </div>

          {/* Headline */}
          <h1 className="hero-fade-2 font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-[7rem] leading-[0.95] tracking-tight max-w-5xl mb-8">
            The business
            <br />
            that builds
            <br />
            <em className="italic text-lime-400">itself.</em>
          </h1>

          {/* Subtitle */}
          <p className="hero-fade-3 text-lg md:text-xl text-neutral-300 max-w-2xl mb-12 leading-relaxed font-body">
            A business wrapped in an experiment wrapped in a business. We figure
            out how to run a company with AI by actually doing it, and we build
            whatever tools we need along the way.
          </p>

          {/* CTAs */}
          <div className="hero-fade-4 flex flex-col sm:flex-row gap-4">
            <NavButton
              eventName="learn_more_click"
              eventCategory="navigation"
              className="bg-lime-400 text-[#050505] hover:bg-lime-300 font-mono font-medium text-xs tracking-[0.1em] uppercase px-6 py-3 h-auto rounded font-semibold"
              href="#mission"
            >
              Explore
              <ArrowDown className="ml-2 h-3.5 w-3.5" />
            </NavButton>
            <NavButton
              eventName="join_mission_click"
              eventCategory="navigation"
              variant="outline"
              className="border-white/10 text-[#f0ece4] hover:bg-white/5 font-mono font-medium text-xs tracking-[0.1em] uppercase px-6 py-3 h-auto rounded"
              href="#join"
            >
              Join the Experiment
            </NavButton>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 hero-fade-4">
          <span className="font-mono font-medium text-[11px] tracking-[0.2em] uppercase text-neutral-400">
            Scroll
          </span>
          <div className="w-px h-8 bg-gradient-to-b from-neutral-600 to-transparent" />
        </div>
      </section>

      {/* Divider */}
      <div className="relative z-10 w-full h-px bg-gradient-to-r from-transparent via-lime-400/20 to-transparent" />

      {/* ── Mission Section ──────────────────────────────────── */}
      <section id="mission" className="relative z-10 py-32 md:py-40">
        <div className="container mx-auto px-4">
          <Reveal>
            <SectionLabel number="01" label="Mission" />
          </Reveal>

          <div className="grid lg:grid-cols-12 gap-16 lg:gap-8">
            {/* Left: headline + body */}
            <div className="lg:col-span-5">
              <Reveal>
                <h2 className="font-display text-4xl md:text-5xl lg:text-6xl leading-[1.05] mb-10">
                  One founder.
                  <br />
                  <em className="italic text-lime-400">Infinite AI.</em>
                </h2>
              </Reveal>
              <Reveal delay={100}>
                <p className="text-neutral-300 text-lg leading-relaxed mb-6">
                  Autonomica is one person and a lot of AI. The founder sets
                  direction. AI handles everything else.
                </p>
              </Reveal>
              <Reveal delay={200}>
                <p className="text-neutral-300 text-lg leading-relaxed">
                  AI doesn&apos;t wait for a human to approve things. It decides,
                  acts, and course-corrects on its own. The founder sets the
                  vision. The machines do the rest.
                </p>
              </Reveal>
            </div>

            {/* Right: pillars as editorial list */}
            <div className="lg:col-span-6 lg:col-start-7">
              <div className="space-y-10 lg:space-y-14">
                {pillars.map((item, i) => (
                  <Reveal key={i} delay={120 + i * 80}>
                    <div className="group">
                      <span className="font-mono font-medium text-[11px] tracking-[0.25em] text-lime-400/40 block mb-4">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <h4 className="font-display text-xl md:text-2xl mb-2 group-hover:text-lime-400 transition-colors duration-300">
                        {item.title}
                      </h4>
                      <p className="text-neutral-400 leading-relaxed max-w-md">
                        {item.desc}
                      </p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>

          {/* Read more link */}
          <Reveal delay={500}>
            <div className="mt-16">
              <Link
                href="/mission"
                className="inline-flex items-center gap-2 font-mono font-medium text-xs tracking-[0.1em] uppercase text-lime-400 hover:text-lime-300 transition-colors"
              >
                Explore our mission <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Divider */}
      <div className="relative z-10 w-full h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />

      {/* ── Products / Systems Section ───────────────────────── */}
      <section id="systems" className="relative z-10 py-32 md:py-40">
        <div className="container mx-auto px-4">
          <Reveal>
            <SectionLabel number="02" label="Systems" />
          </Reveal>

          <Reveal>
            <div className="max-w-2xl mb-20">
              <h2 className="font-display text-4xl md:text-5xl leading-[1.05] mb-6">
                Tools we build
                <br />
                <em className="italic text-neutral-400">as we need them.</em>
              </h2>
              <p className="text-neutral-300 text-lg leading-relaxed">
                While building our autonomous company, we create products that
                fund the mission and serve others on the same path.
              </p>
            </div>
          </Reveal>

          {/* Products as full-width editorial rows */}
          <div className="border-t border-white/[0.06]">
            {products.map((product, i) => (
              <Reveal key={i} delay={i * 100}>
                <div className="group grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 py-12 md:py-16 border-b border-white/[0.06]">
                  {/* Number */}
                  <div className="md:col-span-1">
                    <span className="font-mono font-medium text-sm tracking-[0.1em] text-neutral-500 group-hover:text-lime-400/60 transition-colors duration-500">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>

                  {/* Title + description */}
                  <div className="md:col-span-8">
                    <h3 className="font-display text-2xl md:text-3xl lg:text-4xl mb-4 group-hover:text-lime-400 transition-colors duration-500">
                      {product.title}
                    </h3>
                    <p className="text-neutral-300 leading-relaxed max-w-xl text-base md:text-lg">
                      {product.description}
                    </p>
                  </div>

                  {/* Status */}
                  <div className="md:col-span-3 md:text-right md:pt-2">
                    <div className="inline-flex items-center gap-2">
                      <span className="relative flex h-1.5 w-1.5">
                        <span className={`relative inline-flex rounded-full h-1.5 w-1.5 ${product.dotColor}`} />
                      </span>
                      <span
                        className={`font-mono font-medium text-[11px] tracking-[0.15em] uppercase ${product.statusColor}`}
                      >
                        {product.status}
                      </span>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          {/* Read more link */}
          <Reveal delay={400}>
            <div className="mt-16">
              <Link
                href="/systems"
                className="inline-flex items-center gap-2 font-mono font-medium text-xs tracking-[0.1em] uppercase text-lime-400 hover:text-lime-300 transition-colors"
              >
                Explore our systems <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Divider */}
      <div className="relative z-10 w-full h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />

      {/* ── Experiment Section ───────────────────────────────── */}
      <section id="experiment" className="relative z-10 py-32 md:py-40">
        <div className="container mx-auto px-4">
          <Reveal>
            <SectionLabel number="03" label="The Experiment" />
          </Reveal>

          <Reveal>
            <div className="max-w-2xl mb-20">
              <h2 className="font-display text-4xl md:text-5xl leading-[1.05] mb-6">
                A living
                <br />
                <em className="italic text-lime-400">laboratory.</em>
              </h2>
              <p className="text-neutral-300 text-lg leading-relaxed">
                Autonomica itself is the experiment &mdash; a company evolving in
                real-time as we discover what autonomous business actually looks
                like.
              </p>
            </div>
          </Reveal>

          {/* Boot log */}
          <Reveal>
            <div className="font-mono font-medium text-xs text-neutral-500 space-y-1 mb-10 pl-1">
              <p>&gt; INITIALIZING AUTONOMICA.SYS...</p>
              <p>&gt; LOADING MODULES...</p>
              <p>
                &gt; SYSTEM STATUS:{" "}
                <span className="text-lime-400">OPERATIONAL</span>
              </p>
            </div>
          </Reveal>

          {/* Timeline */}
          <div className="border-t border-white/[0.06]">
            {phases.map((phase, i) => (
              <Reveal key={i} delay={i * 80}>
                <div
                  className={`grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 py-10 md:py-14 border-b border-white/[0.06] transition-all duration-500 ${
                    phase.current
                      ? "opacity-100"
                      : "opacity-30 hover:opacity-70"
                  }`}
                >
                  {/* Phase label */}
                  <div className="md:col-span-3 flex items-baseline gap-3">
                    <div
                      className={`h-2 w-2 rounded-full shrink-0 mt-1.5 ${
                        phase.current
                          ? "bg-lime-400"
                          : "border border-white/20"
                      }`}
                    />
                    <span className="font-mono font-medium text-xs tracking-[0.15em] text-neutral-400 uppercase">
                      Phase {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="md:col-span-6">
                    <h3 className="font-display text-2xl md:text-3xl mb-2">
                      {phase.title}
                    </h3>
                    <p className="text-neutral-300 leading-relaxed">
                      {phase.description}
                    </p>
                  </div>

                  {/* Current indicator */}
                  <div className="md:col-span-3 md:text-right">
                    {phase.current && (
                      <span className="font-mono font-medium text-[11px] tracking-[0.2em] text-lime-400 uppercase">
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

      {/* Divider */}
      <div className="relative z-10 w-full h-px bg-gradient-to-r from-transparent via-lime-400/20 to-transparent" />

      {/* ── CTA Section ──────────────────────────────────────── */}
      <section id="join" className="relative z-10 py-32 md:py-40">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <Reveal>
              <h2 className="font-display text-4xl md:text-5xl leading-[1.05] mb-6">
                Join the
                <br />
                <em className="italic text-lime-400">experiment.</em>
              </h2>
            </Reveal>
            <Reveal delay={100}>
              <p className="text-neutral-300 text-lg leading-relaxed mb-12">
                We send updates when something actually ships or when something
                interesting breaks. No fluff.
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
