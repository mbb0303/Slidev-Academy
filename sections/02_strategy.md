---
layout: mbb-section
sectionTitle: Motivation and strategy
sectionSubtitle: Native Markdown content with layout-level control
sectionHeader: Strategy
pageNo: 3
totalPages: 8
---

---
layout: mbb-two-column
sectionHeader: Strategy
pageNo: 4
totalPages: 8
refKeys:
  - demo_method
---

# Strategy formula page

::left::

## Native Markdown text and inline math

- Tagged yield: $N_{\mathrm{tag}}=N_0\,\mathcal B\,\varepsilon_{\mathrm{tag}}$.
- Selected events: $N_{\mathrm{obs}}=\sigma\,\mathcal L_{\mathrm{eff}}\,\varepsilon_{\mathrm{sel}}$.
- Measurement: $\sigma=N_{\mathrm{obs}}/(\mathcal L_{\mathrm{eff}}\varepsilon_{\mathrm{sel}})$.
- A citation marker can be placed directly after the cited statement. [@demo_method]

::right::

<img
  class="manual-img"
  src="/assets/demo_detector_schematic.svg"
  alt="Schematic detector and tagged flux"
  style="--img-w:88%; --img-max-h:215px;"
/>

## Why this page matters

- The slide source stays readable.
- The figure size is controlled only through `--img-w`.
- The layout and page number come from `layout:` frontmatter.
