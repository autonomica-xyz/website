#!/usr/bin/env python3
"""Generate A+ copy version HTML pages + markdown copy sheets + full archives."""

from __future__ import annotations

import html
import json
import shutil
from pathlib import Path

ROOT = Path(__file__).resolve().parent
ARCHIVE = ROOT / "archive"
COPY_DIR = ROOT / "copy"
STYLES = "styles.css"

VERSIONS: list[dict] = [
    {
        "id": "v00",
        "slug": "initial-lab-mix",
        "title": "v00 · Baseline (first A+ mix)",
        "nav_label": "v00 Baseline",
        "banner_strong": "v00 · Baseline A+",
        "banner_span": "First lab × commercial mix — historical baseline",
        # Original hand-built file preserved as archive/v00-initial-lab-mix.html
        "prefer_archive": "v00-initial-lab-mix.html",
        "badges": [
            ("live", "lab.active"),
            (None, "phase 01 / <em>foundation</em>"),
            (None, "applied AI · production systems"),
        ],
        "h1": "An applied AI lab<br />building the company<br />that <em>runs itself.</em>",
        "lead": "Autonomica is a living experiment: one founder, systems that act, and the tools required to make autonomous business real — proven on our own operations and on client volume.",
        "sub": 'The lab ships work, not whitepapers. Today that means <strong>distributed batch AI</strong> for industrial workloads and <strong>white-glove embeds</strong> that install force multipliers inside real companies.',
        "cta_primary": ("See applied work ↓", "#applied"),
        "cta_secondary": ("Collaborate with the lab", "#work-with-us"),
        "caps": ["Batch AI systems", "Unit-cost design", "Embedded delivery", "Open findings"],
        "panel_left": "autonomica.sys · lab runtime",
        "panel_right": "dogfood + client loads",
        "boot": [
            "> INITIALIZING AUTONOMICA.SYS…",
            "> LOADING APPLIED MODULES…",
            "> STATUS: <span class=\"ok\">OPERATIONAL</span> · phase 01 foundation",
        ],
        "stats": [("Batch", "Workload systems"), ("$/u", "Cost as constraint"), ("Embed", "White-glove path")],
        "jobs": [
            ("exp.transcribe.fleet", "Distributed speech · cost ladder", "Live", "run"),
            ("exp.ocr.archives", "Layout-aware extract · QC sample", "Healthy", "ok"),
            ("exp.vision.batch", "Gen · edit · verify at volume", "Live", "run"),
            ("track.whiteglove", "Company embeds · force multipliers", "Active", "lab"),
        ],
        "lab_num": "01 · The lab",
        "lab_h2": "One founder.<br /><em>Infinite applied AI.</em>",
        "lab_p": [
            "Most companies use AI as a helper inside human workflows. We’re testing what happens when systems own the loop — decide, act, course-correct — and when volume work is engineered for unit economics instead of demos.",
            "Client work is not a side shop. It’s how the lab stays honest: real data shapes, real cost pressure, real failure modes.",
        ],
        "pillars": [
            ("01", "Autonomous operations", "AI owns execution loops. Humans set direction and handle true edge cases — not every approval."),
            ("02", "Cost as architecture", "For batch work, $/item is a design input: model ladders, distribution, retries, QC sampling."),
            ("03", "Force multipliers", "White-glove embeds find where human time is the bottleneck and install systems that multiply capacity."),
            ("04", "Publish what works", "Findings and patterns leave the lab as blueprints over time — the experiment is meant to transfer."),
        ],
        "applied_num": "02 · Applied work",
        "applied_h2": "What the lab ships<br /><em>into the world.</em>",
        "applied_p": "Two engagement surfaces — framed as applied research tracks, not SKUs. Same standards: production systems, measured outcomes, no pilot theater.",
        "applied_mono": "// applied tracks · funded by real workloads · feed the autonomy thesis",
        "tracks": [
            {
                "idx": "TRACK 01",
                "title": "Distributed workload automation",
                "desc": "Custom AI systems for large-volume batch processing. We design cost-efficient, distributed pipelines for work that can be sharded, queued, and completed at scale — transcription, OCR, image generation and manipulation, or any distributable AI job where unit economics decide whether the system is real.",
                "tags": ["Transcription", "OCR / documents", "Image gen & edit", "Custom batch shapes", "$/item design"],
                "kind": "Systems work",
                "side": "Industrialize a known high-volume workload with architecture built around cost and throughput.",
            },
            {
                "idx": "TRACK 02",
                "title": "White-glove AI-fication",
                "desc": "We embed into a company, learn how work actually moves, and install force-multiplier systems — not a transformation deck. Discovery with operators, highest-leverage interventions first, production handoff so outcomes stick without us forever.",
                "tags": ["Embed", "Operator discovery", "Build & ship", "Transfer ownership"],
                "kind": "Embedded work",
                "side": "Join the org long enough to find leverage and leave working systems behind.",
            },
        ],
        "classes_label": "Workload classes under study",
        "classes": [
            ("Audio", "Transcription fleets", "Multi-hour media, model ladders, multilingual routing, cost under load."),
            ("Documents", "OCR & extraction", "Archives and forms at volume — layout-aware pipelines, sampling QC."),
            ("Vision", "Image gen & edit", "Bulk generation, transforms, automated QC; humans only on edges."),
            ("Open", "Your batch shape", "If it shards and has a quality bar, the lab can industrialize it."),
        ],
        "exp_num": "03 · The experiment",
        "exp_h2": "A living<br /><em>laboratory.</em>",
        "exp_p": "Autonomica itself is the long experiment — a company evolving as we learn what autonomous business looks like. Applied client work funds the path and stress-tests every claim.",
        "phases": [
            ("01", "Foundation", "Build the AI stack and ship applied systems — batch workloads and embeds — that pay for what comes next.", True),
            ("02", "Automation", "Functions transfer from human to AI, starting with the highest-volume, most repetitive loops.", False),
            ("03", "Autonomy", "The AI runs the company. The founder steps back to strategy and edge cases.", False),
            ("04", "Replication", "Publish blueprints so others can run the same playbook without starting from zero.", False),
        ],
        "collab_num": "04 · Collaborate",
        "collab_h2": "Bring a workload.<br /><em>Or bring the company.</em>",
        "collab_p": [
            "Short notes are enough: volume and formats, cost pressure, quality bar — or “we need a force multiplier in X” and where humans are still the bottleneck.",
            "You’re not buying a catalog item. You’re funding applied work inside a lab that measures success in production systems.",
        ],
        "collab_note": "Prefer a call? Book 30 minutes — same topics: batch systems or white-glove embed.",
        "form_engage_label": "How should we engage?",
        "form_engage": [
            "Applied track: distributed batch workload",
            "Applied track: white-glove AI-fication",
            "Not sure — help the lab choose",
            "General / research conversation",
        ],
        "form_submit": "Send to the lab",
        "footer_right": "All systems operational",
    },
    {
        "id": "v01",
        "slug": "thesis-first",
        "title": "v01 · Thesis-first",
        "nav_label": "v01 Thesis",
        "banner_strong": "v01 · Thesis-first",
        "banner_span": "Autonomy manifesto leads · applied tracks as evidence",
        "badges": [
            ("live", "sys.active"),
            (None, "phase 01 / <em>foundation</em>"),
            (None, "experiment in production"),
        ],
        "h1": "The business<br />that builds<br /><em>itself.</em>",
        "lead": "An applied AI lab running a single experiment at company scale: can one founder and a stack of acting systems outrun the old model of hire-to-grow?",
        "sub": 'We don’t sell a catalog. We run the experiment in public — and take on <strong>hard batch workloads</strong> and <strong>deep company embeds</strong> because that’s where the thesis either holds or breaks.',
        "cta_primary": ("Enter the lab ↓", "#lab"),
        "cta_secondary": ("Work with us", "#work-with-us"),
        "caps": ["Autonomy thesis", "Applied volume work", "Embedded leverage", "Open replication"],
        "panel_left": "autonomica.sys · experiment log",
        "panel_right": "live · phase 01",
        "boot": [
            "> BOOT AUTONOMICA.SYS…",
            "> THESIS: ownership of the loop",
            "> STATUS: <span class=\"ok\">RUNNING</span> · evidence from production",
        ],
        "stats": [("Loop", "Own the execution"), ("Cost", "Design constraint"), ("Proof", "Client + dogfood")],
        "jobs": [
            ("thesis.autonomy", "Systems that decide and act", "Core", "run"),
            ("proof.batch", "Volume work under real $/item", "Live", "ok"),
            ("proof.embed", "Force multipliers inside orgs", "Live", "run"),
            ("out.blueprints", "Transfer when patterns stabilize", "Later", "lab"),
        ],
        "lab_num": "01 · Thesis",
        "lab_h2": "AI shouldn’t wait<br />for a human to <em>click approve.</em>",
        "lab_p": [
            "At most companies, AI drafts and suggests. A person still owns every decision that matters. That’s autocomplete with a budget line.",
            "Autonomica tests the opposite: systems that execute inside clear boundaries, founders who set direction, and volume pipelines engineered so cost doesn’t kill the idea at scale.",
        ],
        "pillars": [
            ("01", "Own the loop", "Receive, decide, act, review — without a human in the middle of every step."),
            ("02", "Volume is the truth", "If it only works on a demo file, it isn’t a system. Batch work exposes reality."),
            ("03", "Leverage over headcount", "Embeds aim at force multipliers: more output without proportional hiring."),
            ("04", "Transfer the method", "The endgame isn’t a black-box service. It’s replication — blueprints others can run."),
        ],
        "applied_num": "02 · Where the thesis meets the world",
        "applied_h2": "Evidence tracks,<br /><em>not product aisles.</em>",
        "applied_p": "Two ways outsiders plug into the lab. Both produce production systems. Both feed what we learn about autonomous business.",
        "applied_mono": "// evidence tracks · the lab stays honest by shipping",
        "tracks": [
            {
                "idx": "TRACK 01",
                "title": "Distributed workload automation",
                "desc": "When the problem is volume — millions of minutes, pages, or images — we design distributed AI systems around unit cost. Transcription, OCR, image generation and manipulation, or any job that can be sharded. The thesis dies if the economics don’t work; so we start there.",
                "tags": ["Transcription", "OCR", "Vision batch", "Custom shards", "Unit economics"],
                "kind": "Volume proof",
                "side": "Stress-test AI systems under load and cost — not slideware.",
            },
            {
                "idx": "TRACK 02",
                "title": "White-glove AI-fication",
                "desc": "When the problem is the company itself, we embed. Sit with operators, find where human time is pure friction, install systems that multiply capacity, and leave ownership behind. Force multipliers — not a tool dump.",
                "tags": ["Embed", "Discovery", "Ship", "Handoff"],
                "kind": "Org proof",
                "side": "Prove leverage inside a living organization.",
            },
        ],
        "classes_label": "Volume shapes we industrialize",
        "classes": [
            ("Audio", "Speech at scale", "Fleets, ladders, languages — cost that survives the second million minutes."),
            ("Documents", "Archives that finish", "OCR and extraction that complete, with QC that doesn’t re-humanize everything."),
            ("Vision", "Images in bulk", "Generate, transform, score — humans on the exceptions only."),
            ("Open", "Your shardable job", "If it distributes and has a quality bar, it’s in scope."),
        ],
        "exp_num": "03 · Long experiment",
        "exp_h2": "Four phases.<br /><em>One company.</em>",
        "exp_p": "Autonomica is the lab notebook. Applied work pays for the next page and forbids comfortable theory.",
        "phases": [
            ("01", "Foundation", "Stack + applied systems that fund the experiment and prove basic loops.", True),
            ("02", "Automation", "Hand functions to AI, highest-volume first.", False),
            ("03", "Autonomy", "Company runs; founder on strategy and edges.", False),
            ("04", "Replication", "Publish the playbook. Others shouldn’t rebuild from myth.", False),
        ],
        "collab_num": "04 · Plug into the experiment",
        "collab_h2": "Fund a proof.<br /><em>Or become one.</em>",
        "collab_p": [
            "Send a workload with volume and cost pressure — or invite an embed where leverage is stuck behind humans.",
            "You’ll get production systems. We’ll get evidence. That’s the deal.",
        ],
        "collab_note": "Calendar works too. Thirty minutes is enough to see if the fit is real.",
        "form_engage_label": "How do you want to plug in?",
        "form_engage": [
            "Volume proof: distributed batch workload",
            "Org proof: white-glove embed",
            "Not sure — point me",
            "Just talking / research",
        ],
        "form_submit": "Send evidence request",
        "footer_right": "Experiment operational",
    },
    {
        "id": "v02",
        "slug": "operator-direct",
        "title": "v02 · Operator-direct",
        "nav_label": "v02 Direct",
        "banner_strong": "v02 · Operator × thesis",
        "banner_span": "Plain speech · agents + research first · batch as equal evidence",
        "badges": [
            ("live", "lab.active"),
            (None, "phase 01 · foundation"),
            (None, "agents · research · batch"),
        ],
        # Mix of v01 thesis/research + v02 plain operator speech.
        # Agents + research lead; batch is equal evidence, not the whole story.
        "h1": "An applied AI lab<br />building companies<br />that <em>run themselves.</em>",
        "lead": "One founder, production systems, and a public experiment: can autonomous operations outrun hire-to-grow? We don’t sell a catalog — we ship agents and systems that execute, then publish what we learn.",
        "sub": "Today that means <strong>custom agent creation and deployment</strong> — landscape research, competition monitoring, content, website ops — and <strong>distributed batch AI</strong> when volume and unit cost are the constraint. Same bar: production only, no pilots.",
        "cta_primary": ("See the work ↓", "#applied"),
        "cta_secondary": ("Work with us", "#work-with-us"),
        "caps": ["Autonomy thesis", "Agent deployment", "Research loops", "Batch systems"],
        "panel_left": "runtime · agents + systems",
        "panel_right": "lab · evidence",
        "boot": [
            "> autonomica up",
            "> thesis: own the loop",
            "> status: <span class=\"ok\">running</span> · agents + batch",
        ],
        "stats": [("Agents", "Deployed loops"), ("Research", "Live signals"), ("Batch", "$/unit proof")],
        "jobs": [
            ("agent.research", "Landscape · continuous scan", "Live", "run"),
            ("agent.compete", "Competition monitoring", "Live", "ok"),
            ("agent.content", "Content + site ops", "Active", "lab"),
            ("sys.batch", "Volume pipelines · unit cost", "Live", "run"),
        ],
        "lab_num": "01 · Thesis",
        "lab_h2": "AI shouldn’t wait<br />for a human to <em>click approve.</em>",
        "lab_p": [
            "Most “AI” still drafts and waits. Autonomica tests the opposite: agents and systems that execute inside clear boundaries, while we run our own company as the long experiment in autonomous operations.",
            "Client work is research under pressure — real functions, real volume, real failure modes. We won’t run a six-week demo that dies in a shared drive. If it ships, it has owners, metrics, and a cost model. Patterns that hold get published.",
        ],
        "pillars": [
            ("01", "Own the loop", "Receive, decide, act, review — without a human in the middle of every step."),
            ("02", "Agents that run work", "Research, competition, content, site ops — company functions as deployed agents, not chat windows."),
            ("03", "Volume is the truth", "When the job is bulk AI, unit cost is architecture. Batch work exposes what demos hide."),
            ("04", "Transfer the method", "The endgame isn’t a black box. It’s replication — blueprints and findings others can run."),
        ],
        "applied_num": "02 · Where the thesis meets the world",
        "applied_h2": "Two evidence tracks.<br /><em>Same production bar.</em>",
        "applied_p": "Both feed the autonomy experiment. Both ship systems you can run — not theater.",
        "applied_mono": "// evidence · agents first · batch when volume demands it",
        "tracks": [
            {
                "idx": "01",
                "title": "Custom agent creation & deployment",
                "desc": "We design, build, and deploy agents that own ongoing company work — the loops a business needs as it becomes more autonomous. Landscape research, competition monitoring, content creation, website management, and similar operating functions. Not chat demos: tools, schedules, quality gates, deploy paths, and ownership after handoff.",
                "tags": ["Landscape research", "Competition monitoring", "Content", "Website ops", "Deploy"],
                "kind": "Agents",
                "side": "You name the function. We ship an agent that runs it.",
            },
            {
                "idx": "02",
                "title": "Distributed workload automation",
                "desc": "When the problem is volume — minutes, pages, images — we design distributed AI around unit cost. Transcription, OCR, image generation and manipulation, or any shardable job. Queues, workers, model routes, retries, QC, cost telemetry. The thesis dies if the economics don’t work; so we treat cost as a first-class constraint.",
                "tags": ["Transcription", "OCR", "Images", "Custom batch", "Unit economics"],
                "kind": "Batch",
                "side": "You bring volume and constraints. We ship the pipeline.",
            },
        ],
        "classes_label": "Agent shapes we deploy",
        "classes": [
            ("Research", "Landscape research", "Continuous scan of markets, tech, and positioning signals — findings the company can act on."),
            ("Compete", "Competition monitoring", "Track rivals, pricing, launches, and narrative shifts without a full-time analyst loop."),
            ("Content", "Content creation", "Draft, package, and ship on a cadence with review gates — not one-off prompts."),
            ("Site", "Website management", "Publish, update, and keep the public surface current as part of ops, not a project."),
        ],
        "agent_classes_label": "Batch shapes we industrialize",
        "agent_classes": [
            ("Audio", "Transcription", "Long-form media, multi-language, cost ladders under load."),
            ("Docs", "OCR / extract", "Archives and forms; finish the corpus, don’t sample-demo it."),
            ("Vision", "Image pipelines", "Bulk gen and edits with automated QC gates."),
            ("Other", "Shardable AI", "If it parallelizes and has a quality bar, we can scope it."),
        ],
        "exp_num": "03 · Long experiment",
        "exp_h2": "Four phases.<br /><em>One company.</em>",
        "exp_p": "Applied work funds the path and keeps the research honest. The long goal is a company that largely runs itself — and methods others can reuse.",
        "phases": [
            ("01", "Foundation", "Stack + agents + batch systems that fund the experiment and prove basic loops.", True),
            ("02", "Automation", "Hand recurring functions to agents and systems, highest-leverage first.", False),
            ("03", "Autonomy", "Company runs; founder on strategy and edges.", False),
            ("04", "Replication", "Publish the playbook and research findings. Others shouldn’t rebuild from myth.", False),
        ],
        "collab_num": "04 · Plug into the experiment",
        "collab_h2": "Fund a proof.<br /><em>Or become one.</em>",
        "collab_p": [
            "Tell us which company function an agent should own (research, competition, content, site, other) — or send a batch workload with volume, formats, cost pressure, and quality bar.",
            "You’ll get production systems. We’ll get evidence for the autonomy thesis. If it’s not a fit, we’ll say so quickly.",
        ],
        "collab_note": "Or book a 30-minute call.",
        "form_engage_label": "How do you want to plug in?",
        "form_engage": [
            "Custom agent creation & deployment",
            "Distributed batch workload",
            "Research / learning conversation",
            "Unsure — point me",
        ],
        "form_submit": "Send",
        "footer_right": "Experiment operational",
    },
    {
        "id": "v03",
        "slug": "sparse",
        "title": "v03 · Sparse",
        "nav_label": "v03 Sparse",
        "banner_strong": "v03 · Sparse",
        "banner_span": "Minimum copy · maximum air · same structure",
        "badges": [
            ("live", "lab.active"),
            (None, "phase 01"),
        ],
        "h1": "Applied AI lab.<br /><em>Production only.</em>",
        "lead": "One founder. Systems that act. Workloads that only make sense at scale.",
        "sub": "<strong>Batch AI</strong> for volume. <strong>White glove</strong> for company leverage.",
        "cta_primary": ("Work ↓", "#applied"),
        "cta_secondary": ("Contact", "#work-with-us"),
        "caps": ["Batch", "Embed", "Cost", "Autonomy"],
        "panel_left": "lab runtime",
        "panel_right": "live",
        "boot": [
            "> autonomica",
            "> <span class=\"ok\">operational</span>",
        ],
        "stats": [("Batch", "Volume systems"), ("$/u", "Unit cost"), ("Embed", "On-site")],
        "jobs": [
            ("transcribe", "Speech fleets", "Live", "run"),
            ("ocr", "Document extract", "Live", "ok"),
            ("vision", "Image batch", "Live", "run"),
            ("embed", "Force multipliers", "Active", "lab"),
        ],
        "lab_num": "01 · Lab",
        "lab_h2": "Own the loop.<br /><em>Pay for the unit.</em>",
        "lab_p": [
            "We test autonomous operations on ourselves. We take client work that forces the economics to be true.",
        ],
        "pillars": [
            ("01", "Act", "Systems execute. People set direction."),
            ("02", "Cost", "$/item is architecture."),
            ("03", "Embed", "Leverage inside the company when needed."),
            ("04", "Transfer", "Leave systems others can run."),
        ],
        "applied_num": "02 · Work",
        "applied_h2": "Two tracks.",
        "applied_p": "Production systems. No pilots.",
        "applied_mono": "// tracks",
        "tracks": [
            {
                "idx": "01",
                "title": "Distributed workload automation",
                "desc": "Cost-efficient batch AI: transcription, OCR, image gen/edit, anything shardable.",
                "tags": ["Transcription", "OCR", "Vision", "Custom"],
                "kind": "Systems",
                "side": "Volume in. Pipeline out.",
            },
            {
                "idx": "02",
                "title": "White-glove AI-fication",
                "desc": "Embed, find leverage, ship force multipliers, hand off.",
                "tags": ["Embed", "Build", "Handoff"],
                "kind": "Embed",
                "side": "Access in. Leverage out.",
            },
        ],
        "classes_label": "Shapes",
        "classes": [
            ("Audio", "Transcription", "Scale + cost."),
            ("Docs", "OCR", "Finish the corpus."),
            ("Vision", "Images", "Bulk + QC."),
            ("Other", "Custom", "If it shards."),
        ],
        "exp_num": "03 · Path",
        "exp_h2": "Foundation →<br /><em>replication.</em>",
        "exp_p": "Applied work funds the long experiment: a company that largely runs itself.",
        "phases": [
            ("01", "Foundation", "Stack + applied systems.", True),
            ("02", "Automation", "Functions to AI.", False),
            ("03", "Autonomy", "Founder on edges.", False),
            ("04", "Replication", "Publish the method.", False),
        ],
        "collab_num": "04 · Contact",
        "collab_h2": "Workload or<br /><em>company.</em>",
        "collab_p": [
            "Volume, cost, quality — or where humans are the bottleneck.",
        ],
        "collab_note": "Or book a call.",
        "form_engage_label": "Track",
        "form_engage": [
            "Batch workload",
            "White glove",
            "Unsure",
            "Other",
        ],
        "form_submit": "Send",
        "footer_right": "Operational",
    },
    {
        "id": "v04",
        "slug": "dual-engine",
        "title": "v04 · Dual-engine",
        "nav_label": "v04 Dual-engine",
        "banner_strong": "v04 · Dual-engine",
        "banner_span": "Lab identity + explicit two engines · still not a shop",
        "badges": [
            ("live", "lab.active"),
            (None, "phase 01 / <em>foundation</em>"),
            (None, "two engines · one thesis"),
        ],
        "h1": "An applied lab<br />with two engines<br /><em>and one thesis.</em>",
        "lead": "Thesis: autonomous business is buildable. Engine one: industrialize batch AI until unit cost is honest. Engine two: embed until companies feel a real force multiplier.",
        "sub": "Autonomica runs both engines on purpose — client volume and deep embeds keep the autonomy experiment from becoming a blog.",
        "cta_primary": ("See the engines ↓", "#applied"),
        "cta_secondary": ("Spin one up with us", "#work-with-us"),
        "caps": ["Engine: batch", "Engine: embed", "Thesis: autonomy", "Phase: foundation"],
        "panel_left": "dual-engine · runtime",
        "panel_right": "thesis-linked",
        "boot": [
            "> engines: batch, embed",
            "> thesis: autonomous operations",
            "> state: <span class=\"ok\">coupled · live</span>",
        ],
        "stats": [("E1", "Batch workloads"), ("E2", "White glove"), ("T", "Autonomy lab")],
        "jobs": [
            ("e1.transcribe", "Batch · speech", "Live", "run"),
            ("e1.ocr", "Batch · documents", "Live", "ok"),
            ("e1.vision", "Batch · images", "Live", "run"),
            ("e2.embed", "White glove · orgs", "Active", "lab"),
        ],
        "lab_num": "01 · Thesis",
        "lab_h2": "One experiment.<br /><em>Two ways it pays rent.</em>",
        "lab_p": [
            "The long project is Autonomica itself: a company increasingly run by systems that act. That only stays real if we keep touching volume and organizations outside our own walls.",
            "So the lab has two engines — not a product menu. Each engine produces production systems and returns evidence to the thesis.",
        ],
        "pillars": [
            ("01", "Thesis", "Systems own loops; founders own direction."),
            ("02", "Engine: batch", "Distributed AI for shardable volume, designed on $/item."),
            ("03", "Engine: embed", "White-glove AI-fication for force-multiplier outcomes."),
            ("04", "Coupling", "What we learn in either engine changes how we run Autonomica."),
        ],
        "applied_num": "02 · Engines",
        "applied_h2": "How outsiders<br /><em>drive the lab.</em>",
        "applied_p": "Pick an engine. You’re not buying a SKU — you’re attaching real constraints to the experiment.",
        "applied_mono": "// engine_1 batch · engine_2 embed",
        "tracks": [
            {
                "idx": "ENGINE 01",
                "title": "Distributed workload automation",
                "desc": "Industrial batch AI: custom distributed systems for transcription, OCR, image generation and manipulation, and other shardable jobs. Cost-efficient by design — queues, workers, model ladders, QC, telemetry.",
                "tags": ["Transcription", "OCR", "Image gen/edit", "Custom volume", "$/item"],
                "kind": "Engine 01",
                "side": "Attach volume and economics to the lab.",
            },
            {
                "idx": "ENGINE 02",
                "title": "White-glove AI-fication",
                "desc": "Embed into the company. Find bottlenecks with operators. Ship force multipliers. Transfer ownership. The org gets capacity; the lab gets ground truth about leverage.",
                "tags": ["Embed", "Operators", "Ship", "Transfer"],
                "kind": "Engine 02",
                "side": "Attach organizational reality to the lab.",
            },
        ],
        "classes_label": "Batch engine · material classes",
        "classes": [
            ("Audio", "Transcription", "Fleet processing under real cost pressure."),
            ("Documents", "OCR & extract", "Corpora that must actually complete."),
            ("Vision", "Image batch", "Generate, edit, verify at volume."),
            ("Custom", "Your shape", "Shardable + quality bar + budget."),
        ],
        "exp_num": "03 · Experiment timeline",
        "exp_h2": "The lab’s<br /><em>own roadmap.</em>",
        "exp_p": "Engines fund and inform the phases. The company is still the primary experiment.",
        "phases": [
            ("01", "Foundation", "Stand up engines + core autonomy stack.", True),
            ("02", "Automation", "Move Autonomica’s own functions onto systems.", False),
            ("03", "Autonomy", "Founder strategic; systems operational.", False),
            ("04", "Replication", "Open the method beyond our walls.", False),
        ],
        "collab_num": "04 · Engage an engine",
        "collab_h2": "Which engine<br /><em>do you need?</em>",
        "collab_p": [
            "Batch: send volume, formats, cost today, quality bar. Embed: send the bottleneck and access constraints.",
            "Either way you’re driving the lab with real load — that’s the point.",
        ],
        "collab_note": "Prefer voice? Book 30 minutes and name the engine.",
        "form_engage_label": "Engine",
        "form_engage": [
            "Engine 01 — distributed batch workload",
            "Engine 02 — white-glove AI-fication",
            "Not sure which engine",
            "Thesis / research conversation",
        ],
        "form_submit": "Engage the lab",
        "footer_right": "Dual-engine operational",
    },
    {
        "id": "v05",
        "slug": "lab-notebook",
        "title": "v05 · Lab notebook",
        "nav_label": "v05 Notebook",
        "banner_strong": "v05 · Lab notebook",
        "banner_span": "First-person lab voice · intimate · still commercial-clear",
        "badges": [
            ("live", "notebook.open"),
            (None, "phase 01"),
            (None, "written from inside the run"),
        ],
        "h1": "We’re building<br />a company that<br /><em>doesn’t need us</em><br />in every loop.",
        "lead": "This is the lab notebook for that attempt. Autonomica is the experiment: applied AI, production systems, and a bias toward work that either scales or teaches us why it won’t.",
        "sub": "Right now the notebook has two recurring chapters: <strong>batch systems for brutal volume</strong>, and <strong>white-glove embeds</strong> where we move in long enough to install a force multiplier.",
        "cta_primary": ("Read the work ↓", "#applied"),
        "cta_secondary": ("Write us into yours", "#work-with-us"),
        "caps": ["Field notes", "Batch chapters", "Embed chapters", "Open later"],
        "panel_left": "notebook · live entries",
        "panel_right": "updated continuously",
        "boot": [
            "> open notebook",
            "> author: autonomica lab",
            "> status: <span class=\"ok\">in progress</span>",
        ],
        "stats": [("Notes", "From production"), ("Batch", "Volume chapters"), ("Embed", "Org chapters")],
        "jobs": [
            ("note.speech", "Transcription under cost pressure", "Open", "run"),
            ("note.ocr", "Archives that must finish", "Open", "ok"),
            ("note.vision", "Images without babysitting", "Open", "run"),
            ("note.embed", "Force multipliers on-site", "Open", "lab"),
        ],
        "lab_num": "01 · Why this notebook exists",
        "lab_h2": "Theory is cheap.<br /><em>Volume isn’t.</em>",
        "lab_p": [
            "We got tired of AI stories that never meet a queue depth or a finance team. So we run systems on our own work and on other people’s volume until the story has numbers.",
            "If you work with us, you’re not a “customer logo.” You’re a chapter — with constraints that keep us honest.",
        ],
        "pillars": [
            ("01", "Write what ran", "We care about systems that executed, not decks that performed."),
            ("02", "Cost in the margin", "Every batch note includes how unit cost was designed — or where it broke."),
            ("03", "People in context", "Embeds start with operators, not org charts."),
            ("04", "Publish later", "When a pattern repeats, it leaves the notebook as a blueprint."),
        ],
        "applied_num": "02 · Current chapters",
        "applied_h2": "What we’re<br /><em>actively writing.</em>",
        "applied_p": "Two ongoing lines of applied work. Same lab. Different contact surfaces.",
        "applied_mono": "// chapters in progress",
        "tracks": [
            {
                "idx": "CHAPTER A",
                "title": "Distributed workload automation",
                "desc": "We design and ship custom AI pipelines for large-volume batch work — transcription, OCR, image generation and manipulation, and other distributable jobs. The plot is always the same: can this stay correct when the queue is deep and the budget is real?",
                "tags": ["Transcription", "OCR", "Vision", "Custom volume"],
                "kind": "Batch chapter",
                "side": "Bring the volume. We’ll write the system.",
            },
            {
                "idx": "CHAPTER B",
                "title": "White-glove AI-fication",
                "desc": "We embed. We watch how work moves. We install force multipliers and stay until the handoff is real. These chapters are messier — organizations are — and they’re where we learn what autonomy looks like around humans, not instead of pretending they vanish.",
                "tags": ["Embed", "Operators", "Leverage", "Handoff"],
                "kind": "Embed chapter",
                "side": "Bring the bottleneck. We’ll move in.",
            },
        ],
        "classes_label": "Batch materials on the bench",
        "classes": [
            ("Audio", "Speech", "Minutes → text under cost caps."),
            ("Docs", "Paper & scans", "Corpora that must complete."),
            ("Vision", "Images", "Generate and fix in bulk."),
            ("Other", "Your material", "If it shards, we can open a chapter."),
        ],
        "exp_num": "03 · The long arc",
        "exp_h2": "Where the notebook<br /><em>is headed.</em>",
        "exp_p": "Short chapters fund the long book: a company that largely runs without a human in every loop — and notes clear enough for someone else to follow.",
        "phases": [
            ("01", "Foundation", "Tools, batch muscle, embed craft — enough to fund the next year.", True),
            ("02", "Automation", "Our own functions move onto systems, one loop at a time.", False),
            ("03", "Autonomy", "We’re mostly out of the operational path.", False),
            ("04", "Replication", "The notebook becomes blueprints.", False),
        ],
        "collab_num": "04 · Start a chapter",
        "collab_h2": "Tell us what<br /><em>you’re stuck under.</em>",
        "collab_p": [
            "A pile of media. A document mountain. An image factory. A team that can’t hire its way out.",
            "Write a short note. If there’s a chapter here, we’ll say how we’d run it.",
        ],
        "collab_note": "Happy to talk live — 30 minutes, no pitch theater.",
        "form_engage_label": "Chapter type",
        "form_engage": [
            "Batch workload chapter",
            "White-glove embed chapter",
            "Not sure",
            "Just want to talk",
        ],
        "form_submit": "Send note",
        "footer_right": "Notebook open",
    },
]


