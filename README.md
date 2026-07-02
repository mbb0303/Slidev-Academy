# Slidev Academy Theme

`slidev-theme-mbb-academy` is a restrained academic Slidev theme for scientific meeting slides. The current demo uses the Markdown-native MBB workflow: content is written in ordinary Markdown section files, while precise conference-slide layout is handled by local Slidev layouts, CSS, and small components.

## Preview

### Cover

![Cover preview](demo/cover.png)

### Outline

![Outline preview](demo/outline.png)

### Content

![Content preview](demo/content.png)

## Format Summary

- Typography: Times New Roman for body text, titles, labels, and math-adjacent text.
- Main color: academic blue `#1E4B9E`; neutral support gray `#D9D9D9`.
- Header: full-width top bar split into blue left half and gray right half.
- Left header label: current section, normally supplied by `sectionHeader`, `sectionTitle`, or `section` frontmatter.
- Right header label: centered in the gray half, controlled by `--mbb-header-title`.
- Page number: bottom right, theme-blue. For stable meeting decks use explicit `pageNo` and `totalPages` frontmatter.
- References: compact bottom-left footer generated from page-local `refKeys` and `references.yml`.
- Citation marks: write `[@key]` in Markdown; the transformer renders blue superscript numeric markers.
- Outline: blue title-style list with diamond graphic markers.
- Selection pages: category headings plus normal Markdown list items with inline math.
- Figures: `mbb-figure-grid` layout plus `::figures::` slot, `cols`, and optional `gridClass`.
- Math: use inline `$...$` in Markdown. KaTeX is styled to inherit surrounding text size and color.
- Manual figure sizing: use the narrow `manual-img` hook only when a figure needs a one-off width.

## Recommended Markdown-Native Structure

The top-level `slides.md` should mostly import section files:

```md
---
theme: ./
title: My Academic Talk
aspectRatio: 16/9
transition: none
mdc: true
src: ./sections/00_cover.md
---

---
src: ./sections/01_outline.md
---
```

A section page can stay readable and mostly Markdown:

```md
---
layout: mbb-two-column
sectionHeader: Analysis strategy
pageNo: 4
totalPages: 8
refKeys:
  - demo_method
---

# Strategy formula page

::left::

## Native Markdown text and inline math

- Tagged yield: $N_{\mathrm{tag}}=N_0\mathcal B\varepsilon_{\mathrm{tag}}$.
- Measurement: $\sigma=N_{\mathrm{obs}}/(\mathcal L_{\mathrm{eff}}\varepsilon_{\mathrm{sel}})$.
- Citation marker: `[@demo_method]`. [@demo_method]

::right::

<img class="manual-img" src="/assets/example.svg" alt="Example" style="--img-w:88%;" />
```

## Layouts

- `mbb-cover`: title page; supports `leftLogo`, `rightLogo`, `authors`, `institutions`, and `date` frontmatter.
- `mbb-section`: section divider; use `sectionTitle` and `sectionSubtitle` frontmatter.
- `mbb-default`: standard one-column content page.
- `mbb-two-column`: use `::left::` and `::right::` slots.
- `mbb-selection`: grouped event-selection page with two columns.
- `mbb-figure-grid`: dense figure page; use `::figures::`, optional `::notes::`, and frontmatter fields `cols` and `gridClass`.
- `mbb-thanks`: final acknowledgement page.

Legacy aliases `cover`, `default`, `section`, and `two-cols` remain available for older decks, but new slides should prefer the `mbb-*` layouts.

## Citations

Page body:

```md
The method follows the standard treatment. [@demo_method]
```

Page frontmatter:

```yaml
refKeys:
  - demo_method
```

`references.yml`:

```yaml
demo_method:
  text: "Example Method Paper, Phys Rev D 102, 012345"
  href: "https://doi.org/10.1103/PhysRevD.102.012345"
```

## Manual Image Sizing

Use normal figure defaults whenever possible. For one-off manual sizing:

```html
<img
  class="manual-img"
  src="/assets/figure.svg"
  alt="Short descriptive alt text"
  style="--img-w:72%; --img-max-h:180px;"
/>
```

Supported variables are `--img-w`, `--img-max-w`, `--img-max-h`, and `--img-m`.

## Development

```bash
pnpm install
pnpm run dev
pnpm run export
```

The demo deck is `slides.md`. Slidev 52 requires Node.js 20 or newer. The export script uses the local Google Chrome application on macOS. To avoid downloading a bundled browser during setup, install with:

```bash
PLAYWRIGHT_SKIP_BROWSER_DOWNLOAD=1 pnpm install
```

## PDF QA

After export, verify that the PDF is not merely generated but visually correct:

```bash
pdfinfo slidev-academy-demo.pdf
pdftotext slidev-academy-demo.pdf - | rg -n 'Loading slide|Internal server error|Failed to fetch|slide-import-guard|TODO|MISSING|undefined|NaN'
pdftoppm -png -r 180 -f 1 -singlefile slidev-academy-demo.pdf /tmp/slidev_academy_cover
```

If a Mermaid or dynamic component exports as `Loading slide...`, replace it with a static Markdown/HTML/CSS diagram for the demo.
