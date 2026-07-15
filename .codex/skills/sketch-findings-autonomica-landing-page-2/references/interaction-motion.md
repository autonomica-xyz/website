# Interaction and Motion

## Design Decisions

Motion should communicate system state and responsiveness. It should not become a futuristic spectacle.

### Timing

- Use approximately `150ms` for buttons, links, tabs, and hover feedback.
- Use `350–500ms` for section or page entrance transitions.
- Prefer cubic easing with a fast, settled finish over bouncy spring motion.
- Respect `prefers-reduced-motion` and remove nonessential transitions.

### Interaction patterns

- Primary actions use acid lime and move upward by only a few pixels on hover.
- Text links use a thin underline and change to lime.
- Product surfaces may gain a faint lime tint; avoid large glow effects.
- Status dots can glow or pulse softly when they represent genuinely live/current state.
- Forms validate inline, preserve entered content on error, show a brief loading state, and then provide explicit success feedback.
- Navigation scrolls directly to the relevant narrative section.

```css
.interactive {
  transition: transform .15s ease, color .15s ease,
              background-color .15s ease, border-color .15s ease;
}
.interactive:hover { transform: translateY(-3px); }

@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: .01ms !important;
    transition-duration: .01ms !important;
  }
}
```

### Operational texture

Use tiny pieces of stateful detail—timestamps, run identifiers, review gates, verification lines, maturity labels—to make the lab feel active. These details must be plausible and clearly illustrative when not sourced from live data.

## What to Avoid

- Constant marquee motion, cursor gimmicks, parallax, or large particles.
- Pulsing every lime element.
- Motion that implies a system is live when it is only an illustration.
- Hover-only access to essential information.
- Long loading simulations in a marketing page.

## Origin

Synthesized from sketch 001, selected Variant A. Source files: `sources/001-commercial-positioning/`.
