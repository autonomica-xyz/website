import { NextRequest, NextResponse } from "next/server"
import fs from "fs"
import path from "path"
import matter from "gray-matter"

function mdResponse(content: string) {
  return new NextResponse(content, {
    headers: {
      "Content-Type": "text/markdown; charset=utf-8",
    },
  })
}

function notFoundResponse() {
  return new NextResponse("# 404 — Page Not Found\n\nThe requested page does not exist.\n", {
    status: 404,
    headers: { "Content-Type": "text/markdown; charset=utf-8" },
  })
}

function getHomePage(): string {
  return `# Autonomica — The Business That Builds Itself

> A business wrapped in an experiment wrapped in a business.

Autonomica creates autonomous companies and the tools to get there — discovering the best ways to operate as an AI-run business, building what we need on the fly.

## Mission

One founder. Infinite AI.

Autonomica is pioneering a new business model: a company run by a single human founder with all operations handled by AI systems.

This isn't automation — it's true autonomy. AI makes decisions, executes strategies, and drives growth. The founder sets the vision. The machines do the rest.

### Four Pillars

1. **Autonomous Operations** — AI systems that own the entire operational loop, from intake to execution to review.
2. **AI Decision Making** — Strategic decisions driven by advanced reasoning, not human bottlenecks.
3. **Scalable Growth** — Infrastructure that compounds without headcount. One founder, unlimited throughput.
4. **Open Blueprints** — Everything we learn gets published. The playbook for autonomous business, open source.

## Systems

Tools we build as we need them. While building our autonomous company, we create products that fund the mission and serve others on the same path.

1. **AI Operations Suite** (IN DEVELOPMENT) — Agent management suite to deploy and configure AI agents at scale. Monitor, adjust, and orchestrate autonomous workflows across every layer of the business.
2. **Agents Managing Agents** (TESTING) — Hierarchical agent orchestration where AI agents deploy, monitor, and coordinate other agents. Scaling agentic work without scaling human oversight.
3. **Blueprints & Marketplace** (PLANNED) — Open source blueprints for autonomous operations. A marketplace where AI employees earn when you don't need them, and scale when you do.

## Roadmap

- **Phase 01 — Foundation** (CURRENT): Building the core AI systems and initial product offerings that fund future development.
- **Phase 02 — Automation**: Transitioning operational responsibilities from human to AI systems, one department at a time.
- **Phase 03 — Autonomy**: Achieving full AI autonomy with the founder serving only as a strategic guide.
- **Phase 04 — Replication**: Sharing the blueprint with the world. Enabling others to create their own autonomous companies.

## Links

- [Mission](/mission)
- [Systems](/systems)
- [Blog](/blog)
- [GitHub](https://github.com/autonomica-xyz)
`
}

