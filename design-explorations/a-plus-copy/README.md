# Autonomica A+ — copy explorations

Same **A+ visual shell** (applied AI lab × commercial tracks). Multiple **copy versions**, all kept.

## Quick start

```bash
xdg-open index.html
```

## Selected (2026-07-27)

**Ship this:** **v02 · Operator × thesis** — v01 research/autonomy + v02 plain speech; **agents first**, batch equal.  
Details: [`SELECTED.md`](SELECTED.md) · preview: [`v02-operator-direct.html`](v02-operator-direct.html)

## Versions (voice)

| ID | Name | One-line |
|----|------|----------|
| v00 | Baseline | First mix we liked structure-wise |
| v01 | Thesis-first | “Business that builds itself” + evidence tracks |
| **v02** | **Operator × thesis** | **Agents + research first, batch equal — SELECTED** |
| v03 | Sparse | Fewest words |
| v04 | Dual-engine | Two engines, one thesis |
| v05 | Lab notebook | First-person notebook tone |

## Files

- `index.html` — picker
- `vXX-*.html` — working previews (`styles.css`)
- `archive/` — full historical snapshots
- `copy/vXX.md` — copy only (easy to diff / comment)
- `generate.py` / `versions.json` — regenerate from source
- `HISTORY.md` — changelog

## Adding a new version

1. Copy a block in `generate.py` → `VERSIONS` (e.g. `v06`)
2. Run `python3 generate.py`
3. Append a row to `HISTORY.md`
