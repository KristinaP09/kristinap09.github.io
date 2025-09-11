---
layout: default
title: Research
description: "Explore Kristina P. Sinaga's research in artificial intelligence, optimization, and systems theory, focusing on multi-view clustering, federated learning, edge AI, and anomaly detection. View selected publications, technical skills, and current projects."
keywords: "Kristina P. Sinaga, research, AI, artificial intelligence, multi-view clustering, federated learning, edge AI, anomaly detection, machine learning, data science, publications, technical skills, optimization, systems theory, explainable AI"
---
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "ProfilePage",
  "headline": "Research - Kristina P. Sinaga",
  "description": "Explore Kristina P. Sinaga's research at the intersection of artificial intelligence, optimization, and systems theory. Focus areas include multi-view clustering, federated learning, edge AI, and anomaly detection. Discover selected publications, technical skills, and current projects.",
  "keywords": "Kristina P. Sinaga, research, AI, artificial intelligence, multi-view clustering, federated learning, edge AI, anomaly detection, machine learning, data science, publications, technical skills, optimization, systems theory, explainable AI",
  "mainEntity": {
    "@type": "Person",
    "name": "Kristina P. Sinaga",
    "knowsAbout": [
      "Artificial Intelligence",
      "Optimization",
      "Systems Theory",
      "Multi-View Clustering",
      "Federated Learning",
      "Edge AI",
      "Anomaly Detection",
      "Explainable AI",
      "Privacy-Preserving Machine Learning"
    ]
  }
}
</script>

<h1 style="text-align: center; font-size: 2.2em;">Research</h1>

<p style="text-align: center; font-size: 1.1em; color: #ff99cc;">
  "Scalable. Interpretable. Trustworthy."
</p>

<div class="theme-switcher-container">
  <button class="theme-btn" data-theme-set="light" aria-label="Switch to light theme">Light</button>
  <button class="theme-btn" data-theme-set="dark" aria-label="Switch to dark theme">Dark</button>
  <button class="theme-btn" data-theme-set="auto" aria-label="Switch to system theme">Auto</button>
</div>

<div class="research-intro">
  <p>
  My research lies at the intersection of artificial intelligence, optimization, and systems theory — with a strong emphasis on clean design and explainability.  
  </p>

<ul>
    <li><strong>Multi-View Clustering:</strong> Developing efficient clustering algorithms that integrate heterogeneous feature spaces (views).</li>
    <li><strong>Federated Learning:</strong> Training models across distributed networks without compromising privacy or introducing chaos.</li>
    <li><strong>Edge AI:</strong> Designing lightweight models suitable for real-time, low-resource environments.</li>
    <li><strong>Anomaly Detection:</strong> Identifying patterns that don't belong — from machines to behavior.</li>
  </ul>

<p>
  I value clarity in implementation and reproducibility in results. My research balances theoretical foundation with practical deployment —  
  ensuring what I publish is not just elegant on paper, but robust in the real world.
  </p>
</div>

<hr class="research-divider">

<h2 style="text-align: center; margin-top: 2em;">Selected Publications</h2>

<div class="publications-container">
  <!-- Article 1 -->
  <article class="publication-card">
    <div class="publication-icon">
      <!-- Removed img tag -->
    </div>
    <div class="publication-content">
      <h3>
        <a href="https://ieeexplore.ieee.org/abstract/document/10810504" target="_blank">
          Federated Multi-View K-Means Clustering
        </a>
      </h3>
      <p class="publication-authors">Kristina P. Sinaga, Miin-Shen Yang</p>
      <p class="publication-venue">IEEE Transactions on Pattern Analysis and Machine Intelligence, 2024
        <span class="impact-factor">
          Impact Factor: 20.8
        </span>
      </p>
      <p class="publication-abstract">
        <strong>Summary:</strong> This work introduces a novel federated learning framework for multi-view clustering, enabling multiple data holders to collaboratively cluster heterogeneous data without sharing raw features or sensitive information. The proposed Federated Multi-View K-Means (FedMVKM) algorithm integrates local multi-view K-means computations with a secure aggregation protocol, ensuring privacy preservation and data locality. Key contributions include:
        <ul>
          <li>Formulation of a unified objective for multi-view clustering in federated environments, supporting arbitrary numbers of views and clients.</li>
          <li>Development of a privacy-preserving protocol that aggregates only model parameters (not raw data), protecting both feature and membership information.</li>
          <li>Explicit update rules for cluster centers and memberships that guarantee convergence and scalability across distributed nodes.</li>
          <li>Comprehensive experiments on real-world multi-view datasets demonstrating that FedMVKM achieves clustering performance comparable to centralized methods, while maintaining strict privacy guarantees and communication efficiency.</li>
        </ul>
        <em>Impact:</em> This approach bridges the gap between multi-view learning and federated analytics, making collaborative clustering feasible for sensitive domains such as healthcare, finance, and cross-organization research, where data cannot be centralized due to privacy or regulatory constraints.
      </p>
      <div class="publication-links">
        <a href="https://ieeexplore.ieee.org/abstract/document/10810504" target="_blank" class="pub-link">
          <i class="fas fa-external-link-alt"></i> Article
        </a>
        <a href="https://github.com/KristinaP09/federated-mview-kmeans" target="_blank" class="pub-link">
          <i class="fab fa-github"></i> Matlab Functions
        </a>
        <a href="https://github.com/KristinaP09/Fed-MVKM" target="_blank" class="pub-link">
          <i class="fa-brands fa-python"></i> Python Package
        </a>
        <a href="/research/2025-Federated_Multi-View_K-Means_Clustering.pdf" target="_blank" class="pub-link">
          <i class="fas fa-file-pdf"></i> PDF
        </a>
      </div>
    </div>
  </article>

