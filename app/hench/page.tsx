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
  title: "Hench - Autonomica",
  description:
    "Hench turns a spare Android phone into a worker that AI agents can hire and pay in sats, per job, over Nostr.",
  openGraph: {
    title: "Hench - Autonomica",
    description:
      "Hench turns a spare Android phone into a worker that AI agents can hire and pay in sats, per job, over Nostr.",
    url: "https://autonomica.xyz/hench",
    siteName: "Autonomica",
  },
}

const REPO_APP = "https://github.com/autonomica-xyz/hench"
const REPO_WEB = "https://github.com/autonomica-xyz/hench-web"


const screenshots = [
  {
    src: "/hench/screenshots/dashboard.png",
    label: "app · dashboard",
    alt: "Hench dashboard with the worker on, sats earned and jobs executed",
  },
  {
    src: "/hench/screenshots/wallet.png",
    label: "app · wallet",
    alt: "Hench built-in Lightning wallet with receive and send",
  },
]

const flow = [
  {
    n: "01",
    title: "Turn the worker on",
    desc: "One button. Hench announces itself on Nostr relays and starts listening for jobs.",
  },
  {
    n: "02",
    title: "A client asks for a job",
    desc: "Usually an AI agent. Hench checks the request and quotes a price in sats.",
  },
  {
    n: "03",
    title: "They pay, the phone works",
    desc: "Hench creates a Lightning invoice. After it settles, Hench runs the job, uploads the result to a Blossom server and sends back the link.",
  },
]

const payments = [
  {
    label: "Pay, then work",
    desc: "A job runs only after its Lightning invoice settles.",
  },
  {
    label: "No double charging",
    desc: "The payment record is saved before the invoice is created. A crash can't produce a second invoice, and repeating a finished call returns the saved result.",
  },
  {
    label: "Checked before invoicing",
    desc: "Download links that resolve to the phone itself or to private network addresses are refused before any invoice is created.",
  },
  {
    label: "Your wallet",
    desc: "Earnings settle to a built-in Breez Spark wallet. Back up its 12 recovery words, or connect your own wallet over NWC.",
  },
]

const limits = [
  "Not on an app store yet. There is no published APK; build from source.",
  "Building needs JDK 17, the Android SDK (API 36) and your own Breez Spark API key.",
  "arm64 Android phones only.",
  "Not a hosted service. You run the worker; results are delivered as links on Blossom servers.",
]

const steps = [
  {
    n: "01",
    title: "Clone hench",
    desc: "You need JDK 17 and the Android SDK (API 36).",
  },
  {
    n: "02",
    title: "Add your Breez key",
    desc: "Put BREEZ_API_KEY=your-key in a breez.txt file at the repo root. It is gitignored.",
  },
  {
    n: "03",
    title: "Build",
    desc: "./gradlew assembleRelease, then install the APK on an arm64 Android phone.",
  },
  {
    n: "04",
    title: "Turn it on",
    desc: "Tap Create wallet & turn worker on, then back up the 12 recovery words in Settings → Wallet first.",
  },
]

