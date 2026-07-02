---
layout: mbb-default
sectionHeader: References
pageNo: 7
totalPages: 8
refKeys:
  - demo_method
  - demo_detector
---

# Page-local citations and tables

The body keeps numeric citation marks, while the footer is generated from `refKeys`. [@demo_method,@demo_detector]

| item | Markdown-native source | Rendered behavior |
|---|---|---|
| Formula | `$\varepsilon=N_{\mathrm{sel}}/N_{\mathrm{gen}}$` | inline KaTeX inherits text style |
| Citation | `@demo_method` in `refKeys` | blue superscript marker |
| Figure | `manual-img` with `--img-w` | controlled local sizing |

- Keep reference entries in `references.yml`.
- Do not hard-code full reference text in the slide body unless the user asks for it.
