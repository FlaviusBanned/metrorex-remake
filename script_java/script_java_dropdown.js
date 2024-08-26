
    document.addEventListener('DOMContentLoaded', function() {
        var toggles = document.querySelectorAll('.dropdown-toggle');

        toggles.forEach(function(toggle) {
            toggle.addEventListener('click', function() {
                var targetId = this.getAttribute('data-target');
                var targetElement = document.getElementById(targetId);

                if (targetElement.classList.contains('open')) {
                    targetElement.classList.remove('open');
                    this.querySelector('.plus-circle').textContent = '+';
                } else {
                    // Close all other open dropdowns
                    document.querySelectorAll('.dropdown-content.open').forEach(function(content) {
                        content.classList.remove('open');
                        var toggle = document.querySelector(`[data-target="${content.id}"]`);
                        if (toggle) {
                            toggle.querySelector('.plus-circle').textContent = '+';
                        }
                    });

                    targetElement.classList.add('open');
                    this.querySelector('.plus-circle').textContent = '−';
                }
            });
        });
    });
