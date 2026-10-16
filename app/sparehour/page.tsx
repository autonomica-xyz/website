import Link from "next/link"
import type { Metadata } from "next"
import Image from "next/image"
import { ArrowUpRight } from "lucide-react"
import SiteNav from "@/components/site-nav"
import SiteFooter from "@/components/site-footer"
import { SectionLabel } from "@/components/section-label"
import { Reveal } from "@/components/reveal"
import NavButton from "@/components/nav-button"

export const metadata: Metadata = {
  title: "Sparehour - Autonomica",
  description:
    "An open-source, self-hosted queue for batch AI jobs across your own machines and rented GPUs. Run transcription, translation, image generation, and prompt batches with compatible workers.",
  openGraph: {
    title: "Sparehour - Autonomica",
    description:
      "An open-source, self-hosted queue for batch AI jobs across your own machines and rented GPUs. Run transcription, translation, image generation, and prompt batches with compatible workers.",
    url: "https://autonomica.xyz/sparehour",
    siteName: "Autonomica",
  },
}

const REPO_CONTROLLER = "https://github.com/autonomica-xyz/sparehour"
const REPO_WORKER = "https://github.com/autonomica-xyz/sparehour-worker"


const screenshots = [
  {
    src: "/sparehour/screenshots/controller-dashboard.png",
    label: "controller · /dashboard",
    alt: "Sparehour controller dashboard showing the queue and fleet",
  },
  {
    src: "/sparehour/screenshots/worker-dashboard.png",
    label: "worker · loopback",
    alt: "Sparehour Worker dashboard showing the machine's slots and matching routes",
  },
]

const routes = [
  {
    route: "image-generate",
    what: "SDXL images",
    note: "NVIDIA",
  },
  {
    route: "llm-batch",
    what: "Qwen prompt batches on vLLM",
    note: "NVIDIA",
  },
  {
    route: "transcribe",
    what: "Parakeet or WhisperX, with timestamps and optional speaker labels",
    note: "NVIDIA",
  },
  {
    route: "translate-batch · translate-segment · translate-text-batch",
    what: "Translation via Argos or LibreTranslate",
    note: "NVIDIA",
  },
]

const boundaries = [
  {
    label: "Private inputs",
    desc: "Workers can download job inputs only while holding an active lease for that job.",
  },
  {
    label: "Provider credentials",
    desc: "Credentials for rented GPU providers stay on the controller, never on workers.",
  },
  {
    label: "Jobs carry data, not code",
    desc: "Workloads define trusted executors. Job submissions supply data, not executable code.",
  },
  {
    label: "Pinned models",
    desc: "Bundled model versions are pinned. Their files are verified with SHA-256 before loading.",
  },
]

const limits = [
  "Batch jobs, not training or model sharding. Each GPU runs one job at a time.",
  "Bundled ML workloads require NVIDIA. AMD and CPU workers need compatible custom workloads.",
  "Install from source. The packages are not published on PyPI.",
  "Self-hosted, not a hosted service. You run the controller and workers.",
]

const steps = [
  {
    n: "01",
    title: "Clone both repos",
    desc: "You need Python 3.10 or newer and a machine to act as the controller.",
  },
  {
    n: "02",
    title: "Install into one venv",
    desc: "pip install both packages from source. Model weights and ML runtimes are provisioned separately.",
  },
  {
    n: "03",
    title: "Start the controller",
    desc: "sparehour serve brings up the queue and the workbench at /dashboard. Issue a scoped token with sparehour token.",
  },
  {
    n: "04",
    title: "Connect a worker",
    desc: "sparehour-worker login, sparehour-worker doctor, sparehour-worker select, sparehour-worker run. The worker dashboard opens on the machine itself.",
  },
]

