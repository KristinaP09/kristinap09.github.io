<!-- Google Fonts for modern typography -->
<link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&family=Inter:wght@400;600&display=swap" rel="stylesheet">

<!-- Hero Section -->
<section class="hero-section">
  <div class="hero-content">
    <img src="/assets/images/mobius_blog_spinning.png" alt="Mobius Blog Spinner" class="mobius-spin" style="width: 120px; margin: 0 auto 20px auto; display: block;" />
    <h1>Kristina's Blog</h1>
    <p class="hero-subtitle">Insights, satire, reflections, and notes from the fields of chaos and clarity.</p>
  </div>
</section>
<!--<img src="/assets/images/mobius_blog.png" alt="Mobius Blog Banner" style="width: 120px; float: right; margin: 20px;" />-->





<!-- Preserved Blinking Möbius SVG -->

<svg width="120" height="120" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" style="display: block; margin: 30px auto;">
  <title>Möbius: Engineered Logic, Sprinkled with Irony</title>
  <defs>
    <radialGradient id="mobiusGlow" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#ff99cc" />
      <stop offset="100%" stop-color="#1f1f2e" />
    </radialGradient>
  </defs>
  <g>
    <ellipse cx="50" cy="50" rx="35" ry="20" fill="url(#mobiusGlow)" stroke="#ff66a6" stroke-width="2">
      <animateTransform attributeName="transform" attributeType="XML" type="rotate" from="0 50 50" to="360 50 50" dur="12s" repeatCount="indefinite"/>
    </ellipse>
    <circle cx="65" cy="45" r="4" fill="#ff66a6">
      <animate attributeName="r" values="4;1;4" dur="3s" repeatCount="indefinite"/>
    </circle>
  </g>
</svg>


<!-- Floating Emojis (improved animation) -->
<div class="float-emoji" style="left: 10%; animation-delay: 0s;">👽</div>
<div class="float-emoji" style="left: 25%; animation-delay: 2s;">👽</div>
<div class="float-emoji" style="left: 40%; animation-delay: 4s;">👽</div>
<div class="float-emoji" style="left: 60%; animation-delay: 6s;">👽</div>
<div class="float-emoji" style="left: 80%; animation-delay: 8s;">👽</div>

<!-- Preserved Background Music Player -->

<audio id="background-music" loop>
  <source src="/assets/audio/clown-circus.mp3" type="audio/mpeg">
  Your browser does not support the audio element.
</audio>


<div class="music-controls">
  <button aria-label="Play background music" onclick="document.getElementById('background-music').play()">▶️ Play Marching Music</button>
  <button aria-label="Pause background music" onclick="document.getElementById('background-music').pause()">⏸️ Pause</button>
</div>

<script>
  // Preserved audio autoplay logic
  const audio = document.getElementById('background-music');
  const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
  if (!isMobile) {
    audio.autoplay = true;
    audio.load();
  } else {
    audio.pause();
  }
</script>


<main>
<section class="intro-section">
  <h2>Welcome to the Blog</h2>
  <p>Here you'll find insights, satire, reflections, and notes from the field — with a strong focus on patterns, psychology, and systems.</p>
</section>


<section class="work-philosophy">
  <h2>Value-Driven Work: Delivering Impact Beyond Hours</h2>
  <p>In today's evolving workplace, success is measured by outcomes, not time spent at a desk. I focus on creating tangible value through purposeful work and strategic thinking.</p>
  <blockquote>"It's not about being seen working—it's about delivering something worth seeing."</blockquote>
  <p>I don't subscribe to outdated models of productivity rooted in clock-ins, noise, and endless meetings. I believe in intentional, outcome-driven work guided by deep focus and systems thinking.</p>
  <div class="highlight">Real work happens when distractions are minimized, and purpose is clear. I strive to build meaningful solutions that align with long-term impact rather than short-term visibility.</div>
  <p>If you're someone who values sharp thinking over surface performance, results over rituals, and depth over noise—we're probably aligned.</p>
  <div class="audio-player">
    <p class="audio-title">Hear my thoughts on modern work culture:</p>
    <audio controls>
      <source src="/assets/audio/modern_work_culture.mp3" type="audio/mp3">
      Your browser does not support the audio element.
    </audio>
  </div>
  <h3>Core Principles</h3>
  <div class="principles-grid">
    <div class="principle-card">
      <div class="principle-icon"><i class="fas fa-bullseye" aria-hidden="true"></i></div>
      <h4>Outcome-Focused</h4>
      <p>I measure success by tangible results and impact, not by hours logged or tasks completed.</p>
    </div>
    <div class="principle-card">
      <div class="principle-icon"><i class="fas fa-brain" aria-hidden="true"></i></div>
      <h4>Deep Focus</h4>
      <p>Quality work requires uninterrupted concentration and deliberate thinking without constant distractions.</p>
    </div>
    <div class="principle-card">
      <div class="principle-icon"><i class="fas fa-sitemap" aria-hidden="true"></i></div>
      <h4>Systems Approach</h4>
      <p>I build scalable systems and frameworks rather than one-off solutions to create lasting value.</p>
    </div>
    <div class="principle-card">
      <div class="principle-icon"><i class="fas fa-lightbulb" aria-hidden="true"></i></div>
      <h4>Continuous Innovation</h4>
      <p>Staying ahead requires constant learning, adaptation, and willingness to challenge the status quo.</p>
    </div>
  </div>