def esc(s: str) -> str:
    return s  # copy intentionally contains safe HTML tags we author


def render_badges(badges: list) -> str:
    parts = []
    for kind, text in badges:
        if kind == "live":
            parts.append(f'<span class="badge"><span class="live"></span> {text}</span>')
        else:
            parts.append(f'<span class="badge">{text}</span>')
    return "\n          ".join(parts)


def render_page(v: dict, versions: list[dict], standalone: bool = False) -> str:
    css_block = (
        f"<style>\n{ (ROOT / 'styles.css').read_text() }\n</style>"
        if standalone
        else f'<link rel="stylesheet" href="{STYLES}" />'
    )

    def href_for(other: dict, *, standalone: bool, from_archive_dir: bool = False) -> str:
        """Resolve links between version pages."""
        name = f"{other['id']}-{other['slug']}.html"
        if standalone:
            # all snapshots live side-by-side in archive/
            return name
        # working tree: v00 may point at preserved hand-built archive
        if other.get("prefer_archive"):
            return f"archive/{other['prefer_archive']}"
        return name

    nav_links = []
    for other in versions:
        href = href_for(other, standalone=standalone)
        cls = "active" if other["id"] == v["id"] else ""
        nav_links.append(f'<a class="{cls}" href="{href}">{html.escape(other["nav_label"])}</a>')

    jobs_html = []
    for name, role, pill, pkind in v["jobs"]:
        jobs_html.append(
            f"""            <div class="job">
              <div>
                <div class="name">{esc(name)}</div>
                <div class="role">{esc(role)}</div>
              </div>
              <span class="pill pill-{pkind}">{esc(pill)}</span>
            </div>"""
        )

    stats_html = "".join(
        f'<div class="stat"><b>{esc(a)}</b><small>{esc(b)}</small></div>' for a, b in v["stats"]
    )

    pillars_html = []
    for n, title, body in v["pillars"]:
        pillars_html.append(
            f"""            <div class="thesis-item">
              <div class="n">{esc(n)}</div>
              <h3>{esc(title)}</h3>
              <p>{esc(body)}</p>
            </div>"""
        )

    tracks_html = []
    for t in v["tracks"]:
        tags = "".join(f"<span>{esc(x)}</span>" for x in t["tags"])
        tracks_html.append(
            f"""          <article class="output">
            <div class="idx">{esc(t['idx'])}</div>
            <div>
              <h3>{esc(t['title'])}</h3>
              <p class="desc">{esc(t['desc'])}</p>
              <div class="tags">{tags}</div>
            </div>
            <div class="side">
              <div class="kind">{esc(t['kind'])}</div>
              <p>{esc(t['side'])}</p>
            </div>
          </article>"""
        )

    classes_html = []
    for st, title, body in v["classes"]:
        classes_html.append(
            f"""            <div class="exp">
              <div class="st">{esc(st)}</div>
              <h4>{esc(title)}</h4>
              <p>{esc(body)}</p>
            </div>"""
        )

    agent_classes_block = ""
    if v.get("agent_classes"):
        agent_classes_html = []
        for st, title, body in v["agent_classes"]:
            agent_classes_html.append(
                f"""            <div class="exp">
              <div class="st">{esc(st)}</div>
              <h4>{esc(title)}</h4>
              <p>{esc(body)}</p>
            </div>"""
            )
        agent_label = html.escape(v.get("agent_classes_label", "Common agent shapes"))
        agent_classes_block = f"""
        <div style="margin-top:36px">
          <div class="sec-num" style="margin-bottom:16px">{agent_label}</div>
          <div class="exp-grid">
{chr(10).join(agent_classes_html)}
          </div>
        </div>"""

    phases_html = []
    for num, title, body, current in v["phases"]:
        cls = "phase current" if current else "phase dim"
        cur = '<div class="cur">Current</div>' if current else "<div></div>"
        phases_html.append(
            f"""          <div class="{cls}">
            <div class="pl"><span class="dot"></span> Phase {esc(num)}</div>
            <div>
              <h3>{esc(title)}</h3>
              <p>{esc(body)}</p>
            </div>
            {cur}
          </div>"""
        )

    caps = "".join(f"<span>{esc(c)}</span>" for c in v["caps"])
    boot = "\n              ".join(f"<div>{line}</div>" for line in v["boot"])
    lab_ps = "\n            ".join(f"<p{' style=\"margin-top:16px\"' if i else ''}>{esc(p)}</p>" for i, p in enumerate(v["lab_p"]))
    # fix first lab p without style - redo simply
    lab_ps = []
    for i, p in enumerate(v["lab_p"]):
        style = ' style="margin-top:16px"' if i else ""
        lab_ps.append(f"<p{style}>{p}</p>")
    lab_ps_s = "\n            ".join(lab_ps)

    collab_ps = "\n          ".join(
        f'<p style="color:var(--muted);line-height:1.7;margin-bottom:12px;font-size:{"1.05" if i==0 else "0.98"}rem">{p}</p>'
        for i, p in enumerate(v["collab_p"])
    )

    engage_opts = "\n              ".join(
        f"<option>{html.escape(o)}</option>" for o in v["form_engage"]
    )

    index_href = "index.html" if not standalone else "../index.html"
    if standalone:
        index_href = "../index.html"

    return f"""<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>Autonomica — {html.escape(v['title'])}</title>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=IBM+Plex+Mono:wght@400;500;600&family=IBM+Plex+Sans:wght@400;500;600&display=swap" rel="stylesheet" />
  {css_block}
</head>
<body>
  <div class="dir-banner">
    <div>
      <strong>{html.escape(v['banner_strong'])}</strong>
      <span>{html.escape(v['banner_span'])}</span>
    </div>
    <nav>
      <a href="{index_href}">← All versions</a>
      {chr(10).join(nav_links)}
    </nav>
  </div>

  <header>
    <div class="wrap nav">
      <a class="brand" href="#"><span class="dot"></span>Autonomica</a>
      <div class="nav-links">
        <a class="hide-sm" href="#lab">Lab</a>
        <a class="hide-sm" href="#applied">Applied work</a>
        <a class="hide-sm" href="#experiment">Experiment</a>
        <a class="btn btn-primary" href="#work-with-us">Work with us</a>
      </div>
    </div>
  </header>

  <main>
    <div class="wrap hero">
      <div class="hero-glow"></div>
      <div class="status-row">
          {render_badges(v['badges'])}
      </div>

      <div class="hero-grid">
        <div>
          <h1>{v['h1']}</h1>
          <p class="hero-lead">{v['lead']}</p>
          <p class="hero-sub">{v['sub']}</p>
          <div class="hero-ctas">
            <a class="btn btn-primary" href="{v['cta_primary'][1]}">{html.escape(v['cta_primary'][0])}</a>
            <a class="btn btn-ghost" href="{v['cta_secondary'][1]}">{html.escape(v['cta_secondary'][0])}</a>
          </div>
          <div class="capability-row">{caps}</div>
        </div>

        <div class="lab-panel" aria-label="Lab runtime">
          <div class="lab-top">
            <span class="label">{html.escape(v['panel_left'])}</span>
            <span class="label">{html.escape(v['panel_right'])}</span>
          </div>
          <div class="lab-body">
            <div class="boot">
              {boot}
            </div>
            <div class="stat-row">{stats_html}</div>
{chr(10).join(jobs_html)}
          </div>
        </div>
      </div>
    </div>

    <div class="divider"></div>

    <section id="lab">
      <div class="wrap">
        <div class="thesis">
          <div class="sec-head" style="margin-bottom:0">
            <div class="sec-num">{html.escape(v['lab_num'])}</div>
            <h2>{v['lab_h2']}</h2>
            {lab_ps_s}
          </div>
          <div class="thesis-list">
{chr(10).join(pillars_html)}
          </div>
        </div>
      </div>
    </section>

    <section id="applied">
      <div class="wrap">
        <div class="sec-head">
          <div class="sec-num">{html.escape(v['applied_num'])}</div>
          <h2>{v['applied_h2']}</h2>
          <p>{v['applied_p']}</p>
        </div>

        <div class="outputs-intro">
          <p>{html.escape(v['applied_mono'])}</p>
        </div>

        <div class="output-stack">
{chr(10).join(tracks_html)}
        </div>

        <div style="margin-top:36px">
          <div class="sec-num" style="margin-bottom:16px">{html.escape(v['classes_label'])}</div>
          <div class="exp-grid">
{chr(10).join(classes_html)}
          </div>
        </div>
{agent_classes_block}
      </div>
    </section>

    <section id="experiment">
      <div class="wrap">
        <div class="sec-head">
          <div class="sec-num">{html.escape(v['exp_num'])}</div>
          <h2>{v['exp_h2']}</h2>
          <p>{v['exp_p']}</p>
        </div>

        <div class="phases">
{chr(10).join(phases_html)}
        </div>
      </div>
    </section>

    <div class="divider"></div>

    <section id="work-with-us">
      <div class="wrap collab">
        <div>
          <div class="sec-num">{html.escape(v['collab_num'])}</div>
          <h2 style="font-family:var(--serif);font-size:clamp(2rem,3.5vw,2.85rem);font-weight:400;line-height:1.08;margin:0 0 14px">
            {v['collab_h2']}
          </h2>
          {collab_ps}
          <div class="collab-note">
            {html.escape(v['collab_note'])}
            <div style="margin-top:12px"><a class="btn btn-ghost" href="#">Book a call →</a></div>
          </div>
        </div>
        <form onsubmit="event.preventDefault(); alert('Mock only — copy exploration.');">
          <label>Work email<input type="email" required placeholder="you@company.com" /></label>
          <label>Company / project<input type="text" placeholder="Optional" /></label>
          <label>{html.escape(v['form_engage_label'])}
            <select required>
              <option value="">Select</option>
              {engage_opts}
            </select>
          </label>
          <label>If batch — what shape?
            <select>
              <option value="">Optional</option>
              <option>Transcription / speech</option>
              <option>OCR / documents</option>
              <option>Image generation or manipulation</option>
              <option>Other distributable AI work</option>
            </select>
          </label>
          <label>If agents — what function?
            <select>
              <option value="">Optional</option>
              <option>Landscape research</option>
              <option>Competition monitoring</option>
              <option>Content creation</option>
              <option>Website management</option>
              <option>Other company function</option>
            </select>
          </label>
          <label>What should we know?<textarea required placeholder="Volume, constraints, which function an agent should own…"></textarea></label>
          <button class="btn btn-primary" type="submit">{html.escape(v['form_submit'])}</button>
        </form>
      </div>
    </section>
  </main>

  <div class="wrap">
    <footer>
      <span>© 2026 Autonomica · {html.escape(v['id'])} copy</span>
      <span>{html.escape(v['footer_right'])}</span>
    </footer>
  </div>
</body>
</html>
"""


