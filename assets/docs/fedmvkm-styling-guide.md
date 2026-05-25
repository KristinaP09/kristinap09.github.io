# Fed-MVKM Document Styling Guide

## Overview

This document explains how to use the CSS and JavaScript files created to enhance the display of Fed-MVKM markdown content.

## Files Created

1. **CSS File**: `/assets/css/fedmvkm-styles.css`
2. **JavaScript File**: `/assets/js/fedmvkm-scripts.js`

## How the Styling Works

The CSS file provides consistent styling for:

- Title section with gradient background
- Table of Contents with proper indentation and styling
- Math equations with enhanced formatting
- Code blocks with syntax highlighting for Python
- Section navigation links
- "Back to Top" buttons
- Card layouts for applications and learning sections
- Responsive design for mobile devices

The JavaScript file adds functionality for:

- MathJax configuration for proper rendering of LaTeX equations
- Automatic detection and styling of code blocks
- Wrapping math equations in proper containers
- Making tables responsive

## How to Use

1. **Link CSS and JS in Front Matter**:
   ```markdown
   ---
   layout: post
   title: "Fed-MVKM: Federated Multi-View K-Means Clustering"
   css: 
     - /assets/css/fedmvkm-styles.css
   js:
     - /assets/js/fedmvkm-scripts.js
   ---
   ```

2. **Use CSS Classes Instead of Inline Styles**:

   - For titles:
     ```html
     <div class="title-container">
       <h1>🌟 Fed-MVKM: Federated Multi-View K-Means</h1>
       <h2>A Comprehensive Tutorial...</h2>
     </div>
     ```

   - For table of contents:
     ```html
     <div class="toc">
       - [Introduction](#introduction)
       - [What You'll Learn](#what-youll-learn)
     </div>
     ```

   - For math equations:
     ```html
     <div class="math-container">
     $$
     D(x_i^h, a_k^h) = 1 - e^{-\beta_h \|x_i^h - a_k^h\|^2}
     $$
     </div>
     ```

   - For navigation:
     ```html
     <div class="section-nav">
       <a href="#introduction">Introduction</a>
       <a href="#theoretical-foundation">Theory</a>
     </div>
     ```

   - For "Back to Top" links:
     ```html
     <div style="text-align: right;">
       <a href="#" class="back-to-top">↑ Back to Top</a>
     </div>
     ```

   - For images:
     ```html
     <div class="center-image">
       <img src="path/to/image.png" alt="Description">
       <div class="image-caption">Figure: Description</div>
     </div>
     ```

## Benefits of This Approach

1. **Consistency**: All elements have consistent styling across the document
2. **Maintainability**: Changing styles requires editing only one CSS file
3. **Performance**: Reduces inline styles which can bloat the HTML
4. **Professional Display**: Math equations and code blocks render properly
5. **Responsive Design**: Document displays well on mobile devices

## Troubleshooting

If equations aren't rendering properly:
- Make sure `mathjax: true` is set in the front matter
- Ensure equations are wrapped in `<div class="math-container">` tags

If code blocks aren't highlighting properly:
- Make sure you specify the language: ```python

If styles aren't applying:
- Check if the path to the CSS file is correct
- Ensure your site's template is loading the CSS and JS files specified in front matter
