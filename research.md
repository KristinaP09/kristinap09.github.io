---
layout: default
title: Research
---
<h1 style="text-align: center; font-size: 2.2em;">Research</h1>

<p style="text-align: center; font-size: 1.1em; color: #ff99cc;">
  "Scalable. Interpretable. Trustworthy."
</p>

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
      <img src="https://via.placeholder.com/150?text=Federated+KMeans" alt="Federated Multi-View K-Means Clustering">
    </div>
    <div class="publication-content">
      <h3>
        <a href="https://ieeexplore.ieee.org/abstract/document/10810504" target="_blank">
          Federated Multi-View K-Means Clustering
        </a>
      </h3>
      <p class="publication-authors">Kristina P. Sinaga, Miin-Shen Yang</p>
      <p class="publication-venue">IEEE Transactions on Pattern Analysis and Machine Intelligence, 2024
        <span class="impact-factor" style="font-weight:bold; color:#FFD700; text-shadow: 0 0 8px #FFD700, 0 0 12px #FFA500;">
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
        <a href="https://github.com/KristinaP09/FedMVKM" target="_blank" class="pub-link">
          <i class="fab fa-github"></i> Code
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
      <img src="https://via.placeholder.com/150?text=KMeans" alt="Unsupervised K-means clustering algorithm">
    </div>
    <div class="publication-content">
      <h3>
        <a href="https://ieeexplore.ieee.org/abstract/document/9072123" target="_blank">
          Unsupervised K-means clustering algorithm
        </a>
      </h3>
      <p class="publication-authors">Kristina P. Sinaga, Miin-Shen Yang</p>
      <p class="publication-venue">IEEE Access, 2020</p>
      <div style="margin: 0.7em 0 1.2em 0;">
        <strong>
          <span style="font-size:1.1em; color:#b30059; font-weight:bold; background:linear-gradient(90deg,#fff4f8,#ffe6f0); padding:0.25em 0.7em; border-radius:8px; box-shadow:0 2px 8px #f8d7ef;">
            🌟 Featured as one of the Popular Documents – April 2025 in IEEE Access!
          </span>
        </strong>
        <br>
        <span style="display:block; margin-top:0.7em; font-size:1.05em; color:#005a87; font-weight:bold; background:#f0f7fb; padding:0.3em 0.7em; border-radius:8px; box-shadow:0 1px 5px rgba(0,90,135,0.2);">
          <i class="fas fa-chart-line"></i> Over 2,000+ Citations
        </span>
        <a href="https://ieeexplore.ieee.org/xpl/topAccessedArticles.jsp?punumber=6287639" target="_blank" style="font-size:0.95em; color:#005a87;">
          See the list on IEEE Xplore
        </a>
      </div>
      <p class="publication-abstract">
        <strong>Abstract:</strong><br>
        This article presents a comprehensive and technically robust exploration of the classic K-means algorithm, focusing on its unsupervised learning capabilities for partitioning unlabeled data into meaningful clusters. The work advances the field by providing a rigorous mathematical formulation, detailed algorithmic steps, and practical considerations for real-world deployment. It revisits foundational principles—such as centroid initialization, iterative assignment, and update steps—while addressing common challenges like cluster initialization sensitivity, convergence criteria, and scalability to large datasets.
      </p>
      <ul style="margin: 0 0 1em 1.2em; font-size:0.97em;">
        <li><strong>Enhanced Initialization Strategies:</strong> Introduces improved centroid initialization (e.g., k-means++), reducing the risk of poor local minima and improving clustering stability.</li>
        <li><strong>Convergence Analysis:</strong> Provides formal analysis of convergence properties, including proofs of monotonic decrease in the objective function and clear algorithm termination criteria.</li>
        <li><strong>Scalability and Efficiency:</strong> Explores computational optimizations such as efficient distance computations and parallelization, making K-means suitable for large-scale and high-dimensional data.</li>
        <li><strong>Evaluation Metrics:</strong> Introduces quantitative measures (e.g., inertia, silhouette score) for assessing clustering quality, enabling objective comparison across runs and parameter settings.</li>
        <li><strong>Practical Impact:</strong> Offers guidelines for parameter selection and best practices, empowering practitioners to apply K-means in diverse domains including image analysis, bioinformatics, and market segmentation.</li>
      </ul>
      <p style="font-size:0.97em; color:#555; margin-bottom:1.2em;">
        <strong>Impact:</strong>  
        This article has made a significant mark in the machine learning community, with over 2,000 citations since publication. Its exceptional citation rate demonstrates the paper's foundational contribution to clustering algorithms and its widespread adoption across multiple domains. The article's clarity, technical depth, and practical relevance have established it as one of the most influential works on K-means clustering in recent years, providing both theoretical foundations and implementation guidance that continue to shape research and applications in data mining, pattern recognition, and unsupervised learning.
      </p>
      <div class="publication-links">
        <a href="https://ieeexplore.ieee.org/abstract/document/9072123" target="_blank" class="pub-link">
          <i class="fas fa-external-link-alt"></i> Article
        </a>
        <a href="https://github.com/KristinaP09/KMeans-Clustering" class="pub-link">
          <i class="fab fa-github"></i> Code
        </a>
        <a href="/research/2020-Unsupervised_K-means_clustering_algorithm.pdf" target="_blank" class="pub-link">
          <i class="fas fa-file-pdf"></i> PDF
        </a>
      </div>
      <details style="margin-top:1em;">
        <summary><strong>Article Structure</strong></summary>
        <ol style="margin:0.7em 0 0 1.2em; font-size:0.96em;">
          <li><strong>Introduction:</strong> Motivation and historical context for unsupervised clustering and K-means.</li>
          <li><strong>Technical Foundations:</strong> Mathematical formulation, algorithm description, initialization, and convergence.</li>
          <li><strong>Algorithmic Enhancements:</strong> Advanced initialization, computational optimizations, handling high-dimensional/sparse data.</li>
          <li><strong>Evaluation and Applications:</strong> Cluster validation metrics, case studies, and real-world examples.</li>
          <li><strong>Discussion and Impact:</strong> Limitations, open challenges, and influence on subsequent research.</li>
          <li><strong>Conclusion:</strong> Summary of contributions and future directions.</li>
        </ol>
      </details>
    </div>
  </article>
