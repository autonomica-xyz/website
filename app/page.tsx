import Link from "next/link"
import { ArrowRight, ArrowDown } from "lucide-react"
import NewsletterSignup from "@/components/newsletter-signup"
import NavButton from "@/components/nav-button"
import { Reveal } from "@/components/reveal"

function StatusBadge({ children, active = false }: { children: React.ReactNode; active?: boolean }) {
  return (
    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-lime-400/20 bg-lime-400/5 font-mono text-[11px] tracking-[0.15em] uppercase text-lime-400">
      {active && (
        <span className="relative flex h-1.5 w-1.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-lime-400 opacity-75" />
          <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-lime-400" />
        </span>
      )}
      {children}
    </div>
  )
}

function SectionLabel({ number, label }: { number: string; label: string }) {
  return (
    <div className="flex items-center gap-3 mb-16">
      <span className="font-mono text-xs tracking-[0.2em] text-lime-400">[{number}]</span>
      <span className="font-mono text-xs tracking-[0.2em] uppercase text-neutral-400">{label}</span>
      <div className="flex-1 h-px bg-white/5" />
    </div>
  )
}

export default function Home() {
  const pillars = [
    {
      title: "Autonomous Operations",
      desc: "AI systems that own the entire operational loop, from intake to execution to review.",
    },
    {
      title: "AI Decision Making",
      desc: "Strategic decisions driven by advanced reasoning, not human bottlenecks.",
    },
    {
      title: "Scalable Growth",
      desc: "Infrastructure that compounds without headcount. One founder, unlimited throughput.",
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
        "Agent management suite to deploy and configure AI agents at scale. Monitor, adjust, and orchestrate autonomous workflows across every layer of the business.",
      status: "IN.DEV",
      statusColor: "text-amber-400",
      dotColor: "bg-amber-400",
    },
    {
      title: "Knowledgeable Agents",
      description:
        "Knowledge management platform for AI applications. From context files to RAG pipelines and MCP integrations, giving every agent the context it needs.",
      status: "TESTING",
      statusColor: "text-lime-400",
      dotColor: "bg-lime-400",
    },
    {
      title: "Blueprints & Marketplace",
      description:
        "Open source blueprints for autonomous operations. A marketplace where AI employees earn when you don't need them, and scale when you do.",
      status: "PLANNED",
      statusColor: "text-neutral-400",
      dotColor: "bg-neutral-500",
    },
  ]

  const phases = [
    {
      title: "Foundation",
      description:
        "Building the core AI systems and initial product offerings that fund future development.",
      current: true,
    },
    {
      title: "Automation",
      description:
        "Transitioning operational responsibilities from human to AI systems, one department at a time.",
      current: false,
    },
    {
      title: "Autonomy",
      description:
        "Achieving full AI autonomy with the founder serving only as a strategic guide.",
      current: false,
    },
    {
      title: "Replication",
      description:
        "Sharing the blueprint with the world. Enabling others to create their own autonomous companies.",
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

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-[#050505]/80 border-b border-white/[0.04]">
        <div className="container mx-auto py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-lime-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-lime-400" />
            </span>
            <span className="font-mono text-sm tracking-[0.15em] uppercase">
              Autonomica
            </span>
          </Link>
          <div className="hidden md:flex items-center gap-8">
            <Link
              href="#mission"
              className="font-mono text-xs tracking-[0.1em] uppercase text-neutral-400 hover:text-[#f0ece4] transition-colors"
            >
              Mission
            </Link>
            <Link
              href="#systems"
              className="font-mono text-xs tracking-[0.1em] uppercase text-neutral-400 hover:text-[#f0ece4] transition-colors"
            >
              Systems
            </Link>
            <Link
              href="#experiment"
              className="font-mono text-xs tracking-[0.1em] uppercase text-neutral-400 hover:text-[#f0ece4] transition-colors"
            >
              Experiment
            </Link>
            <Link
              href="/blog"
              className="font-mono text-xs tracking-[0.1em] uppercase text-neutral-400 hover:text-[#f0ece4] transition-colors"
            >
              Blog
            </Link>
            <NavButton
              eventName="join_waitlist_click"
              eventCategory="navigation"
              className="bg-lime-400 text-[#050505] hover:bg-lime-300 font-mono text-xs tracking-[0.1em] uppercase px-4 py-2 h-auto rounded"
              href="#join"
            >
              Enter
              <ArrowRight className="ml-1.5 h-3 w-3" />
            </NavButton>
          </div>
          <button className="md:hidden text-neutral-300 hover:text-white">
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              <line x1="3" y1="6" x2="17" y2="6" />
              <line x1="3" y1="10" x2="17" y2="10" />
              <line x1="3" y1="14" x2="17" y2="14" />
            </svg>
          </button>
        </div>
      </nav>

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
            A business wrapped in an experiment wrapped in a business. We create
            autonomous companies and the tools to get there &mdash; discovering
            the best ways to operate as an AI-run business, building what we need
            on the fly.
          </p>

          {/* CTAs */}
          <div className="hero-fade-4 flex flex-col sm:flex-row gap-4">
            <NavButton
              eventName="learn_more_click"
              eventCategory="navigation"
              className="bg-lime-400 text-[#050505] hover:bg-lime-300 font-mono text-xs tracking-[0.1em] uppercase px-6 py-3 h-auto rounded font-semibold"
              href="#mission"
            >
              Explore
              <ArrowDown className="ml-2 h-3.5 w-3.5" />
            </NavButton>
            <NavButton
              eventName="join_mission_click"
              eventCategory="navigation"
              variant="outline"
              className="border-white/10 text-[#f0ece4] hover:bg-white/5 font-mono text-xs tracking-[0.1em] uppercase px-6 py-3 h-auto rounded"
              href="#join"
            >
              Join the Experiment
            </NavButton>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 hero-fade-4">
          <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-neutral-400">
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
                  Autonomica is pioneering a new business model: a company run by
                  a single human founder with all operations handled by AI
                  systems.
                </p>
              </Reveal>
              <Reveal delay={200}>
                <p className="text-neutral-300 text-lg leading-relaxed">
                  This isn&apos;t automation &mdash; it&apos;s true autonomy. AI
                  makes decisions, executes strategies, and drives growth. The
                  founder sets the vision. The machines do the rest.
                </p>
              </Reveal>
            </div>

            {/* Right: pillars as editorial list */}
            <div className="lg:col-span-6 lg:col-start-7">
              <div className="space-y-10 lg:space-y-14">
                {pillars.map((item, i) => (
                  <Reveal key={i} delay={120 + i * 80}>
                    <div className="group">
                      <span className="font-mono text-[11px] tracking-[0.25em] text-lime-400/40 block mb-4">
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
                    <span className="font-mono text-sm tracking-[0.1em] text-neutral-500 group-hover:text-lime-400/60 transition-colors duration-500">
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
                        className={`font-mono text-[10px] tracking-[0.15em] uppercase ${product.statusColor}`}
                      >
                        {product.status}
                      </span>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
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
            <div className="font-mono text-xs text-neutral-500 space-y-1 mb-10 pl-1">
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
                    <span className="font-mono text-xs tracking-[0.15em] text-neutral-400 uppercase">
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
                      <span className="font-mono text-[10px] tracking-[0.2em] text-lime-400 uppercase">
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
                Be part of our journey. Get updates on our progress and early
                access to the tools we build.
              </p>
            </Reveal>
            <Reveal delay={200}>
              <NewsletterSignup />
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── Footer ───────────────────────────────────────────── */}
      <footer className="relative z-10 border-t border-white/[0.04] py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex items-center gap-3">
              <span className="relative flex h-1.5 w-1.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-lime-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-lime-400" />
              </span>
              <span className="font-mono text-xs tracking-[0.15em] uppercase text-neutral-400">
                Autonomica
              </span>
            </div>
            <div className="flex items-center gap-6">
              <Link
                href="#mission"
                className="font-mono text-[10px] tracking-[0.1em] uppercase text-neutral-400 hover:text-[#f0ece4] transition-colors"
              >
                Mission
              </Link>
              <Link
                href="#systems"
                className="font-mono text-[10px] tracking-[0.1em] uppercase text-neutral-400 hover:text-[#f0ece4] transition-colors"
              >
                Systems
              </Link>
              <Link
                href="#experiment"
                className="font-mono text-[10px] tracking-[0.1em] uppercase text-neutral-400 hover:text-[#f0ece4] transition-colors"
              >
                Experiment
              </Link>
              <Link
                href="/blog"
                className="font-mono text-[10px] tracking-[0.1em] uppercase text-neutral-400 hover:text-[#f0ece4] transition-colors"
              >
                Blog
              </Link>
            </div>
            <div className="flex items-center gap-3">
              <Link
                href="https://x.com/AutonomicaAI"
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-400 hover:text-[#f0ece4] transition-colors"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                </svg>
              </Link>
              <Link
                href="https://github.com/autonomica-xyz"
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-400 hover:text-[#f0ece4] transition-colors"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                  <path d="M9 18c-4.51 2-5-2-7-2" />
                </svg>
              </Link>
            </div>
          </div>
          <div className="mt-8 pt-6 border-t border-white/[0.04] text-center">
            <span className="font-mono text-[10px] tracking-[0.15em] uppercase text-neutral-500">
              &copy; {new Date().getFullYear()} Autonomica. All systems
              operational.
            </span>
          </div>
        </div>
      </footer>
    </div>
  )
}