</section>
</main>



---

## Featured Archive

Looking for something louder than words?
Explore the full **Clown Network Chronicles** — a live archive of chair-dragging opera, machine-humming mysteries, and unlicensed psychological experiments from above.


<div style="margin: 2em 0; text-align: center;">
  <a href="/clown-network/chronicles/" class="cta-button">
    <span class="clown-icon">🎪</span> Visit the Clown Network Chronicles →
  </a>
</div>

---

This collection blends data, sarcasm, and surreal observation into one central hub.
A must-read for lovers of noise, nuance, and nonsense.

<!-- Dark Mode Toggle -->


<div class="dark-toggle">
  <button aria-label="Toggle dark mode" onclick="toggleDarkMode()">🌓 Toggle Dark Mode</button>
</div>

<script>
  function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
    localStorage.setItem('theme', document.body.classList.contains('dark-mode') ? 'dark' : 'light');
    // Ensure animations continue working in dark mode
    const mobiusSpin = document.querySelector('.mobius-spin');
    if (mobiusSpin) {
      mobiusSpin.style.animation = 'none';
      setTimeout(() => {
        mobiusSpin.style.animation = 'spin 5s linear infinite';
      }, 10);
    }
  }
  window.onload = () => {
    if (localStorage.getItem('theme') === 'dark') {
      document.body.classList.add('dark-mode');
    }
    // Add Font Awesome for icons if not already present
    if (!document.querySelector('link[href*="font-awesome"]')) {
      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css';
      document.head.appendChild(link);
    }
  }
</script>