</div>

<hr class="research-divider">

<div class="research-metrics">
  <h2 style="text-align: center;">Research Impact</h2>

<div class="metrics-container">
    <div class="metric-card">
      <div class="metric-number">100+</div>
      <div class="metric-label">Citations</div>
    </div>

    `<div class="metric-card">`
      `<div class="metric-number">`10 `</div>`
      `<div class="metric-label">`Publications `</div>`
    `</div>`

    `<div class="metric-card">`
      `<div class="metric-number">`5 `</div>`
      `<div class="metric-label">`Patents `</div>`
    `</div>`

    `<div class="metric-card">`
      `<div class="metric-number">`3 `</div>`
      `<div class="metric-label">`Research Awards `</div>`
    `</div>`

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
  .research-intro {
    background-color: #f9f9f9;
    padding: 1.5em;
    border-radius: 8px;
    margin-bottom: 2em;
    box-shadow: 0 2px 5px rgba(0,0,0,0.1);
  }
  
  .research-divider {
    margin: 2.5em 0;
    border: 0;
    height: 1px;
    background-image: linear-gradient(to right, rgba(0,0,0,0), rgba(255,153,204,0.75), rgba(0,0,0,0));
  }
  
  .publications-container {
    display: flex;
    flex-direction: column;
    gap: 2em;
    margin: 2em 0;
  }
  
  .publication-card {
    display: flex;
    background-color: white;
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 3px 10px rgba(0,0,0,0.1);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }
  
  .publication-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 5px 15px rgba(0,0,0,0.2);
  }
  
  .publication-icon {
    flex: 0 0 150px;
    background-color: #f5f5f5;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  .publication-icon img {
    max-width: 100%;
    max-height: 150px;
    object-fit: cover;
  }
  
  .publication-content {
    flex: 1;
    padding: 1.5em;
  }
  
  .publication-content h3 {
    margin-top: 0;
    color: #333;
    font-size: 1.3em;
  }
  
  .publication-authors {
    color: #666;
    font-style: italic;
    margin-bottom: 0.5em;
  }
  
  .publication-venue {
    color: #ff99cc;
    font-weight: bold;
    margin-bottom: 1em;
  }
  
  .publication-abstract {
    font-size: 0.95em;
    line-height: 1.5;
    color: #555;
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
    background-color: #f0f0f0;
    border-radius: 4px;
    color: #333;
    text-decoration: none;
    font-size: 0.85em;
    transition: background-color 0.2s;
  }
  
  .pub-link:hover {
    background-color: #e0e0e0;
  }
  
  .metrics-container {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    margin: 2em 0;
  }
  
  .metric-card {
    text-align: center;
    padding: 1.5em;
    background-color: white;
    border-radius: 8px;
    box-shadow: 0 3px 10px rgba(0,0,0,0.1);
    min-width: 150px;
    margin: 1em;
  }
  
  .metric-number {
    font-size: 2.5em;
    font-weight: bold;
    color: #ff99cc;
    margin-bottom: 0.2em;
  }
  
  .metric-label {
    color: #666;
    font-size: 1em;
  }
  
  .projects-container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2em;
    margin: 2em 0;
  }
  
  .project-item {
    background-color: white;
    padding: 1.5em;
    border-radius: 8px;
    box-shadow: 0 3px 10px rgba(0,0,0,0.1);
  }
  
  .project-item h3 {
    display: flex;
    align-items: center;
    gap: 0.5em;
    color: #333;
    font-size: 1.2em;
    margin-top: 0;
  }
  
  .collaboration-content {
    background-color: #f9f9f9;
    padding: 1.5em;
    border-radius: 8px;
    margin: 2em 0;
    box-shadow: 0 2px 5px rgba(0,0,0,0.1);
  }
  
  .contact-cta {
    margin-top: 1.5em;
    font-weight: bold;
    color: #333;
  }
  
  .contact-cta a {
    color: #ff99cc;
    text-decoration: underline;
    transition: color 0.2s;
  }
  
  .contact-cta a:hover {
    color: #ff66b3;
  }
  
  @media (max-width: 768px) {
    .publication-card {
      flex-direction: column;
    }
  
    .publication-icon {
      height: 150px;
    }
  
    .metrics-container {
      gap: 1em;
    }
  
    .metric-card {
      flex-basis: calc(50% - 2em);
    }
  
    .projects-container {
      grid-template-columns: 1fr;
    }
  }
</style>

<!-- Add Font Awesome for icons -->

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">