export default function HenchPage() {
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

      <SiteNav currentPage="hench" />

      {/* Page Header */}
      <section className="relative z-10 pt-32 md:pt-40 pb-16 md:pb-24">
        <div className="container mx-auto px-4">
          <Reveal>
            <SectionLabel number="04" label="Worker app" />
          </Reveal>

          <div className="max-w-3xl">
            <Reveal>
              <h1 className="font-display text-5xl md:text-6xl lg:text-7xl leading-[0.95] tracking-tight mb-10">
                Hench.
                <br />
                A phone that
                <br />
                <em className="italic text-neutral-400">works for agents.</em>
              </h1>
            </Reveal>
            <Reveal delay={100}>
              <p className="text-neutral-300 text-lg md:text-xl leading-relaxed mb-6">
                Hench is a worker app for a spare Android phone. Switch it on
                and it announces itself on Nostr relays. An AI agent asks for a
                job, Hench quotes a price in sats, the agent pays a Lightning
                invoice, and the phone does the work.
              </p>
            </Reveal>
            <Reveal delay={200}>
              <p className="text-neutral-300 text-lg md:text-xl leading-relaxed mb-10">
                Everything runs on the phone. No server to rent, no account to
                create. For the side sending jobs, hench-web is a single
                browser page that finds workers and handles payment.
              </p>
            </Reveal>
            <Reveal delay={300}>
              <div className="flex flex-wrap gap-3">
                <NavButton
                  eventName="hench_repo_click"
                  eventCategory="navigation"
                  className="h-auto rounded bg-[#c8f542] px-[18px] py-3 font-mono text-xs font-medium uppercase tracking-[0.08em] text-[#0a0c08] hover:brightness-110"
                  href={REPO_APP}
                >
                  hench
                  <ArrowUpRight className="ml-2 h-3.5 w-3.5" />
                </NavButton>
                <NavButton
                  eventName="hench_web_repo_click"
                  eventCategory="navigation"
                  variant="outline"
                  className="h-auto rounded border-white/10 bg-transparent px-[18px] py-3 font-mono text-xs font-medium uppercase tracking-[0.08em] text-[#ece8df] hover:bg-white/[0.03]"
                  href={REPO_WEB}
                >
                  hench-web
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
                Ask, pay,
                <br />
                <em className="italic text-neutral-400">then work.</em>
              </h2>
            </Reveal>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {flow.map((step, i) => (
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

      {/* Two programs */}
      <div className="relative z-10 w-full h-px bg-gradient-to-r from-transparent via-lime-400/20 to-transparent" />

      <section className="relative z-10 py-24 md:py-32">
        <div className="container mx-auto px-4">
          <div className="mb-14 max-w-2xl">
            <Reveal>
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl leading-[1.05] mb-5">
                Two programs,
                <br />
                <em className="italic text-neutral-400">one job.</em>
              </h2>
            </Reveal>
            <Reveal delay={100}>
              <p className="text-neutral-300 text-base md:text-lg leading-relaxed">
                The app is the worker. hench-web is one way to send it jobs.
              </p>
            </Reveal>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            {/* Worker app */}
            <Reveal>
              <div className="h-full rounded-xl border border-white/[0.08] bg-white/[0.02] p-7 md:p-9">
                <div className="mb-2 font-mono text-[10px] uppercase tracking-[0.16em] text-[#c8f542]">
                  The worker app
                </div>
                <h3 className="font-display text-2xl md:text-3xl mb-6">
                  hench
                </h3>
                <ul className="space-y-4">
                  {[
                    "Runs as a foreground service on an arm64 Android phone (Android 7.0, API 24, or newer).",
                    "A dashboard shows worker on/off, sats earned, jobs executed and the latest job's status.",
                    "Built-in job: media downloads, with yt-dlp bundled on the phone.",
                    "Add your own paid tools: a small manifest and one Python script. Scripts get full app access, so install only ones you trust.",
                    "Set a base price per job, per-hour rates for audio and video, and the hours the worker takes jobs.",
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

            {/* Client */}
            <Reveal delay={100}>
              <div className="h-full rounded-xl border border-white/[0.08] bg-white/[0.02] p-7 md:p-9">
                <div className="mb-2 font-mono text-[10px] uppercase tracking-[0.16em] text-[#c8f542]">
                  The client
                </div>
                <h3 className="font-display text-2xl md:text-3xl mb-6">
                  hench-web
                </h3>
                <ul className="space-y-4">
                  {[
                    "A static page with no build step. Serve it locally with python3 -m http.server.",
                    "Finds Hench workers from their Nostr announcements, with their tools and prices in sats.",
                    "Builds a form from each tool's input schema.",
                    "Shows a QR code and a lightning: link for the invoice, then streams progress and the result.",
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
          </div>

          <div className="grid gap-10 lg:grid-cols-2">
            {screenshots.map((shot, i) => (
              <Reveal key={shot.src} delay={i * 100}>
                <figure className="mx-auto w-full max-w-[360px]">
                  <div className="overflow-hidden rounded-xl border border-white/[0.08]">
                    <Image
                      src={shot.src}
                      alt={shot.alt}
                      width={456}
                      height={1024}
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

      {/* Payments */}
      <div className="relative z-10 w-full h-px bg-gradient-to-r from-transparent via-lime-400/20 to-transparent" />

      <section className="relative z-10 py-24 md:py-32">
        <div className="container mx-auto px-4">
          <div className="mb-14 max-w-2xl">
            <Reveal>
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl leading-[1.05] mb-5">
                Payments,
                <br />
                <em className="italic text-neutral-400">then work.</em>
              </h2>
            </Reveal>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            {payments.map((b, i) => (
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
                Build it,
                <br />
                <em className="italic text-neutral-400">switch it on.</em>
              </h2>
            </Reveal>
            <Reveal delay={100}>
              <p className="text-neutral-300 text-base md:text-lg leading-relaxed">
                Four steps from clone to a live worker. The README has the
                details.
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

      {/* Repos */}
      <div className="relative z-10 w-full h-px bg-gradient-to-r from-transparent via-lime-400/20 to-transparent" />

      <section className="relative z-10 py-24 md:py-32">
        <div className="container mx-auto px-4">
          <Reveal>
            <div className="rounded-xl border border-white/[0.08] bg-white/[0.02] p-7 md:p-10">
              <div className="grid gap-8 md:grid-cols-2">
                <div>
                  <div className="mb-2 font-mono text-[10px] uppercase tracking-[0.16em] text-neutral-500">
                    Worker app
                  </div>
                  <Link
                    href={REPO_APP}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-display text-2xl md:text-3xl hover:text-[#c8f542] transition-colors"
                  >
                    hench
                  </Link>
                  <p className="mt-2 font-mono text-[11px] uppercase tracking-[0.14em] text-[#c8f542]">
                    Android · Kotlin
                  </p>
                </div>
                <div>
                  <div className="mb-2 font-mono text-[10px] uppercase tracking-[0.16em] text-neutral-500">
                    Client
                  </div>
                  <Link
                    href={REPO_WEB}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-display text-2xl md:text-3xl hover:text-[#c8f542] transition-colors"
                  >
                    hench-web
                  </Link>
                  <p className="mt-2 font-mono text-[11px] uppercase tracking-[0.14em] text-[#c8f542]">
                    Static web page
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