<style>
  html { scroll-behavior: smooth; }
  body {
    background-size: cover;
    position: relative;
    overflow-x: hidden;
    font-family: 'Inter', 'Montserrat', Arial, sans-serif;
    color: var(--text-color);
    line-height: 1.7;
    font-size: 1.08em;
    background-color: #fdf9f9;
    margin: 0;
  }
  .hero-section {
    background: linear-gradient(90deg, #ffe6f0 0%, #fcf6ff 100%);
    padding: 3.5em 0 2em 0;
    text-align: center;
    border-radius: 0 0 32px 32px;
    box-shadow: 0 2px 16px rgba(179,0,89,0.07);
    margin-bottom: 2em;
  }
  .hero-content h1 {
    font-family: 'Montserrat', sans-serif;
    font-size: 2.8em;
    margin-bottom: 0.2em;
    color: #b30059;
    letter-spacing: 0.01em;
  }
  .hero-subtitle {
    font-style: italic;
    color: #ff99cc;
    font-size: 1.25em;
    margin-bottom: 0;
  }
  .intro-section {
    max-width: 700px;
    margin: 0 auto 2em auto;
    padding: 0 1em;
  }
  .work-philosophy {
    background-color: var(--light-bg);
    border-radius: 12px;
    padding: 2.2rem 2rem;
    margin: 2rem auto;
    box-shadow: 0 4px 16px rgba(0,0,0,0.08);
    max-width: 800px;
  }
  .work-philosophy h2 {
    color: var(--primary-color);
    font-family: 'Montserrat', sans-serif;
    font-weight: 700;
    font-size: 2em;
    margin-bottom: 0.5em;
  }
  .work-philosophy blockquote {
    font-style: italic;
    border-left: 4px solid var(--primary-color);
    padding: 1rem 2rem;
    margin: 2rem 0;
    background-color: white;
    position: relative;
    font-size: 1.2rem;
    color: var(--primary-color);
    border-radius: 8px;
  }
  .highlight {
    background-color: var(--primary-light);
    padding: 1rem;
    display: block;
    margin: 1.5rem 0;
    border-left: 4px solid var(--primary-color);
    border-radius: 8px;
    font-size: 1.08em;
  }
  .principles-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
    gap: 2rem;
    margin-top: 2rem;
  }
  .principle-card {
    background-color: white;
    border-radius: 10px;
    padding: 1.5rem 1.2rem;
    box-shadow: 0 4px 12px rgba(0,0,0,0.09);
    transition: transform 0.3s, box-shadow 0.3s;
    text-align: center;
  }
  .principle-card:hover {
    transform: translateY(-7px) scale(1.03);
    box-shadow: 0 8px 24px rgba(0,0,0,0.13);
  }
  .principle-icon {
    font-size: 2.2rem;
    color: var(--primary-color);
    margin-bottom: 1rem;
  }
  .cta-button {
    background-color: #fc8eac;
    color: white;
    padding: 0.9em 1.7em;
    border-radius: 8px;
    text-decoration: none;
    font-weight: bold;
    display: inline-block;
    box-shadow: 2px 2px 8px rgba(0,0,0,0.08);
    font-size: 1.15em;
    transition: transform 0.2s, background 0.2s;
    border: none;
    cursor: pointer;
  }
  .cta-button:hover {
    transform: scale(1.06);
    background: linear-gradient(90deg, #b30059 0%, #fc8eac 100%);
  }
  .cta-button .clown-icon {
    display: inline-block;
    transition: transform 0.6s;
  }
  .cta-button:hover .clown-icon {
    transform: rotate(360deg);
  }
  .float-emoji {
    position: absolute;
    animation: float 14s linear infinite, glitch 1.2s infinite;
    font-size: 2em;
    opacity: 0.32;
    pointer-events: none;
    z-index: 1;
  }
  @keyframes float {
    0% { transform: translateY(100vh) translateX(0); }
    100% { transform: translateY(-200vh) translateX(100px); }
  }
  @keyframes glitch {
    0% { text-shadow: 2px 2px red; }
    20% { text-shadow: -2px -2px blue; }
    40% { text-shadow: 2px -2px green; }
    60% { text-shadow: -2px 2px yellow; }
    80% { text-shadow: 2px 2px purple; }
    100% { text-shadow: -2px -2px orange; }
  }
  .music-controls {
    position: fixed;
    bottom: 16px;
    right: 16px;
    z-index: 9999;
    display: flex;
    gap: 6px;
  }
  .music-controls button {
    margin: 2px;
    padding: 0.5em 1em;
    font-size: 0.95em;
    color: white;
    border: none;
    border-radius: 6px;
    cursor: pointer;
    background-color: #b30059;
    transition: background 0.2s;
  }
  .music-controls button:first-child { background-color: #005a87; }
  .music-controls button:hover { opacity: 0.93; }
  .audio-player {
    margin: 2rem 0 1rem 0;
    padding: 1rem;
    background-color: rgba(255,255,255,0.13);
    border-radius: 8px;
    max-width: 500px;
    margin-left: auto;
    margin-right: auto;
  }
  .audio-player audio { width: 100%; }
  .audio-title { font-weight: bold; margin-bottom: 0.5rem; color: var(--primary-color); }
  .dark-toggle { text-align: center; margin-top: 3rem; }
  .dark-toggle button {
    background-color: #333344;
    color: #f0f0f0;
    border: none;
    padding: 0.6rem 1.2rem;
    border-radius: 8px;
    cursor: pointer;
    font-size: 1.1em;
    transition: background 0.2s;
  }
  .dark-toggle button:hover { background-color: #444455; }
  /* Dark mode styling */
  .dark-mode { background-color: #1f1f2e; color: #f0f0f0; }
  .dark-mode .work-philosophy { background-color: #2a2a3a; }
  .dark-mode .principle-card { background-color: #333344; color: #f0f0f0; }
  .dark-mode .highlight { background-color: rgba(179, 0, 89, 0.2); }
  .dark-mode .cta-button { background-color: #b30059; }
  .dark-mode a { color: #ff99cc; }
  .dark-mode .hero-section { background: linear-gradient(90deg, #2a2a3a 0%, #1f1f2e 100%); }
  .dark-mode .audio-player { background-color: rgba(51,51,68,0.18); }
  .dark-mode .music-controls button { background-color: #b30059; }
  .dark-mode .music-controls button:first-child { background-color: #005a87; }
  .dark-mode .mobius-spin { filter: brightness(1.2) hue-rotate(30deg); }
  .dark-mode svg ellipse { stroke: #ff99cc; }
  .dark-mode svg circle { fill: #ff99cc; }
  /* Responsive design */
  @media (max-width: 700px) {
    .hero-content h1 { font-size: 2em; }
    .work-philosophy { padding: 1.2rem 0.5rem; }
    .principles-grid { grid-template-columns: 1fr; }
    .music-controls { right: 8px; bottom: 8px; }
  }
  @media (max-width: 500px) {
    .hero-section { padding: 2em 0 1em 0; }
    .audio-player { padding: 0.5rem; }
  }
  :root {
    --primary-color: #b30059;
    --primary-light: #ffe6f0;
    --secondary-color: #005a87;
    --text-color: #333;
    --light-bg: #fdf9f9;
  }
  /* Mobius Spinner Animation */
  @keyframes spin {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }
  .mobius-spin {
    animation: spin 5s linear infinite;
    display: block;
    margin: 0 auto;
  }
</style>