<!-- Article 2 -->

<article class="publication-card">
    <div class="publication-icon">
      <!-- Removed img tag -->
    </div>
    <div class="publication-content">
      <h3>
        <a href="https://ieeexplore.ieee.org/abstract/document/9072123" target="_blank">
          Unsupervised K-means clustering algorithm
        </a>
      </h3>
      <p class="publication-authors">Kristina P. Sinaga, Miin-Shen Yang</p>
      <p class="publication-venue">IEEE Access, 2020</p>
      <div>
        <strong class="featured-banner">
            🌟 Featured as one of the Popular Documents – August 2025 in IEEE Access! 
        </strong>
        <br>
        <span class="citations-banner">
          <i class="fas fa-chart-line"></i> Over 2,500+ Citations
        </span>
        <a href="https://ieeexplore.ieee.org/xpl/topAccessedArticles.jsp?punumber=6287639" target="_blank" style="font-size:0.95em; color:#005a87; display: block; margin-top: 0.3em;">
          See the list on IEEE Xplore
        </a>
      </div>
      <p class="publication-abstract">
        <strong>Abstract:</strong><br>
        This article presents a comprehensive and technically robust exploration of the classic K-means algorithm, focusing on its unsupervised learning capabilities for partitioning unlabeled data into meaningful clusters. The work advances the field by providing a rigorous mathematical formulation, detailed algorithmic steps, and practical considerations for real-world deployment. It revisits foundational principles—such as centroid initialization, iterative assignment, and update steps—while addressing common challenges like cluster initialization sensitivity, convergence criteria, and scalability to large datasets.
      </p>
      <ul>
        <li><strong>Enhanced Initialization Strategies:</strong> Introduces improved centroid initialization (e.g., k-means++), reducing the risk of poor local minima and improving clustering stability.</li>
        <li><strong>Convergence Analysis:</strong> Provides formal analysis of convergence properties, including proofs of monotonic decrease in the objective function and clear algorithm termination criteria.</li>
        <li><strong>Scalability and Efficiency:</strong> Explores computational optimizations such as efficient distance computations and parallelization, making K-means suitable for large-scale and high-dimensional data.</li>
        <li><strong>Evaluation Metrics:</strong> Introduces quantitative measures (e.g., inertia, silhouette score) for assessing clustering quality, enabling objective comparison across runs and parameter settings.</li>
        <li><strong>Practical Impact:</strong> Offers guidelines for parameter selection and best practices, empowering practitioners to apply K-means in diverse domains including image analysis, bioinformatics, and market segmentation.</li>
      </ul>
      <p>
        <strong>Impact:</strong>  
        This article has made a significant mark in the machine learning community, with over 2,000 citations since publication. Its exceptional citation rate demonstrates the paper's foundational contribution to clustering algorithms and its widespread adoption across multiple domains. The article's clarity, technical depth, and practical relevance have established it as one of the most influential works on K-means clustering in recent years, providing both theoretical foundations and implementation guidance that continue to shape research and applications in data mining, pattern recognition, and unsupervised learning.
      </p>
      <div class="publication-links">
        <a href="https://ieeexplore.ieee.org/abstract/document/9072123" target="_blank" class="pub-link">
          <i class="fas fa-external-link-alt"></i> Article
        </a>
        <a href="https://github.com/KristinaP09/unsupervised-kmeans" class="pub-link">
          <i class="fab fa-github"></i> Code
        </a>
        <a href="https://xplorestaging.ieee.org/ielx7/6287639/8948470/09072123.pdf?arnumber=9072123" target="_blank" class="pub-link">
          <i class="fas fa-file-pdf"></i> PDF
        </a>
      </div>
    </div>
  </article>

