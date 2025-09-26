---
layout: default
title: About
---
<!-- Theme Toggle UI -->

<div class="theme-container">
  <label for="theme-select">Theme:</label>
  <select id="theme-select" onchange="setTheme(this.value)">
    <option value="auto">Auto</option>
    <option value="light">Light</option>
    <option value="dark">Dark</option>
  </select>
  <span id="theme-status"></span>
</div>

<style>
body, .markdown-body {
  --bg: #fff;
  --fg: #222;
  --link: #007acc;
  --blockquote: #ff99cc;
  --accent: #6c5ce7;
  --muted: #888;
  --border: #e1e4e8;
  --section-spacing: 2rem;
  background: var(--bg);
  color: var(--fg);
  transition: background 0.2s, color 0.2s;
  line-height: 1.6;
}

body.dark-mode, .markdown-body.dark-mode {
  --bg: #181a1b;
  --fg: #eee;
  --link: #80bfff;
  --blockquote: #ffb3de;
  --accent: #a29bfe;
  --muted: #aaa;
  --border: #383838;
}

a { 
  color: var(--link); 
  text-decoration: none;
  border-bottom: 1px dotted;
  transition: all 0.2s ease;
}

a:hover {
  opacity: 0.8;
}

blockquote {
  color: var(--blockquote);
  border-left: 4px solid var(--blockquote);
  padding-left: 1rem;
  font-style: italic;
}

hr {
  border: 0;
  border-top: 1px solid var(--border);
  margin: var(--section-spacing) 0;
}

.theme-container {
  margin: 1.5em 0 2em 0; 
  display: flex; 
  align-items: center; 
  gap: 0.8em;
  padding: 0.8rem;
  background: rgba(0,0,0,0.03);
  border-radius: 6px;
}

body.dark-mode .theme-container {
  background: rgba(255,255,255,0.05);
}

.theme-container label {
  font-weight: bold;
}

.theme-container select {
  padding: 0.3em 0.8em;
  border-radius: 4px;
  border: 1px solid var(--border);
  background: var(--bg);
  color: var(--fg);
}

#theme-status {
  font-size: 0.9em;
  color: var(--muted);
}

.profile-container {
  display: flex;
  align-items: center;
  gap: 2rem;
  margin-bottom: var(--section-spacing);
}

.profile-image {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  object-fit: cover;
  border: 3px solid var(--accent);
}

.profile-info h1 {
  margin-top: 0;
  margin-bottom: 0.5rem;
}

.profile-title {
  color: var(--muted);
  font-size: 1.1rem;
  margin-bottom: 1rem;
}

.badge-container {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin: var(--section-spacing) 0;
}

.badge {
  background: var(--accent);
  color: white;
  padding: 0.4rem 1rem;
  border-radius: 20px;
  font-size: 0.9rem;
  display: inline-block;
}

.card-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  margin: var(--section-spacing) 0;
}

.card {
  border: 1px solid var(--border);
  border-radius: 8px;
  padding: 1.5rem;
  transition: all 0.2s ease;
}

.card:hover {
  box-shadow: 0 5px 15px rgba(0,0,0,0.1);
  transform: translateY(-3px);
}

body.dark-mode .card:hover {
  box-shadow: 0 5px 15px rgba(0,0,0,0.3);
}

.card h3 {
  margin-top: 0;
  color: var(--accent);
}

.highlight-box {
  background: rgba(108, 92, 231, 0.1);
  border-left: 4px solid var(--accent);
  padding: 1.5rem;
  margin: var(--section-spacing) 0;
  border-radius: 0 8px 8px 0;
}

body.dark-mode .highlight-box {
  background: rgba(162, 155, 254, 0.1);
}

.social-links {
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
}

.social-link {
  color: var(--accent);
  border: none;
  font-weight: bold;
}

.cta-button {
  display: inline-block;
  background: var(--accent);
  color: white;
  padding: 0.8rem 1.5rem;
  border-radius: 4px;
  font-weight: bold;
  border: none;
  margin-top: 1rem;
  transition: all 0.2s ease;
}

.cta-button:hover {
  opacity: 0.9;
  transform: translateY(-2px);
}

.publication-list {
  margin: 2rem 0;
}

.publication-item {
  display: flex;
  margin-bottom: 1.5rem;
  padding-bottom: 1.5rem;
  border-bottom: 1px solid var(--border);
}

