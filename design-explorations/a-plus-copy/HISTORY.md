# A+ Copy Version History

Visual system: **Direction A+** (dark lab, lime accent, Instrument Serif + IBM Plex).  
Copy changes only — layout shell stays the same so versions are comparable.

| Version | Working HTML | Archive (immutable snapshot) | Copy-only MD | Voice |
|--------:|--------------|------------------------------|--------------|-------|
| **v00** | `v00-initial-lab-mix.html` (regen) | `archive/v00-initial-lab-mix.html` **hand-built original** | `copy/v00.md` | First A+ lab × commercial mix |
| **v01** | `v01-thesis-first.html` | `archive/v01-thesis-first.html` | `copy/v01.md` | Manifesto / thesis-led |
| **v02** | `v02-operator-direct.html` | `archive/v02-operator-direct.html` | `copy/v02.md` | Plain operator speech |
| **v03** | `v03-sparse.html` | `archive/v03-sparse.html` | `copy/v03.md` | Minimal / sparse |
| **v04** | `v04-dual-engine.html` | `archive/v04-dual-engine.html` | `copy/v04.md` | Lab dual-engine framing |
| **v05** | `v05-lab-notebook.html` | `archive/v05-lab-notebook.html` | `copy/v05.md` | Notebook / first-person lab |

## Browse

```bash
xdg-open /media/lio/data/g/autonomica-website/design-explorations/a-plus-copy/index.html
```

## Go back in time

1. **Hand-built baseline (never overwrite):** `archive/v00-initial-lab-mix.html`
2. **Self-contained snapshots** for every version in `archive/` (CSS inlined)
3. **Structured source of truth:** `versions.json` + `generate.py`
4. **Copy-only diffs:** `copy/vXX.md`

## Regenerate after edits

Edit copy in `generate.py` (`VERSIONS` list) or `versions.json` (if you wire JSON→generator later), then:

```bash
cd design-explorations/a-plus-copy && python3 generate.py
```

**Rule:** never overwrite `archive/v00-initial-lab-mix.html` (the original hand-built A+).  
Generator writes new archives as `archive/vXX-slug.html` and, for v00, a twin `archive/v00-initial-lab-mix-from-generator.html`.

## Selected

**2026-07-27 — Ship candidate: v02 · Operator × thesis**  
See [`SELECTED.md`](SELECTED.md). Mix of v01 thesis/research + v02 plain speech. Agents + research lead; batch equal evidence. Other versions stay for comparison only.

## Changelog

| Date | Change |
|------|--------|
| 2026-07-27 | **v02 mix (v01×v02):** thesis H1 + research framing; agents/deploy first; batch second; no white glove |
| 2026-07-27 | **v02 copy update:** replaced white-glove embed track with **custom agent creation & deployment** |
| 2026-07-27 | Locked selection: **v02 · Operator-direct** (`SELECTED.md`) |
| 2026-07-22 | Created versioning system; archived hand-built v00; added v01–v05 copy variants + index + md sheets |