def render_md(v: dict) -> str:
    lines = [
        f"# {v['title']}",
        "",
        f"> {v['banner_span']}",
        "",
        "## Hero",
        "",
        f"**H1:** {v['h1'].replace('<br />', ' / ').replace('<em>', '').replace('</em>', '')}",
        "",
        v["lead"],
        "",
        v["sub"].replace("<strong>", "**").replace("</strong>", "**"),
        "",
        f"CTAs: {v['cta_primary'][0]} · {v['cta_secondary'][0]}",
        "",
        f"Caps: {', '.join(v['caps'])}",
        "",
        "## Lab section",
        "",
        f"**{v['lab_num']}** — {v['lab_h2'].replace('<br />', ' ').replace('<em>', '').replace('</em>', '')}",
        "",
    ]
    for p in v["lab_p"]:
        lines.append(p)
        lines.append("")
    lines.append("### Pillars")
    lines.append("")
    for n, t, b in v["pillars"]:
        lines.append(f"- **{n} {t}** — {b}")
    lines.append("")
    lines.append("## Applied work")
    lines.append("")
    lines.append(f"**{v['applied_num']}** — {v['applied_h2'].replace('<br />', ' ').replace('<em>', '').replace('</em>', '')}")
    lines.append("")
    lines.append(v["applied_p"])
    lines.append("")
    for t in v["tracks"]:
        lines.append(f"### {t['idx']}: {t['title']}")
        lines.append("")
        lines.append(t["desc"])
        lines.append("")
        lines.append(f"Tags: {', '.join(t['tags'])}")
        lines.append(f"Side: *{t['kind']}* — {t['side']}")
        lines.append("")
    if v.get("agent_classes"):
        lines.append(f"### {v.get('agent_classes_label', 'Common agent shapes')}")
        lines.append("")
        for st, title, body in v["agent_classes"]:
            lines.append(f"- **{st} · {title}** — {body}")
        lines.append("")
    lines.append("## Experiment phases")
    lines.append("")
    for num, title, body, current in v["phases"]:
        mark = " **(current)**" if current else ""
        lines.append(f"- Phase {num} · **{title}**{mark}: {body}")
    lines.append("")
    lines.append("## Collaborate")
    lines.append("")
    lines.append(f"**{v['collab_num']}** — {v['collab_h2'].replace('<br />', ' ').replace('<em>', '').replace('</em>', '')}")
    lines.append("")
    for p in v["collab_p"]:
        lines.append(p)
        lines.append("")
    lines.append(f"Form submit: **{v['form_submit']}**")
    lines.append("")
    return "\n".join(lines)


