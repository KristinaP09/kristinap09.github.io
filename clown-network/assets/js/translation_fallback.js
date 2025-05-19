// Direct fallback for Google Translate
document.addEventListener('DOMContentLoaded', function() {
    // Add direct translation button
    function addDirectTranslationButton() {
        const languageSelector = document.querySelector('.language-selector');
        if (languageSelector) {
            const helpLink = document.createElement('a');
            helpLink.href = "#";
            helpLink.className = "translation-helper";
            helpLink.innerHTML = '<i class="fas fa-external-link-alt"></i>';
            helpLink.title = "Open in Google Translate";
            helpLink.style.marginLeft = "5px";
            helpLink.style.color = "var(--accent-color)";
            helpLink.style.cursor = "pointer";
            helpLink.addEventListener('click', function(e) {
                e.preventDefault();
                const lang = document.getElementById('language-selector').value;
                if (lang !== 'en') {
                    const currentUrl = window.location.href;
                    const translateUrl = `https://translate.google.com/translate?sl=en&tl=${lang}&u=${encodeURIComponent(currentUrl)}`;
                    window.open(translateUrl, '_blank');
                }
            });
            languageSelector.appendChild(helpLink);
        }
    }
    
    // Direct translation method
    function directTranslateOnSelect() {
        const langSelector = document.getElementById('language-selector');
        if (langSelector) {
            langSelector.addEventListener('change', function(e) {
                const language = e.target.value;
                if (language !== 'en') {
                    // Wait a bit to see if normal translation works
                    setTimeout(function() {
                        // If no Google Translate elements are visible, use direct method
                        const translatedElements = document.querySelectorAll('.goog-te-menu-frame, .goog-te-banner-frame, .skiptranslate');
                        if (translatedElements.length === 0) {
                            console.log('Using direct translation fallback');
                            
                            // Show notification
                            const notification = document.getElementById('translation-notification');
                            const status = document.getElementById('translation-status');
                            if (notification && status) {
                                status.textContent = "Opening Google Translate in new tab...";
                                notification.classList.add('active');
                            }
                            
                            // Open in Google Translate directly
                            const currentUrl = window.location.href;
                            const translateUrl = `https://translate.google.com/translate?sl=en&tl=${language}&u=${encodeURIComponent(currentUrl)}`;
                            window.open(translateUrl, '_blank');
                        }
                    }, 3000);
                }
            });
        }
    }
    
    // Initialize fallback methods
    addDirectTranslationButton();
    directTranslateOnSelect();
});
