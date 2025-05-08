---
layout: default
title: About
---
<!-- Theme Toggle UI -->

<div style="margin: 1.5em 0 2em 0; display: flex; align-items: center; gap: 0.5em;">
  <label for="theme-select" style="font-weight: bold;">Theme:</label>
  <select id="theme-select" onchange="setTheme(this.value)" style="padding: 0.2em 0.5em;">
    <option value="auto">Auto</option>
    <option value="light">Light</option>
    <option value="dark">Dark</option>
  </select>
  <span id="theme-status" style="font-size: 0.95em; color: #888;"></span>
</div>

<style>
body, .markdown-body {
  --bg: #fff;
  --fg: #222;
  --link: #007acc;
  --blockquote: #ff99cc;
  background: var(--bg);
  color: var(--fg);
  transition: background 0.2s, color 0.2s;
}
body.dark-mode, .markdown-body.dark-mode {
  --bg: #181a1b;
  --fg: #eee;
  --link: #80bfff;
  --blockquote: #ffb3de;
}
a { color: var(--link); }
blockquote {
  color: var(--blockquote);
  border-left: 4px solid var(--blockquote);
}
</style>

<script>
function setTheme(mode) {
  const root = document.body.classList;
  if (mode === 'dark') {
    root.add('dark-mode');
    localStorage.setItem('theme', 'dark');
    updateThemeStatus('Dark mode');
  } else if (mode === 'light') {
    root.remove('dark-mode');
    localStorage.setItem('theme', 'light');
    updateThemeStatus('Light mode');
  } else {
    localStorage.setItem('theme', 'auto');
    applyAutoTheme();
    updateThemeStatus('Auto (system)');
  }
}
function applyAutoTheme() {
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  document.body.classList.toggle('dark-mode', prefersDark);
}
function updateThemeStatus(text) {
  var el = document.getElementById('theme-status');
  if (el) el.textContent = text;
}
(function() {
  const select = document.getElementById('theme-select');
  const saved = localStorage.getItem('theme') || 'auto';
  if (select) select.value = saved;
  if (saved === 'dark') {
    document.body.classList.add('dark-mode');
    updateThemeStatus('Dark mode');
  } else if (saved === 'light') {
    document.body.classList.remove('dark-mode');
    updateThemeStatus('Light mode');
  } else {
    applyAutoTheme();
    updateThemeStatus('Auto (system)');
  }
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
    if ((localStorage.getItem('theme') || 'auto') === 'auto') applyAutoTheme();
  });
})();
</script>

# About Me

<blockquote style="text-align: center; font-size: 1.1em; color: var(--blockquote); border-left: 4px solid var(--blockquote); margin: 1.5em 0;">
  “A mind wired for patterns. A soul allergic to nonsense.”
</blockquote>

---

**Kristina P. Sinaga**
_Ph.D. in Applied Mathematics, Chung Yuan Christian University (CYCU), Taiwan_

---

I am a lifelong learner, researcher, and sarcastic observer of systems and chaos. My passion lies in crafting intelligent AI solutions that not only work—but make sense.

My journey is shaped by clarity, structure, and a strong sense of identity in everything I build. Whether it’s an algorithm or a sentence, I believe in getting things right with purpose. My work bridges theory and practice, is infused with wit, and wrapped in elegant logic.

---

## Specializations

- **Clustering**
- **Multi-view learning**
- **Federated learning**
- **Edge AI**

I focus on unpredictable, real-world settings where systems are truly tested. My approach blends theoretical rigor with hands-on experimentation to build scalable, intelligent solutions that hold up beyond the lab.

---

## Experience & Interests

- Designed algorithms for cyber-physical systems
- Examined robustness under noise and manipulation
- Explored machine learning in flawed human environments
- Founded **NeuralGlow.ai**: a satirical AI lab blending humor, critique, and product design to challenge hype culture and reimagine intelligent systems

---

When I’m not pushing boundaries in AI and clustering, I document absurd patterns in daily life—from machine noise to meta-satire. This page is my hub for sharing, reflecting, and exploring the intersection of technology, clarity, and carefully contained chaos.

---

## Opportunities

I am currently on the global job market for research-driven or applied roles—starting **October 2025**—with teams that value clarity, autonomy, and creative rigor.

> _If your work is serious about outcomes (and allergic to nonsense too), let’s talk._

---