export default function SparehourPage() {
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

      <SiteNav currentPage="sparehour" />

      {/* Page Header */}
      <section className="relative z-10 pt-32 md:pt-40 pb-16 md:pb-24">
        <div className="container mx-auto px-4">
          <Reveal>
            <SectionLabel number="03" label="Open source" />
          </Reveal>

          <div className="max-w-3xl">
            <Reveal>
              <h1 className="font-display text-5xl md:text-6xl lg:text-7xl leading-[0.95] tracking-tight mb-10">
                Sparehour.
                <br />
                Your GPUs have
                <br />
                <em className="italic text-neutral-400">spare hours.</em>
              </h1>
            </Reveal>
            <Reveal delay={100}>
              <p className="text-neutral-300 text-lg md:text-xl leading-relaxed mb-6">
                Sparehour runs batch AI jobs across your own machines and rented
                GPUs. Queue transcription, translation, image generation, or
                prompt batches, and let available workers pick up compatible jobs.
              </p>
            </Reveal>
            <Reveal delay={200}>
              <p className="text-neutral-300 text-lg md:text-xl leading-relaxed mb-10">
                The controller manages the queue. Sparehour Worker runs jobs on
                each machine, with controls for which workloads it accepts and
                when it works. Open source and self-hosted.
              </p>
            </Reveal>
            <Reveal delay={300}>
              <div className="flex flex-wrap gap-3">
                <NavButton
                  eventName="sparehour_repo_click"
                  eventCategory="navigation"
                  className="h-auto rounded bg-[#c8f542] px-[18px] py-3 font-mono text-xs font-medium uppercase tracking-[0.08em] text-[#0a0c08] hover:brightness-110"
                  href={REPO_CONTROLLER}
                >
                  sparehour
                  <ArrowUpRight className="ml-2 h-3.5 w-3.5" />
                </NavButton>
                <NavButton
                  eventName="sparehour_worker_repo_click"
                  eventCategory="navigation"
                  variant="outline"
                  className="h-auto rounded border-white/10 bg-transparent px-[18px] py-3 font-mono text-xs font-medium uppercase tracking-[0.08em] text-[#ece8df] hover:bg-white/[0.03]"
                  href={REPO_WORKER}
                >
                  sparehour-worker
                  <ArrowUpRight className="ml-2 h-3.5 w-3.5" />
                </NavButton>
              </div>
            </Reveal>
          </div>

        </div>
      </section>

      {/* How it works */}
      <div className="relative z-10 w-full h-px bg-gradient-to-r from-transparent via-lime-400/20 to-transparent" />

      <section className="relative z-10 py-24 md:py-32">
        <div className="container mx-auto px-4">
          <div className="mb-14 max-w-2xl">
            <Reveal>
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl leading-[1.05] mb-5">
                Two programs,
                <br />
                <em className="italic text-neutral-400">one queue.</em>
              </h2>
            </Reveal>
            <Reveal delay={100}>
              <p className="text-neutral-300 text-base md:text-lg leading-relaxed">
                Submit jobs to the controller. Workers pick them up when compatible
                capacity is available, then return the results.
              </p>
            </Reveal>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            {/* Controller */}
            <Reveal>
              <div className="h-full rounded-xl border border-white/[0.08] bg-white/[0.02] p-7 md:p-9">
                <div className="mb-2 font-mono text-[10px] uppercase tracking-[0.16em] text-[#c8f542]">
                  The controller
                </div>
                <h3 className="font-display text-2xl md:text-3xl mb-6">
                  sparehour
                </h3>
                <ul className="space-y-4">
                  {[
                    "Keep jobs in a durable queue, with retries and cancellation.",
                    "Match jobs to workers by hardware, workload support, and installed models.",
                    "Validate results against each workload's output requirements.",
                    "Compare Vast and Salad offers by estimated queue completion cost. Deployment requires your approval.",
                  ].map((line) => (
                    <li key={line} className="flex gap-3">
                      <span className="mt-[0.55rem] h-1 w-1 shrink-0 rounded-full bg-[#c8f542]" />
                      <span className="text-neutral-300 leading-relaxed">
                        {line}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>

            {/* Worker */}
            <Reveal delay={100}>
              <div className="h-full rounded-xl border border-white/[0.08] bg-white/[0.02] p-7 md:p-9">
                <div className="mb-2 font-mono text-[10px] uppercase tracking-[0.16em] text-[#c8f542]">
                  The worker
                </div>
                <h3 className="font-display text-2xl md:text-3xl mb-6">
                  sparehour-worker
                </h3>
                <ul className="space-y-4">
                  {[
                    "Contribute NVIDIA, AMD, or CPU capacity.",
                    "See which workloads your machine supports and choose what it accepts.",
                    "Enable idle-only mode to accept work only when the machine is confirmed idle.",
                    "Pause new jobs without interrupting work already in progress.",
                    "Manage the worker from a dashboard accessible only on the local machine.",
                  ].map((line) => (
                    <li key={line} className="flex gap-3">
                      <span className="mt-[0.55rem] h-1 w-1 shrink-0 rounded-full bg-[#c8f542]" />
                      <span className="text-neutral-300 leading-relaxed">
                        {line}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Screenshots */}
      <div className="relative z-10 w-full h-px bg-gradient-to-r from-transparent via-lime-400/20 to-transparent" />

      <section className="relative z-10 py-24 md:py-32">
        <div className="container mx-auto px-4">
          <div className="mb-14 max-w-2xl">
            <Reveal>
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl leading-[1.05] mb-5">
                See it <em className="italic text-neutral-400">running.</em>
              </h2>
            </Reveal>
            <Reveal delay={100}>
              <p className="text-neutral-300 text-base md:text-lg leading-relaxed">
                The controller workbench and the worker dashboard, on real
                machines with real jobs.
              </p>
            </Reveal>
          </div>

          <div className="grid gap-10 lg:grid-cols-2">
            {screenshots.map((shot, i) => (
              <Reveal key={shot.src} delay={i * 100}>
                <figure>
                  <div className="overflow-hidden rounded-xl border border-white/[0.08]">
                    <Image
                      src={shot.src}
                      alt={shot.alt}
                      width={1800}
                      height={1500}
                      className="h-auto w-full"
                    />
                  </div>
                  <figcaption className="mt-3 font-mono text-[11px] uppercase tracking-[0.14em] text-neutral-500">
                    {shot.label}
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Job types */}
      <div className="relative z-10 w-full h-px bg-gradient-to-r from-transparent via-lime-400/20 to-transparent" />

      <section className="relative z-10 py-24 md:py-32">
        <div className="container mx-auto px-4">
          <div className="grid gap-10 md:grid-cols-12">
            <div className="md:col-span-4">
              <Reveal>
                <h2 className="font-display text-3xl md:text-4xl leading-[1.05] mb-5">
                  Jobs it ships
                  <br />
                  <em className="italic text-neutral-400">with.</em>
                </h2>
                <p className="text-neutral-300 text-base md:text-lg leading-relaxed">
                  Start with the bundled workloads or define your own,
                  including CPU jobs.
                </p>
              </Reveal>
            </div>
            <div className="md:col-span-7 md:col-start-6">
              <div className="border-t border-white/[0.08]">
                {routes.map((r, i) => (
                  <Reveal key={r.route} delay={i * 70}>
                    <div className="grid gap-1 border-b border-white/[0.08] py-6 md:grid-cols-[1fr_auto] md:gap-6">
                      <div>
                        <div className="mb-1.5 font-mono text-xs tracking-[0.08em] text-[#c8f542]">
                          {r.route}
                        </div>
                        <div className="text-neutral-300 leading-relaxed">
                          {r.what}
                        </div>
                      </div>
                      <div className="font-mono text-[10px] uppercase tracking-[0.14em] text-neutral-500 md:text-right">
                        {r.note}
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>
              <Reveal delay={280}>
                <p className="mt-6 text-sm leading-relaxed text-neutral-500">
                  Bundled ML routes target NVIDIA today. AMD and CPU machines
                  work with jobs you set up yourself.
                </p>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Trust boundaries */}
      <div className="relative z-10 w-full h-px bg-gradient-to-r from-transparent via-lime-400/20 to-transparent" />

      <section className="relative z-10 py-24 md:py-32">
        <div className="container mx-auto px-4">
          <div className="mb-14 max-w-2xl">
            <Reveal>
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl leading-[1.05] mb-5">
                What stays
                <br />
                <em className="italic text-neutral-400">where.</em>
              </h2>
            </Reveal>
            <Reveal delay={100}>
              <p className="text-neutral-300 text-base md:text-lg leading-relaxed">
                How job inputs, credentials, and models are handled.
              </p>
            </Reveal>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            {boundaries.map((b, i) => (
              <Reveal key={b.label} delay={i * 70}>
                <div className="h-full rounded-xl border border-white/[0.08] bg-white/[0.02] p-6 md:p-7">
                  <div className="mb-3 font-mono text-[10px] uppercase tracking-[0.16em] text-[#c8f542]">
                    {b.label}
                  </div>
                  <p className="text-neutral-300 text-[0.95rem] leading-relaxed">
                    {b.desc}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* What it isn't */}
      <div className="relative z-10 w-full h-px bg-gradient-to-r from-transparent via-lime-400/20 to-transparent" />

      <section className="relative z-10 py-24 md:py-32">
        <div className="container mx-auto px-4">
          <div className="grid gap-10 md:grid-cols-12">
            <div className="md:col-span-4">
              <Reveal>
                <h2 className="font-display text-3xl md:text-4xl leading-[1.05]">
                  What it
                  <br />
                  <em className="italic text-neutral-400">isn&apos;t.</em>
                </h2>
              </Reveal>
            </div>
            <div className="md:col-span-7 md:col-start-6">
              <div className="border-t border-white/[0.08]">
                {limits.map((limit, i) => (
                  <Reveal key={limit} delay={i * 70}>
                    <p className="border-b border-white/[0.08] py-6 text-neutral-300 leading-relaxed">
                      {limit}
                    </p>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Get started */}
      <div className="relative z-10 w-full h-px bg-gradient-to-r from-transparent via-lime-400/20 to-transparent" />

      <section className="relative z-10 py-24 md:py-32">
        <div className="container mx-auto px-4">
          <div className="mb-14 max-w-2xl">
            <Reveal>
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl leading-[1.05] mb-5">
                Try it on your
                <br />
                <em className="italic text-neutral-400">own hardware.</em>
              </h2>
            </Reveal>
            <Reveal delay={100}>
              <p className="text-neutral-300 text-base md:text-lg leading-relaxed">
                Four steps from clone to a working pair. The READMEs walk
                through everything, including provisioning model weights.
              </p>
            </Reveal>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            {steps.map((step, i) => (
              <Reveal key={step.n} delay={i * 70}>
                <div className="h-full rounded-xl border border-white/[0.08] bg-white/[0.02] p-6 md:p-7">
                  <div className="mb-3 font-mono text-[10px] tracking-[0.2em] text-[rgba(200,245,66,0.5)]">
                    {step.n}
                  </div>
                  <h3 className="mb-2 font-display text-xl md:text-2xl">
                    {step.title}
                  </h3>
                  <p className="text-neutral-300 text-[0.95rem] leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Licenses + repos */}
      <div className="relative z-10 w-full h-px bg-gradient-to-r from-transparent via-lime-400/20 to-transparent" />

      <section className="relative z-10 py-24 md:py-32">
        <div className="container mx-auto px-4">
          <Reveal>
            <div className="rounded-xl border border-white/[0.08] bg-white/[0.02] p-7 md:p-10">
              <div className="grid gap-8 md:grid-cols-2">
                <div>
                  <div className="mb-2 font-mono text-[10px] uppercase tracking-[0.16em] text-neutral-500">
                    Controller
                  </div>
                  <Link
                    href={REPO_CONTROLLER}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-display text-2xl md:text-3xl hover:text-[#c8f542] transition-colors"
                  >
                    sparehour
                  </Link>
                  <p className="mt-2 font-mono text-[11px] uppercase tracking-[0.14em] text-[#c8f542]">
                    GPL-3.0-or-later
                  </p>
                </div>
                <div>
                  <div className="mb-2 font-mono text-[10px] uppercase tracking-[0.16em] text-neutral-500">
                    Worker
                  </div>
                  <Link
                    href={REPO_WORKER}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-display text-2xl md:text-3xl hover:text-[#c8f542] transition-colors"
                  >
                    sparehour-worker
                  </Link>
                  <p className="mt-2 font-mono text-[11px] uppercase tracking-[0.14em] text-[#c8f542]">
                    MIT
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <SiteFooter />
    </div>
  )
}
