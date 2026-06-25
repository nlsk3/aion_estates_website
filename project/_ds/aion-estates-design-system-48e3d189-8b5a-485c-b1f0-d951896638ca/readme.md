# Aion Estates — Design System

A warm, elegant, modern brand system for **Aion Estates**, a luxury real-estate
brokerage representing timeless, upper-market, generational properties across the
**San Francisco Bay Area** (with a focus on the South Bay — Saratoga, Los Altos
Hills, Los Altos, Los Gatos, Cupertino, Campbell).

The brand voice is quiet confidence: deliberate, discreet, and editorial. The
visual world is cream paper, charcoal ink, and a single restrained gold, set in
a light-weight Cormorant Garamond serif over generously-tracked DM Sans.

---

## Sources

This system was reverse-engineered from the production marketing site:

- **GitHub:** https://github.com/nlsk3/aion_estates_website (branch `master`)
  - `index.html`, `style.css`, `script.js` — a single-page scrolling site.
  - The `assets/` folder ships no binaries; the logo is a **text wordmark** and
    imagery uses CSS gradient placeholders (commented "replace with your
    photography"). All colour, type, spacing, and motion tokens here are lifted
    directly from `style.css`.

Explore that repository for the canonical source if you need more detail than this
guide provides.

> **Font note:** the site loads **Cormorant Garamond** and **DM Sans** from Google
> Fonts; this system does the same (`tokens/fonts.css`). These are the real brand
> faces — no substitution was made. If you have licensed/self-hosted copies you'd
> prefer to ship, drop the files in and swap `fonts.css` for `@font-face` rules.

---

## Content Fundamentals

How Aion Estates writes.

- **Voice — "we", to "you".** First-person plural for the brokerage ("We move with
  deliberateness"), second person for the client ("Your transaction is your
  business"). Never "I". Warm but never familiar.
- **Tone.** Understated, assured, generational. It sells *standard* and *discretion*,
  not hype. No exclamation marks, no urgency, no superlatives stacked for effect.
  Confidence is shown through restraint.
- **Casing.** Three registers:
  - *Serif sentence case* for headlines, often with an italic emphasis clause:
    "Where legacy meets the horizon." · "The South Bay, *in full.*" · "Let's begin
    *a conversation.*"
  - *UPPERCASE, heavily tracked* for micro-labels and nav: "PHILOSOPHY",
    "OUR APPROACH", "SAN FRANCISCO BAY AREA", "THE MARKET".
  - *Sentence case, light sans* for body copy.
- **Sentence shape.** Body copy favours one strong idea per sentence, often with a
  closing em-dash aside — "neighbourhood by neighbourhood, block by block."
- **Numbers.** Pillars are indexed 01 / 02 / 03 in serif. Areas are listed
  middot-separated. Prices, when present, are formatted with commas and a leading $.
- **Emoji:** never. **Exclamation marks:** never. **Unicode used decoratively:**
  the middot (·) as a separator and the em-dash (—) as an aside are the only
  punctuation flourishes.
- **Example copy:**
  - Eyebrow → headline: `PHILOSOPHY` → *"representation as timeless as the
    communities themselves."*
  - CTA labels: "Get in Touch", "Send Message", "Contact" — plain, inviting, calm.
  - Sign-off voice: "We'll be in touch shortly." / "Let's begin a conversation."

---

## Visual Foundations

- **Palette.** Cream `#F5F0E8` is the page ground; `#FAFAF7` surface lifts alternate
  sections; charcoal `#1C1C1A` is the ink and the dark contact/footer ground.
  Secondary text is warm **stone** `#6B6459`. The lone accent is **gold** `#B8975A`,
  used for rules, eyebrows, the primary button, and hover fills — never as large
  fields. Atmospheric **night-blues** (`#1E2D40 → #0D1620`) carry hero photography;
  warm **clay** tones fill image placeholders.
- **Type.** *Cormorant Garamond* (serif) at **weight 300**, italic for emphasis,
  carries all display and editorial voice — hero `clamp(44–82px)`, section heads
  `clamp(34–54px)`, pull-quotes 30px italic. *DM Sans* at **300/400** carries body
  (14–15px), nav (11px), and micro-labels (10px). Body line-height is generous (1.8);
  italic quotes breathe at 1.75.
- **Tracking.** The signature move: uppercase labels are tracked between **0.22em and
  0.38em** (buttons 0.22, labels 0.24, hero eyebrow 0.32, ESTATES sub 0.38). Display
  serif sits near-default (0.01em).
- **Spacing & layout.** A calm 4→120px scale. Sections breathe at **120px** vertical
  (88 / 72 responsive). Page max-width **1200px**, gutters **48px**. Two-column
  splits use an 80px gap. Lots of negative space; nothing is crowded.
- **Backgrounds.** Flat colour fields — cream, surface, charcoal. The **only**
  gradients are: the night-blue hero (a stand-in for full-bleed photography) and the
  clay image placeholders. No textures, no patterns, no decorative gradients.
- **Borders & rules.** The brand's defining detail is the **0.5px gold hairline**.
  Two forms: a short **44px centred accent** under labels/eyebrows, and a long
  **end-faded divider** (transparent → gold-45 → transparent) between sections and
  pillars. Section seams use a 0.5px charcoal-10% hairline.
- **Corners.** Sharp. `border-radius: 0` everywhere — buttons, cards, fields,
  images. The *only* rounded element is the hero scroll indicator (a pill).
- **Shadow.** Almost none. The scrolled nav gets a 1px hairline shadow; lifted cards
  (an extension primitive) get a single soft drop shadow on hover only. Depth comes
  from hairlines and contrast, not elevation.
- **Cards.** Where they exist (PropertyCard), they are surface-coloured, hairline-
  bordered, sharp-cornered, and flat at rest — lifting 3px with a soft shadow on
  hover. No coloured left-borders, no rounded corners.
- **Motion.** Restrained and slow. Sections **fade up** 22px over 0.85s on scroll
  (IntersectionObserver). Hover/state transitions run 0.30–0.45s. Easing is
  `cubic-bezier(0.22, 0.61, 0.36, 1)` — a gentle settle, never a bounce. The hero
  scroll-dot is the one looping animation.
- **Hover states.** Gold buttons fade to 82% opacity. Outline buttons **fill gold**
  with white text. Nav links draw a gold underline left-to-right and lighten toward
  white/charcoal. Links shift to gold. No scaling, no shadows-on-hover except cards.
- **Press / focus.** No shrink on press. Form fields brighten their gold border from
  28% → 70% on focus — the only focus treatment.
- **Transparency & blur.** Used sparingly: the hero scrim is a 40% blue-black wash;
  form fields on charcoal use a 4% white fill; gold appears at 14/28/45/70/90%
  washes for rules and borders. No backdrop blur.
- **Imagery vibe.** Warm and timeless. Photography (when supplied) is landscape,
  high-contrast for legibility under the hero scrim; placeholders are warm clay
  gradients, never cool greys.

---

## Iconography

Aion Estates is **near-iconless by design** — the elegance comes from type and
rules, not UI chrome.

- **No icon font, no sprite, no SVG icon set** ships in the source. The system uses
  almost no icons.
- The footer contains exactly **two inline SVG glyphs** — Instagram and LinkedIn —
  drawn at 18px, 1.5px stroke, `currentColor`, rounded caps/joins (a Feather/Lucide
  visual idiom). These are reproduced verbatim in the website UI kit's footer.
- **No emoji. No Unicode pictographs.** The only non-alphabetic characters used
  decoratively are the **middot (·)** as a list separator and the **em-dash (—)**.
- **If you need more icons:** match the existing footer glyphs — use
  [Lucide](https://lucide.dev) (or Feather) at ~1.5px stroke, `currentColor`, rounded
  joins, sized 18–20px, coloured stone or gold. Keep them rare; never let icons
  compete with the serif. *(This is a recommendation — verify against the source if
  fidelity matters; the production site ships only the two social glyphs.)*

---

## Index — what's in this system

**Foundations**
- `styles.css` — the single entry point consumers link (imports only).
- `tokens/colors.css` · `typography.css` · `spacing.css` · `effects.css` · `fonts.css`
- `guidelines/*.card.html` — foundation specimen cards (Colors, Type, Spacing, Brand).

**Components** (`window.AionEstatesDesignSystem_48e3d1`)
- `components/core/` — **Button**, **Wordmark**, **SectionLabel**, **Rule**
- `components/forms/` — **Field** (input / textarea)
- `components/property/` — **Pillar**, **AreaTag**, **PropertyCard**

Each component directory has a `.jsx`, a `.d.ts` (props contract), a `.prompt.md`
(usage), and a `*.card.html` thumbnail.

**UI kit**
- `ui_kits/website/` — an interactive recreation of the Aion Estates homepage
  (`index.html` + `Nav.jsx`, `Sections.jsx`, `Contact.jsx`). Nav scroll state,
  smooth section nav, fade-up reveals, and a working contact form with a thank-you
  state.

**Meta**
- `SKILL.md` — makes this folder usable as a downloadable Agent Skill.
- `readme.md` — this file.

---

## Using the system

Link the stylesheet and read components off the global namespace:

```html
<link rel="stylesheet" href="styles.css">
<script src="_ds_bundle.js"></script>
<script>
  const { Button, Wordmark, PropertyCard } = window.AionEstatesDesignSystem_48e3d1;
</script>
```

Build on the tokens (`var(--gold)`, `var(--font-serif)`, `var(--section-v)`) rather
than hard-coding values, so anything you make inherits the brand automatically.