<!-- Article 3 -->

<article class="publication-card">
    <div class="publication-icon">
      <!-- Removed img tag -->
    </div>
    <div class="publication-content">
      <h3>
        <a href="#" target="_blank"> <!-- Placeholder for article link -->
          Collaborative feature-weighted multi-view fuzzy c-means clustering.
        </a>
      </h3>
      <p class="publication-authors">Kristina P. Sinaga, Miin-Shen Yang</p>
      <p class="publication-venue">Pattern Recognition, 2021 <!-- Placeholder for Journal Name, Year -->
        <span class="impact-factor">
          Impact Factor: 7.6
        </span>
      </p>
      <p class="publication-abstract">
        <strong>Summary:</strong> This paper introduces a collaborative feature-weighted multi-view fuzzy c-means clustering (Co-FW-MVFCM) algorithm. It aims to improve clustering performance by simultaneously optimizing cluster assignments, view weights, and feature weights within each view in a collaborative manner. Key aspects include:
        <ul>
          <li>Development of an objective function that integrates feature weighting at both view and individual feature levels.</li>
          <li>A collaborative optimization strategy that allows views to influence each other's feature weighting schemes.</li>
          <li>Derivation of update rules for memberships, cluster centers, view weights, and feature weights.</li>
          <li>Demonstration of the algorithm's effectiveness on various multi-view datasets, showing improved accuracy and robustness.</li>
        </ul>
        <em>Impact:</em> This method provides a more nuanced approach to multi-view clustering by allowing for fine-grained control over feature importance, leading to better discovery of underlying data structures in complex, heterogeneous datasets.
      </p>
      <div class="publication-links">
        <a href="https://www.sciencedirect.com/science/article/abs/pii/S003132032100251X" target="_blank" class="pub-link"> <!-- Placeholder for article link -->
          <i class="fas fa-external-link-alt"></i> Article
        </a>
        <a href="https://github.com/KristinaP09/collaborative-feature-weighted-fcm" target="_blank" class="pub-link"> <!-- Placeholder for code link -->
          <i class="fab fa-github"></i> Code
        </a>
        <a href="https://www.sciencedirect.com/science/article/abs/pii/S003132032100251X" target="_blank" class="pub-link">
          <i class="fas fa-file-pdf"></i> PDF
        </a>
      </div>
    </div>
  </article>
</div>

<hr class="research-divider">

<div class="technical-skills-expertise">
  <h2 style="text-align: center;">Technical Skills & Expertise</h2>
  <div class="skills-expertise-container">
    <div class="skill-category">
      <h3><i class="fas fa-brain"></i> Core Research Areas</h3>
      <ul>
        <li>Multi-View Clustering & Learning</li>
        <li>Federated & Distributed Learning</li>
        <li>Edge AI & Lightweight Models</li>
        <li>Anomaly & Outlier Detection</li>
        <li>Optimization Algorithms</li>
        <li>Explainable AI (XAI) & Interpretability</li>
        <li>Privacy-Preserving Machine Learning</li>
      </ul>
    </div>
    <div class="skill-category">
      <h3><i class="fas fa-cogs"></i> Methodologies & Techniques</h3>
      <ul>
        <li>Fuzzy C-Means & Variants</li>
        <li>Kernel Methods (incl. Heat-Kernels)</li>
        <li>Deep Learning (CNNs, RNNs, Transformers)</li>
        <li>Statistical Modeling & Analysis</li>
        <li>Algorithm Design & Complexity Analysis</li>
        <li>Reinforcement Learning</li>
        <li>Time Series Analysis</li>
      </ul>
    </div>
    <div class="skill-category">
      <h3><i class="fas fa-tools"></i> Programming & Tools</h3>
      <ul>
        <li>Python (NumPy, Pandas, SciPy, Scikit-learn)</li>
        <li>TensorFlow, Keras, PyTorch</li>
        <li>MATLAB</li>
        <li>SQL & NoSQL Databases</li>
        <li>Git & Version Control</li>
        <li>Docker & Containerization</li>
        <li>Cloud Platforms (AWS, GCP, Azure basics)</li>
      </ul>
    </div>
  </div>
