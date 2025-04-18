---
layout: page
title: Blog
permalink: /blog/
---

<style>
  html {
    scroll-behavior: smooth;
  }

  body {
    background: linear-gradient(to bottom, rgba(20, 20, 20, 0.6), rgba(0, 0, 0, 0.7)), url('/assets/images/95faf3bfc267a9548cc775ef2a30d4a0.jpg') no-repeat center center fixed;
    background-size: cover;
    position: relative;
    overflow-x: hidden;
  }

  .cta-button {
    background-color: #b30059;
    color: white;
    padding: 0.8em 1.5em;
    border-radius: 6px;
    text-decoration: none;
    font-weight: bold;
    display: inline-block;
    box-shadow: 2px 2px 4px rgba(0,0,0,0.1);
    font-size: 1.1em;
    transition: transform 0.2s ease-in-out;
  }

  .cta-button:hover {
    transform: scale(1.05);
  }

  .cta-button .clown-icon {
    display: inline-block;
    transition: transform 0.6s ease-in-out;
  }

  .cta-button:hover .clown-icon {
    transform: rotate(360deg);
  }

  .float-emoji {
    position: absolute;
    animation: float 12s linear infinite, glitch 1s infinite;
    font-size: 1.8em;
    opacity: 0.35;
    pointer-events: none;
  }

  @keyframes float {
    0%   { transform: translateY(100vh) translateX(0); }
    100% { transform: translateY(-200vh) translateX(100px); }
  }

  @keyframes glitch {
    0%   { text-shadow: 2px 2px red; }
    20%  { text-shadow: -2px -2px blue; }
    40%  { text-shadow: 2px -2px green; }
    60%  { text-shadow: -2px 2px yellow; }
    80%  { text-shadow: 2px 2px purple; }
    100% { text-shadow: -2px -2px orange; }
  }

  footer {
    margin-top: 4em;
    padding: 1.5em 0;
    border-top: 1px solid #ddd;
    color: #eee;
    text-align: center;
    font-size: 0.9em;
  }

  .music-controls {
    position: fixed;
    bottom: 12px;
    right: 12px;
    z-index: 9999;
  }

  .music-controls button {
    margin: 2px;
    padding: 0.4em 0.8em;
    font-size: 0.85em;
    background: #b30059;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
</style>

<!-- Floating clown emojis with glitch -->
<div class="float-emoji" style="left: 10%;">🎪</div>
<div class="float-emoji" style="left: 25%;">🎪</div>
<div class="float-emoji" style="left: 40%;">🎪</div>
<div class="float-emoji" style="left: 60%;">🎪</div>
<div class="float-emoji" style="left: 80%;">🎪</div>

<!-- Background Music Audio Player -->
<audio id="background-music" loop>
  <source src="/assets/audio/clown-circus.mp3" type="audio/mpeg">
  Your browser does not support the audio element.
</audio>

<div class="music-controls">
  <button onclick="document.getElementById('background-music').play()">▶️ Play</button>
  <button onclick="document.getElementById('background-music').pause()">⏸️ Pause</button>
</div>

<script>
  const audio = document.getElementById('background-music');
  const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

  if (!isMobile) {
    audio.autoplay = true;
    audio.load();
  } else {
    audio.pause();
  }
</script>

# Blog

Welcome to the blog section. Here you’ll find insights, satire, reflections, and notes from the field — with a strong focus on patterns, psychology, and systems.

---

## Featured Archive

Looking for something louder than words?  
Explore the full **Clown Network Chronicles** — a live archive of chair-dragging opera, machine-humming mysteries, and unlicensed psychological experiments from above.

<div style="margin: 2em 0;">
  <a href="/clown-network/chronicles/" class="cta-button">
    <span class="clown-icon">🎪</span> Visit the Clown Network Chronicles →
  </a>
</div>

---

This collection blends data, sarcasm, and surreal observation into one central hub.  
A must-read for lovers of noise, nuance, and nonsense.

<footer>
  &copy; 2025 KristinaP09 &mdash; Powered by quiet frustration and accidental brilliance.
</footer>
