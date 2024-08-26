
    document.addEventListener('DOMContentLoaded', function() {
        const languageToggle = document.querySelector('.language-toggle');
        const languageOptions = document.querySelector('.language-options');

        languageToggle.addEventListener('click', function(event) {
            event.preventDefault(); // Prevent default anchor behavior

            // Toggle the display property and position dynamically
            if (languageOptions.style.display === 'block') {
                languageOptions.style.display = 'none';
            } else {
                // Get the position of the languageToggle link
                const rect = languageToggle.getBoundingClientRect();
                const navLinksRect = languageToggle.closest('.nav-links').getBoundingClientRect();
                languageOptions.style.top = `${rect.bottom - navLinksRect.top}px`;
                languageOptions.style.left = `${rect.left - navLinksRect.left}px`;
                languageOptions.style.display = 'block';
            }
        });

        // Close the language options when clicking outside
        document.addEventListener('click', function(event) {
            if (!languageToggle.contains(event.target) && !languageOptions.contains(event.target)) {
                languageOptions.style.display = 'none';
            }
        });
    });