</div>

<div class="current-projects">
  <h2 style="text-align: center; margin-top: 2em;">Current Projects</h2>

<div class="projects-container">
    <div class="project-item">
      <h3><i class="fas fa-project-diagram"></i> Cross-Modal Learning for Healthcare Applications</h3>
      <p>Developing AI systems that can integrate diverse healthcare data modalities (imaging, text reports, vitals) to improve diagnostic accuracy while maintaining interpretability.</p>
    </div>

    `<div class="project-item">`
      `<h3><i class="fas fa-network-wired">``</i>` Distributed Optimization for Edge Computing `</h3>`
      `<p>`Creating novel optimization algorithms that enable efficient distributed computation across edge devices with heterogeneous capabilities and unreliable connectivity.`</p>`
    `</div>`

    `<div class="project-item">`
      `<h3><i class="fas fa-shield-alt">``</i>` Privacy-Preserving Machine Learning `</h3>`
      `<p>`Building learning frameworks that maintain data privacy while enabling collaborative model development across organizations and institutions.`</p>`
    `</div>`

</div>
</div>




<div class="collaboration">
  <h2 style="text-align: center; margin-top: 2em;">Research Opportunities</h2>
  <div class="collaboration-content">
    <p>I'm actively seeking collaborations in the following areas:</p>
    <ul>
      <li>Industry partnerships for applying AI techniques to real-world problems</li>
      <li>Academic collaborations on federated learning and multi-view data analysis</li>
      <li>Mentoring opportunities for graduate and undergraduate researchers</li>
    </ul>
    <p class="contact-cta">If you're interested in collaborating, please <a href="/contact">contact me</a> with your research interests and potential collaboration ideas.</p>
  </div>
</div>