def render_index(versions: list[dict]) -> str:
    cards = []
    for v in versions:
        if v.get("prefer_archive"):
            href = f"archive/{v['prefer_archive']}"
        else:
            href = f"{v['id']}-{v['slug']}.html"
        md = f"copy/{v['id']}.md"
        cards.append(
            f"""
      <a class="card" href="{href}">
        <div class="id">{html.escape(v['id'])}</div>
        <h2>{html.escape(v['title'].split('·',1)[-1].strip())}</h2>
        <p>{html.escape(v['banner_span'])}</p>
      </a>
      <p class="mdlink"><a href="{md}">{v['id']}.md</a> — copy only · <a href="archive/{v['id']}-{v['slug']}.html">full archive snapshot</a></p>
"""
        )
    return f"""<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>Autonomica A+ copy versions</title>
  <link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500&family=IBM+Plex+Sans:wght@400;500&family=Instrument+Serif:ital@0;1&display=swap" rel="stylesheet" />
  <style>
    body {{ background:#07080a; color:#ece8df; font-family:"IBM Plex Sans",system-ui,sans-serif; margin:0; line-height:1.5;
      background-image: radial-gradient(circle, rgba(180,255,57,0.04) 1px, transparent 1px); background-size:32px 32px; }}
    .wrap {{ width:min(900px, calc(100% - 40px)); margin:0 auto; padding:48px 0 80px; }}
    h1 {{ font-family:"Instrument Serif",Georgia,serif; font-weight:400; font-size:clamp(2rem,4vw,2.8rem); margin:0 0 12px; }}
    h1 em {{ font-style:italic; color:#c8f542; }}
    .lede {{ color:#8b919c; max-width:36rem; margin-bottom:28px; }}
    .note {{ font-family:"IBM Plex Mono",monospace; font-size:12px; color:#8b919c; border:1px solid rgba(255,255,255,0.08);
      padding:14px 16px; border-radius:8px; margin-bottom:36px; line-height:1.6; }}
    .note strong {{ color:#c8f542; font-weight:500; }}
    .card {{ display:block; border:1px solid rgba(255,255,255,0.08); border-radius:12px; padding:22px 22px 18px;
      margin-bottom:8px; text-decoration:none; color:inherit; background:rgba(14,16,20,0.9); transition:border-color .15s; }}
    .card:hover {{ border-color:rgba(200,245,66,0.35); }}
    .card .id {{ font-family:"IBM Plex Mono",monospace; font-size:11px; letter-spacing:.14em; text-transform:uppercase; color:#c8f542; margin-bottom:8px; }}
    .card h2 {{ font-family:"Instrument Serif",Georgia,serif; font-weight:400; font-size:1.6rem; margin:0 0 8px; }}
    .card p {{ color:#8b919c; margin:0; font-size:0.98rem; }}
    .mdlink {{ font-family:"IBM Plex Mono",monospace; font-size:11px; color:#8b919c; margin:0 0 22px 4px; }}
    .mdlink a {{ color:#8b919c; }}
    .mdlink a:hover {{ color:#c8f542; }}
    a {{ color:#c8f542; }}
  </style>
</head>
<body>
  <div class="wrap">
    <h1>A+ copy versions<br /><em>historical browser</em></h1>
    <p class="lede">Same visual shell. Different words. Open any version; archives keep full snapshots so you can go back in time.</p>
    <div class="note">
      <strong>Layout:</strong> design-explorations/a-plus-copy/<br />
      <strong>History log:</strong> <a href="HISTORY.md">HISTORY.md</a><br />
      <strong>Archives:</strong> archive/vXX-*.html (self-contained)<br />
      <strong>Copy-only:</strong> copy/vXX.md
    </div>
    {"".join(cards)}
  </div>
</body>
</html>
"""


