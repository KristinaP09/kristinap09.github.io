// Fixed Google Translate Implementation for Supernatural Blog
document.addEventListener('DOMContentLoaded', function() {
    // Function to show translation notification
    function showTranslationNotification(message, isComplete = false) {
        const notification = document.getElementById('translation-notification');
        const status = document.getElementById('translation-status');
        
        // Update message and icon
        status.textContent = message;
        
        // Change icon if complete
        if (isComplete) {
            notification.querySelector('i').classList.remove('fa-spinner', 'fa-spin');
            notification.querySelector('i').classList.add('fa-check');
        } else {
            notification.querySelector('i').classList.remove('fa-check');
            notification.querySelector('i').classList.add('fa-spinner', 'fa-spin');
        }
        
        // Show notification
        notification.classList.add('active');
        
        // Hide after animation completes
        setTimeout(() => {
            notification.classList.remove('active');
        }, 5000);
    }

    // Define language names
    const languages = {
        'en': 'English',
        'id': 'Bahasa Indonesia',
        'es': 'Spanish',
        'fr': 'French',
        'de': 'German',
        'zh-CN': 'Chinese',
        'ja': 'Japanese',
        'ko': 'Korean',
        'ar': 'Arabic',
        'hi': 'Hindi',
        'pt': 'Portuguese',
        'ru': 'Russian'
    };

    // Create Google Translate Element
    function createTranslateElement() {
        // Make sure we only create it once
        if (!document.getElementById('google_translate_element')) {
            const translateDiv = document.createElement('div');
            translateDiv.id = 'google_translate_element';
            translateDiv.style.position = 'absolute';
            translateDiv.style.top = '-1000px';
            translateDiv.style.left = '-1000px';
            document.body.appendChild(translateDiv);
        }
    }

    // Load Google Translate API
    function loadGoogleTranslateAPI(callback) {
        // Check if API is already loaded
        if (window.google && window.google.translate) {
            if (callback) callback();
            return;
        }

        const script = document.createElement('script');
        script.src = 'https://translate.google.com/translate_a/element.js?cb=googleTranslateCallback';
        script.async = true;
        
        // Define the callback function
        window.googleTranslateCallback = function() {
            if (callback) callback();
        };
        
        document.body.appendChild(script);
    }

    // Initialize translation with specific language
    function translatePage(languageCode) {
        if (languageCode === 'en') {
            window.location.reload();
            return;
        }
        
        const languageName = languages[languageCode] || languageCode;
        showTranslationNotification(`Translating to ${languageName}...`);

        createTranslateElement();

        // Make sure Google Translate API is loaded
        loadGoogleTranslateAPI(function() {
            // Create the translate element
            new google.translate.TranslateElement({
                pageLanguage: 'en',
                includedLanguages: languageCode,
                layout: google.translate.TranslateElement.InlineLayout.SIMPLE,
                autoDisplay: true
            }, 'google_translate_element');
            
            // Try to trigger the translation
            setTimeout(() => {
                try {
                    const gtCombo = document.querySelector('.goog-te-combo');
                    if (gtCombo) {
                        gtCombo.value = languageCode;
                        gtCombo.dispatchEvent(new Event('change'));
                        
                        // Show success notification
                        setTimeout(() => {
                            showTranslationNotification(`Translated to ${languageName}`, true);
                        }, 2000);
                    } else {
                        // Try direct translation via URL if the dropdown doesn't exist
                        const currentUrl = window.location.href;
                        const translateUrl = `https://translate.google.com/translate?sl=en&tl=${languageCode}&u=${encodeURIComponent(currentUrl)}`;
                        
                        // Show notification that we're using external translation
                        showTranslationNotification(`Opening Google Translate in new window...`, true);
                        
                        // Open in new window
                        window.open(translateUrl, '_blank');
                    }
                } catch (err) {
                    console.error('Translation error:', err);
                    showTranslationNotification('Translation failed. Trying alternative method...', true);
                    
                    // Fallback to direct Google Translate URL
                    setTimeout(() => {
                        const currentUrl = window.location.href;
                        const translateUrl = `https://translate.google.com/translate?sl=en&tl=${languageCode}&u=${encodeURIComponent(currentUrl)}`;
                        window.open(translateUrl, '_blank');
                    }, 1000);
                }
            }, 1000);
        });
    }

    // Add event listener to language selector
    const languageSelector = document.getElementById('language-selector');
    if (languageSelector) {
        languageSelector.addEventListener('change', function(e) {
            translatePage(e.target.value);
        });
    }

    // Create translate element on page load to prepare for translation
    createTranslateElement();
    
    // Initialize the Google Translate API
    loadGoogleTranslateAPI();
});
