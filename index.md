---
layout: default
title: Kristina
---
<!-- mobile-friendly scripts (meta tag and styles)-->

<meta name="viewport" content="width=device-width, initial-scale=1.0">
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;700&display=swap">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css">

<style>
  body {
    font-family: 'Inter', sans-serif;
    margin: 0;
    padding: 0;
    line-height: 1.6;
    color: #333;
    background-color: #fdfdfd;
  }

  .container {
    max-width: 1100px;
    margin: 0 auto;
    padding: 0 20px;
  }

  .header {
    text-align: center;
    padding: 60px 0 30px;
    background: linear-gradient(135deg, #ff66a6, #ff99cc);
    color: white;
    border-bottom: 5px solid #fff;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  }

  .header h1 {
    font-size: 2.8em;
    margin: 0 0 10px;
    text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.3);
  }

  .header p {
    margin: 10px 0;
  }

  .tagline {
    font-style: italic;
    font-size: 1.3em;
    color: #fff;
    margin-bottom: 5px;
  }

  .subtitle {
    font-size: 1.1em;
    opacity: 0.9;
  }

  section {
    padding: 40px 0;
    border-bottom: 1px solid #f0f0f0;
  }

  section:last-child {
    border-bottom: none;
  }

  h2 {
    color: #ff66a6;
    font-size: 1.8em;
    margin-bottom: 20px;
    position: relative;
    text-align: center;
  }

  h2:after {
    content: '';
    display: block;
    width: 70px;
    height: 3px;
    background: #ff99cc;
    margin: 10px auto;
  }

  p {
    margin-bottom: 15px;
    line-height: 1.7;
  }

  .featured-post {
    background: linear-gradient(135deg, #ff66a6, #ff99cc);
    color: white;
    padding: 30px;
    border-radius: 8px;
    box-shadow: 0 5px 15px rgba(255, 102, 166, 0.3);
    margin: 30px 0;
    text-align: center;
  }

  .featured-post h3 {
    font-size: 1.6em;
    margin-bottom: 15px;
  }

  .featured-post p {
    font-size: 1.2em;
    margin-bottom: 20px;
  }

  .btn {
    display: inline-block;
    background: #1f1f2e;
    color: #ff66a6;
    padding: 12px 24px;
    border-radius: 30px;
    text-decoration: none;
    font-weight: bold;
    transition: all 0.3s ease;
    border: 2px solid transparent;
  }

  .btn:hover {
    background: #333;
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
  }

  .social-links {
    text-align: center;
    margin: 20px 0;
  }

  .social-links a {
    display: inline-block;
    margin: 0 10px;
    font-size: 1.5em;
    color: #ff66a6;
    transition: all 0.3s ease;
  }

  .social-links a:hover {
    color: #ff99cc;
    transform: scale(1.2);
  }

  .contact-card {
    background-color: #f9f9f9;
    border-left: 4px solid #ff66a6;
    padding: 20px;
    margin: 20px 0;
    border-radius: 4px;
    box-shadow: 0 2px 5px rgba(0,0,0,0.05);
  }

  .contact-card a {
    color: #ff66a6;
    text-decoration: none;
    font-weight: 600;
  }

  .contact-card a:hover {
    text-decoration: underline;
  }

  .profile-section {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
  
  .profile-text {
    max-width: 800px;
    margin: 0 auto;
  }

  .profile-image {
    width: 200px;
    height: 200px;
    border-radius: 50%;
    object-fit: cover;
    border: 4px solid white;
    box-shadow: 0 4px 10px rgba(255, 102, 166, 0.3);
    margin-bottom: 20px;
    transition: transform 0.3s ease;
  }

  .profile-image:hover {
    transform: scale(1.05);
  }

  @media (max-width: 768px) {
    .header {
      padding: 40px 0 20px;
    }
  
    .header h1 {
      font-size: 2em;
    }
  
    .tagline {
      font-size: 1.1em;
    }
  
    .subtitle {
      font-size: 0.9em;
    }
  
    section {
      padding: 30px 0;
    }
  
    h2 {
      font-size: 1.6em;
    }
  
    .featured-post {
      padding: 20px;
    }
  
    .featured-post h3 {
      font-size: 1.4em;
    }
  
    .featured-post p {
      font-size: 1em;
    }
  
    .btn {
      padding: 10px 20px;
      font-size: 0.9em;
    }

    .profile-image {
      width: 150px;
      height: 150px;
    }
  }
</style>

<div class="container">
  <header class="header">
    <h1>Kristina P. Sinaga</h1>
    <p class="tagline">"Coding evolves, and I evolve with it — one cup of tea at a time."</p>
    <p class="subtitle">Where mathematics and creativity converge.</p>
  </header>

<section class="featured-post">
    <h3>Latest Brainwave</h3>
    <p><strong>"I Predicted This Chaos, and Now I'm Sipping Tea While the System Auto-Completes Itself"</strong></p>
    <a class="btn" href="./clown-network/chronicles/2025-4-29-copilot-chaos.html">
      Read the Glorious Chaos
    </a>
  </section>

<section id="about" class="profile-section">
    <h2>About Me</h2>
    <img src="assets/images/DSC03661.JPG" alt="Kristina P. Sinaga" class="profile-image">
    <div class="profile-text">
      <p>I am Kristina P. Sinaga, a lifelong learner and researcher with a passion for building innovative AI solutions.</p>
      <p>With a Ph.D. in Applied Mathematics from Chung Yuan Christian University (CYCU), Taiwan, I focus on bridging theoretical foundations with practical applications to address real-world challenges.</p>
      <p>I value clarity, clean documentation, and meaningful contributions, thriving on structure and innovation while staying true to my principles.</p>
    </div>
  </section>

<section id="research" class="profile-section">
    <h2>Research</h2>
    <div class="profile-text">
      <p>My research focuses on developing scalable, interpretable, and trustworthy AI models for decentralized and resource-constrained environments.</p>
      <p>I specialize in clustering, multi-view learning, federated learning, and Edge AI, with applications in anomaly detection, industrial monitoring, and privacy-preserving systems.</p>
      <p>My work emphasizes balancing theoretical foundations with practical deployment to address real-world challenges.</p>
    </div>
  </section>

<section id="contact">
    <h2>Contact</h2>
    <div class="contact-card">
      <p><i class="fas fa-envelope"></i> Email: <a href="mailto:kristinasinaga41@gmail.com">kristinasinaga41@gmail.com</a></p>
    </div>
    <div class="social-links">
      <a href="https://www.linkedin.com/in/kristina-p-sinaga-0ba152309?" title="LinkedIn"><i class="fab fa-linkedin"></i></a>
      <a href="https://github.com/KristinaP09" title="GitHub"><i class="fab fa-github"></i></a>
      <a href="https://x.com/NeuralGlowAI" title="X"><i class="fab fa-x-twitter"></i></a>
      <a href="https://scholar.google.com/citations?user=yNWQLYAAAAAJ&hl=it&oi=ao" title="Google Scholar"><i class="fas fa-graduation-cap"></i></a>
    </div>
  </section>
</div>
