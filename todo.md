# Site to-do

What's left on the personal website. Living doc, edit freely.

---

## ✅ Done

- **/work** — 6 real entries (AMP, Durigo, Baseless Boys, The Whats Without, Workouts, Grassdoor), written in-voice, AI-tells scrubbed.
- **/bookshelf** — real data (reading: *Same as Ever*; finished: ASOIAF, Project Hail Mary, Pragmatic Programmer).
- **/now** — rewritten to reflect the real day job (fullstack/AI-platform lead), date current.
- **Home + /about** — corrected the "iOS is the day job" framing to "fullstack/AI by day, iOS + agents on the side."
- **`src/site.ts`** — github/email/cv/author/location centralized; all pages consume it.
- **Code-review fixes** — palette modifier-key + invalid ARIA, `--fg-faint` contrast (AA), GitHub-fetch validation + timeout, trigger/theme-toggle ARIA, font preload, canonical/og:url, abandoned-book status, star-rating + glyph a11y, reduced-motion scroll.

---

## 📝 Content to write (the real backlog)

- [ ] **Refresh the CV** (`public/cv.pdf`). The live one is outdated — it stops at Grassdoor ("Current") with **no AMP/J&J**. Source material: `~/Documents/portfolio-briefs/` (corporate + amp briefs). This is the highest-priority gap: hero, about, and colophon all link to it.
- [ ] **Writing — add posts.** Only one exists (`why-i-redesigned.md`). The site's stated purpose is "somewhere quiet to write"; it needs 2–3 more to not feel abandoned. Ideas live in the briefs.
- [ ] **/lab — real experiments.** The three listed are half-generic. Swap in actual ones (the budget-capped agent, quiz-app, SwiftUI bits) or trim.
- [ ] **/now — keep fresh.** It's a now-page; revisit when the work changes.

## 🔧 Polish / tech debt (from the code review, deferred on purpose)

- [ ] **Hoist duplicated CSS** (`.prose`, `.head`, `.small` redefined across 3–5 pages with drifting values) into `global.css`.
- [ ] **Remove unused tokens** `--radius-sm`, `--measure` in `global.css` (or wire `--measure` into the prose `max-width`es).
- [ ] **Heading hierarchy** — home and /lab skip h1→h3 (tiles use h3). Cosmetic; bumping to h2 needs a style check so sizes don't jump.
- [ ] **Content schema** — `featured`, `finishedOn`, `note`, `tags` are defined but unrendered. Use them or prune from `content.config.ts`.
- [ ] **Latent listener leak** — if View Transitions / `<ClientRouter>` is ever added, the palette/nav/footer/theme scripts need cleanup (`astro:before-swap`) or listeners stack. No issue today (full-page nav).

## 🎯 Optional

- [ ] **App Store links** for Durigo and Workouts work entries (`href:`), if/when live.
- [ ] **Rating for ASOIAF** in `books.json` (currently no stars, so it renders without the rating line the others have).
- [ ] **Sync the briefs** in `~/Documents/portfolio-briefs/` — they still say "Frontend Engineer" (now Fullstack Team Lead) and old Vercel URLs. Notes-only, not on the site.

---

## Reference

- Portfolio source material (kept out of the repo): `~/Documents/portfolio-briefs/`
- Make wording sound human: `/natural-writing` skill
- Re-review: `/code-review high`