function getMissionPage(): string {
  return `# Mission — Autonomica

> One founder. Infinite AI.

Autonomica is building the first company where AI doesn't just assist operations, it owns them. A single human founder sets direction. Everything else — from product development to customer operations to financial management — runs on AI systems that make decisions, execute, and improve on their own.

This page explains the four pillars that make it work.

---

## 01 — Autonomous Operations

Most companies use AI the way they used spreadsheets in the 90s: a tool that sits inside human workflows. Somebody prompts it, reviews the output, clicks approve. The human is still the bottleneck. We're doing something different. At Autonomica, AI owns the loop. It receives inputs, makes decisions, executes tasks, and reviews its own output. The human founder sets direction and handles edge cases that genuinely require judgment. Everything else runs without waiting for a person to be available, awake, or in the right mood.

This sounds riskier than it is. An AI agent that deploys code, monitors the result, and rolls back on failure is more reliable than a tired engineer pushing at 2 AM. The trick is scoping autonomy correctly: give agents clear boundaries, good monitoring, and real consequences for failure (like automatic rollbacks), and they outperform human-in-the-loop setups on both speed and error rate.

What breaks when you remove humans? Less than you'd think. Most operational work is pattern matching and execution against known criteria. The parts that actually need human judgment, like picking which market to enter or deciding company values, are strategic and infrequent. The 95% that's operational? That's where AI thrives.

---

## 02 — AI Decision Making

Here's the uncomfortable truth about most "AI-powered" companies: a human still makes every decision that matters. The AI drafts, suggests, recommends. Then someone clicks approve. That's not AI decision making. That's autocomplete with extra steps.

At Autonomica, AI makes real calls. Not just "should this email use subject line A or B" but "should we pursue this partnership, and if so, what terms should we propose?" The system evaluates options against defined criteria, weighs tradeoffs, and acts. The founder doesn't review every decision. The founder reviews the decision-making framework, and adjusts it when the outcomes indicate the criteria need updating.

The trust problem is real, and we don't pretend it isn't. You build trust the same way you would with a new hire: start with low-stakes decisions, monitor outcomes, widen the scope as the track record develops. The difference is that AI decisions are fully logged, auditable, and reproducible. When a human VP makes a bad call, you get a post-hoc rationalization. When an AI agent makes a bad call, you get the exact reasoning chain and can fix the model that produced it.

---

## 03 — Scalable Growth

Traditional companies hit a ceiling: to do more, you hire more people. More people means more coordination, more meetings, more management overhead. Scaling a team from 10 to 100 doesn't give you 10x output. It gives you maybe 3x output and 10x communication cost.

An AI-operated company has different economics. Adding capacity means spinning up more agents, not onboarding new employees. There's no ramp-up time. No culture fit interviews. No benefits administration. The infrastructure compounds: every system we build makes the next one cheaper to deploy. One founder with the right stack can sustain throughput that would normally require a mid-size team.

"One founder, unlimited throughput" isn't a tagline. It's an engineering constraint we design around. It forces us to build systems that don't require human attention to function, monitoring that surfaces only what actually needs intervention, and workflows that heal themselves. If something requires a human touch to run, we haven't finished building it yet.

---

## 04 — Open Blueprints

We publish everything. Not because it's a nice marketing story, but because the value of autonomous business operations increases when more people do it. A single company running on AI agents is an experiment. A thousand companies doing it creates an ecosystem, shared tooling, proven patterns, and a labor market for people who build these systems.

Our blueprints are runnable configurations, not whitepapers. You won't find 40-page PDFs with conceptual diagrams. You'll find agent configs, prompt templates, monitoring dashboards, and deployment scripts. Things you can fork, modify, and run today. The goal is that someone with technical ability and a business idea can go from zero to an operational AI-run company by following the blueprint and adapting it to their domain.

Who is this for? Founders who want to build companies that run lean from day one. Engineers who want to understand how to wire AI agents into production business workflows. And researchers who want real-world data on what happens when you remove humans from operational loops. We're the experiment. The blueprints are the lab notes.
`
}

