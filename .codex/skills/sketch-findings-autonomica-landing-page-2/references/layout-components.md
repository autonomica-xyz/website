# Layout and Component Language

## Design Decisions

### Hero

Use an asymmetric two-column hero: a dominant editorial thesis on the left and a working system/control-loop window on the right. The operational diagram is evidence for the headline rather than an unrelated illustration.

```css
.hero-grid {
  display: grid;
  grid-template-columns: minmax(0, 1.1fr) minmax(340px, .9fr);
  gap: 76px;
  align-items: end;
}
```

The system window uses a title bar, tiny state lights, a four-node **Observe → Decide → Act → Verify** loop, and a short timestamped run log. Prefer real system vocabulary over decorative charts.

### Method rail

Immediately after the hero, use a full-width three-cell rail:

- Research — find the hard operational truth.
- Build — turn it into a working system.
- Operate — improve it under real conditions.

This is the bridge between the experiment and the commercial content.

### Systems from the experiment

Use one shared bordered grid with editorially uneven spans rather than isolated floating cards. The selected desktop proportion is `5 / 4 / 3` across a twelve-column grid. Each module has a functional domain, concrete description, and a single restrained link.

Lead with work that proves the autonomous-company experiment: autonomous websites, research agents, and local models on constrained hardware. Keep the headings short; describe hardware constraints in body copy rather than turning internal shorthand into a headline. Verify system scope and current operating status before production publication.

### Service engagements

Keep services visually secondary to the systems-lab thesis. Use a `4 / 8` layout: a sticky narrative introduction on the left and numbered, full-width service rows on the right. Mark unconfirmed names or packaging as proposed.

The approved conceptual sequence is:

1. Operations Audit — understand one loop.
2. System Build Sprint — implement the bounded system.
3. Managed Autonomy — operate and improve it.

### Research and field notes

Use three compact editorial cards for research notes, blueprints, and build logs. Field notes are not filler content; they are the public record of the autonomous-company experiment.

### Responsive behavior

- Collapse hero, section headers, contact areas, and service layout to one column below roughly `900px`.
- Stack product modules and field notes at tablet/mobile sizes.
- Keep the operating loop as a two-by-two grid on narrow phones.
- Preserve oversized editorial typography, but clamp it so words do not overflow.
- Hide nonessential navigation links before shrinking them into illegibility.

## HTML Structures

```html
<section class="hero">
  <div class="container hero-grid">
    <div class="hero-copy">...</div>
    <div class="system-window" aria-label="Autonomous operating loop">...</div>
  </div>
</section>

<section class="method-rail" aria-label="Research, build, operate">
  <div>Research</div><div>Build</div><div>Operate</div>
</section>
```

## What to Avoid

- A product gallery before the experiment and operating-system thesis are understood.
- Generic feature-icon grids.
- Dashboard screenshots with invented data or unrelated analytics.
- Making all three products appear equally mature.
- Long consultancy copy that obscures the working systems.

## Origin

Synthesized from sketch 001, selected Variant A. Source files: `sources/001-commercial-positioning/`.
