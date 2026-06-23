---
theme: ./
title: Slidev Academy Theme Demo
layout: cover
transition: none
mdc: true
hideSectionHeader: true
---

<style>
:root {
  --mbb-header-title: "Academy Theme Demo";
}
</style>

<div class="cover-logos">
  <div class="placeholder-logo">LAB</div>
  <div class="placeholder-logo bes">EXP</div>
</div>

<div class="cover-title-card-wrap">
  <RenderWhen context="print">
    <span class="cover-title-card-export-shadow cover-title-card-export-shadow-bottom"></span>
    <span class="cover-title-card-export-shadow cover-title-card-export-shadow-right"></span>
    <div class="cover-title-card cover-title-card-print">
      <div class="cover-title">Precision study of benchmark process <InlineMath tex="a+b\to c+d" /></div>
      <div class="subtitle">at ExampleLab</div>
    </div>
    <template #fallback>
      <div class="cover-title-card cover-title-card-screen">
        <div class="cover-title">Precision study of benchmark process <InlineMath tex="a+b\to c+d" /></div>
        <div class="subtitle">at ExampleLab</div>
      </div>
    </template>
  </RenderWhen>
</div>

<p class="authors">Alex Rivera and Jordan Lee</p>
<p class="institutions">Example Institute for Fundamental Science<br/>Open Collaboration for Demonstration Studies</p>
<p class="cover-date">July 2026</p>

---
layout: default
---

# Outline

<ul class="outline-list">
  <li>Motivation and context</li>
  <li>Samples and event selection</li>
  <li>Simulation and validation</li>
  <li>Layout patterns and figures</li>
  <li>Measurement strategy</li>
</ul>

---
layout: section
section: Samples and event selection
---

<div class="section-block">Samples and event selection</div>
<div class="section-subtitle">Grouped criteria, representative figures, and compact formulas</div>

---
layout: default
---

# Selection Criteria

<div class="selection-grid">
  <div class="selection-groups">
    <div class="selection-group">
      <div class="selection-heading">Charged tracks for candidate <InlineMath tex="x_1x_2" /></div>
      <ul class="condition-list">
        <li><InlineMath tex="N_c\ge2" /></li>
        <li><InlineMath tex="|\cos\theta|<0.93" /></li>
        <li><InlineMath tex="V_r<0.5~\mathrm{cm},\ |V_z|<5~\mathrm{cm}" /></li>
      </ul>
    </div>
    <div class="selection-group">
      <div class="selection-heading">Particle identification using TOF and <InlineMath tex="dE/dx" /></div>
      <ul class="condition-list">
        <li><InlineMath tex="P_{\mathrm{PID}}>10^{-3}" /></li>
        <li><InlineMath tex="P_{\mathrm{selected}}=\max(P_a,P_b,P_c)" /></li>
      </ul>
    </div>
    <div class="selection-group">
      <div class="selection-heading">Signal region</div>
      <ul class="condition-list">
        <li><InlineMath tex="0.92<M_{\mathrm{recoil}}(x_1x_2)<0.96~\mathrm{GeV}/c^2" /></li>
      </ul>
    </div>
  </div>
  <div class="fig-grid cols-1">
    <div class="figure-placeholder">Figure placeholder</div>
  </div>
</div>

---
layout: two-cols
section: Measurement strategy
---

# Columns, Citations, and Figures

<div class="columns">
  <div>
    <h3>Analysis relation</h3>
    <div class="equation-stack">
      <p class="equation-line"><InlineMath tex="\sigma=N_{\mathrm{obs}}/(\mathcal{L}_{\mathrm{eff}}\varepsilon)" /></p>
      <p class="equation-line"><InlineMath tex="\varepsilon=\varepsilon_{\mathrm{sel}}\varepsilon_{\mathrm{rec}}" /></p>
    </div>
    <ul class="bullets">
      <li>Use short, scan-friendly bullets.<sup class="cite">[1]</sup></li>
      <li>Keep formulas inline with the surrounding style.</li>
    </ul>
  </div>
  <div class="fig-grid cols-2">
    <div class="figure-placeholder">Plot A</div>
    <div class="figure-placeholder">Plot B</div>
  </div>
</div>

<div class="refs">[1] Example reference, journal-style footer citation.</div>

---
layout: default
section: Layout patterns and figures
---

# Single-Column Figure Page

<div class="slide-body layout-single-column">
  <div class="fig-grid cols-3">
    <div class="figure-placeholder">Distribution A</div>
    <div class="figure-placeholder">Distribution B</div>
    <div class="figure-placeholder">Distribution C</div>
  </div>
  <ul class="bullets">
    <li>Use this pattern when figures should be centered and the slide has only short notes.</li>
    <li>Formulas remain inline, for example <InlineMath tex="\Delta=\sqrt{s}-m_0" />.</li>
  </ul>
</div>

---
layout: default
section: Layout patterns and figures
---

# Two-Row Distribution Page

<div class="slide-body layout-two-row">
  <div class="fig-grid cols-4">
    <div class="figure-placeholder">Plot 1</div>
    <div class="figure-placeholder">Plot 2</div>
    <div class="figure-placeholder">Plot 3</div>
    <div class="figure-placeholder">Plot 4</div>
    <div class="figure-placeholder">Plot 5</div>
    <div class="figure-placeholder">Plot 6</div>
    <div class="figure-placeholder">Plot 7</div>
    <div class="figure-placeholder">Plot 8</div>
  </div>
</div>