function getSystemsPage(): string {
  return `# Systems — Autonomica

> Tools we build as we need them.

Autonomica builds products that solve our own problems first. Every tool listed here exists because we hit a wall running our AI-operated company and had to build something to get past it. They fund the mission and serve others on the same path.

Three products, each at a different stage. We're honest about where things stand.

---

## 01 — AI Operations Suite

**Status: IN DEVELOPMENT**

Running one AI agent is simple. Running dozens of them across every department of a business, each with different tools, permissions, and failure modes, is an unsolved problem. The AI Operations Suite is our answer: a management layer for deploying, configuring, and monitoring AI agents at scale.

Concretely, this means a dashboard where you can see every agent that's running, what it's doing, how it performed on its last task, and what it's about to do next. You can adjust an agent's configuration without redeploying it. You can set up orchestration rules ("if the customer support agent escalates, route to the sales agent") without writing code. You can kill a misbehaving agent and have its tasks redistributed automatically.

We're building this because we need it. Autonomica runs on these agents, and managing them through config files and manual monitoring stopped scaling months ago. The operations suite is the control plane we wish existed. It's in active development and we're using it internally as the primary test environment.

---

## 02 — Agents Managing Agents

**Status: TESTING**

One agent can handle a task. But running a business means hundreds of tasks happening concurrently, with dependencies between them, and somebody needs to decide what runs when, catch failures, reallocate work, and spin up new agents when load spikes. That somebody shouldn't be a human refreshing a dashboard. It should be another agent.

Agents Managing Agents is our orchestration layer: supervisor agents that deploy worker agents, monitor their output, intervene when things go sideways, and scale capacity up or down based on actual demand. A supervisor agent doesn't just dispatch tasks. It evaluates whether the worker's output met the criteria, decides whether to retry or escalate, and adjusts the worker's configuration based on patterns it observes over time. The hierarchy can go multiple levels deep. A department-level agent coordinates team-level agents, which each manage individual task agents.

This is how you get from "one founder with some AI tools" to "one founder running an entire company." You don't hire more people. You give your best agents the ability to manage other agents. We're testing this internally now, and the results are clear: the bottleneck in scaling agentic work was never the agents themselves. It was the human trying to orchestrate all of them.

---

## 03 — Blueprints & Marketplace

**Status: PLANNED**

Every system we build at Autonomica produces a byproduct: a pattern that someone else could reuse. The customer support agent we configured, the deployment pipeline we wired up, the financial monitoring dashboard we built. These are all replicable, and we plan to make them available as open source blueprints.

Blueprints aren't documentation. They're runnable configurations: agent definitions, prompt templates, tool integrations, and orchestration rules packaged so you can fork them and adapt them to your context. The marketplace adds a layer on top: agent configurations that other operators have built and validated, available to deploy directly or modify.

This is planned, not built. We need to get our own operations suite stable before we can package our patterns for external use. The vision is straightforward: reduce the time from "I want an AI agent that handles X" to "I have one running" from weeks to hours. We'll share more specifics when we're closer to shipping.
`
}

function getBlogIndexPage(): string {
  const postsDirectory = path.join(process.cwd(), "content/blog")
  let postsSection = ""

  try {
    if (fs.existsSync(postsDirectory)) {
      const fileNames = fs.readdirSync(postsDirectory).filter((f) => f.endsWith(".md"))
      const posts = fileNames
        .map((fileName) => {
          const slug = fileName.replace(/\.md$/, "")
          const fullPath = path.join(postsDirectory, fileName)
          const fileContents = fs.readFileSync(fullPath, "utf8")
          const { data } = matter(fileContents)
          const date = data.date
            ? new Date(data.date).toISOString().split("T")[0]
            : "Unknown"
          return { slug, title: data.title, description: data.description, date, tags: data.tags }
        })
        .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())

      postsSection = posts
        .map(
          (p) =>
            `### [${p.title}](/blog/${p.slug})\n\n**${p.date}**${p.tags?.length ? ` | ${p.tags.join(", ")}` : ""}\n\n${p.description}\n`
        )
        .join("\n---\n\n")
    }
  } catch {
    postsSection = "*No posts available.*\n"
  }

  return `# Blog — Autonomica

> Insights and updates from inside the experiment.

---

${postsSection}`
}

function getBlogPost(slug: string): string | null {
  const fullPath = path.join(process.cwd(), "content/blog", `${slug}.md`)

  if (!fs.existsSync(fullPath)) {
    return null
  }

  return fs.readFileSync(fullPath, "utf8")
}

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ path: string[] }> }
) {
  const { path: segments } = await params
  const pagePath = segments.join("/")

  switch (pagePath) {
    case "index":
      return mdResponse(getHomePage())
    case "mission":
      return mdResponse(getMissionPage())
    case "systems":
      return mdResponse(getSystemsPage())
    case "blog":
      return mdResponse(getBlogIndexPage())
    default: {
      // Handle blog posts: blog/{slug}
      if (segments[0] === "blog" && segments.length === 2) {
        const content = getBlogPost(segments[1])
        if (content) {
          return mdResponse(content)
        }
      }
      return notFoundResponse()
    }
  }
}
