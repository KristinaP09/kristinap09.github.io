// Modern Contact Page JavaScript
document.addEventListener('DOMContentLoaded', function() {
  // Animated counter for hero stats
  const animateCounters = () => {
    const counters = document.querySelectorAll('.stat-number');
    
    counters.forEach(counter => {
      const target = parseInt(counter.getAttribute('data-target'));
      const increment = target / 50;
      let current = 0;
      
      const timer = setInterval(() => {
        current += increment;
        counter.textContent = Math.floor(current);
        
        if (current >= target) {
          counter.textContent = target;
          clearInterval(timer);
        }
      }, 50);
    });
  };

  // Intersection Observer for counter animation
  const heroSection = document.querySelector('.contact-hero');
  if (heroSection) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          animateCounters();
          observer.unobserve(entry.target);
        }
      });
    });
    observer.observe(heroSection);
  }

  // Enhanced form handling
  const contactForm = document.getElementById('contactForm');
  const successMessage = document.getElementById('successMessage');
  const messageTextarea = document.getElementById('message');
  const charCount = document.getElementById('charCount');

  // Character counter for message field
  if (messageTextarea && charCount) {
    messageTextarea.addEventListener('input', function() {
      const currentLength = this.value.length;
      charCount.textContent = currentLength;
      
      if (currentLength > 450) {
        charCount.style.color = '#dc2626';
      } else if (currentLength > 350) {
        charCount.style.color = '#f59e0b';
      } else {
        charCount.style.color = '#6b7280';
      }
    });
  }

  // Form submission with enhanced UX
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      const submitBtn = this.querySelector('.submit-btn');
      const originalText = submitBtn.innerHTML;
      submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
      submitBtn.disabled = true;

      // For GitHub Pages demo
      if (window.location.hostname === 'localhost' || window.location.hostname.includes('github.io')) {
        e.preventDefault();
        
        const formData = new FormData(this);
        const name = formData.get('name');
        
        setTimeout(() => {
          contactForm.style.display = 'none';
          successMessage.classList.add('show');
          
          setTimeout(() => {
            contactForm.reset();
            contactForm.style.display = 'block';
            successMessage.classList.remove('show');
            submitBtn.innerHTML = originalText;
            submitBtn.disabled = false;
            if (charCount) charCount.textContent = '0';
          }, 3000);
        }, 1500);
      }
    });
  }

  // Form field animations
  const formInputs = document.querySelectorAll('.form-group input, .form-group select, .form-group textarea');
  formInputs.forEach(input => {
    input.addEventListener('focus', function() {
      this.parentElement.classList.add('focused');
    });
    
    input.addEventListener('blur', function() {
      if (this.value === '') {
        this.parentElement.classList.remove('focused');
      }
    });
  });

  // Social card hover effects
  const socialCards = document.querySelectorAll('.social-card');
  socialCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
      this.style.transform = 'translateX(5px) scale(1.02)';
    });
    
    card.addEventListener('mouseleave', function() {
      this.style.transform = 'translateX(0) scale(1)';
    });
  });

  // Method cards interaction
  const methodCards = document.querySelectorAll('.method-card');
  methodCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
      this.style.transform = 'translateY(-8px) scale(1.02)';
    });
    
    card.addEventListener('mouseleave', function() {
      this.style.transform = 'translateY(0) scale(1)';
    });
  });

  // Copy email to clipboard functionality
  const emailLinks = document.querySelectorAll('a[href^="mailto:"]');
  emailLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      if (e.ctrlKey || e.metaKey) {
        e.preventDefault();
        const email = this.getAttribute('href').replace('mailto:', '');
        navigator.clipboard.writeText(email).then(() => {
          const tooltip = document.createElement('div');
          tooltip.textContent = 'Email copied!';
          tooltip.style.cssText = `
            position: absolute;
            background: #059669;
            color: white;
            padding: 0.5rem 1rem;
            border-radius: 4px;
            font-size: 0.8rem;
            z-index: 1000;
            pointer-events: none;
          `;
          
          const rect = this.getBoundingClientRect();
          tooltip.style.top = (rect.top - 40) + 'px';
          tooltip.style.left = rect.left + 'px';
          
          document.body.appendChild(tooltip);
          setTimeout(() => tooltip.remove(), 2000);
        });
      }
    });
  });

  // Keyboard navigation improvements
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
      if (successMessage.classList.contains('show')) {
        successMessage.classList.remove('show');
        contactForm.style.display = 'block';
      }
    }
  });

  // Add loading animation to page
  const addPageLoadAnimation = () => {
    const elements = document.querySelectorAll('.method-card, .contact-form-section, .social-section');
    elements.forEach((el, index) => {
      el.style.opacity = '0';
      el.style.transform = 'translateY(20px)';
      el.style.transition = 'all 0.6s ease';
      
      setTimeout(() => {
        el.style.opacity = '1';
        el.style.transform = 'translateY(0)';
      }, index * 100 + 200);
    });
  };

  addPageLoadAnimation();

  // Theme-aware animations based on time
  const initTimeBasedTheme = () => {
    const hour = new Date().getHours();
    const heroSection = document.querySelector('.hero-background');
    
    if (heroSection) {
      if (hour >= 6 && hour < 12) {
        heroSection.style.background = 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)';
      } else if (hour >= 12 && hour < 18) {
        heroSection.style.background = 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)';
      } else {
        heroSection.style.background = 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)';
      }
    }
  };

  initTimeBasedTheme();
});

// Schedule meeting function
function openScheduler() {
  alert(`📅 To schedule a meeting:

1. Send me an email with your preferred time slots
2. Include your timezone  
3. Mention the purpose of the meeting
4. I'll send you a calendar invite

Available hours: Monday-Friday, 9AM-5PM CET

Email: kristinapestaria.sinaga@isti.cnr.it`);
}