.pub-year {
  font-weight: bold;
  min-width: 60px;
  color: var(--accent);
  font-size: 1.1rem;
  padding-top: 0.2rem;
}

.pub-details {
  flex: 1;
}

.pub-title {
  font-weight: bold;
  margin: 0 0 0.3rem 0;
}

.pub-authors {
  margin: 0 0 0.3rem 0;
}

.pub-journal {
  margin: 0 0 0.5rem 0;
}

.pub-links {
  display: flex;
  gap: 10px;
}

.pub-links a {
  display: inline-flex;
  align-items: center;
  padding: 4px 12px;
  border-radius: 4px;
  font-size: 0.8rem;
  font-weight: bold;
  border: none;
  text-transform: uppercase;
}

.journal-link {
  background-color: var(--accent);
  color: white !important;
}

.code-link {
  background-color: #333;
  color: white !important;
}

body.dark-mode .code-link {
  background-color: #555;
}

.doi-link {
  background-color: #e67e22;
  color: white !important;
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

<div class="profile-container">
  <img src="assets/images/D54E7F4C-4D1E-42E3-980E-57C5C533A829.png" alt="Kristina P. Sinaga" class="profile-image">
  <div class="profile-info">
    <h1>Kristina P. Sinaga</h1>
    <div class="profile-title">Ph.D. in Applied Mathematics, Chung Yuan Christian University (CYCU), Taiwan</div>
    <div class="social-links">
      <a href="https://github.com/KristinaP09" class="social-link">GitHub</a>
      <a href="www.linkedin.com/in/kristina-p-sinaga-0ba152309" class="social-link">LinkedIn</a>
      <a href="https://medium.com/@kristinapestaria.sinaga" class="social-link">Medium</a>
      <a href="https://scholar.google.com/citations?view_op=list_works&hl=it&hl=it&user=XoJ7EkoAAAAJ" class="social-link">Google Scholar</a>
    </div>
  </div>
</div>

<blockquote class="quote">
  "A mind wired for patterns. A soul allergic to nonsense."
</blockquote>

## About Me

As a dedicated researcher and innovator, I approach complex systems with a blend of analytical rigor and creative insight. My work focuses on designing intelligent, efficient, and intuitive AI solutions that bridge theoretical foundations with practical applications. With a commitment to clarity, structure, and precision, I ensure that every project—whether an algorithm or a research paper—reflects a cohesive and impactful narrative.

I am currently a researcher at the Istituto di Scienza e Tecnologie dell’Informazione, Italian National Research Council, where I develop cutting-edge algorithms for complex clustering challenges in data science. My expertise spans applied mathematics, machine learning, and federated learning, with a track record of delivering solutions that advance both academic inquiry and industry innovation.

My contract concludes on September 30, 2025, and I will be relocating from Pisa on September 29. I am actively seeking opportunities as a researcher, associate professor, or data scientist in data science, applied mathematics, machine learning, or federated learning. I am open to global opportunities and eager to contribute to impactful projects. Please feel free to contact me to discuss potential collaborations.

<div class="highlight-box">
  <h3>Research Interests</h3>
  <p>
    My research focuses on developing innovative algorithms for complex systems, with a particular emphasis on multi-view clustering, heat-kernel methods, and fuzzy clustering approaches in both centralized and decentralized environments. These methods are designed to deliver robust performance in unpredictable, real-world settings characterized by heterogeneous data sources. For example, in applications like autonomous systems or smart healthcare, where data varies widely in format and quality, my algorithms ensure reliable outcomes despite inherent uncertainties.</p>
</div>

## Specializations

<div class="badge-container">
  <span class="badge">Clustering Algorithms</span>
  <span class="badge">Supervised learning</span>
  <span class="badge">Deep learning</span>
  <span class="badge">Multi-view learning</span>
  <span class="badge">Fuzzy C-Means</span>
  <span class="badge">Heat-Kernel Methods</span>
  <span class="badge">Federated learning</span>
  <span class="badge">Edge AI</span>
</div>

I focus on unpredictable, real-world settings where systems are truly tested. My approach blends theoretical rigor with hands-on experimentation to build scalable, intelligent solutions that hold up beyond the lab. My work with heat-kernel coefficients has led to novel clustering algorithms that outperform traditional methods on heterogeneous data.

## Experience & Projects

<div class="card-container">
  <div class="card">
    <h3>Algorithm Design</h3>
    <p>The core of my work lies in creating scalable solutions that bridge theoretical rigor with practical utility. Over the past eight years, I have specialized in unsupervised learning, developing clustering algorithms that outperform traditional methods when handling diverse, multi-source data. This expertise provides a strong foundation for my current exploration into hybrid models that integrate unsupervised, supervised, and deep learning techniques. This transition represents a paradigm shift, leveraging the strengths of deep learning to enhance efficiency and accuracy in complex data environments, such as real-time analytics in IoT systems or personalized recommendation engines.</p>
  </div>
  <div class="card">
    <h3>Robustness Research</h3>
    <p>A key aspect of this research involves adapting to modern computational tools. Transitioning from MATLAB to Python has been a significant evolution in my workflow, enabling greater flexibility and access to advanced libraries like TensorFlow and PyTorch. This shift is straightforward yet impactful: it begins with formulating core functions and progresses to leveraging Python’s extensive ecosystem of libraries, streamlining algorithm development and deployment. For instance, Python’s versatility supports rapid prototyping for industry applications while maintaining the precision required for academic research.
This research has broad implications. For academia, it advances the theoretical understanding of clustering and learning paradigms. For industry, it offers practical, scalable solutions for data-driven decision-making in dynamic environments. For the general public, it paves the way for smarter, more reliable technologies that adapt to real-world complexities, from improved medical diagnostics to enhanced user experiences in digital platforms.</p>
  </div>
  <div class="card">
    <h3>NeuralGlow.ai</h3>
    <p>Founded a satirical AI lab blending humor, critique, and product design to challenge hype culture and reimagine intelligent systems.</p>
  </div>
</div>

## Recent Publications

<div style="text-align: center; margin-bottom: 2rem; padding: 1rem; background: rgba(255, 153, 204, 0.1); border-radius: 8px;">
  <p style="margin: 0; font-size: 1.1em;">
    <i class="fas fa-book"></i> Browse my <a href="https://kristinap09.github.io/publications.html" style="color: #ff99cc; font-weight: bold; border-bottom: 1px dotted;">complete publication list</a> with full citations and impact metrics
  </p>
</div>

<div class="publication-list">

<div class="publication-item">
    <span class="pub-year">2025</span>
    <div class="pub-details">
      <p class="pub-title">Personalized Federated Learning with Heat-Kernel Enhanced Tensorized Multi-View Clustering</p>
      <p class="pub-authors">Sinaga, K.P.</p>
      <p class="pub-journal"><em>arXiv</em></p>
      <div class="pub-links">
        <a href="https://arxiv.org/abs/2509.16101" target="_blank" class="journal-link">Preprint</a>
      </div>
    </div>
    <span class="pub-year">2024</span>
    <div class="pub-details">
      <p class="pub-title">Federated Multi-View K-Means Clustering</p>
      <p class="pub-authors">Yang, M.S., Sinaga, K.P.</p>
      <p class="pub-journal"><em>IEEE Transactions on Pattern Analysis and Machine Intelligence</em></p>
      <div class="pub-links">
        <a href="https://ieeexplore.ieee.org/abstract/document/10810504" target="_blank" class="journal-link">Journal</a>
        <a href="https://github.com/KristinaP09/Fed-MVKM" target="_blank" class="code-link">Code</a>
      </div>
    </div>
  </div>

</div>

## Opportunities

<div class="highlight-box">
  <h3>Open to New Roles</h3>
  <p>I am currently on the global job market for research-driven or applied roles—starting <strong>October 2025</strong>—with teams that value clarity, autonomy, and creative rigor.</p>
  <p><em>If your work is serious about outcomes (and allergic to nonsense too), let's talk.</em></p>
  <a href="mailto:ndkristinaps25@gmail.com" class="cta-button">Get in Touch</a>
</div>

## Contact

Feel free to reach out if you're interested in collaboration, research opportunities, or just want to discuss interesting problems in AI and mathematics.

- Email: ndkristinaps25@gmail.com
- Previous Affiliation: ISTI-CNR, Italy

---

<p style="text-align: center; color: var(--muted); font-size: 0.9em;">
© 2025 Kristina P. Sinaga | Last updated: September 2025
</p>
