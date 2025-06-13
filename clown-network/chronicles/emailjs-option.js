// OPTION 3: Using EmailJS to send yourself notifications
// First, include EmailJS in your HTML:
// <script type="text/javascript" src="https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js"></script>

document.addEventListener('DOMContentLoaded', function() {
    // Initialize EmailJS with your user ID
    emailjs.init("YOUR_USER_ID"); // Replace with your EmailJS User ID
    
    // Function to handle form submission using EmailJS
    function handleSubscriptionWithEmailJS(form) {
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
                
                // Send email to yourself using EmailJS
                emailjs.send(
                    "YOUR_SERVICE_ID", // Replace with your EmailJS Service ID
                    "YOUR_TEMPLATE_ID", // Replace with your EmailJS Template ID
                    {
                        subscriber_email: email,
                        to_name: "Kristina", // Your name
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
                    
                    // Store subscription in localStorage as backup
                    const subscribers = JSON.parse(localStorage.getItem('subscribers') || '[]');
                    subscribers.push({
                        email: email,
                        date: new Date().toISOString()
                    });
                    localStorage.setItem('subscribers', JSON.stringify(subscribers));
                }, function(error) {
                    console.log("FAILED", error);
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
    }
    
    // Email validation function
    function isValidEmail(email) {
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }
});
