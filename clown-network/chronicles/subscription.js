// Enhanced subscription functionality
document.addEventListener('DOMContentLoaded', function() {
    // Email validation
    function isValidEmail(email) {
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }
    
    // Generic form handler for both inline and popup forms
    const handleSubscriptionForm = (form) => {
        if (!form) return;
        
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            const emailInput = this.querySelector('input[type="email"]');
            const email = emailInput.value.trim();
            
            if (email && isValidEmail(email)) {
                // Show loading state
                const originalContent = form.innerHTML;
                form.innerHTML = `
                    <div class="subscription-loading">
                        <i class="fas fa-circle-notch fa-spin" style="font-size: 2rem; color: white; margin-bottom: 10px;"></i>
                        <p>Processing your subscription...</p>
                    </div>
                `;
                
                // EmailJS implementation - replace with your actual credentials
                emailjs.send(
                    "NeuralGlow", // EmailJS Service ID
                    "NeuralGlow_AI", // EmailJS Template ID
                    {
                        subscriber_email: email,
                        to_name: "Kristina",
                        from_name: "Research Chronicles",
                        from_email: "notifications@researchchronicles.com",
                        reply_to: email,
                        subscription_date: new Date().toLocaleString(),
                        source: "Blog Post: Why Be a Researcher"
                    }
                ).then(function(response) {
                    console.log("SUCCESS", response);
                    form.innerHTML = `
                        <div class="subscription-success">
                            <i class="fas fa-check-circle" style="font-size: 2rem; color: white; margin-bottom: 10px;"></i>
                            <p>Thank you for subscribing! Check your email soon for a confirmation.</p>
                        </div>
                    `;
                    
                    // Close modal if this is the popup form
                    if (form.id === 'popup-subscription-form') {
                        setTimeout(() => {
                            modal.style.display = 'none';
                        }, 2000);
                    }
                    
                    // Still store in localStorage as backup
                    const subscribers = JSON.parse(localStorage.getItem('subscribers') || '[]');
                    subscribers.push({
                        email: email,
                        date: new Date().toISOString()
                    });
                    localStorage.setItem('subscribers', JSON.stringify(subscribers));
                }, function(error) {
                    console.error("FAILED", error);
                    // Show error message but don't expose technical details to user
                    form.innerHTML = `
                        <div class="subscription-error">
                            <i class="fas fa-exclamation-circle" style="font-size: 2rem; color: white; margin-bottom: 10px;"></i>
                            <p>Something went wrong. Please try again later or contact us directly.</p>
                            <button class="try-again-btn">Try Again</button>
                        </div>
                    `;
                    
                    // Add event listener to the Try Again button
                    const tryAgainBtn = form.querySelector('.try-again-btn');
                    if (tryAgainBtn) {
                        tryAgainBtn.addEventListener('click', () => {
                            form.innerHTML = originalContent;
                        });
                    }
                });
            }
        });
    };
    
    // Initialize both forms
    handleSubscriptionForm(document.getElementById('subscription-form'));
    handleSubscriptionForm(document.getElementById('popup-subscription-form'));
    
    // Modal handling
    const modal = document.getElementById('subscription-modal');
    const closeButton = document.querySelector('.close-button');
    
    // Add subscribe links to comment prompts
    document.querySelectorAll('.comment-prompt a').forEach(link => {
        const subscribeLink = document.createElement('a');
        subscribeLink.href = '#';
        subscribeLink.className = 'subscribe-link';
        subscribeLink.innerHTML = '<i class="fas fa-envelope"></i> Subscribe for more insights';
        subscribeLink.style.marginLeft = '20px';
        subscribeLink.addEventListener('click', function(e) {
            e.preventDefault();
            modal.style.display = 'block';
        });
        
        link.parentNode.appendChild(subscribeLink);
    });
    
    // Close modal when clicking the × button
    if (closeButton) {
        closeButton.addEventListener('click', function() {
            modal.style.display = 'none';
        });
    }
    
    // Close modal when clicking outside the content
    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
    
    // Also show modal when user has scrolled 70% of the article
    let hasShownModal = false;
    window.addEventListener('scroll', function() {
        if (hasShownModal) return;
        
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const totalHeight = document.documentElement.scrollHeight;
        const windowHeight = window.innerHeight;
        const scrollPercentage = (scrollTop / (totalHeight - windowHeight)) * 100;
        
        if (scrollPercentage > 70) {
            setTimeout(() => {
                modal.style.display = 'block';
                hasShownModal = true;
            }, 1000);
        }
    });
    
    // Subscribe button in the navbar for direct access
    const navContainer = document.querySelector('.nav-container');
    if (navContainer) {
        const subscribeButton = document.createElement('button');
        subscribeButton.className = 'nav-subscribe-button';
        subscribeButton.innerHTML = '<i class="fas fa-envelope"></i> Subscribe';
        subscribeButton.addEventListener('click', function() {
            modal.style.display = 'block';
        });
        
        navContainer.appendChild(subscribeButton);
        
        // Add style for the nav subscribe button
        const style = document.createElement('style');
        style.textContent = `
            .nav-subscribe-button {
                position: absolute;
                right: 20px;
                top: 15px;
                background: var(--accent);
                color: white;
                border: none;
                padding: 5px 15px;
                border-radius: 20px;
                font-size: 0.9rem;
                cursor: pointer;
                transition: all 0.3s ease;
            }
            
            .nav-subscribe-button:hover {
                background: #2980b9;
                transform: translateY(-2px);
            }
            
            @media (max-width: 600px) {
                .nav-subscribe-button {
                    position: static;
                    display: block;
                    margin: 10px 0;
                    width: 100%;
                }
            }
        `;
        document.head.appendChild(style);
    }
    
    // Floating subscribe button
    const floatingButton = document.getElementById('floating-subscribe');
    if (floatingButton) {
        // Show button after scrolling 300px
        window.addEventListener('scroll', function() {
            if (window.scrollY > 300) {
                floatingButton.classList.add('visible');
            } else {
                floatingButton.classList.remove('visible');
            }
        });
        
        // Open subscription modal when clicked
        floatingButton.addEventListener('click', function() {
            modal.style.display = 'block';
        });
    }
});
