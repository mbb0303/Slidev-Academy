---
theme: ./
title: Slidev Academy Theme Demo
layout: cover
transition: none
mdc: true
hideSectionHeader: true
---

<div class="cover-logos">
  <div class="placeholder-logo">USTC</div>
  <div class="placeholder-logo bes">BESIII</div>
</div>

<div class="cover-title">Study of charge exchange process <InlineMath tex="\bar n\,n\to\bar p\,p" /> at BESIII</div>

<p class="authors">Jiajun Tang, Mingbo Bai and collaborators</p>
<p class="institutions">University of Science and Technology of China<br/>BESIII Collaboration</p>
<p class="cover-date">June 2026</p>

---
layout: default
---

# Outline

<ul class="outline-list">
  <li>Motivation and physics context</li>
  <li>Tagged antineutron sample</li>
  <li>Interaction MC and data distributions</li>
  <li>Cross-section measurement</li>
</ul>

---
layout: section
section: Tagged antineutron sample
---

<div class="section-block">Tagged antineutron sample</div>
<div class="section-subtitle">Selection, source modeling, and background control</div>

---
layout: default
---

# Selection Criteria

<div class="selection-grid">
  <div class="selection-groups">
    <div class="selection-group">
      <div class="selection-heading">Charged tracks for initial <InlineMath tex="p\pi^-" /></div>
      <ul class="condition-list">
        <li><InlineMath tex="N_c\ge2" /></li>
        <li><InlineMath tex="|\cos\theta|<0.93" /></li>
        <li><InlineMath tex="V_r<0.5~\mathrm{cm},\ |V_z|<5~\mathrm{cm}" /></li>
      </ul>
    </div>
    <div class="selection-group">
      <div class="selection-heading">PID using TOF and <InlineMath tex="dE/dx" /></div>
      <ul class="condition-list">
        <li><InlineMath tex="P_{\mathrm{PID}}>10^{-3}" /></li>
        <li><InlineMath tex="P_{\mathrm{selected}}=\max(P_\pi,P_K,P_p)" /></li>
      </ul>
    </div>
    <div class="selection-group">
      <div class="selection-heading">Signal region</div>
      <ul class="condition-list">
        <li><InlineMath tex="0.92<M_{\mathrm{recoil}}(p\pi^-)<0.96~\mathrm{GeV}/c^2" /></li>
      </ul>
    </div>
  </div>
  <div class="fig-grid cols-1">
    <div class="figure-placeholder">Figure placeholder</div>
  </div>
</div>

---
layout: two-cols
section: Cross-section measurement
---

# Columns, Citations, and Figures

<div class="columns">
  <div>
    <h3>Analysis relation</h3>
    <div class="equation-stack">
      <p class="equation-line"><InlineMath tex="\sigma_{\bar n n\to\bar p p}=N_{\mathrm{obs}}/(\mathcal{L}_{\bar n}\varepsilon)" /></p>
      <p class="equation-line"><InlineMath tex="\varepsilon=\varepsilon_{\mathrm{tag}}\varepsilon_{\mathrm{int}}" /></p>
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
