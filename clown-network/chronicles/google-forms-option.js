// OPTION 4: Using Google Forms to collect subscriptions
// This is one of the simplest methods that doesn't require any API keys or accounts

document.addEventListener('DOMContentLoaded', function() {
    // Function to handle form submission using Google Forms
    function handleSubscriptionWithGoogleForms(form) {
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
                
                // Replace with your actual Google Form URL and input name
                // Create a Google Form with an email field and get the form action URL
                const googleFormUrl = 'https://docs.google.com/forms/d/e/YOUR_FORM_ID/formResponse';
                const emailInputName = 'entry.XXXXXXXX'; // Replace with your actual entry ID
                
                // Create a hidden iframe to submit the form without page reload
                const iframe = document.createElement('iframe');
                iframe.name = 'hidden_iframe';
                iframe.style.display = 'none';
                document.body.appendChild(iframe);
                
                // Create a form to submit to Google
                const googleForm = document.createElement('form');
                googleForm.action = googleFormUrl;
                googleForm.method = 'post';
                googleForm.target = 'hidden_iframe';
                
                // Create the email input
                const input = document.createElement('input');
                input.type = 'email';
                input.name = emailInputName;
                input.value = email;
                
                // Append elements
                googleForm.appendChild(input);
                document.body.appendChild(googleForm);
                
                // Submit the form
                googleForm.submit();
                
                // Clean up
                setTimeout(() => {
                    document.body.removeChild(googleForm);
                    document.body.removeChild(iframe);
                    
                    // Show success message
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
                }, 1000);
            }
        });
    }
    
    // Email validation function
    function isValidEmail(email) {
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }
});