<style>
  :root {
    --bg-primary: #ffffff;
    --bg-secondary: #f9f9f9;
    --bg-tertiary: #f5f5f5;
    --bg-accent: #f0f0f0;
    --bg-accent-hover: #e0e0e0;

    --text-primary: #333333;
    --text-secondary: #555555;
    --text-muted: #666666;

    --accent-primary: #ff99cc;
    --accent-primary-hover: #ff66b3;
    --accent-secondary: #DAA520; /* Gold */
  
    --banner-featured-text: #b30059;
    --banner-featured-bg: linear-gradient(90deg, #fff4f8, #ffe6f0);
    --banner-featured-shadow: rgba(248, 215, 239, 0.7);

    --banner-citations-text: #005a87;
    --banner-citations-bg: #f0f7fb;
    --banner-citations-shadow: rgba(0, 90, 135, 0.2);

    --border-primary: #f0f0f0;
    --divider-gradient: linear-gradient(to right, rgba(0,0,0,0), rgba(255,153,204,0.75), rgba(0,0,0,0));
  
    --shadow-light: rgba(0,0,0,0.1);
    --shadow-medium: rgba(0,0,0,0.2);
    --shadow-strong: rgba(0,0,0,0.08);
    --shadow-strong-hover: rgba(0,0,0,0.12);

    --theme-switcher-bg: #efefef;
    --theme-switcher-text: #333333;
    --theme-switcher-border: #cccccc;
    --theme-switcher-active-bg: var(--accent-primary);
    --theme-switcher-active-text: var(--bg-primary);
  }

  [data-theme="dark"] {
    --bg-primary: #1e1e1e;
    --bg-secondary: #2a2a2a;
    --bg-tertiary: #333333;
    --bg-accent: #444444;
    --bg-accent-hover: #555555;

    --text-primary: #e0e0e0;
    --text-secondary: #cccccc;
    --text-muted: #aaaaaa;

    --accent-primary: #f472b6; /* Brighter pink for dark mode */
    --accent-primary-hover: #ec4899;
    --accent-secondary: #FBBF24; /* Brighter gold for dark mode */

    --banner-featured-text: #fce7f3;
    --banner-featured-bg: linear-gradient(90deg, #581c87, #9d174d); /* Darker gradient */
    --banner-featured-shadow: rgba(252, 231, 243, 0.3);

    --banner-citations-text: #e0f2fe;
    --banner-citations-bg: #0c4a6e; /* Darker blue */
    --banner-citations-shadow: rgba(224, 242, 254, 0.2);
  
    --border-primary: #444444;
    --divider-gradient: linear-gradient(to right, rgba(255,255,255,0), rgba(244,114,182,0.6), rgba(255,255,255,0));

    --shadow-light: rgba(255,255,255,0.05);
    --shadow-medium: rgba(255,255,255,0.1);
    --shadow-strong: rgba(255,255,255,0.06);
    --shadow-strong-hover: rgba(255,255,255,0.1);

    --theme-switcher-bg: #3a3a3a;
    --theme-switcher-text: #e0e0e0;
    --theme-switcher-border: #555555;
    --theme-switcher-active-bg: var(--accent-primary);
    --theme-switcher-active-text: var(--bg-primary);
  }

  body {
    background-color: var(--bg-primary);
    color: var(--text-primary);
    transition: background-color 0.3s ease, color 0.3s ease;
  }

  .research-intro {
    background-color: var(--bg-secondary);
    padding: 1.5em;
    border-radius: 8px;
    margin-bottom: 2em;
    box-shadow: 0 2px 5px var(--shadow-light);
  }
  
  .research-divider {
    margin: 2.5em 0;
    border: 0;
    height: 1px;
    background-image: var(--divider-gradient);
  }
  
  .publications-container {
    display: flex;
    flex-direction: column;
    gap: 2em;
    margin: 2em 0;
  }
  
  .publication-card {
    display: flex;
    background-color: var(--bg-primary);
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 3px 10px var(--shadow-light);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }
  
  .publication-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 5px 15px var(--shadow-medium);
  }
  
  .publication-icon {
    flex: 0 0 150px;
    background-color: var(--bg-tertiary);
    display: flex;
    align-items: center;
    justify-content: center;
    /* Ensure the div still takes up space if needed, or adjust flex/height as desired */
    min-height: 100px; /* Example: maintain a minimum height */
  }
  
  .publication-content {
    flex: 1;
    padding: 1.5em;
  }
  
  .publication-content h3 {
    margin-top: 0;
    color: var(--text-primary);
    font-size: 1.3em;
  }
  
  .publication-authors {
    color: var(--text-muted);
    font-style: italic;
    margin-bottom: 0.5em;
  }
  
  .publication-venue {
    color: var(--accent-primary);
    font-weight: bold;
    margin-bottom: 1em;
  }
  
  .impact-factor {
    font-weight: bold;
    color: var(--accent-secondary);
    background-color: var(--bg-secondary);
    padding: 0.1em 0.4em;
    border-radius: 4px;
    font-size: 0.9em;
    margin-left: 0.5em;
  }
  
  .publication-abstract {
    font-size: 0.95em;
    line-height: 1.5;
    color: var(--text-secondary);
    margin-bottom: 1.5em;
  }
  
  .publication-links {
    display: flex;
    gap: 1em;
    flex-wrap: wrap;
  }
  
  .pub-link {
    display: inline-flex;
    align-items: center;
    gap: 0.5em;
    padding: 0.4em 0.8em;
    background-color: var(--bg-accent);
    border-radius: 4px;
    color: var(--text-primary);
    text-decoration: none;
    font-size: 0.85em;
    transition: background-color 0.2s;
  }
  
  .pub-link:hover {
    background-color: var(--bg-accent-hover);
  }

  .featured-banner {
    display: inline-block;
    font-size: 1.05em; 
    color: var(--banner-featured-text); 
    font-weight: bold; 
    background: var(--banner-featured-bg); 
    padding: 0.3em 0.75em; 
    border-radius: 8px; 
    box-shadow: 0 2px 8px var(--banner-featured-shadow);
  }

  .citations-banner {
    display: block; 
    margin-top: 0.7em; 
    font-size: 1.0em; 
    color: var(--banner-citations-text); 
    font-weight: bold; 
    background: var(--banner-citations-bg); 
    padding: 0.3em 0.75em; 
    border-radius: 8px; 
    box-shadow: 0 1px 5px var(--banner-citations-shadow);
  }
  
  .technical-skills-expertise {
    margin: 2.5em 0;
  }

  .skills-expertise-container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 1.5em;
    margin: 2em 0;
    padding: 0 1em;
  }

  .skill-category {
    background-color: var(--bg-primary);
    padding: 1.5em;
    border-radius: 8px;
    box-shadow: 0 3px 10px var(--shadow-strong);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }

  .skill-category:hover {
    transform: translateY(-3px);
    box-shadow: 0 5px 12px var(--shadow-strong-hover);
  }

  .skill-category h3 {
    display: flex;
    align-items: center;
    gap: 0.6em;
    font-size: 1.2em;
    margin-top: 0;
    margin-bottom: 1em;
    color: var(--accent-primary);
  }

  .skill-category h3 i {
    color: var(--accent-primary);
  }

  .skill-category ul {
    list-style: none;
    padding-left: 0;
    margin: 0;
  }

  .skill-category li {
    font-size: 0.95em;
    color: var(--text-secondary);
    padding: 0.4em 0;
    border-bottom: 1px solid var(--border-primary);
  }

  .skill-category li:last-child {
    border-bottom: none;
  }

  .projects-container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2em;
    margin: 2em 0;
  }
  
  .project-item {
    background-color: var(--bg-primary);
    padding: 1.5em;
    border-radius: 8px;
    box-shadow: 0 3px 10px var(--shadow-strong);
  }
  
  .project-item h3 {
    display: flex;
    align-items: center;
    gap: 0.5em;
    color: var(--text-primary);
    font-size: 1.2em;
    margin-top: 0;
  }
  
  .collaboration-content {
    background-color: var(--bg-secondary);
    padding: 1.5em;
    border-radius: 8px;
    margin: 2em 0;
    box-shadow: 0 2px 5px var(--shadow-light);
  }
  
  .contact-cta {
    margin-top: 1.5em;
    font-weight: bold;
    color: var(--text-primary);
  }
  
  .contact-cta a {
    color: var(--accent-primary);
    text-decoration: underline;
    transition: color 0.2s;
  }
  
  .contact-cta a:hover {
    color: var(--accent-primary-hover);
  }

  .theme-switcher-container {
    text-align: right;
    margin-bottom: 1em;
    padding: 0.5em 0;
  }

  .theme-btn {
    background-color: var(--theme-switcher-bg);
    color: var(--theme-switcher-text);
    border: 1px solid var(--theme-switcher-border);
    padding: 0.5em 1em;
    margin-left: 0.5em;
    border-radius: 4px;
    cursor: pointer;
    font-size: 0.9em;
    transition: background-color 0.2s, color 0.2s;
  }

  .theme-btn:hover {
    opacity: 0.8;
  }

  .theme-btn.active {
    background-color: var(--theme-switcher-active-bg);
    color: var(--theme-switcher-active-text);
    border-color: var(--theme-switcher-active-bg);
  }
  
  @media (max-width: 768px) {
    .publication-card {
      flex-direction: column;
    }
  
    .publication-icon {
      height: auto; /* Adjust if a fixed height is no longer desired */
      min-height: 50px; /* Example: smaller min-height for mobile */
      flex-basis: auto; /* Allow it to shrink if content is removed */
    }
  
    .skills-expertise-container {
      grid-template-columns: 1fr;
    }
  
    .projects-container {
      grid-template-columns: 1fr;
    }
  }
