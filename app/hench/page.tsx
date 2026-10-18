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
const REPO_CLI = "https://github.com/autonomica-xyz/hench-cli"
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
    desc: "One button on the phone, or one switch in the desktop dashboard. Hench announces itself on Nostr relays and starts listening for jobs.",
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
    desc: "The payment record is saved before the invoice is created. If it can't be saved, no invoice is issued. Repeating a finished call returns the saved result without a new charge.",
  },
  {
    label: "Checked before invoicing",
    desc: "Download links that resolve to the phone itself or to private network addresses are refused before any invoice is created.",
  },
  {
    label: "Your wallet",
    desc: "On the phone, earnings settle to a built-in Breez Spark wallet (back up its 12 recovery words) or your own wallet over NWC. On a desktop, they settle to whatever wallet your NWC link points at.",
  },
]

const limits = [
  "Not on an app store yet. There is no published APK; build from source.",
  "Building the phone app needs JDK 17+, the Android SDK (API 37), the native libraries built from the repo's native-* folders, and your own Breez Spark API key.",
  "hench-cli is built from source with the Rust toolchain. There are no prebuilt binaries yet.",
  "Not a hosted service. You run the worker; results are delivered as links on Blossom servers.",
]

const steps = [
  {
    n: "01",
    title: "Phone: build hench",
    desc: "Build the native libraries, add your own Breez key in breez.txt, then ./gradlew assembleRelease.",
  },
  {
    n: "02",
    title: "Phone: open the app",
    desc: "First launch creates the wallet and turns the worker on. Back up the 12 recovery words in Settings → Wallet first.",
  },
  {
    n: "03",
    title: "Desktop: run hench-cli",
    desc: "Install Rust, yt-dlp and ffmpeg, set HENCH_NWC_URI to your wallet's NWC link, then cargo run --release.",
  },
  {
    n: "04",
    title: "Desktop: switch it on",
    desc: "Open http://127.0.0.1:8932, check prices and hours, and flip the worker on.",
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
            <SectionLabel number="04" label="Open source · MIT" />
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
                Everything runs on the device. No server to rent, no account to
                create. Prefer a computer? hench-cli runs the same worker on a
                desktop. For the side sending jobs, hench-web is a single
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
                <NavButton
                  eventName="hench_cli_repo_click"
                  eventCategory="navigation"
                  variant="outline"
                  className="h-auto rounded border-white/10 bg-transparent px-[18px] py-3 font-mono text-xs font-medium uppercase tracking-[0.08em] text-[#ece8df] hover:bg-white/[0.03]"
                  href={REPO_CLI}
                >
                  hench-cli
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
                Three programs,
                <br />
                <em className="italic text-neutral-400">one job.</em>
              </h2>
            </Reveal>
            <Reveal delay={100}>
              <p className="text-neutral-300 text-base md:text-lg leading-relaxed">
                The phone app and the desktop worker do the jobs. hench-web is
                one way to send them.
              </p>
            </Reveal>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {/* Phone app */}
            <Reveal>
              <div className="h-full rounded-xl border border-white/[0.08] bg-white/[0.02] p-7 md:p-9">
                <div className="mb-2 font-mono text-[10px] uppercase tracking-[0.16em] text-[#c8f542]">
                  The phone app
                </div>
                <h3 className="font-display text-2xl md:text-3xl mb-6">
                  hench
                </h3>
                <ul className="space-y-4">
                  {[
                    "Runs as a foreground service on Android 7.0 (API 24) or newer. Verified on arm64 devices.",
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

            {/* Desktop worker */}
            <Reveal delay={100}>
              <div className="h-full rounded-xl border border-white/[0.08] bg-white/[0.02] p-7 md:p-9">
                <div className="mb-2 font-mono text-[10px] uppercase tracking-[0.16em] text-[#c8f542]">
                  The desktop worker
                </div>
                <h3 className="font-display text-2xl md:text-3xl mb-6">
                  hench-cli
                </h3>
                <ul className="space-y-4">
                  {[
                    "The same worker for any computer, written in Rust. Hench clients find it the same way they find phones.",
                    "Offers the media download job, using yt-dlp and ffmpeg installed on the machine.",
                    "Paid through your own Lightning wallet over Nostr Wallet Connect (NWC).",
                    "A local web dashboard on 127.0.0.1:8932 for prices, hours, relays and the worker switch. Binding it to another address requires a token.",
                    "Settings are saved to a private file and take effect on save.",
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
            <Reveal delay={200}>
              <div className="h-full rounded-xl border border-white/[0.08] bg-white/[0.02] p-7 md:p-9">
                <div className="mb-2 font-mono text-[10px] uppercase tracking-[0.16em] text-[#c8f542]">
                  The client
                </div>
                <h3 className="font-display text-2xl md:text-3xl mb-6">
                  hench-web
                </h3>
                <ul className="space-y-4">
                  {[
                    "A static page with no build step. Its libraries are bundled in the repo, so nothing loads from a CDN.",
                    "Finds Hench workers from their Nostr announcements, with their tools and prices in sats.",
                    "Checks the signature on every worker announcement and reply, so a forged invoice can't redirect your payment.",
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
                Run a worker,
                <br />
                <em className="italic text-neutral-400">on a phone or a desktop.</em>
              </h2>
            </Reveal>
            <Reveal delay={100}>
              <p className="text-neutral-300 text-base md:text-lg leading-relaxed">
                The READMEs have the details.
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
              <div className="grid gap-8 md:grid-cols-3">
                <div>
                  <div className="mb-2 font-mono text-[10px] uppercase tracking-[0.16em] text-neutral-500">
                    Phone app
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
                    Android · Kotlin · MIT
                  </p>
                </div>
                <div>
                  <div className="mb-2 font-mono text-[10px] uppercase tracking-[0.16em] text-neutral-500">
                    Desktop worker
                  </div>
                  <Link
                    href={REPO_CLI}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-display text-2xl md:text-3xl hover:text-[#c8f542] transition-colors"
                  >
                    hench-cli
                  </Link>
                  <p className="mt-2 font-mono text-[11px] uppercase tracking-[0.14em] text-[#c8f542]">
                    Rust · MIT
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
                    Static web page · MIT
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