def main() -> None:
    ARCHIVE.mkdir(parents=True, exist_ok=True)
    COPY_DIR.mkdir(parents=True, exist_ok=True)

    # Persist structured source of truth
    (ROOT / "versions.json").write_text(json.dumps(VERSIONS, indent=2, ensure_ascii=False) + "\n")

    for v in VERSIONS:
        # markdown always
        (COPY_DIR / f"{v['id']}.md").write_text(render_md(v))

        # full archive snapshot (self-contained) — never overwrite hand-built prefer_archive originals
        arch_name = f"{v['id']}-{v['slug']}.html"
        arch_path = ARCHIVE / arch_name
        if v.get("prefer_archive") and (ARCHIVE / v["prefer_archive"]).exists():
            # also write a generated twin for structured diffs, without touching the hand-built file
            (ARCHIVE / f"{v['id']}-{v['slug']}-from-generator.html").write_text(
                render_page(v, VERSIONS, standalone=True)
            )
        else:
            arch_path.write_text(render_page(v, VERSIONS, standalone=True))

        # working copy (links to styles.css) for v01+ ; v00 working copy also generated for parity
        if not v.get("prefer_archive"):
            out = ROOT / arch_name
            out.write_text(render_page(v, VERSIONS, standalone=False))
        else:
            # optional working copy of baseline regenerated from data
            (ROOT / arch_name).write_text(render_page(v, VERSIONS, standalone=False))

    (ROOT / "index.html").write_text(render_index(VERSIONS))

    # Point main exploration file at index note
    print("Generated versions:")
    for v in VERSIONS:
        print(f"  {v['id']} · {v['slug']}")
    print(f"Index: {ROOT / 'index.html'}")


if __name__ == "__main__":
    main()
