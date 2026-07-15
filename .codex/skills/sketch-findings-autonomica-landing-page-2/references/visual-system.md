# Color, Typography, and Surface System

## Design Decisions

### Palette

| Token | Value | Role |
|------|-------|------|
| Black | `#050604` | Dominant page background |
| Black soft | `#0b0d09` | Cards, logs, and lifted surfaces |
| Warm ivory | `#f1eee5` | Primary text; avoid pure white |
| Muted | `#a7aaa0` | Body copy and secondary labels |
| Hairline | `rgba(241, 238, 229, 0.14)` | Dividers, grids, and technical frames |
| Acid lime | `#b8ff3f` | Primary actions, active states, status, emphasis |
| Acid soft | `#d9ff92` | Rare secondary lime tone |
| Signal orange | `#ff6b42` | Warnings, proposed/experimental labels, rare contrast |
| Success | `#56e39f` | Verified system outcomes |
| Danger | `#ff5c5c` | Validation and actual failure states only |

The page should feel mostly black and warm ivory. Lime is a signal, not a wash. Orange should be rarer than lime and should communicate proposal, warning, or a genuinely separate state.

```css
:root {
  --black: #050604;
  --black-soft: #0b0d09;
  --ink: #f1eee5;
  --muted: #a7aaa0;
  --line: rgba(241, 238, 229, 0.14);
  --acid: #b8ff3f;
  --orange: #ff6b42;
}
```

Use an almost invisible lime radial glow and a sparse dot grid to create atmosphere. Keep both subordinate to the text.

### Typography

- **Syne 500–700:** primary display face for blunt, engineered headlines and product names.
- **Newsreader italic 400:** human/editorial counterpoint used for one emphasized word, never entire sections.
- **IBM Plex Sans 400–600:** body copy and functional descriptions.
- **IBM Plex Mono 400–600:** labels, status, timestamps, metadata, CTAs, and system output.

Hero typography is intentionally large and tight. For the selected headline, use roughly `clamp(64px, 8.2vw, 122px)`, line-height `.84`, and letter-spacing around `-.065em`; reduce it to approximately `56–78px` on phones. Body copy stays open at `1.5–1.6` line-height.

### Shape and spacing

- Default corners are restrained: `4px` for controls and system windows.
- Use `12px` only for secondary containers; avoid making every card soft and pill-shaped.
- Desktop content width: `1180px` with `24px` minimum gutters.
- Major sections: approximately `112–120px` vertical padding.
- Use thin borders and empty space instead of shadows to separate most content.

## What to Avoid

- Purple gradients, glossy glassmorphism, and saturated multi-color palettes.
- Pure white text on pure black everywhere; the warm ivory is part of the identity.
- Lime backgrounds across large sections.
- Rounded-card grids that resemble a generic AI SaaS template.
- Decorative orange without semantic purpose.
- Replacing the editorial type contrast with one generic sans-serif family.

## Origin

Synthesized from sketch 001, selected Variant A. Winning tokens: `sources/themes/default.css`.
