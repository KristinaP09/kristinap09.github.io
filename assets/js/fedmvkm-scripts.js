// Fed-MVKM MathJax Configuration Script
// Created: August 2, 2025
// Author: Kristina P. Sinaga

document.addEventListener('DOMContentLoaded', function() {
  // Configure MathJax for better equation rendering
  window.MathJax = {
    tex: {
      inlineMath: [['$', '$'], ['\\(', '\\)']],
      displayMath: [['$$', '$$'], ['\\[', '\\]']],
      processEscapes: true,
      processEnvironments: true,
      packages: ['base', 'ams', 'noerrors', 'noundefined']
    },
    options: {
      ignoreHtmlClass: 'tex2jax_ignore',
      processHtmlClass: 'tex2jax_process'
    },
    svg: {
      fontCache: 'global'
    },
    startup: {
      ready: function() {
        MathJax.startup.defaultReady();
        
        // Add custom styles to equations
        const style = document.createElement('style');
        style.textContent = `
          .MathJax {
            font-size: 1.1em !important;
          }
          
          .math-container .MathJax {
            margin: 10px 0;
          }
        `;
        document.head.appendChild(style);
      }
    }
  };

  // Add MathJax script dynamically
  const script = document.createElement('script');
  script.src = 'https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js';
  script.async = true;
  document.head.appendChild(script);
  
  // Add syntax highlighting for code blocks
  document.querySelectorAll('pre code').forEach((block) => {
    // Add language class if not present
    if (!block.className.includes('language-')) {
      const parent = block.parentNode;
      if (parent && parent.className.includes('language-python')) {
        block.className = 'language-python';
      } else {
        block.className = 'language-python'; // Default to Python
      }
    }
    
    // Apply custom styling to code blocks
    block.style.fontSize = '14px';
    block.style.lineHeight = '1.5';
    block.style.padding = '16px';
    block.style.borderRadius = '6px';
    block.style.backgroundColor = '#f6f8fa';
  });
  
  // Wrap math in proper containers
  document.querySelectorAll('p, li').forEach((element) => {
    if (element.innerHTML.includes('$$') && !element.closest('.math-container')) {
      const container = document.createElement('div');
      container.className = 'math-container';
      element.parentNode.insertBefore(container, element);
      container.appendChild(element);
    }
  });
  
  // Add responsive behavior to tables
  document.querySelectorAll('table').forEach((table) => {
    const wrapper = document.createElement('div');
    wrapper.style.overflow = 'auto';
    wrapper.style.marginBottom = '20px';
    table.parentNode.insertBefore(wrapper, table);
    wrapper.appendChild(table);
  });
});

// Fix for code block display
document.addEventListener('DOMContentLoaded', function() {
  // Handle Python code blocks specifically
  document.querySelectorAll('pre').forEach((preBlock) => {
    // Check if it's a Python code block
    if (preBlock.innerHTML.includes('import numpy') || 
        preBlock.innerHTML.includes('def ') || 
        preBlock.innerHTML.includes('class ') || 
        preBlock.innerHTML.includes('# Python')) {
      
      // If no language is specified, add Python class
      if (!preBlock.className.includes('language-')) {
        preBlock.className += ' language-python';
      }
    }
  });
});