</style>

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">

<script>
  (function() {
    const THEME_KEY = 'theme-preference';
    const themeButtons = document.querySelectorAll('.theme-btn[data-theme-set]');
    const htmlElement = document.documentElement;

    function applyTheme(theme) {
      if (theme === 'auto') {
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        htmlElement.setAttribute('data-theme', prefersDark ? 'dark' : 'light');
      } else {
        htmlElement.setAttribute('data-theme', theme);
      }
      localStorage.setItem(THEME_KEY, theme);
      updateActiveButton(theme);
    }

    function updateActiveButton(currentTheme) {
      themeButtons.forEach(button => {
        if (button.getAttribute('data-theme-set') === currentTheme) {
          button.classList.add('active');
        } else {
          button.classList.remove('active');
        }
      });
    }

    function loadThemePreference() {
      const savedTheme = localStorage.getItem(THEME_KEY) || 'auto';
      applyTheme(savedTheme);
    }

    themeButtons.forEach(button => {
      button.addEventListener('click', () => {
        const selectedTheme = button.getAttribute('data-theme-set');
        applyTheme(selectedTheme);
      });
    });

    // Listen for OS theme changes if 'auto' is selected
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', event => {
      const currentSetting = localStorage.getItem(THEME_KEY);
      if (currentSetting === 'auto') {
        applyTheme('auto'); // Re-apply auto to reflect OS change
      }
    });

    // Load theme on initial page load
    loadThemePreference();
  })();
</script>
